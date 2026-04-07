import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        {}
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;