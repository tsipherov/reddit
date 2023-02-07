import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import HomePage from "./pages/Auth/HomePage";

const Routs = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/register" element={<Auth />} />
    </Routes>
  );
};

export default Routs;
