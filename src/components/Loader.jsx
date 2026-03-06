import { Html, useProgress } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

const CanvasLoader = () => {
  const { progress } = useProgress();
  const [smoothProgress, setSmoothProgress] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const animate = () => {
      setSmoothProgress((prev) => {
        const target = Math.min(progress, 100);
        return prev + (target - prev) * 0.06;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(rafRef.current);
  }, [progress]);

  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const offset =
    circumference * (1 - smoothProgress / 100);

  return (
    <Html center>
      <div className="loader-container">
        <div className="loader-ring">
          <div className="loader-glow" />

          <svg width="90" height="90">
            <circle
              cx="45"
              cy="45"
              r={radius}
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="6"
              fill="none"
            />
            <circle
              cx="45"
              cy="45"
              r={radius}
              stroke="#4fd1c5"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
            />
          </svg>

          <span className="loader-text">
            {Math.round(smoothProgress)}%
          </span>
        </div>

        <p className="loader-label">Loading</p>
      </div>
    </Html>
  );
};

export default CanvasLoader;
