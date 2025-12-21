import { Html, useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

const STEPS = [
  "Loading assets",
  "Initializing renderer",
  "Checking internet",
  "Preparing scene",
  "Finalizing",
];

const CanvasLoader = ({ onDone }) => {
  const { progress } = useProgress();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (current < STEPS.length - 1) {
      const t = setTimeout(() => setCurrent(c => c + 1), 700);
      return () => clearTimeout(t);
    }
  }, [current]);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(onDone, 500);
    }
  }, [progress, onDone]);

  return (
    <Html center>
      <div style={{
        fontFamily: "Segoe UI, monospace",
        color: "#fff",
        fontSize: 13,
        minWidth: 260
      }}>
        {STEPS.map((s, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              opacity: i <= current ? 1 : 0.4,
              marginBottom: 6
            }}
          >
            <span>{i === current ? "> " : ""}{s}</span>
            <span style={{ color: i < current ? "#22c55e" : "#9ca3af" }}>
              {i < current ? "OK" : "..."}
            </span>
          </div>
        ))}
        <div style={{ marginTop: 10, fontSize: 11, color: "#9ca3af" }}>
          Progress: {progress.toFixed(0)}%
        </div>
      </div>
    </Html>
  );
};

export default CanvasLoader;
