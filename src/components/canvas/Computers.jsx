import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/DESIGNE.glb");

  const mesh = useRef();

  return (
    <mesh ref={mesh}>
      <hemisphereLight intensity={0.3} groundColor="white" />

      {/* Spot Light 1 */}
      <spotLight
        color={"#ffd}"} // Red color
        position={[-5, -2.5, 4.5]}
        angle={Math.PI / 4}
        penumbra={0.5}
    intensity={.3}
        castShadow
        shadow-mapSize={1024}
      />
      <mesh position={[-5, -2.5, 4.5]}>
        <sphereGeometry args={[0.1, 16, 16]} />
    <meshBasicMaterial color={"#ffd"} />
      </mesh>

      {/* Spot Light 2 */}
      <spotLight
        color={"#ffd}"} // Green color
        position={[-5, -2.5, -4.5]}
        angle={Math.PI / 4}
        penumbra={0.5}
        intensity={.3}
        castShadow
        shadow-mapSize={1024}
      />
      <mesh position={[-5, -2.5, -4.5]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color={"#ffd}"} />
      </mesh>

      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 4.7 : 7.2}
        position={isMobile ? [0, -0.6, 0] : [0, -2, 0]}
        rotation={isMobile ? [-0.02, 0, 0.00] : [-0.02, 0, 0.0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [-49, 10, 20], fov: 20 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom
          enablePan
          enableRotate
          maxDistance={30}
          minDistance={10}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
        <ambientLight intensity={0.4} />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;