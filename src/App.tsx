import { Routes, Route } from "react-router-dom";
import ExpenseDashboard from "./components/ExpenseDashboard";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ExpenseDashboard />} />
      </Routes>
    </div>
  );
}
export default App;
