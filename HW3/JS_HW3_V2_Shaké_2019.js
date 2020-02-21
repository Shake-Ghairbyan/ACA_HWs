//Validation function

function isValidNum(input){
  return typeof input === 'number' && !isNaN(input) && isFinite(input);
}

//Problem 1
function replaceChar(str, arr){
	let res = str.split('');
	for (let i = 0, j = 0; i < res.length; i++) {
		if (res[i] === '_') {
			res[i] = arr[j];
			j++;
        	}
	}
	let redormedStr = res.join('');
	return redormedStr;
}
let inputStr = '_, we have a _.';
let inputArr = ['Houston', 'problem'];
alert(replaceChar(inputStr, inputArr));


//Problem 2 
		//version 1 
function sepAndOrderOddEvenNum(arr){
	let arrOdd = [];
	let arrEven = [];
	for (let i = 0; i < arr.length; i++) {
		if (isValidNum(arr[i])) {
			if (arr[i]%2 !== 0 ) {
				arrOdd.push(arr[i]);
        		} else {
				arrEven.push(arr[i]);
			}
        	}
    	}
	alert(arrOdd.concat(arrEven));
}
let arr2 = [8, 0, 1, 'hey', 12, 5 , true, '2', null, 7, 3];
sepAndOrderOddEvenNum(arr2);


		//version 2 

function sepAndOrderOddEvenNum(arr){
	let arrNew = [];
	for (let i = 0; i < arr.length; i++) {
		if (isValidNum(arr[i])) {
			if (arr[i]%2 !== 0 ) {
				arrNew.unshift(arr[i]);
        		} else {
				arrNew.push(arr[i]);
			}
        	}
    	}
	alert(arrNew);
}
let arr21 = [8, 0, 1, 'hey', 12, 5 , true, '2', null, 7, 3];
sepAndOrderOddEvenNum(arr21);

//Problem 3

function calcNumbStr(arr){
	let numCount = 0;
	let strCount = 0;
	for (let i = 0; i < arr.length; i++ ){
		if (isValidNum(arr[i])) {
			numCount++;
		} else if ( typeof arr[i] === 'string'){
			strCount++;
		}
    	}
	alert (`Numbers: ${numCount}, String: ${strCount}`)
}

let arr3 = [1, '10', 'hi', 2, 4];
calcNumbStr(arr3);

//Problem 4

function calcSumOfMaxMinStr(arr){
	let maxStr = 0;
	let minStr = Infinity;
	let sum = 0;
	if (arr.length !== 0) {
		for (let i = 0; i < arr.length; i++){
			if (typeof arr[i] === 'string'){
				if (maxStr < arr[i].length){
        				maxStr = arr[i].length;
				}
				if (minStr > arr[i].length){
					minStr = arr[i].length;
    				}
  			}
    	}
	sum = maxStr + minStr;
	alert(sum);
    	} else {
		alert('Array is empty. Make sure it contains elements.');
    	}
}
let arr4 = [];
calcSumOfMaxMinStr(arr4);


//Problem 5

function getSumOfItems(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++ ) {
		if (isValidNum(arr[i])) {
			sum = sum + arr[i];
        	}
	}
	return sum;
}
let arr = [1, 12, 4];
alert(getSumOfItems(arr));

//Problem 6 - estex vonc anem vor arrMult -um spacer dni aranqner@ elementneri ? 

function neighbNumMultipleAr(arr){
	let arrMult = [];
	let nextItem = 0;
	for (let i = 1; i < arr.length; i++) {
		if (isValidNum(arr[i-1]) && isValidNum(arr[i])) {
    		nextItem = arr[i-1] * arr[i];
			arrMult.push(nextItem);
    		}
    	}
	alert(arrMult);
}
let arr6 = [3, 7, 12, 5, 20, 0];
neighbNumMultipleAr(arr6);

