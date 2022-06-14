import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "./style.css";

const divbar = () => {
  return (
    <div className="Navbar">
      <AppBar position="static" overflow="hidden">
        <div id="navbar" className="navbar--main">
          <Stack spacing={3} direction="row">
            <Button className="navbar--link" href="/landingpage" variant="text">
              Landing Page
            </Button>
            <Button
              className="navbar--link"
              href="/dashboard"
              color="secondary"
              variant="text"
            >
              Dashboard
            </Button>
            <Button
              className="navbar--link"
              href="/userlogin"
              color="secondary"
              variant="text"
            >
              Login
            </Button>
            <Button
              className="navbar--link"
              href="/sign-up"
              color="secondary"
              variant="text"
            >
              Signup
            </Button>
            <Button
              className="navbar--link"
              href="/course"
              color="secondary"
              variant="text"
            >
              Course (temproary)
            </Button>
            <Button
              className="navbar--link"
              href="/styling-course"
              color="secondary"
              variant="text"
            >
              Styling
            </Button>
          </Stack>
        </div>
      </AppBar>
    </div>
  );
};

export default divbar;
