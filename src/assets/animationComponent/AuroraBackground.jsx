import React, { useRef, useEffect } from "react";

const AuroraBackground = ({ children }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext("2d");

    let width = canvas.width = container.offsetWidth;
    let height = canvas.height = container.offsetHeight;
    let gradientX = 0;

    const colors = ["#639CD9", "#5454C5", "#342056", "#220E24"];

    const drawAurora = () => {
      ctx.clearRect(0, 0, width, height);
      const gradient = ctx.createLinearGradient(
        Math.sin(gradientX) * width,
        0,
        width,
        height
      );

      colors.forEach((color, index) => {
        gradient.addColorStop(index / (colors.length - 1), color);
      });

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };

    const animate = () => {
      gradientX += 0.01; // Adjust speed here
      drawAurora();
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = container.offsetWidth;
      height = canvas.height = container.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "auto",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />
      <div className="pt-28 pb-12" style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default AuroraBackground;
