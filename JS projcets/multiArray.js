function multiplyByLength(arr) {
	var multArr = []
	for(i = 0; i < arr.length; i++){
		multArr.push(arr[i] * arr.length);
	}
	return multArr
}