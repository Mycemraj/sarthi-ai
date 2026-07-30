import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const ARM_ANGLES = [45, 135, 225, 315];

function Propeller({ angleDeg }) {
  const spinRef = useRef(null);
  const rad = (angleDeg * Math.PI) / 180;
  const x = Math.cos(rad) * 0.62;
  const z = Math.sin(rad) * 0.62;

  useFrame((_, delta) => {
    if (spinRef.current) spinRef.current.rotation.y += delta * 40;
  });

  return (
    <group position={[x, 0.05, z]}>
      <mesh>
        <cylinderGeometry args={[0.07, 0.07, 0.09, 12]} />
        <meshStandardMaterial color="#12315e" />
      </mesh>
      <mesh ref={spinRef} position={[0, 0.06, 0]}>
        <boxGeometry args={[0.55, 0.012, 0.05]} />
        <meshStandardMaterial color="#e6edf5" transparent opacity={0.85} />
      </mesh>
    </group>
  );
}

export default function DroneModel() {
  const blinkRef = useRef(null);

  useFrame(({ clock }) => {
    if (blinkRef.current) {
      const t = clock.getElapsedTime();
      blinkRef.current.intensity = Math.sin(t * 6) > 0.6 ? 2.2 : 0;
    }
  });

  return (
    <group scale={0.62}>
      {/* Body */}
      <mesh castShadow>
        <boxGeometry args={[0.42, 0.16, 0.42]} />
        <meshStandardMaterial color="#f5f7fa" metalness={0.15} roughness={0.35} />
      </mesh>
      <mesh position={[0, -0.02, 0]}>
        <boxGeometry args={[0.24, 0.06, 0.24]} />
        <meshStandardMaterial color="#081c3d" metalness={0.3} roughness={0.4} />
      </mesh>

      {/* Arms */}
      {ARM_ANGLES.map((angle) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <mesh
            key={angle}
            position={[(Math.cos(rad) * 0.62) / 2, 0.02, (Math.sin(rad) * 0.62) / 2]}
            rotation={[0, -rad, 0]}
          >
            <boxGeometry args={[0.62, 0.035, 0.06]} />
            <meshStandardMaterial color="#e6edf5" metalness={0.2} roughness={0.4} />
          </mesh>
        );
      })}

      {/* Propellers */}
      {ARM_ANGLES.map((angle) => (
        <Propeller key={angle} angleDeg={angle} />
      ))}

      {/* Camera gimbal */}
      <mesh position={[0, -0.13, 0]}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshStandardMaterial color="#00aeef" metalness={0.4} roughness={0.2} />
      </mesh>

      {/* Blinking nav light */}
      <mesh position={[0, 0.09, 0.24]}>
        <sphereGeometry args={[0.025, 8, 8]} />
        <meshStandardMaterial color="#d64545" emissive="#ff4d4d" emissiveIntensity={2} />
      </mesh>
      <pointLight
        ref={blinkRef}
        position={[0, 0.09, 0.24]}
        color="#ff4d4d"
        intensity={0}
        distance={1}
      />
    </group>
  );
}
