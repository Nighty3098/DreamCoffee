import React, { useEffect, useState } from "react";

export const PerformanceMonitor = () => {
  const [fps, setFps] = useState(0);
  
  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    
    const countFrames = (time) => {
      frameCount++;
      
      if (time - lastTime > 1000) {
        setFps(Math.round(frameCount * 1000 / (time - lastTime)));
        frameCount = 0;
        lastTime = time;
      }
      
      requestAnimationFrame(countFrames);
    };
    
    const frameId = requestAnimationFrame(countFrames);
    
    return () => cancelAnimationFrame(frameId);
  }, []);
  
  // Отображать только в режиме разработки
  if (process.env.NODE_ENV !== "development") return null;
  
  return (
    <div style={{
      position: "fixed",
      bottom: 10,
      left: 10,
      background: "rgba(0,0,0,0.7)",
      color: fps > 50 ? "green" : fps > 30 ? "orange" : "red",
      padding: "5px 10px",
      borderRadius: 5,
      fontSize: 14,
      zIndex: 9999
    }}>
      {fps} FPS
    </div>
  );
}; 
