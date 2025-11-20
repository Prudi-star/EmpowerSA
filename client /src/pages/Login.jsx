import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
      const navigate = useNavigate();

        const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

          const validate = () => {
              const newErrors = {};
                  if (!formData.email) newErrors.email = "Email is required";
                      if (!formData.password) newErrors.password = "Password is required";
                          return newErrors;
                            };

                              const handleSubmit = async (e) => {
                                  e.preventDefault();
                                      const validationErrors = validate();
                                          if (Object.keys(validationErrors).length > 0) {
                                                setErrors(validationErrors);
                                                      return;
                                                          }
                                                              try {
                                                                    const res = await axios.post("http://localhost:5000/api/auth/login", formData);
                                                                          localStorage.setItem("token", res.data.token);
                                                                                localStorage.setItem("role", res.data.user.role);
                                                                                      localStorage.setItem("userId", res.data.user.id);
                                                                                            navigate("/jobs");
                                                                                                } catch (err) {
                                                                                                      alert(err.response?.data?.error || "Login failed");
                                                                                                          }
                                                                                                            };

                                                                                                              return (
                                                                                                                  <div className="auth-container">
                                                                                                                        <h2>Login</h2>
                                                                                                                              <form onSubmit={handleSubmit}>
                                                                                                                                      <input name="email" placeholder="Email" onChange={handleChange} />
                                                                                                                                              {errors.email && <span>{errors.email}</span>}
                                                                                                                                                      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
                                                                                                                                                              {errors.password && <span>{errors.password}</span>}
                                                                                                                                                                      <button type="submit">Login</button>
                                                                                                                                                                            </form>
                                                                                                                                                                                </div>
                                                                                                                                                                                  );
                                                                                                                                                                                  };

                                                                                                                                                                                  export default Login;