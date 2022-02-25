import React from "react";
import "./App.css";
import MediaContainer from "./components/ui/MediaContainer";


function App() {
  return (
    <React.Fragment>
      <h3>Welcome To Smart Media!</h3>
      <MediaContainer width={250}>
        <h3>This is Media Container</h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.{" "}
        </p>
       
      </MediaContainer>
    </React.Fragment>
  );
}

export default App;
