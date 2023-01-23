import { useEffect, useRef } from "react";

interface IEllipseState {
  boolX: boolean;
  posX: number;
  speedX: number;
  boolY: boolean;
  posY: number;
  speedY: number;
  rad: number;
  color: string;
}

const Canvas = ({ appRef }: { appRef: React.RefObject<HTMLDivElement> }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");

    let ellipseState = {
      boolX: false,
      posX: 130 * 1.5,
      speedX: Math.floor(Math.random() * (5 - 1 + 1) + 1),
      boolY: false,
      posY: 130 * 1.5,
      speedY: Math.floor(Math.random() * (5 - 1 + 1) + 1),
      rad: 130,
      color: "#3AC922",
    };
    let ellipseState2 = {
      boolX: false,
      posX: appRef.current?.clientWidth! - 130 * 1.5,
      speedX: Math.floor(Math.random() * (5 - 1 + 1) + 1),
      boolY: false,
      posY: 130 * 1.5,
      speedY: Math.floor(Math.random() * (5 - 1 + 1) + 1),
      rad: 130,
      color: "#B2F1DE",
    };
    let ellipseState3 = {
      boolX: false,
      posX: 130 * 1.5,
      speedX: Math.floor(Math.random() * (5 - 1 + 1) + 1),
      boolY: false,
      posY: appRef.current?.clientHeight! - 130 * 1.5,
      speedY: Math.floor(Math.random() * (5 - 1 + 1) + 1),
      rad: 130,
      color: "#B2F1DE",
    };
    let ellipseState4 = {
      boolX: false,
      posX: appRef.current?.clientWidth! - 130 * 1.5,
      speedX: Math.floor(Math.random() * (5 - 1 + 1) + 1),
      boolY: false,
      posY: appRef.current?.clientHeight! - 130 * 1.5,
      speedY: Math.floor(Math.random() * (5 - 1 + 1) + 1),
      rad: 130,
      color: "#3AC922",
    };
    let ellipsesArray = [
      ellipseState,
      ellipseState2,
      ellipseState3,
      ellipseState4,
    ];

    const setCanvasSize = () => {
      canvasRef.current!.width = appRef.current?.clientWidth!;
      canvasRef.current!.height = appRef.current?.clientHeight!;
    };

    const changeWay = (ellipseState: IEllipseState) => {
      if (ellipseState.posX > appRef.current!.clientWidth - ellipseState.rad) {
        ellipseState.posX -= 10;
        return;
      }
      if (ellipseState.posX - ellipseState.rad < 0) {
        ellipseState.posX += 10;
        return;
      }
      if (ellipseState.boolX) {
        ellipseState.posX += ellipseState.speedX;
      } else {
        ellipseState.posX -= ellipseState.speedX;
      }
      if (ellipseState.boolY) {
        ellipseState.posY -= ellipseState.speedY;
      } else {
        ellipseState.posY += ellipseState.speedY;
      }
      if (
        ellipseState.posX < ellipseState.rad ||
        ellipseState.posX > appRef.current?.clientWidth! - ellipseState.rad
      ) {
        ellipseState.boolX = !ellipseState.boolX;
      }
      if (ellipseState.posX < ellipseState.rad && !ellipseState.boolX) {
        ellipseState.boolX = false;
        ellipseState.speedX = Math.floor(Math.random() * (5 - 1 + 1) + 1);
        ellipseState.speedY = Math.floor(Math.random() * (5 - 1 + 1) + 1);
      }
      if (
        ellipseState.posX > appRef.current?.clientWidth! - ellipseState.rad &&
        ellipseState.boolX
      ) {
        ellipseState.boolX = true;
        ellipseState.speedX = Math.floor(Math.random() * (5 - 1 + 1) + 1);
        ellipseState.speedY = Math.floor(Math.random() * (5 - 1 + 1) + 1);
      }

      if (ellipseState.posY < ellipseState.rad && ellipseState.boolY) {
        ellipseState.boolY = false;
        ellipseState.speedX = Math.floor(Math.random() * (5 - 1 + 1) + 1);
        ellipseState.speedY = Math.floor(Math.random() * (5 - 1 + 1) + 1);
      }
      if (
        ellipseState.posY > appRef.current?.clientHeight! - ellipseState.rad &&
        !ellipseState.boolY
      ) {
        ellipseState.boolY = true;
        ellipseState.speedX = Math.floor(Math.random() * (5 - 1 + 1) + 1);
        ellipseState.speedY = Math.floor(Math.random() * (5 - 1 + 1) + 1);
      }
    };

    const drawEllipse = (item: IEllipseState) => {
      changeWay(item);
      ctx?.beginPath();
      ctx?.ellipse(
        item.posX,
        item.posY,
        item.rad,
        item.rad * 1.5,
        -20,
        0,
        Math.PI * 2
      );
      ctx!.fillStyle = item.color;
      ctx?.fill();
    };
    const drawCanvas = () => {
      ctx?.clearRect(0, 0, 10000, 10000);
      ctx!.filter = "blur(200px)";
      requestAnimationFrame(drawCanvas);
      ellipsesArray.forEach((item) => drawEllipse(item));
    };
    setCanvasSize();
    requestAnimationFrame(drawCanvas);

    window.addEventListener("resize", setCanvasSize);
    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);
  return <canvas ref={canvasRef}></canvas>;
};

export default Canvas;
