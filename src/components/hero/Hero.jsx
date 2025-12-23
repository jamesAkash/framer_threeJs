import "./hero.css";
import Speech from "./Speech";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        {/* POKEMON */}
        <div className="pokemon">
          <h2>Top Pokemon</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          <div className="pokemonList">
            <img src="/images/pokemon1.png" alt="Pokemon" />
            <img src="/images/pokemon2.jpg" alt="Pokemon" />
            <img src="/images/pokemon3.webp" alt="Pokemon" />
          </div>
        </div>
        {/* TITLE */}
        <h1 className="hTitle">
          Lorem, ipsum,
          <br />
          <span>Pika Pika</span>
        </h1>
        {/* SCROLL SVG */}
        <a href="#services">
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <path
              animate={{ y: [0, 5] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </a>
      </div>
      <div className="hSection right">
        {/* FOLLOW */}
        <div className="follow">
          <a href="/">
            <img src="/images/instagram.png" alt="ig" />
          </a>
          <a href="/">
            <img src="/images/youtube.png" alt="yt" />
          </a>
          <a href="/">
            <img src="/images/facebook.png" alt="fb" />
          </a>
          <div className="followTextContainer">
            <div className="followText">Follow Me</div>
          </div>
        </div>
        {/* BUBBLE */}
        <Speech />
        {/* POKIVERSE */}
        <div className="pokiverse">
          <img src="/images/pokeball.webp" alt="pokiball" />
          POKIVERSE CERTIFIED
          <br />
          PROFESSIONAL
          <br />
          MANIAC
        </div>
        {/* CONTACT BUTTON */}
        <a href="/#contact" className="contactLink">
          <div className="contactButton">
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="greenyellow" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Train Now •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
