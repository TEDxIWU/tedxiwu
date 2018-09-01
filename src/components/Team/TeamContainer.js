import React from "react";
import Team from "./Team";

const teamMembers = [
  {
    name: "Bevin Choban '10",
    description:
      "TEDxIWU Organizer and Coordinator at the Action Research Center (IWU) "
  },
  {
    name: "Deborah Halperin",
    description: "Director of the Action Research Center (IWU)"
  },
  {
    name: "Adriane Powell",
    description: "Director of Alumni Relations (IWU)"
  },
  {
    name: "Liz Vales",
    description: "Director of Student Activities and Leadership Programs (IWU)"
  },
  {
    name: "Dr. Kate Browne",
    description: " TEDx Speaker and Technology Trainer (IWU)"
  }
];

const TeamContainer = () => <Team teamMembers={teamMembers} />;

export default TeamContainer;
