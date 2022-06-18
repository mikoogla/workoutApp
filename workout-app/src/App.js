import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import LandingPage from "./components/LandingPage/LandingPage";
import UserLogin from "./components/UserLogin/UserLogin";
import Course from "./components/Course/Excercises/Course";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import RegistrationForm from "./components/Sign-up/registrationForm";
import Styling from "./components/Styling/App";
import Colors from "./GlobalStyles/colors.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <div className="SiteContent">
          <Routes>
            <Route path="/" element={<Styling />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/landingpage" element={<LandingPage />} />
            <Route path="/userlogin" element={<UserLogin />} />
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
