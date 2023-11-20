const log = console.log;

function printPrototypeChain(obj, objName='obj') {
  const pts = [objName];
  function proto(obj) {
    const pt = Object.getPrototypeOf(obj);
    if(pt) {
      pts.push(pt.constructor.name);
      return proto(pt);
    } else {
      return null;
    }
  }
  proto(obj);
  log(pts.join(' --> '));
}

function deepLog(obj) {
  let depth = 1;
  function proto(obj) {
    if(Object.getPrototypeOf(obj)) {
      obj.proto = Object.getPrototypeOf(obj);
      depth++;
      return proto(obj.proto);
    } else {
      return null;
    }
  }
  proto(obj);
  console.dir(obj, {showHidden:true, depth: depth-1});
}

function dir(obj, depth=0) {
  console.dir(obj, {showHidden:true, depth});
}

module.exports = {
  log,
  dir,
  deepLog,
  printPrototypeChain,
};
