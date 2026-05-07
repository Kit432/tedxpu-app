// Drawings
export type SensoriumDrawing = {
  id: string;
  viewBox: string;
  width: number;
  height: number;
  artSrc: string;
  targetPaths: string[];
};

export const sensoriumDrawings: SensoriumDrawing[] = [
  {
    id: "oval",
    viewBox: "0 0 606 877",
    width: 606,
    height: 877,
    artSrc: "/drawings/eye.svg",
    targetPaths: [
      "M125.52 857.32C97.81 843.82 77.87 822.79 71.93 816.43C66.11 810.19 45.86 787.71 29.41 747.18C-7.72 655.71 12.36 565.68 17.87 540.98C20.88 527.49 25.4 508.98 36.76 472.67C45.43 444.94 54.11 417.22 63.31 389.66C72.08 363.38 81.75 336.52 100.18 315.83C108.83 306.12 118.92 297.33 140.98 283.69C203.61 244.96 261.28 229.32 270.78 226.81C330.49 211.08 360.34 203.22 394.74 216.32C403.12 219.51 426.49 229.54 457.08 267.45C470.44 284.01 508.39 337.42 526.84 431.25C547.71 537.35 516 646.34 478.56 747.78C474.09 759.88 469.45 772.13 461.77 782.5C455.7 790.69 446.71 799.51 432.2 808.23C371.55 844.68 274.12 859.02 274.12 859.02C199.85 869.95 161.97 875.06 125.53 857.31L125.52 857.32Z",
      "M598.48 89.23C579.92 119.73 561.36 150.23 542.8 180.72",
      "M318.81 7.5C319.18 43.2 319.56 78.9 319.94 114.6"
    ],
  },

];

// Drawing Score
type Point = {
  x: number;
  y: number;
};

type PathScoreDebug = {
  pathIndex: number;
  pathLength: number;
  coveredPoints: number;
  totalPoints: number;
  coverage: number;
};

export type DrawingScoreResult = {
  score: number;
  succeeded: boolean;
  totalCoverage: number;
  averageDistance: number;
  pathCoverages: PathScoreDebug[];
};

const POINT_SPACING = 8;
const COVER_RADIUS = 28;
const SUCCESS_COVERAGE = 0.72;
const MAX_AVERAGE_DISTANCE = 45;

function distance(a: Point, b: Point) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function distanceToSegment(point: Point, a: Point, b: Point) {
  const abx = b.x - a.x;
  const aby = b.y - a.y;
  const apx = point.x - a.x;
  const apy = point.y - a.y;

  const abLengthSquared = abx * abx + aby * aby || 1;

  const t = Math.max(
    0,
    Math.min(1, (apx * abx + apy * aby) / abLengthSquared)
  );

  const closest = {
    x: a.x + abx * t,
    y: a.y + aby * t,
  };

  return distance(point, closest);
}

function samplePathByLength(svgPath: SVGPathElement): Point[] {
  const length = svgPath.getTotalLength();
  const sampleCount = Math.max(8, Math.ceil(length / POINT_SPACING));

  return Array.from({ length: sampleCount }, (_, index) => {
    const p = svgPath.getPointAtLength((index / (sampleCount - 1)) * length);

    return {
      x: p.x,
      y: p.y,
    };
  });
}

function getAverageDistanceToTarget(
  userPoints: Point[],
  targetPoints: Point[]
) {
  if (!userPoints.length || targetPoints.length < 2) return Infinity;

  const totalDistance = userPoints.reduce((sum, point) => {
    let closest = Infinity;

    for (let i = 0; i < targetPoints.length - 1; i++) {
      const segmentDistance = distanceToSegment(
        point,
        targetPoints[i],
        targetPoints[i + 1]
      );

      if (segmentDistance < closest) {
        closest = segmentDistance;
      }
    }

    return sum + closest;
  }, 0);

  return totalDistance / userPoints.length;
}

export function calculateDrawingResult(
  userPoints: Point[],
  targetPaths: SVGPathElement[]
): DrawingScoreResult {
  if (!targetPaths.length || userPoints.length < 12) {
    return {
      score: 0,
      succeeded: false,
      totalCoverage: 0,
      averageDistance: Infinity,
      pathCoverages: [],
    };
  }

  const sampledPaths = targetPaths.map((path, pathIndex) => {
    const points = samplePathByLength(path);
    const pathLength = path.getTotalLength();

    const coveredPoints = points.filter((targetPoint) =>
      userPoints.some((userPoint) => distance(userPoint, targetPoint) <= COVER_RADIUS)
    ).length;

    const coverage = coveredPoints / points.length;

    return {
      pathIndex,
      pathLength,
      points,
      coveredPoints,
      totalPoints: points.length,
      coverage,
    };
  });

  const allTargetPoints = sampledPaths.flatMap((path) => path.points);

  const totalCoveredPoints = sampledPaths.reduce(
    (sum, path) => sum + path.coveredPoints,
    0
  );

  const totalTargetPoints = sampledPaths.reduce(
    (sum, path) => sum + path.totalPoints,
    0
  );

  const totalCoverage = totalCoveredPoints / totalTargetPoints;

  const averageDistance = getAverageDistanceToTarget(userPoints, allTargetPoints);

  const accuracyMultiplier = Math.max(
    0,
    Math.min(1, 1 - averageDistance / MAX_AVERAGE_DISTANCE)
  );

  const score = Math.round(totalCoverage * accuracyMultiplier * 100);

  const succeeded =
    totalCoverage >= SUCCESS_COVERAGE && averageDistance <= MAX_AVERAGE_DISTANCE;

  return {
    score,
    succeeded,
    totalCoverage,
    averageDistance,
    pathCoverages: sampledPaths.map((path) => ({
      pathIndex: path.pathIndex,
      pathLength: path.pathLength,
      coveredPoints: path.coveredPoints,
      totalPoints: path.totalPoints,
      coverage: path.coverage,
    })),
  };
}