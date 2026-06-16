import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  // Float32Array length must be a multiple of 3 (x, y, z per point).
  // 5000 is NOT divisible by 3, which left a trailing point with no
  // z-value (undefined) baked into the buffer. Three.js then read that
  // undefined as NaN while computing the bounding sphere for frustum
  // culling, which spammed "Computed radius is NaN" on every frame and
  // could crash the WebGL context. 1667 * 3 = 5001 fixes the alignment
  // while keeping essentially the same star density.
  const [sphere] = useState(() => random.inSphere(new Float32Array(1667 * 3), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
