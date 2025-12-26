import Counter from "./Counter";
import Mew3dContainer from "./mew3d/Mew3dContainer";
import "./services.css";
import { motion, useInView } from "motion/react";

import {
  LightningBoltIcon,
  HeartFilledIcon,
  ShuffleIcon,
} from "@radix-ui/react-icons";
import { useRef } from "react";

const stats = [
  { id: 1, icon: LightningBoltIcon, label: "Attack per second", stat: 94 },
  { id: 2, icon: HeartFilledIcon, label: "Total Defense", stat: 755 },
  { id: 3, icon: ShuffleIcon, label: "Lethal Combination moves", stat: 6 },
];

const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });
  return (
    <div className="services" ref={ref}>
      <div className="sSection left">
        <motion.h1
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="sTitle"
        >
          <span>Character </span>
          Information
        </motion.h1>
        <motion.div
          className="serviceList"
          variants={listVariants}
          animate={isInView ? "animate" : "initial"}
        >
          {stats.map((stat) => (
            <motion.div
              variants={listVariants}
              className="service"
              key={stat.id}
            >
              <div className="serviceIcon">
                <stat.icon height="24px" width="24px" />
              </div>
              <div className="serviceInfo">
                <h2>{stat.label}</h2>
                <h3>{stat.stat} Points</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="counterList">
          <Counter from={0} to={104} text="Times won" />
          <Counter from={0} to={8} text="Times lost" />
        </div>
      </div>
      <div className="sSection right">
        <Mew3dContainer />
      </div>
    </div>
  );
};

export default Services;
