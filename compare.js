const fs = require('fs');
const f1 = 'C:/Users/ITD-L0182/.gemini/antigravity/scratch/banahaw-food-park/index.html';
const f2 = 'C:/Users/ITD-L0182/Downloads/BFPT (3).html';

const lines1 = fs.readFileSync(f1, 'utf8').split('\n');
const lines2 = fs.readFileSync(f2, 'utf8').split('\n');

console.log('L1:', lines1.length, 'L2:', lines2.length);

let count = 0;
for (let i = 0; i < Math.max(lines1.length, lines2.length); i++) {
  if (lines1[i] !== lines2[i]) {
    console.log(`Line ${i+1}:`);
    console.log('  1:', lines1[i]);
    console.log('  2:', lines2[i]);
    count++;
    if (count > 20) break;
  }
}

