// //* File này có chức năng xóa tất cả các file đang được chứa trong path "cypress/Data"
// const fs = require('fs');
// const path = require('path');

// const screenshotsFolder = path.join('cypress', 'Data');

// fs.readdir(screenshotsFolder, (err, files) => {
//   if (err) throw err;

//   files.forEach((file) => {
//     fs.unlink(path.join(screenshotsFolder, file), (err) => {
//       if (err) throw err;
//       console.log(`${file} was deleted`);
//     });
//   });
// });