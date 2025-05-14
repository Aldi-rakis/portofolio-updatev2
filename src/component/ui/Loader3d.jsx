// src/components/Loader.jsx
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
        <p className="mt-2 text-sm">{progress.toFixed(0)}% loading</p>
      </div>
    </Html>
  );
};

export default Loader;
