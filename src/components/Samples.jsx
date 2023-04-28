import React from "react";
import "../styles/samples.css";
import { motion } from "framer-motion";

export default function Samples() {
  const smilesData = [
    {
      name: "CC1CC(CCN)O1",
      path: "1",
    },
    {
      name: "NC=NC1=C(O)N1",
      path: "2",
    },
    {
      name: "COOC1(O)CC1(C)O",
      path: "3",
    },
    {
      name: "C=C1CN=C2CC1(C)N2",
      path: "4",
    },
    {
      name: "OCCC=C1C=CN=C1",
      path: "5",
    },
    {
      name: "C#CCOC(=N)CCC",
      path: "6",
    },
    {
      name: "CCN(O)C=NC(C)=O",
      path: "7",
    },
    {
      name: "CCC1(N)CC=CN1",
      path: "8",
    },
    {
      name: "CC1CC1OOC(N)=O",
      path: "9",
    },
    {
      name: "CC12CC34C=NC31C2C4",
      path: "10",
    },
  ];

  return (
    <motion.div
      className="content"
      initial={{ x: "-100%" }}
      animate={{ x: 0, transition: { duration: 0.2, delay: 0.2 } }}
      exit={{ y: window.innerHeight, transition: { duration: 0.2 } }}
    >
      <div className="samplescard">
        <h1>Generated Samples:</h1>

        <p>
          Below are the generated SMILES strings and their corresponding graphs:
        </p>
        <div className="smilesImages">
          {smilesData.map((individualSmile) => {
            return (
              <div className="individualSmile" key={individualSmile.path}>
                <p>{individualSmile.name}</p>
                <img src={`/samples/${individualSmile.path}.png`} />
              </div>
            );
          })}
        </div>
        <p>Click <a>here</a> to download the model weights </p>
      </div>
    </motion.div>
  );
}
