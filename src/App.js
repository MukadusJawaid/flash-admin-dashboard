import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import loadable from "@loadable/component";
import Loader from "react-js-loader";

// Loadable components for lazy loading
const LoginPage = loadable(() => import("./pages/LoginPage"));
const DashboardPage = loadable(() => import("./pages/DashboardPage"));

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
          {/* Define routes for LoginPage and DashboardPage */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          {/* Add a default route */}
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
