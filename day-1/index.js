 import fs from 'fs';

const lines = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n');

function partOne(){
   const values = lines
   .map((line) => {
    let first = line.split('').find((v) => Number.isInteger(Number(v)));
    let last = line.split('').findLast((v) => Number.isInteger(Number(v)));
    return Number(first + last);
   });

   return values.reduce((s, v) => s + v);
}

console.log(partOne('./input.txt'));


// function partOne(){
//     const values = lines
//     .forEach((line) => {
//      let first = line.split('').find((v) => !Number.isNaN(Number(v)));
//      let last = line.split('').findLast((v) => !Number.isNaN(Number(v)));
//      return Number(first + last);
//     });
 
//     console.log(values);
//  }

