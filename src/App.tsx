import { useState } from "react";
import { NavBarObject } from "./types";
import About from "./components/About";
import NavBar from "./components/NavBar";

function App() {
  // navBarPages should be an object with objects in it which have the displayName
  // const navBarPages = ["About", "Gallery", "Portfolio"];

  const navBarBranding: NavBarObject = {
    displayName: "sarahmarchioni.com",
    link: "http://localhost:5173",
  };
  const navBarArr: NavBarObject[] = [
    { displayName: "About" },
    { displayName: "Gallery" },
    { displayName: "Portfolio" },
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
      <About></About>
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
