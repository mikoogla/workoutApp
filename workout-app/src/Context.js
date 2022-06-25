import React, { createContext, useState, useEffect } from "react";

const Context = createContext({
  isLoggedin: false,
  onLogout: () => {},
  onLogin: () => {},
});

export const ContextProvider = (props) => {
  const [user, setUser] = useState(localStorage.getItem("User"));
  const [IsLoggedIn, setIsLoggedIn] = useState(
    +localStorage.getItem("Logged") ? true : false
  );
  useEffect(() => {
    if (localStorage.getItem("Logged") === "1") setIsLoggedIn(true);
  }, []);

  const loginHandler = () => {
    localStorage.setItem("Logged", "1");
    setIsLoggedIn(true);
    window.location.replace("/dashboard");
  };
  const logoutHandler = () => {
    localStorage.removeItem("Logged");
    localStorage.removeItem("User");
    setIsLoggedIn(false);
    window.location.replace("/userlogin");
  };

  return (
    <Context.Provider
      value={{
        isLoggedin: IsLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default Context;
