import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField({ count = 2000 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 50;
      p[i * 3 + 1] = (Math.random() - 0.5) * 50;
      p[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return p;
  }, [count]);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
      ref.current.rotation.x += 0.0005;
      
      // Follow mouse slightly
      ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, state.mouse.x * 2, 0.05);
      ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, state.mouse.y * 2, 0.05);
    }
  });

  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#6366f1"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function AnimatedSphere({ position, color, size, speed, distort }: { position: [number, number, number], color: string, size: number, speed: number, distort: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * speed) * 0.5;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={2} floatIntensity={2}>
      <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={speed}
          roughness={0.1}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Sphere>
    </Float>
  );
}

function CameraRig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 2, 15), 0.05);
    camera.lookAt(0, 0, 0);
  });
}

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 bg-[#02040a] pointer-events-none">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 15], fov: 55 }}>
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#6366f1" />
        
        <AnimatedSphere position={[4, 2, -2]} color="#00f2ff" size={1.2} speed={1.5} distort={0.4} />
        <AnimatedSphere position={[-4, -2, -1]} color="#8b5cf6" size={1.8} speed={1.2} distort={0.5} />
        <AnimatedSphere position={[0, 5, -8]} color="#10b981" size={0.8} speed={2} distort={0.3} />
        
        <ParticleField count={1500} />
        <CameraRig />
        
        <fog attach="fog" args={['#02040a', 5, 25]} />
      </Canvas>
    </div>
  );
}
