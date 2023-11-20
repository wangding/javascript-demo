#!/usr/bin/env node

// A ∪ B
function union(a, b) {
  return new Set([...a, ...b]);
}

// A - B
function except(a, b) {
  return new Set([...a].filter(e => !b.has(e)));
}

// A ∩ B
function intersect(a, b) {
  return new Set([...a].filter(e => b.has(e)));
}

function main() {
  const log  = console.log;
  const setA = new Set([1, 2, 3, 4, 5]),
        setB = new Set([3, 4, 5, 6, 7]);

  log('  A:', setA);
  log('  B:', setB);
  log();
  log('A∩B:', intersect(setA, setB));
  log('A∪B:', union(setA, setB));
  log('A-B:', except(setA, setB));
  log('B-A:', except(setB, setA));
}

main();
