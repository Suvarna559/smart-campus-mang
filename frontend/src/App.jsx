import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Campus from "./pages/Campus";
import Canteen from "./pages/Canteen";
import Parking from "./pages/Parking";
import Sports from "./pages/Sports";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/canteen" element={<Canteen />} />
        <Route path="/parking" element={<Parking />} />
        <Route path="/sports" element={<Sports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;