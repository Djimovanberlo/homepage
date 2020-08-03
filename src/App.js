import React from "react";
import { Button } from "@material-ui/core";
import "./App.css";

function App() {
  return (
    <Button
      onClick={() => {
        console.log("HI");
      }}
      color="primary"
    >
      Hello World
    </Button>
  );
}

export default App;
