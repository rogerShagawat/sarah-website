import { useState } from "react";
import About from "./components/About";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  // for ListGroup
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
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
