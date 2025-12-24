import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

const Test3d = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Canvas>
        <mesh>
          {/* <boxGeometry args={[2, 2, 2]} /> */}
          {/* <meshStandardMaterial color="red" /> */}
          {/* <MeshDistortMaterial
            color="red"
            speed={2}
            distort={0.5}
            attach="material"
          /> */}
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
          {/* <OrbitControls /> */}
        </mesh>
      </Canvas>
    </div>
  );
};

export default Test3d;
