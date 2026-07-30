import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import DroneModel from "./DroneModel";

function AnimatedDrone() {
  const groupRef = useRef(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.35;
    const x = Math.sin(t) * 2.4;
    const y = 0.9 + Math.sin(t * 1.7) * 0.35;
    const z = Math.cos(t * 0.8) * 0.6;

    if (!groupRef.current) return;
    groupRef.current.position.set(x, y, z);

    const dx = Math.cos(t) * 2.4;
    const dy = Math.cos(t * 1.7) * 1.7 * 0.7;
    groupRef.current.rotation.z = -dx * 0.18;
    groupRef.current.rotation.x = dy * 0.12;
    groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.3;
  });

  return (
    <group ref={groupRef}>
      <DroneModel />
    </group>
  );
}

export default function FlyingDrone3D() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[5]">
      <Canvas
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 0, 5], fov: 40 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[2, 3, 2]} intensity={1.2} />
        <directionalLight position={[-2, -1, -2]} intensity={0.3} />
        <AnimatedDrone />
      </Canvas>
    </div>
  );
}
