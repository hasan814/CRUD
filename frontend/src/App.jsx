import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import RegsiterPage from "./components/templates/RegsiterPage";
import LoginPage from "./components/templates/LoginPage";
import AdminPage from "./components/templates/AdminPage";
import UserPage from "./components/templates/UserPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegsiterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="*" element={<Navigate to={"/register"} />} />
      </Routes>
    </Router>
  );
};

export default App;
