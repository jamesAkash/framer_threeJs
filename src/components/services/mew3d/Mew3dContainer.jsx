import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Model } from "./Mew3dModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const Mew3dContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="city" intensity={0.5}>
          <Model />
        </Stage>
        <OrbitControls autoRotate enableZoom={false} />
        <PerspectiveCamera position={[1, 0.4, 1.8]} zoom={0.8} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default Mew3dContainer;
