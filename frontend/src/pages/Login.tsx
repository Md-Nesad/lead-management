import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // later: API call
    console.log({ email, password });

    navigate("/dashboard");
  };

  return (
    <AuthLayout>
      <form onSubmit={handleLogin} className="space-y-4">
        <h2 className="text-xl font-semibold text-center">
          Login to your account
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700"
        >
          Login
        </button>

        <p className="text-xs text-center text-gray-400 hidden">
          Forgot password? (later feature)
        </p>
      </form>
    </AuthLayout>
  );
}
