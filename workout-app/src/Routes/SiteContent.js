import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "../components/Sign-up/registrationForm";
import LandingPage from "../components/LandingPage/LandingPage";
import Course from "../components/Course/Excercises/Course";
import Dashboard from "../components/Dashboard/Dashboard";
import UserLogin from "../components/UserLogin/UserLogin";
import Styling from "../components/Styling/App";
import UserFinder from "../components/class_components/UserFinder";
import styles from "./SiteContent.module.css";
export default function SiteContent() {
  return (
    <Router>
      <div className={styles.SiteContent}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/sign-up" element={<RegistrationForm />} />
          <Route path="/course" element={<Course />} />
          <Route path="/styling-course" element={<Styling />} />
          <Route path="/class" element={<UserFinder />} />
        </Routes>
      </div>
    </Router>
  );
}
