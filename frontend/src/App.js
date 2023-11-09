import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="login" exact element={<LoginPage />} />
        <Route path="signup" exact element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
