import React, { useEffect, useState } from "react";
import axios from "axios";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
    const token = localStorage.getItem("token");

      const fetchJobs = async () => {
          const res = await axios.get("http://localhost:5000/api/jobs", { headers: { Authorization: `Bearer ${token}` } });
              setJobs(res.data);
                };

                  const applyJob = async (id) => {
                      await axios.post(`http://localhost:5000/api/jobs/apply/${id}`, {}, { headers: { Authorization: `Bearer ${token}` } });
                          alert("Applied successfully!");
                            };

                              useEffect(() => { fetchJobs(); }, []);

                                return (
                                    <div>
                                          <h1>Jobs</h1>
                                                <ul>
                                                        {jobs.map(job => (
                                                                  <li key={job.id}>
                                                                              <h3>{job.title}</h3>
                                                                                          <p>{job.description}</p>
                                                                                                      <button onClick={() => applyJob(job.id)}>Apply</button>
                                                                                                                </li>
                                                                                                                        ))}
                                                                                                                              </ul>
                                                                                                                                  </div>
                                                                                                                                    );
                                                                                                                                    };

                                                                                                                                    export default Jobs;