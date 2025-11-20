import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "learner" });
    const [errors, setErrors] = useState({});
      const navigate = useNavigate();

        const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

          const validate = () => {
              const newErrors = {};
                  if (!formData.name) newErrors.name = "Name is required";
                      if (!formData.email) newErrors.email = "Email is required";
                          else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
                              if (!formData.password) newErrors.password = "Password is required";
                                  else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
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
                                                                                await axios.post("http://localhost:5000/api/auth/register", formData);
                                                                                      alert("Registration successful!");
                                                                                            navigate("/login");
                                                                                                } catch (err) {
                                                                                                      alert(err.response?.data?.error || "Registration failed");
                                                                                                          }
                                                                                                            };

                                                                                                              return (
                                                                                                                  <div className="auth-container">
                                                                                                                        <h2>Register</h2>
                                                                                                                              <form onSubmit={handleSubmit}>
                                                                                                                                      <input name="name" placeholder="Full Name" onChange={handleChange} />
                                                                                                                                              {errors.name && <span>{errors.name}</span>}
                                                                                                                                                      <input name="email" placeholder="Email" onChange={handleChange} />
                                                                                                                                                              {errors.email && <span>{errors.email}</span>}
                                                                                                                                                                      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
                                                                                                                                                                              {errors.password && <span>{errors.password}</span>}
                                                                                                                                                                                      <select name="role" onChange={handleChange} value={formData.role}>
                                                                                                                                                                                                <option value="learner">Learner</option>
                                                                                                                                                                                                          <option value="trainer">Trainer</option>
                                                                                                                                                                                                                  </select>
                                                                                                                                                                                                                          <button type="submit">Register</button>
                                                                                                                                                                                                                                </form>
                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                      };

                                                                                                                                                                                                                                      export default Register;