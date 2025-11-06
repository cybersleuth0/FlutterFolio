import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import { Float, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

function FlutterLogo3D() {
  const group = useRef<THREE.Group>(null!);

  // Two bars forming a stylized Flutter logo
  return (
    <group ref={group} position={[0.12, 0.05, 0.15]} rotation={[0, -0.2, 0]}>
      {/* main diagonal */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <boxGeometry args={[0.6, 0.12, 0.04]} />
        <meshStandardMaterial color="#46D1FD" metalness={0.2} roughness={0.35} />
      </mesh>
      {/* small diagonal */}
      <mesh position={[0.22, -0.22, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <boxGeometry args={[0.32, 0.1, 0.04]} />
        <meshStandardMaterial color="#00B7F1" metalness={0.2} roughness={0.35} />
      </mesh>
    </group>
  );
}

function PhoneBody() {
  return (
    <group>
      {/* phone body */}
      <RoundedBox args={[1.2, 2.3, 0.18]} radius={0.2} smoothness={8}>
        <meshStandardMaterial color="#0e1113" metalness={0.6} roughness={0.4} />
      </RoundedBox>

      {/* screen */}
      <RoundedBox args={[1.06, 2.06, 0.04]} radius={0.16} smoothness={8} position={[0, 0, 0.12]}>
        <meshStandardMaterial color="#0b0f12" emissive="#0b0f12" emissiveIntensity={0.9} roughness={0.6} />
      </RoundedBox>

      {/* speaker notch */}
      <RoundedBox args={[0.28, 0.06, 0.025]} radius={0.02} position={[0, 1.0, 0.14]}>
        <meshStandardMaterial color="#1a1f23" roughness={0.8} />
      </RoundedBox>

      {/* side button */}
      <RoundedBox args={[0.5, 0.06, 0.06]} radius={0.02} position={[0.66, 0.3, 0]} rotation={[0, Math.PI / 2, 0]}>
        <meshStandardMaterial color="#1a1f23" roughness={0.8} />
      </RoundedBox>
    </group>
  );
}

function SceneInner({ mouse }: { mouse: { x: number; y: number } }) {
  const group = useRef<THREE.Group>(null!);
  const target = useMemo(() => new THREE.Euler(), []);

  useFrame((_, dt) => {
    // map mouse to small rotations
    const rx = THREE.MathUtils.lerp(group.current.rotation.x, THREE.MathUtils.degToRad((mouse.y - 0.5) * 10), dt * 3);
    const ry = THREE.MathUtils.lerp(group.current.rotation.y, THREE.MathUtils.degToRad((mouse.x - 0.5) * 20), dt * 3);
    target.set(rx, ry, 0);
    group.current.rotation.copy(target);
  });

  return (
    <group ref={group}>
      <directionalLight position={[3, 4, 2]} intensity={1.0} />
      <ambientLight intensity={0.5} />

      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.6}>
        <group position={[0, 0, 0]}>
          <PhoneBody />
          <FlutterLogo3D />
        </group>
      </Float>

      {/* subtle ground reflection */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.4, 0]}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#0a0d10" roughness={0.95} metalness={0.05} />
      </mesh>
    </group>
  );
}

export default function PhoneScene() {
  const mouse = useRef({ x: 0.5, y: 0.5 });

  return (
    <div
      className="relative h-64 md:h-80 lg:h-96 w-full rounded-xl border bg-gradient-to-b from-cyan-500/10 to-purple-600/10"
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        mouse.current.x = (e.clientX - rect.left) / rect.width;
        mouse.current.y = (e.clientY - rect.top) / rect.height;
      }}
      onMouseLeave={() => {
        mouse.current.x = 0.5;
        mouse.current.y = 0.5;
      }}
      aria-label="3D phone with Flutter logo"
      role="img"
    >
      {/* glow accents */}
      <div className="pointer-events-none absolute -inset-6 -z-10 bg-[radial-gradient(500px_120px_at_30%_10%,theme(colors.cyan.500/.25),transparent),radial-gradient(400px_120px_at_80%_0%,theme(colors.violet.500/.2),transparent)] blur-2xl" />
    </div>
  );
}
