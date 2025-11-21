import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  try {
      const authHeader = req.headers.authorization;
          if (!authHeader || !authHeader.startsWith("Bearer ")) {
                return res.status(401).json({ error: "Not authorized, token missing" });
                    }
                        const token = authHeader.split(" ")[1];
                            const decoded = jwt.verify(token, process.env.JWT_SECRET);
                                req.user = { id: decoded.id, role: decoded.role };
                                    next();
                                      } catch (err) {
                                          console.error("Auth middleware error:", err);
                                              return res.status(401).json({ error: "Not authorized, token failed" });
                                                }
                                                };

                                                export const authorizeRoles = (...roles) => (req, res, next) => {
                                                  if (!req.user) return res.status(401).json({ error: "Not authorized" });
                                                    if (!roles.includes(req.user.role)) {
                                                        return res.status(403).json({ error: "You do not have permission" });
                                                          }
                                                            next();
                                                            };