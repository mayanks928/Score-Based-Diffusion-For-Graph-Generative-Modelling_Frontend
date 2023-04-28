import React, { useState } from "react";
import "../styles/samples.css";
import { TextField, Button } from "@mui/material";
import { motion } from "framer-motion";

export default function Samples() {

  return (
    <motion.div className="content"
    initial={{x:"-100%"}}
    animate={{x:0,transition:{duration:0.2,delay:0.2}}}
    exit={{y:window.innerHeight,transition:{duration:0.2}}}>
      <div className="samplescard">
        <h1>Generated Samples:</h1>
        <p>Below are the generated SMILES strings and their corresponding graphs:</p>
        <h2>Output:</h2>
      </div>
    </motion.div>
  );
}
