const scjs = require('./statecjs');

console.log(scjs.getState());
scjs.setState(1);
console.log(scjs.getState());
scjs.setState(2);
scjs.reset();
console.log(scjs.getState());