"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Core() {
  const group = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Mesh>(null);
  const points = useMemo(() => Array.from({ length: 8 }, (_, i) => {
    const a = (i / 8) * Math.PI * 2;
    return new THREE.Vector3(Math.cos(a) * 2.3, Math.sin(a) * 1.15, Math.sin(a * 2) * .5);
  }), []);

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = t * .06 + pointer.x * .16;
      group.current.rotation.x = pointer.y * -.12;
    }
    if (ring.current) ring.current.rotation.z = t * .22;
  });

  return (
    <group ref={group}>
      <Float speed={1.25} rotationIntensity={.35} floatIntensity={.5}>
        <mesh>
          <icosahedronGeometry args={[.68, 1]} />
          <meshStandardMaterial color="#10140d" emissive="#98d42b" emissiveIntensity={.32} wireframe />
        </mesh>
        <mesh ref={ring} rotation={[Math.PI / 2.4, 0, 0]}>
          <torusGeometry args={[1.18, .012, 12, 100]} />
          <meshBasicMaterial color="#c8ff3d" transparent opacity={.65} />
        </mesh>
      </Float>
      <Line points={[...points, points[0]]} color="#70e5ff" lineWidth={.45} transparent opacity={.25} />
      {points.map((p, i) => (
        <Float key={i} speed={1 + i * .08} floatIntensity={.8}>
          <mesh position={p}>
            <sphereGeometry args={[i % 3 === 0 ? .085 : .045, 12, 12]} />
            <meshBasicMaterial color={i % 3 === 0 ? "#c8ff3d" : "#70e5ff"} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function LabScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5.2], fov: 52 }} dpr={[1, 1.6]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={.35} />
      <pointLight position={[3, 3, 4]} intensity={14} color="#c8ff3d" />
      <pointLight position={[-4, -2, 2]} intensity={9} color="#70e5ff" />
      <Core />
      <Sparkles count={75} scale={[8, 5, 4]} size={1.15} speed={.25} opacity={.55} color="#c8ff3d" />
    </Canvas>
  );
}
