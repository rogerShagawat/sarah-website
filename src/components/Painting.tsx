import React from "react";
import { PaintingObject } from "../types";

interface Props {
  painting: PaintingObject;
}

const Painting = ({ painting }: Props) => {
  const DEFAULT_SHOP_LOCATION =
    "https://www.etsy.com/shop/BabciasRoombySarah?ref=profile_header";
  const {
    title,
    file_src,
    alt,
    medium = "UNKOWN MEDIUM",
    real_dimensions = "UNKOWN DIMENSIONS",
    year_created = "UNKNOWN YEAR CREATED",
    description = "No description!",
    shop_location = DEFAULT_SHOP_LOCATION,
  } = painting;

  return (
    <div>
      <h1>{title}</h1>
      <div style={{ marginTop: "15px" }}>
        <figure className="figure">
          <img src={file_src} className="figure-img img-fluid" alt={alt} />
          <figcaption className="figure-caption">
            {medium}
            <br />
            {real_dimensions}
            <br />
            {year_created}
          </figcaption>
        </figure>
      </div>
      <p>{description}</p>
      <a target="_blank" href={shop_location}>
        {shop_location === DEFAULT_SHOP_LOCATION
          ? "Check out my store page!"
          : "Buy a print of " + title}
      </a>
    </div>
  );
};

export default Painting;
