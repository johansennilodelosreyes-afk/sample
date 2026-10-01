const fs = require('fs');

function inspectFile(filePath) {
  console.log('=== Inspecting:', filePath);
  if (!fs.existsSync(filePath)) {
    console.log('File does NOT exist!');
    return;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  console.log('Total characters:', content.length);
  console.log('Total lines:', content.split('\n').length);

  const babelStart = content.indexOf('<script type="text/babel">');
  console.log('Babel start index:', babelStart);
  
  const babelEnd = content.indexOf('</script>', babelStart);
  console.log('Babel end index (first after babelStart):', babelEnd);

  const lastBabelEnd = content.lastIndexOf('</script>');
  console.log('Last </script> index:', lastBabelEnd);
}

inspectFile('C:/Users/ITD-L0182/.gemini/antigravity/scratch/banahaw-food-park/index.html');
inspectFile('C:/Users/ITD-L0182/Downloads/BFPT (3).html');

