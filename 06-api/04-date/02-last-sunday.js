#!/usr/bin/env node

const log = console.log;

function lastSunday(date) {
  const currentDate    = new Date(date ?? Date.now()),
        currentDay     = currentDate.getDay(),
        daysToSubtract = currentDay === 0 ? 7 : currentDay;
  currentDate.setDate(currentDate.getDate() - daysToSubtract);
  const [y, m, d] = currentDate.toLocaleDateString().split('/');
  return `${y}年${m}月${d.padStart(2, '0')}日 星期日`;
}

for(let i=1; i<32; i++) {
  const date = `2023-12-${String(i).padStart(2, '0')}`;
  log({date, sunday: lastSunday(date)});
}
