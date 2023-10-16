#!/usr/bin/env node

function formatDate(str) {
  let [year, month, day] = str.split('-');
  month = month.padStart(2, '0');
  day = day.padStart(2, '0');
  return [year, month, day].join('-');
}

function main() {
  const date = [
    '2022-4-1',
    '2022-4-22',
    '2022-11-11'
  ];

  console.log(date.map(formatDate));
}

main();
