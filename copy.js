const fs = require('fs');
const src = 'C:/Users/ITD-L0182/.gemini/antigravity/scratch/banahaw-food-park/index.html';
const dest = 'C:/Users/ITD-L0182/Downloads/BFPT (3).html';
try {
  fs.copyFileSync(src, dest);
  console.log('Successfully copied index.html to BFPT (3).html! Size:', fs.statSync(dest).size);
} catch (e) {
  console.error('Copy failed:', e);
}

