import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { Planet } from "./Planet";

const HeroScene = ({ isMobile }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  // Stop rendering the 3D scene while the hero is scrolled out of view.
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIsVisible(entry.isIntersecting)
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      <Canvas
        dpr={[1, 1.5]}
        frameloop={isVisible ? "always" : "never"}
        camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
      >
        <ambientLight intensity={0.5} />
        <Float speed={0.5}>
          <Planet scale={isMobile ? 0.7 : 1} />
        </Float>
        <Environment resolution={256}>
          <group rotation={[-Math.PI / 3, 4, 1]}>
            <Lightformer
              form={"circle"}
              intensity={2}
              position={[0, 5, -9]}
              scale={10}
            />
            <Lightformer
              form={"circle"}
              intensity={2}
              position={[0, 3, 1]}
              scale={10}
            />
            <Lightformer
              form={"circle"}
              intensity={2}
              position={[-5, -1, -1]}
              scale={10}
            />
            <Lightformer
              form={"circle"}
              intensity={2}
              position={[10, 1, 0]}
              scale={16}
            />
          </group>
        </Environment>
      </Canvas>
    </div>
  );
};

export default HeroScene;
