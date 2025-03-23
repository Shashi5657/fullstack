import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate(); // Move useNavigate here
  const [isLoggedIn, setIsLoggedIn] = useState(
    typeof window !== "undefined" && localStorage.getItem("authToken")
      ? true
      : false
  );

  const [loggedInInfo, setLoggedInInfo] = useState(
    typeof window !== "undefined" && localStorage.getItem("loginInfo")
      ? JSON.parse(
          typeof window !== "undefined" && localStorage.getItem("loginInfo")
        )
      : null
  );

  const [apiKey, setApiKey] = useState(
    (typeof window !== "undefined" && localStorage.getItem("authToken")) || null
  );

  const login = (token, userInfo) => {
    setIsLoggedIn(true);
    setLoggedInInfo(userInfo);
    typeof window !== "undefined" &&
      localStorage.setItem("authToken", "Bearer" + token);

    typeof window !== "undefined" &&
      localStorage.setItem("loginInfo", JSON.stringify(userInfo));

    setApiKey(token);
    navigate("/");
  };

  const logout = () => {
    setIsLoggedIn(false);
    setLoggedInInfo(null);
    setApiKey(null);

    localStorage.removeItem("authToken");
    localStorage.removeItem("loginInfo");

    navigate("/signin"); // Redirect to signin after logout
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        loggedInInfo,
        setLoggedInInfo,
        apiKey,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
