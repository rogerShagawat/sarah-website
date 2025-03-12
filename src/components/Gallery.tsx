import React from "react";
import { PaintingObject } from "../types";

interface GalleryProps {
  paintings: PaintingObject[];
}

const Gallery = ({ paintings }: GalleryProps) => {
  return (
    <div>
      <h1>Gallery</h1>
      {paintings.map((painting, index) => (
        <img src={painting.file_src} className="img-fluid" alt={painting.alt} />
      ))}
    </div>
  );
};

export default Gallery;
