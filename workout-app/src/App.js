import React, { useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NewNavbar from "./components/Navbar/NewNavbar";
import SiteContent from "./Routes/SiteContent";
import Context from "./Context";

import "./GlobalStyles/colors.css";
import "./App.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const context = useContext(Context);
  return (
    <ThemeProvider theme={darkTheme}>
      <NewNavbar onLogout={context.logoutHandler} />
      <SiteContent />
    </ThemeProvider>
  );
}

export default App;
