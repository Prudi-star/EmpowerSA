import React, { useState } from "react";
import axios from "axios";

const CreateJob = () => {
  const [jobData, setJobData] = useState({
    title: "",
    description: "",
    category: ""
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/jobs", jobData);
      alert("Job created successfully!");
      setJobData({ title: "", description: "", category: "" });
    } catch (error) {
      alert("Error creating job. Please try again.");
    }
  };

  return (
    <div style={{ padding: "40px", minHeight: "100vh", backgroundColor: "#f0f9ff" }}>
      <h2 style={{ color: "#1e40af" }}>Create Job</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={jobData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={jobData.description}
          onChange={handleChange}
          style={{ height: "100px" }}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={jobData.category}
          onChange={handleChange}
          required
        />
        <button type="submit" style={{ backgroundColor: "#1e40af", color: "white" }}>Post Job</button>
      </form>
    </div>
  );
};

export default CreateJob;
