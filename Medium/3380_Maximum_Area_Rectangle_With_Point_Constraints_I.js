/**
 * @param {number[][]} points
 * @return {number}
 */
var maxRectangleArea = function (points) {
  const set = new Set();
  let maxArea = -1;

  for ([x, y] of points) {
    set.add(`${x}:${y}`);
  }

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const [x1, y1] = points[i];
      const [x2, y2] = points[j];

      if (
        x1 !== x2 &&
        y1 !== y2 &&
        set.has(`${x1}:${y2}`) &&
        set.has(`${x2}:${y1}`)
      ) {
        const corners = new Set([
          `${x1}:${y1}`,
          `${x1}:${y2}`,
          `${x2}:${y1}`,
          `${x2}:${y2}`,
        ]);

        const minX = Math.min(x1, x2);
        const maxX = Math.max(x1, x2);
        const minY = Math.min(y1, y2);
        const maxY = Math.max(y1, y2);

        let fits = true;

        for ([x, y] of points) {
          if (corners.has(`${x}:${y}`)) continue;

          const insideTheRectangle =
            x > minX && x < maxX && y > minY && y < maxY;

          const topBottomBorder =
            (y === minY || y === maxY) && x > minX && x < maxX;

          const leftRightBorder =
            (x === minX || x === maxX) && y > minY && y < maxY;

          if (insideTheRectangle || topBottomBorder || leftRightBorder) {
            fits = false;
            break;
          }
        }

        if (fits) {
          // const area = Math.abs(x1 - x2) * Math.abs(y1 - y2);
          const area = (maxX - minX) * (maxY - minY);
          maxArea = Math.max(maxArea, area);
        }
      }
    }
  }
  return maxArea;
};

console.log(
  maxRectangleArea([
    [1, 1],
    [1, 3],
    [3, 1],
    [3, 3],
  ])
);

console.log(
  maxRectangleArea([
    [1, 1],
    [1, 3],
    [3, 1],
    [3, 3],
    [2, 2],
  ])
);

console.log(
  maxRectangleArea([
    [1, 1],
    [1, 3],
    [3, 1],
    [3, 3],
    [1, 2],
    [3, 2],
  ])
);

console.log(
  maxRectangleArea([
    [96, 44],
    [23, 72],
    [96, 72],
    [23, 44],
    [65, 44],
  ])
);
