var testArray = process.argv
var ans = 0

for (i=2;i<testArray.length;i++) {
	ans += Number(process.argv[i])
}

console.log(ans)