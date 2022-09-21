function foo(n) {
  if (n === 1) {
    console.log("this is N:" + n);
    return 1;
  }
  console.log("this is N:" + n);
  out = n + foo(n - 1);
  console.log("\n this is Out:" + out);
  return out;
}

foo(5);

// MazeSolver
const direction = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
// Base case (if things go wrong)
function walk(maze, wall, currently, end, seen, path) {
  // if we go off map
  if (
    currently.x < 0 ||
    currently.x >= maze[0].length ||
    currently.y < 0 ||
    currently.y >= maze.length
  ) {
    return false;
  }
  // if we hit a wall
  if (maze[currently.y][currently.x] === wall) {
    return false;
  }
  // if were at the end
  if (currently.x === end.x && currently.y === end.y) {
    path.push(end);
    return true;
  }
  // if been in the current point before
  if (seen[currently.y][currently.x]) {
    return false;
  }
  // three steps tp recurse
  // pre
  seen[currently.y][currently.x] = true;
  path.push(currently);
  // recurse
  for (let i = 0; i < direction.length; ++i) {
    const [x, y] = dir[i];
    if (
      walk(
        maze,
        wall,
        {
          x: currently.x + x,
          y: currently.y + y,
        },
        end,
        seen,
        path
      )
    ) {
      return true;
    }
  }
  // post
  path.pop();

  return false;
}

function solve(maze, wall, start, end) {
  const seen = [];
  const path = [];
  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }
  walk(maze, wall, start, end, seen, path);
  return path;
}
