const path = require('path');
const fs = require('fs');
console.log(path.basename(__dirname));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

//fs.mkdir("D:\\DD66",{},function (err) {
  //  if (err) throw err;
    //console.log('Directory created')
//})

//fs.writeFile("D:\\DD66\\test.txt","Hello",function(err) {
  //  if (err) throw err;
    //console.log("file created and writted")

//})
fs.readFile("D:\\DD66\\test.txt","utf8",function(err, data) {
    if (err) throw err;
    console.log(data)

})