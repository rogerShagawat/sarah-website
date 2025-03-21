import React from "react";
import { PaintingObject } from "../types";

interface GalleryProps {
  paintings: PaintingObject[];
}

const Gallery = ({ paintings }: GalleryProps) => {
  return (
    <div>
      <h1>Gallery</h1>
      {paintings.map(({ file_src, alt }, index) => (
        // TODO handle on click to bring to the painting page
        <div style={{ marginTop: "15px" }} key={index}>
          <img src={file_src} className="img-fluid rounded" alt={alt} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
