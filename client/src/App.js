import { Friends, Home, Login, Profile, Register, Messages } from "./pages/export.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProtectedRouteWrapper } from "./context/export.js";
import "./style.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedRouteWrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="messages/:id" element={<Messages />} />
          <Route path="profile/:id" element={<Profile />} />
          <Route path="friends" element={<Friends />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;