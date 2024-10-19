import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import loadable from "@loadable/component";
import Loader from "react-js-loader";

// Loadable components for lazy loading
const LoginPage = loadable(() => import("./pages/LoginPage"));
const DashboardPage = loadable(() => import("./pages/DashboardPage"));
const ForgotPasswordPage = loadable(() => import("./pages/ForgotPasswordPage"));
const OTPPage = loadable(() => import("./pages/OTPPage"));
const NewPasswordPage = loadable(() => import("./pages/NewPasswordPage"));

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <Loader
            type="spinner-circle"
            bgColor={"#333"} // Background color for the spinner
            color={"#fff"} // Spinner color
            size={60}
          />
        }
      >
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/verify-otp" element={<OTPPage />} />
          <Route path="/new-password" element={<NewPasswordPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
