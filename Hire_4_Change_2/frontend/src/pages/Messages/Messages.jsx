import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const POLLING_INTERVAL = 5000; // 5 seconds

const Messages = () => {
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [currentReceiver, setCurrentReceiver] = useState(null);
  const [messageInput, setMessageInput] = useState("");
  const navigate = useNavigate();
  const location = useLocation(); // Get location to access passed state

  // Load user and conversations on component mount
  useEffect(() => {
    const user = location.state?.userId || localStorage.getItem("username");
    const receiver = location.state?.receiver;

    if (!user) {
      alert("No user specified. Redirecting to login page.");
      navigate("/login");
    } else {
      setCurrentUser(user);
      fetchConversations(user);
    }

    if (receiver) {
      setCurrentReceiver(receiver);
    }
  }, [location, navigate]);

  // Fetch the conversations for the user
  const fetchConversations = async (username) => {
    try {
      const response = await fetch(
        "https://us-central1-hire4change.cloudfunctions.net/database/get-all-messages",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username }),
        }
      );
      const data = await response.json();
      setConversations(data.conversations);

      // Check if conversation with the receiver exists and load messages if it does
      if (location.state?.receiver) {
        const conversationExists = data.conversations.some(
          (conv) => conv.receiver === location.state.receiver
        );
        if (!conversationExists) {
          // Create a new conversation if it doesn't exist
          sendMessage();
        } else {
          loadConversation(username, location.state.receiver);
        }
      }
    } catch (error) {
      console.error("Error fetching conversations:", error);
    }
  };

  // Load the messages for a selected conversation
  const loadConversation = async (sender, receiver) => {
    setCurrentReceiver(receiver);
    try {
      const response = await fetch(
        "https://us-central1-hire4change.cloudfunctions.net/database/get-conversation",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sender, receiver }),
        }
      );
      const data = await response.json();
      setMessages(data.messages);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  // Send a new message (text or image)
  const sendMessage = async (content = null, contentType = "text") => {
    if (!currentReceiver) {
      return;
    }
    if (!content) content = messageInput.trim();
    if (content) {
      try {
        await fetch(
          "https://us-central1-hire4change.cloudfunctions.net/database/message",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              sender: currentUser,
              receiver: currentReceiver,
              content,
              contentType,
              timestamp: new Date().toISOString(),
            }),
          }
        );
        if (contentType === "text") setMessageInput("");
        // Fetch the conversation again to refresh messages
        loadConversation(currentUser, currentReceiver);
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const base64Image = e.target.result.split(",")[1];
        sendMessage(base64Image, "image");
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (currentUser && currentReceiver) {
      const intervalId = setInterval(() => {
        loadConversation(currentUser, currentReceiver);
      }, POLLING_INTERVAL);

      return () => clearInterval(intervalId); // Cleanup on unmount
    }
  }, [currentUser, currentReceiver]);

  return (
    <div className="container h-screen mx-auto   mt-10 p-6">
      <div className="flex max-w-4xl rounded-2xl border-[1px] border-zinc-300 mx-auto bg-white shadow-lg h-[80vh]">
        {/* Sidebar - Conversation List */}
        <div className="w-1/3 border-r overflow-y-auto">
          <h2 className="text-xl font-bold text-center py-4">Conversations</h2>
          <div>
            {conversations.length > 0 ? (
              conversations.map((conv, index) => (
                <div
                  key={index}
                  className={`p-4 border-b cursor-pointer ${
                    currentReceiver === conv.receiver ? "bg-blue-100" : ""
                  }`}
                  onClick={() => loadConversation(currentUser, conv.receiver)}
                >
                  {/* Display the receiver's name */}
                  {conv.receiver}
                </div>
              ))
            ) : (
              <p className="text-center py-4">No conversations available.</p>
            )}
          </div>
        </div>

        {/* Main Content - Messages */}
        <div className="w-2/3 flex flex-col">
          <div className="flex-grow overflow-y-auto p-4 bg-gray-100">
            {messages.length > 0 ? (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-4 flex p-3 rounded-2xl ${
                    msg.sender === currentUser
                      ? "bg-blue-500 text-white self-end ml-auto"
                      : "bg-gray-200 text-black"
                  }`}
                  style={{
                    textAlign: "center",
                    maxWidth: "30%", // Limit message width
                    wordWrap: "break-word" // Ensure text wraps within the message bubble
                  }}
                >
                  {msg.contentType === "image" ? (
                    <img
                      src={`data:image/png;base64,${msg.content}`}
                      alt="image-message"
                      className="rounded-lg"
                      style={{ maxWidth: "100%" }}
                    />
                  ) : (
                    <p>{msg.content}</p>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center py-4">
                No messages in this conversation.
              </p>
            )}
          </div>

          {/* Message Input */}
          <div className="p-4 flex items-center bg-white border-t border-gray-200">
            {/* <input
              type="file"
              id="imageInput"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-lg mr-4"
              onClick={() => document.getElementById("imageInput").click()}
            >
              Image
            </button> */}
            <input
              type="text"
              placeholder="Type a message..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              className="flex-grow p-2 border rounded-lg"
            />
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-lg ml-4"
              onClick={() => sendMessage()}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
