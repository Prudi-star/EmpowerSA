import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [applications, setApplications] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchApplications = async () => {
      if (!userId) return;
      const res = await axios.get(`http://localhost:5000/api/applications/${userId}`);
      setApplications(res.data);
    };
    fetchApplications();
  }, [userId]);

  return (
    <div style={{ maxWidth: "700px", margin: "50px auto", color: "#1e40af" }}>
      <h2>Learner Profile</h2>
      <h3>Applied Jobs:</h3>
      {applications.length === 0 ? (
        <p>No applications yet.</p>
      ) : (
        applications.map((app) => (
          <div key={app._id} style={{ border: "1px solid #1e40af", marginBottom: "10px", padding: "10px", borderRadius: "8px", background: "#f0f9ff" }}>
            <h4>{app.job.title}</h4>
            <p>{app.job.description}</p>
            <p><strong>Organisation:</strong> {app.job.organisation}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Profile;
