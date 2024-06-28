// var fs = require('fs'); 

// const files = fs.readdirSync('./tickets/');
// const jsons = [];
// for (const file of files) {
//   if (file.endsWith('.json')) {
//     jsons.push(file);
//   }
// }
// console.log(files + '\n' + jsons);

// //searchFile('./', 'example.txt');

// // fs.appendFile('textfiles\\mynewfile1.txt', 'Hello content!', function (err) {
// //     if (err) throw err;
// //     console.log('Saved!');
// //   }); 

// function searchFile(dir, fileName) {
//   // read the contents of the directory
//   const files = fs.readdirSync(dir);

//   // search through the files
//   for (const file of files) {
//     // build the full path of the file
//     const filePath = path.join(dir, file);

//     // get the file stats
//     const fileStat = fs.statSync(filePath);

//     // if the file is a directory, recursively search the directory
//     if (fileStat.isDirectory()) {
//       searchFile(filePath, fileName);
//     } else if (file.endsWith(fileName)) {
//       // if the file is a match, print it
//       console.log(filePath);
//     }
//   }
// }