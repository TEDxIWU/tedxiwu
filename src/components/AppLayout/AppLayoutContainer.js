import React from "react";
import AppLayout from "./AppLayout";
import { withRouter } from "react-router";

class AppLayoutContainer extends React.Component {
  state = {
    mobileOpen: false
  };

  handleDrawerClose = () => {
    this.setState({ mobileOpen: false });
  };

  handleDrawerOpen = () => {
    this.setState({ mobileOpen: true });
  };

  render() {
    const { mobileOpen } = this.state;
    const {
      location: { pathname }
    } = this.props;

    const pageTitle = pathname.substring(1);
    const hideMenu = pathname === "/";

    return (
      <AppLayout
        pageTitle={pageTitle}
        handleDrawerClose={this.handleDrawerClose}
        handleDrawerOpen={this.handleDrawerOpen}
        mobileOpen={mobileOpen}
        hideMenu={hideMenu}
      />
    );
  }
}

export default withRouter(AppLayoutContainer);
