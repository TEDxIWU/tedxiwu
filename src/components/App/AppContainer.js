import React from "react";
import App from "./App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { HashRouter } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#484848",
      main: "#212121",
      dark: "#000000",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff6659",
      main: "#d32f2f",
      dark: "#9a0007",
      contrastText: "#fff"
    }
  }
});

const FAQsContainer = () => (
  <HashRouter>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </HashRouter>
);

export default FAQsContainer;
