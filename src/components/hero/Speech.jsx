import { TypeAnimation } from "react-type-animation";

const Speech = () => {
  return (
    <div className="bubbleContainer">
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
    </div>
  );
};

export default Speech;
