const io = require('console-read-write');
const s = ['-1/2', '1/2'];

async function main() {
    let n = await io.ask('Enter n:');
    let l = [];
    
    for (let i = 0; i < n; i++) {
        l.push(i);
    }
    let m = [];
    let last =  n - 1;
    let first = l[last] * (-1);

    for (let j = first; j <= last; j++) {
        m.push(j);
    }
    //logs
    console.log('----');
    console.log(`n: ${n}`);
    console.log(`l: ${l}`);
    console.log(`m: ${m}`);
    console.log(`s: ${s}`);
    console.log('----');
}
main();