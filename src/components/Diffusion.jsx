import React, { useState } from "react";
import "../styles/diffusion.css";
import { TextField, Button } from "@mui/material";
import sampleImage from "../styles/generatedImg.png";
import { motion } from "framer-motion";

export default function Diffusion() {
  const [nValue, setNValue] = useState();
  function handleInputChange(event) {
    event.preventDefault();
    setNValue(event.target.value);
  }
  return (
    <motion.div className="content diffusionpage"
    initial={{x:"-100%"}}
    animate={{x:0,transition:{duration:0.2,delay:0.2}}}
    exit={{y:window.innerHeight,transition:{duration:0.2}}}>
      <div className="diffusioncard">
        <h1>Generate Graphs:</h1>
        <form className="diffusion_form">
          <TextField
            className="inputfield"
            variant="outlined"
            label="Enter n"
            name="n_value"
            type={"number"}
            inputProps={{ min: 5 }}
            onChange={handleInputChange}
            value={nValue}
            required
          />
          <Button
            variant="contained"
            className="diffusionSubmitBttn"
            type="submit"
          >
            Submit
          </Button>
        </form>
        <h2>Output:</h2>
        <img src={sampleImage} alt="Example of Generated Image" />
      </div>
    </motion.div>
  );
}
