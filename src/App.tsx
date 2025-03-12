import { useState } from "react";
import { NavBarObject, PaintingObject, PortfolioObject } from "./types";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Gallery from "./components/Gallery";

function App() {
  // navBarPages should be an object with objects in it which have the displayName
  // const navBarPages = ["About", "Gallery", "Portfolio"];

  const navBarBranding: NavBarObject = {
    displayName: "sarahmarchioni.com",
    link: "http://localhost:5173",
  };

  const navBarArr: NavBarObject[] = [
    { displayName: "About", link: "/About" },
    { displayName: "Gallery", link: "/Gallery" },
    { displayName: "Portfolio", link: "/Portfolio" },
  ];

  const portfolioObj: PortfolioObject = {
    file_location: "",
    onlline_location:
      "https://drive.google.com/file/d/1EUk21Y2Pa9Gt6YAePe9_VCGLRyBHh5Fv/preview",
    height: "800",
    width: "100%",
  };

  const galleryArr: PaintingObject[] = [
    {
      title: "Michigan",
      file_src: "public/images/michigan_sarah_marchioni.jpg",
      alt: "A painting of a red barn in a snowy field with two smaller companion barns on it's left.",
    },
    {
      title: "Cabbage",
      file_src: "public/images/cabbage_sarah_marchioni.jpg",
      alt: "A painting of a multi-colored abstract of a red cabbage cross section taking up the top left half of the canvas.",
    },
    {
      title: "Puncture",
      file_src: "public/images/puncture_sarah_marchioni.jpg",
      alt: "A painting of a nail punctured through a piece of wood.",
    },
  ];

  // const [alertVisible, setAlertVisibility] = useState(false);
  // for ListGroup
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div className="container">
      <NavBar pages={navBarArr} branding={navBarBranding} />
      <Gallery paintings={galleryArr} />
      {/* <Portfolio
        file_location={portfolioObj.file_location}
        online_location={portfolioObj.onlline_location}
        height={portfolioObj.height}
        width={portfolioObj.width}
      /> */}
      {/* <About></About> */}
    </div>
    // <div>

    //   {/* <ListGroup
    //     items={items}
    //     heading="Cities"
    //     onSelectItem={handleSelectItem}
    //   /> */}
    //   {/* {alertVisible && (
    //     <Alert onClose={() => setAlertVisibility(false)}>
    //       <strong>Hello World</strong>
    //     </Alert>
    //   )}
    //   <Button onClick={() => setAlertVisibility(true)}>My Button!</Button> */}
    // </div>
  );
}

export default App;
