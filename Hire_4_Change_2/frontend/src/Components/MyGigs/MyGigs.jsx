import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GigCard from '../gigCard/GigCard';
import './MyGigs.css';

const MyGigs = () => {
  const [postedJobs, setPostedJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = "https://us-central1-hire4change.cloudfunctions.net/database";
  const username = localStorage.getItem("username");

  useEffect(() => {
    const fetchPostedJobs = async () => {
      try {
        const response = await axios.post(`${baseUrl}/posted-jobs`, {
          username: username
        });
        setPostedJobs(response.data.postedJobs);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching posted jobs:", err);
        setError("Failed to fetch posted jobs. Please try again.");
        setIsLoading(false);
      }
    };

    fetchPostedJobs();
  }, [username]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="my-gigs">
      <h1>My Posted Gigs</h1>
      {postedJobs.length === 0 ? (
        <p className="no-gigs">You haven't posted any gigs yet.</p>
      ) : (
        <div className="gigs-container">
          {postedJobs.map(job => (
            <GigCard key={job._id} item={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyGigs;
