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
      {/* <object
        data={file_location}
        type="application/pdf"
        height={height}
        width={width}
      >
        <p>
          You must be using a browser that can't display pdfs...{" "}
          <a href={file_location}>Click here to download my portfolio!</a>
        </p>
      </object> */}
      {/* <embed src={file_location} height={height} width={width} /> */}
      <iframe src={online_location} height={height} width={width} />
    </div>
  );
};

export default Portfolio;
