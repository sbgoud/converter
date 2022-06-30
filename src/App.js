import * as React from "react";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./App.css";


    


export default function BasicButtons() {

  let feet = document.getElementById('input').value ;
  const [meters, setMeters] = useState(feet) ;
  console.log(meters);


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
        Equivalent Meters = <Button><span  id="Meters"> {meters} Meters</span></Button>
      </div>
      <div class="stack">
      
        <Button variant = "contained"  onClick = {() => setMeters(meters * 0.3048)} > Convert </Button>
      
      </div>
      
    </div>
  );
}
