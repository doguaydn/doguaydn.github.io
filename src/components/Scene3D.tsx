import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Mouse-reactive floating shape
function FloatingShape({
  position,
  geometry,
  color,
  speed,
  floatIntensity,
}: {
  position: [number, number, number];
  geometry: 'torus' | 'icosahedron' | 'octahedron' | 'torusKnot' | 'dodecahedron';
  color: string;
  speed: number;
  floatIntensity: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    // Slow auto-rotation
    meshRef.current.rotation.x += delta * speed * 0.3;
    meshRef.current.rotation.y += delta * speed * 0.2;

    // Subtle mouse reactivity
    meshRef.current.position.x = position[0] + pointer.x * 0.3;
    meshRef.current.position.y = position[1] + pointer.y * 0.2;
  });

  const geo = useMemo(() => {
    switch (geometry) {
      case 'torus':
        return <torusGeometry args={[1, 0.3, 16, 32]} />;
      case 'icosahedron':
        return <icosahedronGeometry args={[1, 0]} />;
      case 'octahedron':
        return <octahedronGeometry args={[0.8, 0]} />;
      case 'torusKnot':
        return <torusKnotGeometry args={[0.7, 0.25, 64, 16]} />;
      case 'dodecahedron':
        return <dodecahedronGeometry args={[0.8, 0]} />;
    }
  }, [geometry]);

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={floatIntensity}>
      <mesh ref={meshRef} position={position}>
        {geo}
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
    </Float>
  );
}

// Small glowing particles
function Dots() {
  const count = 50;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#a855f7" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

const Scene3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#a855f7" />
        <pointLight position={[-10, -5, 5]} intensity={0.4} color="#3b82f6" />

        {/* Main torus - center left */}
        <FloatingShape
          position={[-3.5, 0.5, 0]}
          geometry="torus"
          color="#a855f7"
          speed={1.2}
          floatIntensity={1.5}
        />

        {/* Icosahedron - top right */}
        <FloatingShape
          position={[3.5, 1.5, -2]}
          geometry="icosahedron"
          color="#6366f1"
          speed={0.8}
          floatIntensity={2}
        />

        {/* Octahedron - bottom right */}
        <FloatingShape
          position={[2.5, -2, -1]}
          geometry="octahedron"
          color="#be185d"
          speed={1.5}
          floatIntensity={1}
        />

        {/* Torus knot - left */}
        <FloatingShape
          position={[-4, -1.5, -3]}
          geometry="torusKnot"
          color="#3b82f6"
          speed={0.6}
          floatIntensity={1.8}
        />

        {/* Dodecahedron - far right */}
        <FloatingShape
          position={[5, 0, -2]}
          geometry="dodecahedron"
          color="#a855f7"
          speed={1}
          floatIntensity={1.2}
        />

        {/* Floating dots */}
        <Dots />
      </Canvas>
    </div>
  );
};

export default Scene3D;
