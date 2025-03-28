import { useState } from "react";
import { NavBarObject, PaintingObject, PortfolioObject } from "./types";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import GalleryPage from "./pages/GalleryPage";
import Painting from "./components/Painting";
import { paintingArr } from "./GalleryItems";

function App() {
  const navBarBranding: NavBarObject = {
    displayName: "sarahmarchioni.work",
    link: "/",
  };

  const navBarArr: NavBarObject[] = [
    { displayName: "About", link: "/About" },
    { displayName: "Gallery", link: "/Gallery" },
    { displayName: "Portfolio", link: "/Portfolio" },
  ];

  return (
    <div className="container" style={{ height: "100%" }}>
      <NavBar branding={navBarBranding} pages={navBarArr} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Portfolio" element={<PortfolioPage />} />
          <Route
            path="/Gallery"
            element={<GalleryPage galleryArr={paintingArr} />}
          />
          <Route
            path="/Painting"
            element={<Painting painting={paintingArr[0]} />}
          />
          {paintingArr.map((painting, index) => (
            <Route
              key={painting.title}
              path={"/" + painting.title}
              element={<Painting painting={painting} />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
