import React from "react";
import { Typography } from "@material-ui/core";
import HomeVideo from "./HomeVideo";

const Home = () => (
  <React.Fragment>
    <HomeVideo buttonText="See 2019 Speakers" />
    <Typography variant="headline">
      Join us for TEDxIWU in February 2019
    </Typography>
  </React.Fragment>
);

export default Home;
