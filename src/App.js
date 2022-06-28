import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./App.css";


function convert() {
   
  const feet = document.getElementById('input').value;

  let meters = document.getElementById('Meters').innerHTML;
  meters = feet*0.3048 ;
  document.getElementById('Meters').innerHTML = feet*0.3048 + " Meters" ;

  console.log(meters + " meters");
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
        Equivalent Meters = <Button><span  id="Meters">0 Meters</span></Button>
      </div>
      <div class="stack">
      
        <Button variant = "contained"  onClick = {convert} > Convert </Button>
      
      </div>
      
    </div>
  );
}
