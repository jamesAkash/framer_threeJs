import Counter from "./Counter";
import Mew3dContainer from "./mew3d/Mew3dContainer";
import "./services.css";

import {
  LightningBoltIcon,
  HeartFilledIcon,
  ShuffleIcon,
} from "@radix-ui/react-icons";

const stats = [
  { id: 1, icon: LightningBoltIcon, label: "Attack per second", stat: 94 },
  { id: 2, icon: HeartFilledIcon, label: "Total Defense", stat: 755 },
  { id: 3, icon: ShuffleIcon, label: "Lethal Combination moves", stat: 6 },
];

const Services = () => {
  return (
    <div className="services">
      <div className="sSection left">
        <h1 className="sTitle">
          <span>Character </span>
          Information
        </h1>
        <div className="serviceList">
          {stats.map((stat) => (
            <div className="service" key={stat.id}>
              <div className="serviceIcon">
                <stat.icon height="24px" width="24px" />
              </div>
              <div className="serviceInfo">
                <h2>{stat.label}</h2>
                <h3>{stat.stat} Points</h3>
              </div>
            </div>
          ))}
        </div>
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
