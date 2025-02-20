import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "../pages/SignupPage.jsx";
import SigninPage from "../pages/SigninPage.jsx";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        
      </Routes>
    </Router>
  );
};

export default AppRouter;