#!/usr/bin/env node

function genPassword() {
  const length = Math.round(Math.random()*20) || 1;
  let password = '';
  for(let i=0; i<length; i++) {
    const code = Math.round(Math.random()*93) + 33;
    password += String.fromCharCode(code);
  }
  return password;
}

function getStength(length) {
  if(length < 5)  return '密码强度：弱';
  if(length < 10) return '密码强度：中';
  return '密码强度：强';
}

function main() {
  const count = process.argv[2] ?? 10;
  const pwds  = [];

  for(let i=0; i<count; i++) {
    const pwd = genPassword();
    pwds.push({
      password: pwd,
      length:   pwd.length,
      strength: getStength(pwd.length),
    });
  }

  console.table(pwds);
}

main();
