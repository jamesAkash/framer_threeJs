import { animate } from "motion";
import "./hero.css";
import Speech from "./Speech";
import { motion } from "motion/react";
import { Canvas } from "@react-three/fiber";
import Shape from "./Shape";
import { Suspense } from "react";

const pokemonVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.4,
    },
  },
};

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        {/* TITLE */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hTitle"
        >
          Lorem, ipsum,
          <br />
          <span>Pika Pika</span>
        </motion.h1>
        {/* POKEMON */}
        <motion.div
          variants={pokemonVariants}
          initial="initial"
          animate="animate"
          className="pokemon"
        >
          <motion.h2 variants={pokemonVariants}>
            Top <span style={{ color: "greenyellow" }}>Pokemon's</span>
          </motion.h2>
          <motion.p variants={pokemonVariants}>
            This weeks top 3 pokemon legends, Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Odit porro illo tempora voluptatem,
            vitae sed quibusdam corporis ratione excepturi quod!
          </motion.p>
          <motion.div variants={pokemonVariants} className="pokemonList">
            <motion.img
              variants={pokemonVariants}
              src="/images/pokemon1.png"
              alt="Pokemon"
            />
            <motion.img
              variants={pokemonVariants}
              src="/images/pokemon2.jpg"
              alt="Pokemon"
            />
            <motion.img
              variants={pokemonVariants}
              src="/images/pokemon3.webp"
              alt="Pokemon"
            />
          </motion.div>
        </motion.div>
        {/* SCROLL SVG */}
        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          href="#services"
        >
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
            <motion.path
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
        </motion.a>
      </div>
      <div className="hSection right">
        {/* FOLLOW */}
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="follow"
        >
          <motion.a variants={followVariants} href="/">
            <img src="/images/instagram.png" alt="ig" />
          </motion.a>
          <motion.a variants={followVariants} href="/">
            <img src="/images/youtube.png" alt="yt" />
          </motion.a>
          <motion.a variants={followVariants} href="/">
            <img src="/images/facebook.png" alt="fb" />
          </motion.a>
          <motion.div variants={followVariants} className="followTextContainer">
            <div className="followText">Follow Me</div>
          </motion.div>
        </motion.div>
        {/* BUBBLE */}
        <Speech />
        {/* POKIVERSE */}
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="pokiverse"
        >
          <img src="/images/pokeball.webp" alt="pokiball" />
          POKIVERSE CERTIFIED
          <br />
          PROFESSIONAL
          <br />
          MANIAC
        </motion.div>
        {/* CONTACT BUTTON */}
        {/* <motion.a
          href="/#contact"
          animate={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="contactLink"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="contactButton"
          >
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
          </motion.div>
        </motion.a> */}
        <motion.a
          href="/#contact"
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="contactLink"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="contactButton"
            style={{ position: "relative" }}
          >
            <svg viewBox="0 0 200 200" width="160" height="160">
              <defs>
                {/* Green glow */}
                <filter id="softGlow">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Ring path */}
                <path
                  id="ringText"
                  d="M100,100 m -70,0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                />
              </defs>

              {/* Outer badge */}
              <circle
                cx="100"
                cy="100"
                r="88"
                fill="#2a0e2e"
                stroke="#855884"
                strokeWidth="4"
                filter="url(#softGlow)"
              />

              {/* Inner panel */}
              <circle
                cx="100"
                cy="100"
                r="62"
                fill="#3b1240"
                stroke="#A6FF2E"
                strokeWidth="2"
              />

              {/* Rotating text */}
              <text
                fill="#A6FF2E"
                fontSize="11"
                letterSpacing="2"
                fontWeight="600"
                fontFamily="Arial Rounded MT Bold, sans-serif"
              >
                <textPath href="#ringText">
                  CONTACT • TRAIN • POKÉMON • POWER •
                </textPath>
              </text>

              {/* Pokéball center */}
              {/* <g transform="translate(100 100)">
                <circle r="22" fill="#fff" />
                <path d="M-22 0h44" stroke="#000" strokeWidth="3" />
                <circle r="7" fill="#fff" stroke="#000" strokeWidth="3" />
                <path d="M-22 0a22 22 0 0 1 44 0" fill="#e63946" />
              </g> */}
            </svg>

            {/* Arrow overlay */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              style={{
                position: "absolute",
                inset: 0,
                display: "grid",
                placeItems: "center",
              }}
            >
              <svg
                width="38"
                height="38"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#729f37"
                strokeWidth="2.5"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.a>
      </div>
      <div className="bg">
        {/* 3d shape */}
        <Canvas>
          <Suspense fallback="loading...">
            <Shape />
          </Suspense>
        </Canvas>
        <div className="hImg">
          <img src="/images/psyduck.png" alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
