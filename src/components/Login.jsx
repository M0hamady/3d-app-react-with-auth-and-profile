import React, { useEffect, useState } from "react";
import { useAuth } from "../authorize/AuthService";
import { Link } from "react-router-dom";
import { loginImage } from "../assets";
import { CiHome } from "react-icons/ci";

const LoginCard = () => {
  const { login, user, isAuthenticated } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    setError("");

    try {
      // Replace with your actual login logic
      await login(username, password);
      // Handle login success
      console.log("success");

      setTimeout(() => {
        document.location.href = "/";
      }, 1000);
    } catch (error) {
      setError("Unable to login"); // Handle login error
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      // document.location.href ="/"
    }
  }, [user]);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4  max-sm:col-span-12 text-white font-sans font-bold bg-black min-h-screen pl-7">
        <div className="grid grid-rows-6 grid-flow-col min-h-screen items-center justify-items-start">
          <Link to="/" className="text-2xl  text-gray-100  ">
            <CiHome className="text-3xl font-bold" />
          </Link>
          <div className="row-span-4 row-start-2 text-4xl">
            Login
            <div className="pt-10 pr-20">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-black py-3 px-12 border hover:border-gray-500 rounded shadow text-base font-sans"
              />
            </div>
            <div className="pt-2 pr-20">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black py-3 px-12 border hover:border-gray-500 rounded shadow text-base font-sans"
              />
              <a
                href=""
                className="text-sm font-sans font-medium text-gray-600 underline"
              >
                Forgot password?
              </a>
            </div>
            <div className="text-sm font-sans font-medium w-full pr-20 pt-14">
              {isLoading ? (
                <button className="text-center w-full py-4 bg-blue-700 hover:bg-blue-400 rounded-md text-white">
                  <span className="animate-spin inline-block mr-2 rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></span>
                  Logging in...
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className="text-center w-full py-4 bg-blue-700 hover:bg-blue-400 rounded-md text-white"
                >
                  Login
                </button>
              )}
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </div>
          <Link
            to="/register"
            className="text-sm font-sans font-medium text-gray-400 underline"
          >
            Don't have an account? Sign up
          </Link>
        </div>
      </div>
      <div className="col-span-8 bg-gray-200 hidden sm:block h-100 ">
        {/* Placeholder container for the login image */}
        <img
          src={loginImage} // Example placeholder image URL
          alt="Login background "
          className="object-cover h-[100%] "
        />
      </div>
    </div>
  );
};

export default LoginCard;
