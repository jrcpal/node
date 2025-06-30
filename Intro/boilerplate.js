 
const fs = require('fs');
//console.log(fs)
const folderName = process.argv[2] || 'Project'

// fs.mkdir('Cats', { recursive: true }, (err) => {
//     console.log(`Within the callback function`)
//     if (err) throw err
//     console.log('Directory created successfully')
// })

// Using synchronous method to create a directory
// this guarantees that the directory is created before the next line of code runs
try {
  fs.mkdirSync(folderName, { recursive: true });

  fs.writeFileSync(`${folderName}/index.html`, "");
  fs.writeFileSync(`${folderName}/app.js`, "");
  fs.writeFileSync(`${folderName}/app.css`, "");
} catch (err) {
  console.error(`Error creating directory: ${err}`);
}

console.log(`This is after the callback function`)