import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/glb/mew3d.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.wire_228153184}
          position={[-32.252, -63.746, -29.644]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/glb/mew3d.glb");
