// Validation function

function isValidNum(input){
    return typeof input === 'number' && !isNaN(input) && isFinite(input);
}


//Problem 1

function getFibonSeq(n){
	let arrFb = [0, 1];
	let k = 0;
    	for (let i = 2; arrFb[i - 1] + arrFb[i - 2]  <= n; i++) {
        	arrFb.push(arrFb[i - 1] + arrFb[i - 2]);
    	}
    	return arrFb;
}
function showFebSec(n){
	if (isValidNum(n) && n > 0) {
		alert(getFibonSeq(n));
	} else {
        alert('You have inputed invalid value for this problem. Be attentive!');
    	}
}
let numbP1 = 7;
showFebSec(numbP1);


//Problem 2
function numbersTill100(n){
	n = 0;
	arr = [];
	for (let i = 0; i <= 9; i++) {
		for (let j = 0; j <= 9; j++) {
			n = '' + i + j;
			if (n < 99) {
				arr.push(`"${n}", `);
           	} else {
				arr.push(`"${n}".`);
			}
    	}
    }
	let numTill100 = arr.join("");
	return numTill100;
}
let num = 0;
alert(numbersTill100(num));

//Problem 3
function DigsProdDivBySum(n){
	if (isValidNum(n)) {
		let resValue = n;
		let sum = 0;
		let prodOfDig = 1;
		if (n !== 0) {	
			if (n < 0) {
				n = n * (-1);
        	}
			while (n !== 0) {
				let lastDig = n%10;
				sum += lastDig;
				prodOfDig *= lastDig;
				n = (n - lastDig)/10;
    		}
			if ( prodOfDig%sum === 0) {
				return `Quotient is ${prodOfDig/sum}.`;
        	} else {
				return `Remainder is ${prodOfDig%sum}.`;
        	}
        } else {
			return 'Cannot calculate';
        }
	} else {
		return 'Invalid input value. Be attentive!';
	}
}
let n31 = 0;
alert(DigsProdDivBySum(n31));


//Problem 4
function getMaxMinNum(arr){
	let max = -Infinity;
	let min = Infinity;
	for (let i = 0; i < arr.length; i++) {
		if (isValidNum(arr[i])) {
			if (arr[i] > max) {
				max = arr[i];
            }
			if (min > arr[i]) {
				min = arr[i];
            }
        }
    }
	alert(`Max is ${max}, min is ${min}`); 
	let diffOfMaxMin = max - min;
	alert(diffOfMaxMin);
	alert(arr.includes(diffOfMaxMin));
}
let arr4 = [-1, -4, -43, -12];
getMaxMinNum(arr4);

//Problem 5
function getIndexOfSecondMax(arr){
	if (arr.length !== 0) {
		let max = -Infinity, secondMax;
		for (let i = 0; i < arr.length; i++) {
			if (isValidNum(arr[i])) {
				if (arr[i] > max){
					secondMax = max;
					max = arr[i];
				} else if (arr[i] < max && arr[i] > secondMax) {
					secondMax = arr[i];
        		}
			}	
		}
		return arr.indexOf(secondMax);
	} else {
		return 'Array is empty. Be attentive!';
	}
}
let arr5 = [0, -1, 0];
alert(getIndexOfSecondMax(arr5));

//Problem 6 

function checkArrJustNums(arr){
	for (let i = 0; i < arr.length; i++) {
		if (!isValidNum(arr[i])) {
			return false;
        }
    }
	return true;
}
function paddingRep(arr, pedAm, repeat){
	if (arr.length !==0 && checkArrJustNums(arr)) {		
		if (pedAm <= arr.length) {
			let arrBeg = arr.slice(0, pedAm);
			let arrEnd = arr.slice( -pedAm);
      		let arrPad = [];
			for (let i = 0; i < repeat; i++) {
				arrPad = arrPad.concat(arrBeg);
				arr = arr.concat(arrEnd);
      		}
			return arrPad.concat(arr);
		} else {
			return 'Invalid padding amount';	
		}
    } else {
		return 'Array is empty either contains not only numbers. Be attentive';
    }
}	
let arr6 = [1, 2, 3, 4];
let padAmount = 2;
let repeat6 = 1;
alert(paddingRep(arr6, padAmount, repeat6));

