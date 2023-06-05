import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PricingPage from "./pages/PricingPage";
import LoginPage from "./pages/auth/LoginPage";
import SignUpPage from "./pages/auth/SignUpPage";

// Images
import ubitsLogo from "./assets/logos/ubits-logo.svg";
import ProtectedRoute from "./components/security/ProtectedRoute";
import UserDashboardPage from "./pages/user/DashboardPage";

function App() {
  return (
    <>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/pricing" element={<PricingPage />} />

        {/* Auth pages */}
        <Route path="/auth">
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>

        {/* Dashboard Page */}
        <Route
          path="/user/dashboard"
          element={
            <ProtectedRoute>
              <UserDashboardPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
