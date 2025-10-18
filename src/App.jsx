import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Cycling from "./pages/Cycling";
import Running from "./pages/Running";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/cycling" replace />} />
        <Route path="/cycling" element={<Cycling />} />
        <Route path="/running" element={<Running />} />
      </Routes>
    </Router>
  );
};

export default App;
