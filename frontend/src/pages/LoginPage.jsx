import { useState } from "react";
import { Link, useNavigate } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) return toast.error("Please fill in all fields");

    setLoading(true);
    try {
      const res = await api.post("/auth/login", { email, password });
      
      // Save the token to local storage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data));
      
      toast.success("Logged in successfully!");
      // Force a hard reload to update app state, or just navigate
      window.location.href = "/"; 
    } catch (error) {
      console.log("Login error", error);
      toast.error(error.response?.data?.message || "Failed to login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center text-2xl mb-4">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-control w-full mb-4">
              <label className="label"><span className="label-text">Email</span></label>
              <input 
                type="email" 
                className="input input-bordered w-full" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control w-full mb-6">
              <label className="label"><span className="label-text">Password</span></label>
              <input 
                type="password" 
                className="input input-bordered w-full" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn btn-primary w-full" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          <div className="text-center mt-4">
            <p>Don't have an account? <Link to="/register" className="text-primary">Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;