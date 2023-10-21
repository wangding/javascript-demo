#!/usr/bin/env node

const me = {
  name:   'wangding',
  email:  '408542507@qq.com',
  mobile: '13582027613'
};

for(let key in me) {
  console.log(`${key}:\t ${me[key]}`);
}
