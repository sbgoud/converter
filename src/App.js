import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./App.css";


function convert() {
   
  console.log("hello");
}
          


export default function BasicButtons() {
  return (
    <div class="thebox">
    
      <div class="heading"><strong>Feets to meters Converter</strong></div>
      <div>
        Enter Feets =
         <span>
          <input type="text" id="input"/>
        </span>
      </div>
      <div>
        Equivalent Meters = <Button id="Meters"> 0 Meters</Button>
      </div>
      <div class="stack">
      
        <Button variant = "contained"  onClick = {convert} > Convert </Button>
      
      </div>
      
    </div>
  );
}
