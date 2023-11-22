"use client";
import { Ref, useRef } from "react";
import { Mesh, BoxGeometry, LineSegments } from "three";
import { Canvas, useFrame } from "@react-three/fiber";

function Cube() {
  const meshRef = useRef<Mesh>();
  const edgesRef = useRef<LineSegments>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef as Ref<Mesh>} castShadow receiveShadow>
      <boxGeometry args={[2, 2, 2]} />
      <meshLambertMaterial color={"#22d3ee"} />
      <lineSegments ref={edgesRef}>
        <edgesGeometry attach="geometry" args={[new BoxGeometry(2, 2, 2)]} />
        <lineBasicMaterial attach="material" color={"black"} />
      </lineSegments>
    </mesh>
  );
}

export default function CubeScene() {
  return (
    <Canvas shadows>
      <ambientLight intensity={0.75} />
      <pointLight position={[10, 10, 10]} castShadow />
      <Cube />
    </Canvas>
  );
}
