import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./App.css";

export default function BasicButtons() {
  return (
    <div class="thebox">
      <div class="heading"><strong>Feets to meters Converter</strong></div>
      <div>
        Enter Feets = <span><input type="text"/>
        </span>
      </div>
      <div>
        Equivalent Meters = <button variant="Meters"> 0 Meters</button>
      </div>
      <div class="stack">
      <Stack  direction="row">
        <Button variant="contained">Convert</Button>
      </Stack>
      </div>
      
    </div>
  );
}
