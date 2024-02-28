import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000"; // Replace with your actual API base URL

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(null);

  const signUp = async (username, password, confirmation, mobile) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/register/user/`, {
        username,
        password,
        confirmation,
        mobile,
      });

      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

  const login = async (username, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/token/`, {
        username,
        password,
      });

      const token = response.data.token;
      setUser({ username, token });
      setUsername(response.data.username);
      setToken(response.data.token);
      localStorage.setItem("user", JSON.stringify({ username, token }));
      localStorage.setItem("username", response.data.username);
      localStorage.setItem("token", response.data.token);
      return token;
    } catch (error) {
      throw error.response.data;
    }
  };

  const logout = async (token) => {
    try {
      await axios.post(`${API_BASE_URL}/api/logout/`, { token });
      setUser(null);
      setUsername(null); // Reset username
      setToken(null); // Reset token
      localStorage.removeItem("user");
      localStorage.removeItem("username");
      localStorage.removeItem("token");
    } catch (error) {
      console.error(error);
    }
  };

  const isAuthenticated = () => {
    return user !== null;
  };

  // Retrieve data from local storage when the app initializes
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedUsername = localStorage.getItem("username");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedUsername && storedToken) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setUsername(storedUsername);
      setToken(storedToken);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        username,
        token,
        signUp,
        login,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
