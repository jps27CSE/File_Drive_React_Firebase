import { Container } from "react-bootstrap";
import Signup from "./components/authentication/Signup";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/authentication/Profile";
import Login from "./components/authentication/Login";
import ForgotPassword from "./components/authentication/ForgotPassword";
import UpdateProfile from "./components/authentication/UpdateProfile";
import CenteredContainer from "./components/authentication/CenteredContainer";
import Dashboard from "./components/drive/Dashboard";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Drive  */}
          <Route path="/" exact element={<Dashboard />} />

          {/* Profile  */}
          <Route path="/user" element={<Profile />} />
          <Route path="/update-profile" element={<UpdateProfile />} />

          {/* Auth  */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
