import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./App.css";

export default function BasicButtons() {
  return (
    <div class="thebox">
      <div class="heading"><strong>Feet to meter Converter</strong></div>
      <div class="stack">
      <Stack  direction="row">
        <Button variant="contained">Convert</Button>
      </Stack>
      </div>
      
    </div>
  );
}
