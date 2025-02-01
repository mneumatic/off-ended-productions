const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const directoryPath = path.join(__dirname, './');

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.error('Unable to scan directory:', err);
  }
  files.forEach(file => {
    if (path.extname(file) === '.js') {
      exec(`node ${path.join(directoryPath, file)}`, (err, stdout, stderr) => {
        if (err) {
          console.error(`Error executing file ${file}:`, err);
          return;
        }
        console.log(`Output of ${file}:\n${stdout}`);
        if (stderr) {
          console.error(`Errors in ${file}:\n${stderr}`);
        }
      });
    }
  });
});


