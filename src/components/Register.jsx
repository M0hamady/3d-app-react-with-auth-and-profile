import React, { useEffect, useState } from "react";
import { useAuth } from "../authorize/AuthService";
import { Link } from "react-router-dom";
import { signupImage } from "../assets";
import { CiHome } from "react-icons/ci";

const RegisterCard = () => {
  const { signUp, user, isAuthenticated } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async () => {
    setIsLoading(true);
    setError("");

    try {
      if (password !== confirmation) {
        setError("Password does not match.");
        setIsLoading(false);
        return;
      }

      // Replace with your actual sign up logic
      await signUp(username, password, confirmation, mobile);
      // Handle sign up success
      console.log("success");

      setTimeout(() => {
        document.location.href = "/";
      }, 1000);
    } catch (error) {
      setError("Unable to register"); // Handle sign up error
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      setUsername(user.username);
    }
  }, [user]);

  useEffect(() => {
    if (confirmation !== password) {
      setError("Password does not match.");
    } else {
      setError("");
    }
  }, [confirmation, password]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmationChange = (e) => {
    setConfirmation(e.target.value);
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 max-sm:col-span-12 text-white font-sans font-bold bg-black min-h-screen pl-7">
        <div className="grid grid-rows-6 grid-flow-col min-h-screen items-center justify-items-start">
          <Link to="/" className="text-2xl  text-gray-100  ">
            <CiHome className="text-3xl font-bold" />
          </Link>
          <div className="row-span-4 row-start-2 text-4xl">
            Register
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
                onChange={handlePasswordChange}
                className="w-full bg-black py-3 px-12 border hover:border-gray-500 rounded shadow text-base font-sans"
              />
            </div>
            <div className="pt-2 pr-20">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmation}
                onChange={handleConfirmationChange}
                className={`w-full bg-black py-3 px-12 border ${
                  error ? "border-red-500" : "hover:border-gray-500"
                } rounded shadow text-base font-sans`}
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
            <div className="pt-2 pr-20">
              <input
                type="text"
                placeholder="Mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full bg-black py-3 px-12 border hover:border-gray-500 rounded shadow text-base font-sans"
              />
            </div>
            <div className="text-sm font-sans font-medium w-full pr-20 pt-14">
              {isLoading ? (
                <button className="text-center w-full py-4 bg-blue-700 hover:bg-blue-400 rounded-md text-white">
                  <span className="animate-spin inline-block mr-2 rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></span>
                  Registering...
                </button>
              ) : (
                <button
                  onClick={handleSignUp}
                  className="text-center w-full py-4 bg-blue-700 hover:bg-blue-400 rounded-md text-white"
                >
                  Register
                </button>
              )}
            </div>
          </div>
          <Link
            to="/login"
            className="text-sm font-sans font-medium text-gray-400 underline"
          >
            Already have an account? Login
          </Link>
        </div>
      </div>
      <div className="col-span-8 bg-gray-200 hidden sm:block h-100">
        {/* Placeholder container for the registration image */}
        <img
          src={signupImage}
          alt="Register background"
          className="object-cover h-[100%]"
        />
      </div>
    </div>
  );
};

export default RegisterCard;
