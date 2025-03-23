import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Navbar from "./components/Navbar";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { AuthProvider, useAuth } from "./context/authContext";

const PrivateRoute = ({ element }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? element : <Navigate to="/signin" />;
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<PrivateRoute element={<Home />} />} />
          <Route path="/men" element={<PrivateRoute element={<Men />} />} />
          <Route path="/women" element={<PrivateRoute element={<Women />} />} />
          <Route path="/kids" element={<PrivateRoute element={<Kids />} />} />
          <Route path="/about" element={<PrivateRoute element={<About />} />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
