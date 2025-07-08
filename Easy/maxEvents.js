function maxEvents(events) {
  const set = new Set();

  const sortedEvents = events.sort((a, b) => a[1] - b[1]);
  //   sortedEvents.map((a) => console.log(a));
  for ([start, end] of sortedEvents) {
    for (let day = start; day <= end; day++) {
      //   console.log(day);
      if (!set.has(day)) {
        set.add(day);
        break;
      }
    }
  }
  return set.size;
}

function maxEvents(events) {
  let count = 0;
  let currentDay = 1;

  const sortedEvents = events.sort((a, b) => a[1] - b[1]);
  //   sortedEvents.map((a) => console.log(a));

  for ([start, end] of sortedEvents) {
    // console.log(start);
    if (currentDay < start) currentDay = start;

    if (currentDay <= end) {
      currentDay++;
      count++;
    }
  }
  return count;
}

console.log(
  maxEvents([
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);

console.log(
  maxEvents([
    [1, 2],
    [1, 2],
    [3, 4],
  ])
);

console.log(
  maxEvents([
    [1, 3],
    [1, 2],
    [2, 2],
  ])
);

console.log(
  maxEvents([
    [1, 5],
    [1, 5],
    [1, 5],
    [2, 3],
    [2, 3],
  ])
);
