import React from "react";
import "../styles/home.css";
import { motion } from "framer-motion";

export default function Home() {
  const objectives = [
    [
      1,
      "The objective of this project is to use cutting edge technology like diffusion to generate valid graphs(for example graphs which satisfy chemical valency rule)",
    ],
    [
      2,
      "These graphs should follow the general properties of all the graphs given during training. (i.e The generated graph should be from some probability distribution with a high probability value)",
    ],
    [
      3,
      "The graph should produce both feature and adjacancy matrix and should model their dependency on each other",
    ],
  ];
  return (
    <motion.div className="content homepage"
    initial={{x:"-100%"}}
    animate={{x:0,transition:{duration:0.2,delay:0.2}}}
    exit={{y:window.innerHeight,transition:{duration:0.2}}}>
      <div className="homecard">
        <h1>Score Based Diffusion For Graph Generative Modelling</h1>
        <p>
          Score-based generative modeling is a type of generative modeling that
          involves learning a score function that assigns high scores to samples
          from the target distribution and low scores to samples outside the
          distribution. The score function is then used to generate new samples
          by performing optimization or sampling to find samples with high
          scores.
        </p>
        <p>
          The project solves the problem of generating graph-structured data by
          introducing a novel score-based generative model that can model the
          complex dependencies between nodes and edges, which are crucial for
          generating real-world graphs such as molecules.
        </p>
        <ul>
          {objectives.map((singleobjective) => {
            return <li key={singleobjective[0]}>{singleobjective[1]}</li>;
          })}
        </ul>
      </div>
    </motion.div>
  );
}
