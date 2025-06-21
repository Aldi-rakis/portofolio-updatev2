import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import modelUrl from "../assets/models/scene.glb";
import Loader from "./ui/Loader3d"; // pastikan path benar

function Model() {
  const { scene } = useGLTF(modelUrl);
  return <primitive object={scene} scale={0.25} position={[0, 0, 0]} />;
}

export default function ModelViewer() {
  return (
    <Canvas className="my-12" camera={{ position: [0, 10, 8], fov: 25 }}>
      {/* Latar belakang (opsional) */}
      {/* <color attach="background" args={["#20232a"]} /> */}

      {/* Pencahayaan */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 10]} intensity={1} />

      {/* Model */}
      <React.Suspense fallback={<Loader />}>
        <Model />
      </React.Suspense>

      {/* Kontrol interaksi */}
      <OrbitControls
        enableZoom={false}
        
        maxPolarAngle={Math.PI / 2.4} // Sedikit dari atas
        minPolarAngle={Math.PI / 2.4} // Supaya tetap dari atas
        autoRotate
        autoRotateSpeed={1}
      />
    </Canvas>
  );
}
