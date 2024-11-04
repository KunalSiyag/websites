import React, { useState } from "react";
import '../../assets/assets.css'
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { animate, motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");  // New state for email
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const loginData = {
    username,
    email,
    password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://us-central1-hire4change.cloudfunctions.net/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        }
      );
  
      const result = await response.json();
  
      if (response.ok) {
        // Assuming your backend returns the user data in `result`
        localStorage.setItem("currentUser", JSON.stringify(result));
        
        // Extract and store the username
        const username = result.username;
        localStorage.setItem("username", loginData.username);
        
        console.log(result);
        navigate("/"); 
      } else {
        setError("Login failed: " + result.error);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("An unexpected error occurred.");
    }    
  };
  const locomotivesScroll = new LocomotiveScroll();
  return (
    <motion.div data-scroll data-scroll-speed="0.1" className="login mb-32" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0,transition: {duration: 0.5}}}>
      <form onSubmit={handleSubmit}>
        <h1 className="text-6xl text-black">Sign In</h1>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          type="text"
          placeholder="johndoe"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="abc@gmail.com"
          onChange={(e) => setEmail(e.target.value)}  
          value={email}
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit" style={{backgroundColor: '#017AC6', letterSpacing:'2px'}}>Sign In</button>
        {error && <p id="message">{error}</p>}  
      </form>
    </motion.div>
  );
}

export default Login;
