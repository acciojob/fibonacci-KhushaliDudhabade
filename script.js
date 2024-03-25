let sum=0
function fibonacci(num) {
// your code here
	if(num==0){
		return 0
	}
	else if(num==1){
		return 1
	}
	else{
		sum=fibonacci(num-1)+fibonacci(num-2)
		return sum
	}
}
console.log(sum)
module.exports = fibonacci;
