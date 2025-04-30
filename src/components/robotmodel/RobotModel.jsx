import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export default function RobotModel() {
  const { scene } = useGLTF("src/assets/flying_robot_07___07.glb"); // Ensure path is correct

  return (
    <Canvas style={{ height: "300px",width:"200px" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <Suspense fallback={null}>
        <primitive object={scene} scale={1.5} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
