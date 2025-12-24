import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import React from "react";

const Shape = () => {
  return (
    <>
      <Sphere args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="yellowgreen"
          speed={2}
          distort={0.5}
          attach="material"
        />
      </Sphere>
      <ambientLight intensity={1} />
      <directionalLight color="yellowgreen" position={[1, 2, 0]} />
    </>
  );
};

export default Shape;
