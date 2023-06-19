let fs = require('fs');

fs.writeFile('myFile.txt','This is node fs',function(){
    console.log('File Created')
})