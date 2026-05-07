"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { sensoriumDrawings, calculateDrawingResult } from "@/lib/drawing-game";

type Point = {
  x: number;
  y: number;
};

const SUCCESS_THRESHOLD = 70;
const STOP_DELAY_MS = 900;
const SUCCESS_ANIMATION_MS = 1400;
const FAIL_RESET_MS = 500;

export function DrawingGame() {
  const [drawingIndex, setDrawingIndex] = useState(0);
  const [strokes, setStrokes] = useState<Point[][]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailing, setIsFailing] = useState(false);
  const [showStars, setShowStars] = useState(false);

  const hiddenPathRefs = useRef<SVGPathElement[]>([]);
  const boardRef = useRef<HTMLDivElement | null>(null);
  const stopTimerRef = useRef<number | null>(null);
  const activeStrokeIndexRef = useRef<number | null>(null);
  const strokesRef = useRef<Point[][]>([]);

  const currentDrawing = sensoriumDrawings[drawingIndex];

  function clearStopTimer() {
    if (stopTimerRef.current !== null) {
      window.clearTimeout(stopTimerRef.current);
      stopTimerRef.current = null;
    }
  }

  function resetDrawingVisualState() {
    setIsSuccess(false);
    setIsFailing(false);
    setShowStars(false);
  }

  function resetDrawing() {
    clearStopTimer();
    hiddenPathRefs.current = [];
    activeStrokeIndexRef.current = null;
    strokesRef.current = [];

    setStrokes([]);
    setIsDrawing(false);
    resetDrawingVisualState();
  }

  function nextDrawing() {
    clearStopTimer();
    hiddenPathRefs.current = [];
    activeStrokeIndexRef.current = null;
    strokesRef.current = [];

    setDrawingIndex((prev) => (prev + 1) % sensoriumDrawings.length);
    setStrokes([]);
    setIsDrawing(false);
    resetDrawingVisualState();
  }

  useEffect(() => {
    resetDrawing();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawingIndex]);

  useEffect(() => {
    return () => {
      clearStopTimer();
    };
  }, []);

  function getPointerPosition(event: React.PointerEvent<HTMLDivElement>) {
    const rect = boardRef.current?.getBoundingClientRect();

    if (!rect) {
      return { x: 0, y: 0 };
    }

    return {
      x: ((event.clientX - rect.left) / rect.width) * currentDrawing.width,
      y: ((event.clientY - rect.top) / rect.height) * currentDrawing.height,
    };
  }

  function startStroke(event: React.PointerEvent<HTMLDivElement>) {
    clearStopTimer();
    resetDrawingVisualState();

    const point = getPointerPosition(event);

    setIsDrawing(true);

    const nextStrokes = [...strokesRef.current, [point]];
    strokesRef.current = nextStrokes;
    activeStrokeIndexRef.current = nextStrokes.length - 1;

    setStrokes(nextStrokes);
  }

  function appendPoint(event: React.PointerEvent<HTMLDivElement>) {
    if (!isDrawing) return;

    const point = getPointerPosition(event);
    const strokeIndex = activeStrokeIndexRef.current;

    if (strokeIndex === null) return;

    const nextStrokes = strokesRef.current.map((stroke, index) => {
      if (index !== strokeIndex) return stroke;
      return [...stroke, point];
    });

    strokesRef.current = nextStrokes;
    setStrokes(nextStrokes);
  }

  function evaluateDrawing() {
    const allPoints = strokesRef.current.flat();

    console.log("[DrawingGame] Evaluating drawing", {
      drawingId: currentDrawing.id,
      viewBox: currentDrawing.viewBox,
      width: currentDrawing.width,
      height: currentDrawing.height,
      strokesCount: strokesRef.current.length,
      pointsCount: allPoints.length,
      targetPathsCount: hiddenPathRefs.current.length,
      successThreshold: SUCCESS_THRESHOLD,
      firstUserPoint: allPoints[0],
      lastUserPoint: allPoints[allPoints.length - 1],
    });

    if (allPoints.length < 12) {
      console.log("[DrawingGame] Failed: not enough points", {
        pointsCount: allPoints.length,
      });
      return;
    }

    if (hiddenPathRefs.current.length === 0) {
      console.log("[DrawingGame] Failed: no target paths found");
      return;
    }

    const result = calculateDrawingResult(allPoints, hiddenPathRefs.current);

    console.log("[DrawingGame] Score result:", {
      drawingId: currentDrawing.id,
      score: result.score,
      succeeded: result.succeeded,
      totalCoverage: `${Math.round(result.totalCoverage * 100)}%`,
      averageDistance: result.averageDistance,
      pathCoverages: result.pathCoverages.map((path) => ({
        pathIndex: path.pathIndex,
        coverage: `${Math.round(path.coverage * 100)}%`,
        pathLength: Math.round(path.pathLength),
      })),
    });

    if (result.succeeded) {
      setIsSuccess(true);
      setShowStars(true);

      window.setTimeout(() => {
        nextDrawing();
      }, SUCCESS_ANIMATION_MS);
    } else {
      setIsFailing(true);

      window.setTimeout(() => {
        resetDrawing();
      }, FAIL_RESET_MS);
    }
  }

  function stopStrokeAndScheduleCheck() {
    setIsDrawing(false);
    activeStrokeIndexRef.current = null;

    clearStopTimer();
    stopTimerRef.current = window.setTimeout(() => {
      evaluateDrawing();
    }, STOP_DELAY_MS);
  }

  const strokePaths = useMemo(() => {
    return strokes
      .filter((stroke) => stroke.length > 0)
      .map((stroke) =>
        stroke
          .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
          .join(" ")
      );
  }, [strokes]);

  return (
    <section className="relative flex min-h-0 flex-1 items-center justify-center px-5 py-3">
      <div
        ref={boardRef}
        className={`relative w-full max-w-[200px] touch-none select-none rounded-[2rem] bg-white ${
          isFailing ? "animate-drawing-fail" : ""
        } ${isSuccess ? "scale-[1.02]" : ""}`}
        style={{
          aspectRatio: `${currentDrawing.width} / ${currentDrawing.height}`,
        }}
        onPointerDown={(event) => {
          event.currentTarget.setPointerCapture(event.pointerId);
          startStroke(event);
        }}
        onPointerMove={appendPoint}
        onPointerUp={stopStrokeAndScheduleCheck}
        onPointerCancel={stopStrokeAndScheduleCheck}
      >
        {/* Hidden scoring paths only */}
        <svg
          viewBox={currentDrawing.viewBox}
          className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
        >
          {currentDrawing.targetPaths.map((path, index) => (
            <path
              key={`hidden-${index}`}
              ref={(element) => {
                if (element) {
                  hiddenPathRefs.current[index] = element;
                }
              }}
              d={path}
              fill="none"
              stroke="transparent"
              strokeWidth="1"
            />
          ))}
        </svg>

        {/* Real artwork from Figma */}
        <img
          src={currentDrawing.artSrc}
          alt=""
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 z-10 h-full w-full object-contain transition duration-500 ${
            isSuccess ? "scale-[1.03]" : "scale-100"
          }`}
        />

        {/* User strokes */}
        <svg
          viewBox={currentDrawing.viewBox}
          className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-visible"
        >
          {strokePaths.map((path, index) => (
            <path
              key={`stroke-${index}`}
              d={path}
              fill="none"
              stroke="#111111"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        </svg>

        {/* Success stars */}
        {showStars && (
          <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden">
            {[
              { left: "16%", top: "22%", delay: "0ms" },
              { left: "74%", top: "18%", delay: "120ms" },
              { left: "28%", top: "66%", delay: "220ms" },
              { left: "80%", top: "60%", delay: "320ms" },
              { left: "52%", top: "30%", delay: "180ms" },
            ].map((star, index) => (
              <span
                key={index}
                className="absolute text-2xl animate-star-burst"
                style={{
                  left: star.left,
                  top: star.top,
                  animationDelay: star.delay,
                }}
              >
                ✦
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}