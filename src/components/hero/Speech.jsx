import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            "We provide training for Picachus",
            1000,
            "We provide training for Bulbasaurs",
            1000,
            "We provide training for Charizards",
            1000,
            "And All Kind of Pokemons",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      <img src="/images/man.png" alt="man" />
    </motion.div>
  );
};

export default Speech;
