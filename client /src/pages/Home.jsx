import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
      <div className="home-container">
            <h1 className="home-title">EmpowerSA 🌍</h1>
                  <p className="home-subtitle">
                          Unlock your potential and shape your future. EmpowerSA connects youth
                                  with the skills, training, and job opportunities needed to thrive.
                                        </p>

                                              <div className="home-card">
                                                      <h2>💡 Our Purpose</h2>
                                                              <p>
                                                                        EmpowerSA exists to <strong>uplift and empower</strong> young people by bridging the gap
                                                                                  between talent and opportunity.
                                                                                          </p>
                                                                                                  <h2>🚀 What You Can Do</h2>
                                                                                                          <ul>
                                                                                                                    <li>✨ Register and create your learner profile</li>
                                                                                                                              <li>✨ Explore and apply for exciting jobs</li>
                                                                                                                                        <li>✨ Post opportunities as a trainer</li>
                                                                                                                                                  <li>✨ Track applications and grow your network</li>
                                                                                                                                                          </ul>
                                                                                                                                                                </div>

                                                                                                                                                                      <div className="home-button-container">
                                                                                                                                                                              <Link to="/register" className="home-button">Get Started 🚀</Link>
                                                                                                                                                                                      <Link to="/jobs" className="home-button home-button-secondary">Browse Jobs 💼</Link>
                                                                                                                                                                                            </div>

                                                                                                                                                                                                  <footer className="home-footer">
                                                                                                                                                                                                          © {new Date().getFullYear()} EmpowerSA – Empowering the next generation
                                                                                                                                                                                                                </footer>
                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                      );
                                                                                                                                                                                                                      }

                                                                                                                                                                                                                      export default Home;