import { useState } from "react";
import { NavBarObject, PaintingObject, PortfolioObject } from "./types";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import GalleryPage from "./pages/GalleryPage";

function App() {
  // navBarPages should be an object with objects in it which have the displayName
  // const navBarPages = ["About", "Gallery", "Portfolio"];

  const navBarBranding: NavBarObject = {
    displayName: "sarahmarchioni.work",
    link: "/",
  };

  const navBarArr: NavBarObject[] = [
    { displayName: "About", link: "/About" },
    { displayName: "Gallery", link: "/Gallery" },
    { displayName: "Portfolio", link: "/Portfolio" },
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div className="container" style={{ height: "100%" }}>
      <NavBar branding={navBarBranding} pages={navBarArr} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Portfolio" element={<PortfolioPage />} />
          <Route path="/Gallery" element={<GalleryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
