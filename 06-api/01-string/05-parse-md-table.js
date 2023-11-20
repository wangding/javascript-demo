#!/usr/bin/env node

function row2obj(row) {
  const [, name, age, sex] = row.split('|');
  return {
    name: name.trim(),
    age: age.trim(),
    sex: sex.trim(),
  };
}

function main() {
  const data = ''
  + '| name  | age | sex |\n'
  + '| ---   | --- | --- |\n'
  + '| 张三   | 20 |  女 |\n'
  + '| 李四   | 23 |  男 |\n'
  + '| 王五   | 26 |  男 |';

  console.log(data);
  let rows = data.split('\n');
  rows = rows.slice(2, rows.length);
  const students = rows.map(row2obj);
  console.table(students);
}

main();
