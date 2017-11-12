var fs=require('fs')
var ans=undefined

function countString(callback) {
	fs.readFile(process.argv[2], function(err, data){
		if (err) {
			console.log("ERROR")
		} else {
			ans=data.toString().split(/\n/)
		}

		callback()
	})
}

function printCount(){
	console.log((ans.length)-1)
}

countString(printCount)