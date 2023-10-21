#!/usr/bin/env node

// echo hello; sleep 3s; echo world;
console.log('hello');

setTimeout(()=>console.log('world'), 3000);
