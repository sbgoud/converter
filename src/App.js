import * as React from "react";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./App.css";


    


export default function BasicButtons() {

  
  const [meters, setMeters] = useState(0) ;
  console.log(meters+" meters");


  return (
    <div className="thebox">
    
      <div className="heading"><strong>Feets to meters Converter</strong></div>
      <div>
        Enter Feets =
         <span>
          <input type="number" id="input"/>
        </span>
      </div>
      <div>
        Equivalent Meters = <Button><span  id="Meters"> {meters} Meters</span></Button>
      </div>
      <div className="stack">
      
        <Button variant = "contained"  onClick = {() => setMeters(document.getElementById('input').value * 0.3048)} > Convert </Button>
      
      </div>
      
    </div>
  );
}
