import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import LandingPage from "./components/LandingPage/LandingPage";
import UserLogin from "./components/UserLogin/UserLogin";
import Course from "./components/Course/Course";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import RegistrationForm from './components/Sign-up/registrationForm'

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
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/sign-up" element={<RegistrationForm />} />
          <Route path="/course" element={<Course />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
