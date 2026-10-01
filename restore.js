const fs = require('fs');

const logFile = 'C:\\Users\\ITD-L0182\\.gemini\\antigravity\\brain\\ea2ea975-a390-4296-9081-768c83f2a04b\\.system_generated\\logs\\transcript_full.jsonl';
const targetFile = 'C:\\Users\\ITD-L0182\\Downloads\\BFPT (3).html';

const lines = fs.readFileSync(logFile, 'utf8').split('\n');

let step2Text = '', step4Text = '', step6Text = '';

for (const line of lines) {
  if (!line.trim()) continue;
  try {
    const obj = JSON.parse(line);
    if (obj.step_index === 2 && obj.content) {
      step2Text = obj.content;
    } else if (obj.step_index === 4 && obj.content) {
      step4Text = obj.content;
    } else if (obj.step_index === 6 && obj.content) {
      step6Text = obj.content;
    }
  } catch (e) {}
}

function parseChunk(text) {
  const fileLines = [];
  const lines = text.split('\n');
  for (const l of lines) {
    const m = l.match(/^(\d+):\s(.*)$/);
    if (m) {
      fileLines.push({ num: parseInt(m[1], 10), code: m[2] });
    }
  }
  return fileLines;
}

const c1 = parseChunk(step2Text);
const c2 = parseChunk(step4Text);
const c3 = parseChunk(step6Text);

const allMap = new Map();
[...c1, ...c2, ...c3].forEach(item => {
  allMap.set(item.num, item.code);
});

const sortedNums = Array.from(allMap.keys()).sort((a, b) => a - b);
console.log('Total extracted lines:', sortedNums.length, 'Min line:', sortedNums[0], 'Max line:', sortedNums[sortedNums.length - 1]);

const finalLines = [];
for (let i = 1; i <= sortedNums[sortedNums.length - 1]; i++) {
  if (allMap.has(i)) {
    finalLines.push(allMap.get(i));
  } else {
    console.error('Missing line:', i);
  }
}

fs.writeFileSync(targetFile, finalLines.join('\n'), 'utf8');
console.log('Restored original BFPT (3).html successfully! Size:', fs.statSync(targetFile).size);
