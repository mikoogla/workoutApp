import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/OldNavbar/Navbar";
import NewNavbar from "./components/Navbar/NewNavbar";
import Dashboard from "./components/Dashboard/Dashboard";
import LandingPage from "./components/LandingPage/LandingPage";
import UserLogin from "./components/UserLogin/UserLogin";
import Course from "./components/Course/Excercises/Course";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import RegistrationForm from "./components/Sign-up/registrationForm";
import Styling from "./components/Styling/App";
import "./GlobalStyles/colors.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);

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
    setIsLoggedIn(false);
    window.location.replace("/userlogin");
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <NewNavbar userLogged={IsLoggedIn} onLogout={logoutHandler} />
        <div className="SiteContent">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/landingpage" element={<LandingPage />} />
            <Route
              path="/userlogin"
              element={
                <UserLogin
                  onLogin={loginHandler}
                  onLogout={logoutHandler}
                  loginState={IsLoggedIn}
                />
              }
            />
            <Route path="/sign-up" element={<RegistrationForm />} />
            <Route path="/course" element={<Course />} />
            <Route path="/styling-course" element={<Styling />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
