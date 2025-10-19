import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Cycling from "./pages/Cycling";
import Running from "./pages/Running";
import Register from "./pages/Register";
import Login from "./pages/Login";
import StatsForm from "./components/form/StatsForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/cycling" replace />} />
        <Route path="/cycling" element={<Cycling />} />
        <Route path="/running" element={<Running />} />
        <Route path="/cycling/:name" element={<StatsForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
