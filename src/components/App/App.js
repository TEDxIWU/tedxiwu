import React from "react";
import AppLayout from "../AppLayout";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { HashRouter } from "react-router-dom";
import theme from "../../theme";

class AppContainer extends React.Component {
  render() {
    return (
      <HashRouter>
        <MuiThemeProvider theme={theme}>
          <AppLayout />
        </MuiThemeProvider>
      </HashRouter>
    );
  }
}

export default AppContainer;
