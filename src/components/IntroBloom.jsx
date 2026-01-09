import { useEffect, useState } from "react";
import data from "../data/content.json";
import "./introBloom.css";

export default function IntroBloom() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 2600);
    return () => clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <div className="bloom-stage">
      <svg className="flower" viewBox="0 0 200 200">
        <g fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2">
          <path d="M100 20 C120 60, 160 80, 100 100" />
          <path d="M100 20 C80 60, 40 80, 100 100" />
          <path d="M100 180 C120 140, 160 120, 100 100" />
          <path d="M100 180 C80 140, 40 120, 100 100" />
          <circle cx="100" cy="100" r="10" />
        </g>
      </svg>

      <h1 className="bloom-text">{data.name}</h1>
    </div>
  );
}
