import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserInfo from "./pages/UserInfo";
import UserList from "./pages/UserList";
import AuthProvider from "./contexts/AuthProvider";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="user-info" element={<UserInfo />} />
          <Route path="user-list" element={<UserList />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
