const ModuleVar = require('./module');

let Ans = ModuleVar.sum(10,5);
let MinAns = ModuleVar.min(20, 5);
let MultiAns = ModuleVar.multi(2,5);
let DivAns = ModuleVar.div(50, 2.5);

console.log(`${Ans}`);
console.log(`${MinAns}`);
console.log(`${MultiAns}`);
console.log(`${DivAns}`);