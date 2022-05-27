import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const divbar = () => {
  return (
    <>
        <AppBar position="static">
		<div id="navbar">
          <Stack spacing={3} direction="row">
            <Button href="/landingpage" variant="text">
              Landing Page
            </Button>
            <Button href="/dashboard" color="secondary" variant="text">
              Dashboard
            </Button>
            <Button href="/userlogin" color="secondary" Button variant="text">
              Login
            </Button>
            <Button href="/sign-up" color="secondary" Button variant="text">
              Signup
            </Button>
          </Stack>
		  </div>
        </AppBar>
    </>
  );
};

export default divbar;
