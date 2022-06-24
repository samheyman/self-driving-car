import React from "react";
import { Car } from "./car";
import { Road } from "./road";

interface CanvasProps {
  width: number;
}

const RoadCanvas = ({ width = 200 }: CanvasProps) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  let ctx: CanvasRenderingContext2D | null;
  let car: Car;
  let road: Road;

  const animate = () => {
    car.update();
    ctx!.clearRect(0, 0, width, window.innerHeight);
    ctx?.save();
    ctx?.translate(0, -car.y + window.innerHeight * 0.7);
    road.draw(ctx);
    car.draw(ctx);
    ctx?.restore();

    requestAnimationFrame(animate);
  };

  React.useEffect(() => {
    ctx = canvasRef.current ? canvasRef.current.getContext("2d") : null;
    road = new Road(width / 2, width * 0.9);
    car = new Car(100, 100, 30, 50);
    animate();
  }, []);

  return (
    <canvas
      id="roadCanvas"
      ref={canvasRef}
      width={width}
      height={window.innerHeight}
    />
  );
};

export default RoadCanvas;
