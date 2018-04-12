const Blockchain = require('./blockchain');

const bc = new Blockchain();

let timeToMine = Date.now();
let blocksToMine = 10;
for (let j=0; j<blocksToMine; j++) {
  console.log(bc.addBlock(`Foo ${j}`).toString());
}
console.log(`Seconds to mine ${blocksToMine} blocks: `, (Date.now()-timeToMine) / 1000);