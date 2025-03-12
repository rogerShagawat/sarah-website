import React from "react";
import { PortfolioObject } from "../types";

interface PortfolioProps {
  file_location: string;
  online_location: string;
  height: string;
  width: string;
}

const Portfolio = ({
  file_location,
  online_location,
  height = "800",
  width = "100%",
}: PortfolioProps) => {
  return (
    <div>
      <h1>Portfolio</h1>
      {/* <embed src={obj.file_location} /> */}
      <iframe src={online_location} height={height} width={width} />
    </div>
  );
};

export default Portfolio;
