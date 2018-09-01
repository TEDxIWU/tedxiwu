import React from "react";
import App from "./App";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { HashRouter } from "react-router-dom";
import theme from "../../theme";

class AppContainer extends React.Component {
  state = {
    handleDrawerOpen: false
  };

  handleDrawerOpen = () => {
    this.setState({ openDrawer: true });
  };

  handleDrawerClose = () => {
    this.setState({ openDrawer: false });
  };

  render() {
    const { openDrawer } = this.state;

    return (
      <HashRouter>
        <MuiThemeProvider theme={theme}>
          <App
            openDrawer={openDrawer}
            handleDrawerClose={this.handleDrawerClose}
            handleDrawerOpen={this.handleDrawerOpen}
          />
        </MuiThemeProvider>
      </HashRouter>
    );
  }
}

export default AppContainer;
