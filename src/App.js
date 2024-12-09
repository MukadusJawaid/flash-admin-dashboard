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
            bgColor={"#333"}
            color={"var(--white-color)"}
            size={60}
          />
        }
      >
        <Routes>
          {/********************************* AUTH PAGES *********************************/}

          <Route path="/" element={<LoginPage />} />

          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/verify-otp" element={<OTPPage />} />
          <Route path="/new-password" element={<NewPasswordPage />} />

          {/********************************* AUTH PAGES *********************************/}

          {/********************************* AFTER LOGIN PAGES **************************/}

          <Route path="/dashboard" element={<DashboardPage />} />

          {/********************************* AFTER LOGIN PAGES **************************/}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
