import React from "react";
import { Car } from "./car";

interface CanvasProps {
  width: number;
}

const RoadCanvas = ({ width = 200 }: CanvasProps) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  let ctx: CanvasRenderingContext2D | null;
  let car: Car;
  const [height, setHeight] = React.useState<number>(window.innerHeight);

  const animate = () => {
    car.update();
    ctx!.clearRect(0, 0, width, window.innerHeight);
    car.draw(ctx);
    requestAnimationFrame(animate);
  };

  React.useEffect(() => {
    ctx = canvasRef.current ? canvasRef.current.getContext("2d") : null;
    car = new Car(100, 100, 30, 50);
    animate();
  }, []);

  return (
    <canvas id="roadCanvas" ref={canvasRef} width={width} height={height} />
  );
};

export default RoadCanvas;
