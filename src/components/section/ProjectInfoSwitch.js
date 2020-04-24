import React from "react";
import KeukenhofInfo from "./projectsInfo/KeukenhofInfo";
import MazegameJLR from "./projectsInfo/MazegameJLR";
import PorfolioInfo from "./projectsInfo/PortfolioInfo";
import PygameInfo from "./projectsInfo/PygameInfo";
import OutdoorParadiseInfo from "./projectsInfo/OutdoorParadiseInfo";

export default class ProjectsInfoSwitch extends React.Component {
  render() {
    switch (this.props.soort) {
      case "keukenhof":
        return <KeukenhofInfo />;
      case "maze":
        return <MazegameJLR />;
      case "portfolio":
        return <PorfolioInfo />;
      case "knights":
        return <PygameInfo />;
      case "outdoor":
        return <OutdoorParadiseInfo />;
      default:
        return <OutdoorParadiseInfo />;
    }
  }
}
