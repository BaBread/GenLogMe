const fs = require('fs');
const path = require('path');

function writeSVG(folderPath, fileName, svgString) {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const filePath = path.join(folderPath, fileName);

  fs.writeFile(filePath, svgString, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Generated', filePath);
    }
  });
}

module.exports = { writeSVG };