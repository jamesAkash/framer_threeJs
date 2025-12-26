import { useEffect, useRef, useState } from "react";
import "./Pokemon.css";
import { useInView, useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";

const pokemons = [
  {
    id: 1,
    img: "/images/pokemon1.png",
    title: "Pikachu",
    desc: "An Electric-type Pokémon known for storing electricity in its cheeks. Pikachu is loyal, energetic, and Ash’s iconic partner.",
    link: "https://www.pokemon.com/us/pokedex/pikachu",
  },
  {
    id: 2,
    img: "/images/bulbasaur.png",
    title: "Bulbasaur",
    desc: "A Grass/Poison-type Pokémon that carries a plant bulb on its back, which grows as it absorbs sunlight.",
    link: "https://www.pokemon.com/us/pokedex/bulbasaur",
  },
  {
    id: 3,
    img: "/images/charizard.png",
    title: "Charizard",
    desc: "A powerful Fire/Flying-type Pokémon that breathes intense flames and is known for its fierce battles.",
    link: "https://www.pokemon.com/us/pokedex/charizard",
  },
  {
    id: 4,
    img: "/images/allPokemon.webp",
    title: "View All",
    desc: "Explore the complete Pokédex and learn about every Pokémon from every generation.",
    link: "https://www.pokemon.com/us/pokedex",
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>Learn more</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Pokemon = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * pokemons.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
          }}
        />
        {pokemons.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />

      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Pokemon;
