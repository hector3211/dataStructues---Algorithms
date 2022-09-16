function twoCrystallBalls(floors) {
  const jumps = Math.floor(Math.sqrt(floors.length));
  let i = jumps;
  for (; i < floors.length; i += jumps) {
    if (floors[i]) {
      console.log("break");
      break;
    }
  }
  i -= jumps;
  for (let j = 0; j < jumps && i < floors.length; j++, i++) {
    if (floors[i]) {
      return console.log(i);
    }
  }
  return -1;
}

let floors = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  true,
  true,
];
twoCrystallBalls(floors);
