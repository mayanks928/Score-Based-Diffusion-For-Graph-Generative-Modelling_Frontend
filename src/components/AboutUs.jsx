import React from "react";
import "../styles/aboutus.css";
import { motion } from "framer-motion";

export default function AboutUs() {
  const members = [
    ["Nishant Rajadhyaksha", "16010120131"],
    ["Krishna Shetty", "16010120119"],
    ["Mayank Shetty", "16010120118"],
  ];
  return (
    <motion.div className="content aboutuspage"
    initial={{x:"-100%"}}
    animate={{x:0,transition:{duration:0.2,delay:0.2}}}
    exit={{y:window.innerHeight,transition:{duration:0.2}}}>
      <div className="aboutuscard">
        <h2>Group Members:</h2>
        <div className="groupmembers">
          {members.map((singleMember) => {
            return (
              <div key={singleMember[1]} className="member">
                <p>{singleMember[0]}</p>
                <p>{singleMember[1]}</p>
              </div>
            );
          })}
        </div>
        <h2>About the Project:</h2>
        <p>
          In this mini project, we propose a novel score-based generative model
          for graph-structured data using a continuous-time framework. Our
          method utilises a graph diffusion process modelled by a system of
          stochastic differential equations (SDEs) and novel score matching
          objectives to capture the permutation-invariance property and complex
          dependency between nodes and edges. We evaluate our method on diverse
          datasets and show its effectiveness in generating realistic graphs,
          such as molecules, while maintaining chemical valency rules. Our
          results demonstrate the potential of using SDEs to model
          graph-structured data.
        </p>
      </div>
    </motion.div>
  );
}
