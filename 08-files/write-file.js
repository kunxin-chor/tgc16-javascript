const fs = require('fs');

// writeFileSync takes two parameter
// 1st parameter - name of the file
// 2nd parameter - the string to write
// will overwrite the old data of the file 
// if it already exists 
fs.writeFileSync('output.txt', 'she sells seashell');