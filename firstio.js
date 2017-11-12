var fs=require('fs')
var testString=fs.readFileSync(process.argv[2]).toString().split(/\n/)

console.log((testString.length)-1)

/*var test=fs.readFileSync('test.txt').toString().split(/\n/)

console.log(test.length)*/

