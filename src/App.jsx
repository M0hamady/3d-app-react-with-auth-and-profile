import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Baqat } from "./components";
import HomePage from "./Home";
import Baqa from "./components/Baqa";
import Login3D from "./components/Login";
import { AuthProvider } from "./authorize/AuthService";
import RegisterCard from "./components/Register";
import Profile from "./components/Profile";

const App = () => {
  return (
    <AuthProvider> {/* Wrap the component tree with the AuthProvider */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/packages" element={<Baqat />} />
          <Route path="/login" element={<Login3D />} />
          <Route path="/register" element={<RegisterCard />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/villa" element={<Baqat />} /> */}
          {/* <Route path="/order-request" element={<Baqat />} /> */}
          {/* <Route path="/home-page" element={<Baqat />} /> */}
          {/* <Route path="/building" element={<Baqat />} /> */}
          {/* <Route path="/apartment" element={<Baqat />} /> */}
          {/* <Route path="/administrative-office" element={<Baqat />} /> */}
          <Route path="/packages/:id" element={<Baqa />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;