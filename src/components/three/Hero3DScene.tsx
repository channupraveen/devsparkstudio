import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron, Sphere, Torus } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";
import { useTheme } from "../providers/ThemeProvider";

const OrbitRing = ({ radius, tilt, color, speed }: { radius: number; tilt: number; color: string; speed: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta * speed;
    }
  });
  return (
    <mesh ref={ref} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.008, 16, 128]} />
      <meshBasicMaterial color={color} transparent opacity={0.4} />
    </mesh>
  );
};

const OrbitingDot = ({ radius, tilt, color, speed, size = 0.08 }: { radius: number; tilt: number; color: string; speed: number; size?: number }) => {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime() * speed;
      ref.current.rotation.z = t;
    }
  });
  return (
    <group ref={ref} rotation={[tilt, 0, 0]}>
      <mesh position={[radius, 0, 0]}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshBasicMaterial color={color} />
        <pointLight color={color} intensity={2} distance={2} />
      </mesh>
    </group>
  );
};

const CoreObject = () => {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Subtle mouse-follow
      const mx = state.mouse.x;
      const my = state.mouse.y;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mx * 0.4,
        0.04
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -my * 0.2,
        0.04
      );
    }
    if (innerRef.current) {
      innerRef.current.rotation.x += delta * 0.3;
      innerRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.6}>
        {/* Core icosahedron with distortion */}
        <Icosahedron ref={innerRef as any} args={[1, 4]}>
          <MeshDistortMaterial
            color="#6366f1"
            emissive="#4338ca"
            emissiveIntensity={0.4}
            distort={0.35}
            speed={2}
            roughness={0.15}
            metalness={0.9}
          />
        </Icosahedron>

        {/* Inner glow sphere */}
        <Sphere args={[0.7, 32, 32]}>
          <meshBasicMaterial color="#818dff" transparent opacity={0.15} />
        </Sphere>

        {/* Outer wireframe */}
        <mesh>
          <icosahedronGeometry args={[1.35, 1]} />
          <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.25} />
        </mesh>
      </Float>

      {/* Orbits */}
      <OrbitRing radius={1.9} tilt={Math.PI / 2} color="#818dff" speed={0.15} />
      <OrbitRing radius={2.3} tilt={Math.PI / 2.4} color="#c084fc" speed={-0.1} />
      <OrbitRing radius={2.7} tilt={Math.PI / 3} color="#38bdf8" speed={0.08} />

      {/* Orbiting dots */}
      <OrbitingDot radius={1.9} tilt={Math.PI / 2} color="#818dff" speed={0.6} />
      <OrbitingDot radius={2.3} tilt={Math.PI / 2.4} color="#c084fc" speed={-0.4} />
      <OrbitingDot radius={2.7} tilt={Math.PI / 3} color="#38bdf8" speed={0.35} size={0.1} />
    </group>
  );
};

const FallbackObject = () => (
  <mesh>
    <icosahedronGeometry args={[1, 1]} />
    <meshBasicMaterial color="#6366f1" wireframe />
  </mesh>
);

const Hero3DScene = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full h-full relative">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(circle at center, rgba(99,102,241,0.25), rgba(168,85,247,0.15) 40%, transparent 70%)"
              : "radial-gradient(circle at center, rgba(99,102,241,0.15), rgba(168,85,247,0.08) 40%, transparent 70%)",
        }}
      />
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={[0, 0, 0]} />
        <ambientLight intensity={theme === "dark" ? 0.3 : 0.6} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#818dff" />
        <pointLight position={[-5, -3, -5]} intensity={1.2} color="#c084fc" />
        <pointLight position={[0, -5, 3]} intensity={0.8} color="#38bdf8" />

        <Suspense fallback={<FallbackObject />}>
          <CoreObject />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hero3DScene;
