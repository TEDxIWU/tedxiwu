import React from "react";
import Team from "./Team";

const teamMembers = [
  {
    name: "Bevin Choban '10",
    description:
      "TEDxIWU Organizer and Coordinator at the Action Research Center (IWU)",
    image: "/team/choban.jpg"
  },
  {
    name: "Deborah Halperin",
    description: "Director of the Action Research Center (IWU)",
    image: "/team/halperin.jpg"
  },
  {
    name: "Adriane Powell",
    description: "Director of Alumni Relations (IWU)",
    image: "/team/powell.jpg"
  },
  {
    name: "Liz Vales",
    description: "Director of Student Activities and Leadership Programs (IWU)",
    image: "/team/vales.jpg"
  },
  {
    name: "Dr. Kate Browne",
    description: " TEDx Speaker and Technology Trainer (IWU)"
  }
];

const TeamContainer = () => <Team teamMembers={teamMembers} />;

export default TeamContainer;
