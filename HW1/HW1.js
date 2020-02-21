// P1
function validateNumbers(num1) {
    if (typeof +num1 === "number" && !isNaN(num1) && num1!=='') {
        return true;
    } else {
        return false;
    }
}
function divisibility(num1, num2) {
	if(validateNumbers(num1) && validateNumbers(num2)) {
    		num1 < 0 ? num1 *= -1: num1;
			num2 < 0 ? num2 *= -1: num2;
			if (num1%num2 == 0 || num2%num1 == 0) {
			alert(1);
			} else {
    			alert(0);
	}
  } else {
			alert('You have inputed the WRONG value.')
  }
  }    
let num1 = prompt('Please, enter the first number.');
let num2 = prompt('Please, enter the second number.');
divisibility(num1, num2);

// P2 
function calcThirdAngle(angle1, angle2) {
	if(!isNaN(angle1) && !isNaN(angle2) 
			&& angle1 != 0 && angle2 != 0 
			&& angle1 != null && angle2 !=null 
			&& angle1 != undefined &&  angle2 != undefined 
			&& angle1 != '' && angle2 != '' 
			&& angle1 != false && angle2 != false
			&& angle1 > 0 && angle2 > 0) {
		let angle3;			
		if (angle1 + angle2 < 180) {
			angle3 = 180 - angle1 - angle2;
			alert(angle3);
        } else {
	alert('Ooops! This type of triangle cannot exist, you did something wrong.');
    }
    } else {
	alert('You have inputed the wrong values. Angles can be positive numbers only!')
    }
}
let angle1 = +prompt('Please, enter the first angle value.');
let angle2 = +prompt('Please, enter the second angle value.');
calcThirdAngle(angle1, angle2);	

// P3
function nNnNnn(n) {
	if (n<0 && isNaN(n)) {
		return;
	}
	let count = 0;
	const value = n;
	while (n>0) {
		let lastDigit = n%10;
		n = (n - lastDigit)/10;
		count++; 
		} 
		let exp = 1; 
		for ( i =0; i <  count; i++) {
		exp = exp * 10;
		}		
		let newValue = value * exp + value;
		let sum = value + newValue + newValue * exp +value; 
		alert(sum);
}

let n = +prompt('enter the value');
nNnNnn(n);


//P4
function lastFirstDig(numP4) {
	if (numP4 <0 && isNaN(numP4)) {
		return;
	}
	let lastDigit = numP4%10;
		if (lastDigit===0) {
		alert(numP4);
        } else {
		let count = 0;
		const newFirstDig = lastDigit; 
		const valueOfNumP4 = numP4;
		while (numP4>0) {
			let lastDigit = numP4%10;
			numP4 = (numP4 - lastDigit)/10;
			count++; 
			} 
			let exp = 1; 
			for ( i =1; i <  count; i++) {
			exp = exp * 10;
			}		
			let withinDig = (valueOfNumP4-newFirstDig)/10;
			let newNumP4 = newFirstDig* exp + withinDig
			alert(newNumP4);
}
}

let numP4 = +prompt('enter the value');
lastFirstDig(numP4);


// P5
function validateNumbers(num1P5) {
    if (num1P5!== null && num1P5!== false && num1P5!== undefined && !isNaN(num1P5) && num1P5!=='' ) {
        return true
    } else {
        return false
    }
}
function calcTheAvgOfNumbers(num1P5, num2P5, num3P5, num4P5, num5P5) {
    if (validateNumbers(num1P5) && validateNumbers(num2P5) && validateNumbers(num3P5) &&
	validateNumbers(num4P5) && validateNumbers(num5P5)) {
        let averageOfNums = (num1P5 + num2P5 + num3P5 + num4P5 + num5P5) / 5;
        return averageOfNums;
    } else {
        return 'Be attentive. You have inputed the WRONG value';
    }
}
let num1P5 = +prompt("Please, input the first number!");
let num2P5 = +prompt("Please, input the second number!");
let num3P5 = +prompt("Please, input the third number!");
let num4P5 = +prompt("Please, input the fourth number!");
let num5P5 = +prompt("Please, input the fifth number!");
alert(calcTheAvgOfNumbers(num1P5, num2P5, num3P5, num4P5, num5P5));

//P6
function validateNumbers(numP6) {
    if (typeof +numP6 === "number" && !isNaN(numP6) && numP6!=='') {
        return true;
    } else {
        return false;
    }
}
function multipleOf3_5_7(numP6) {
    if (validateNumbers(numP6)) {
        if (numP6%3 === 0 && numP6%5 === 0 && numP6%7 === 0) {
            alert(`${numP6} is multiple of 3, 5 and 7.`)
        } else if (numP6 % 3 === 0 && numP6 % 5 === 0) {
            alert(`${numP6} is multiple of 3 and 5.`);
        } else if (numP6 % 3 === 0 && numP6 % 7 === 0) {
            alert(`${numP6} is multiple of 3 and 7.`);
        } else if (numP6 % 5 === 0 && numP6 % 7 === 0) {
            alert(`${numP6} is multiple of 5 and 7.`);
        } else if (numP6 % 3 === 0 && numP6 % 5 !== 0 && numP6 % 7 !== 0) {
            alert(`${numP6} is multiple of 3.`);
        } else if (numP6 % 3 !== 0 && numP6 % 5 === 0 && numP6 % 7 !== 0) {
            alert(`${numP6} is multiple of 5.`);
        } else if (numP6 % 3 !== 0 && numP6 % 5 !== 0 && numP6 % 7 === 0) {
            alert(`${numP6} is multiple of 7.`);
        } else if (numP6 % 3 !== 0 && numP6 % 5 !== 0 && numP6 % 7 !== 0) {
            alert(`${numP6} is not a multiple of 3, 5 and 7 .`);
        }
    } else {
				alert('You have inputed the Wrong value.');
		}
}
let numP6 = prompt('Please, enter the number');
multipleOf3_5_7(numP6);

// P7

function validateVariables(age, ageValue) {
    if ((typeof +age === "number" && !isNaN(age) && age!==''&& age > 0) &&
	 (typeof ageValue === "string" && ageValue!== '')) {
        return true;
    } else {
        return false;
    }
}
function ageLabel(age,ageValue) {
	if (validateVariables(age,ageValue)) {
		if ((age >= 1 && age <= 12 && ageValue == 'months') || 
			(age > 0 && age <= 1 && ageValue === 'years')) {
   		 	alert('baby');
		} if ((age > 12 && age <= 24 && ageValue === 'months') ||
			 (age >= 1 && age <= 2 && ageValue == 'years')) {
    			alert('toddler');
		} if ((age > 24 && age <= 144 && ageValue === 'months') || 
				(age >= 3 && age <= 12 && ageValue == 'years')) {
    			alert('child');
		} if ((age > 144 && age <= 204 && ageValue === 'months') ||
				 (age >= 13 && age <= 17 && ageValue == 'years')) {
   			 alert('adult');
		} if ((age > 204 && ageValue === 'months') || 
				(age >= 18 && ageValue == 'years')) {
    		alert('adult');
	}
    } else {
		alert('Surprisingly, you entered a wrong value.')
}
}
let age  = prompt('Please type your age (only number).')
let ageValue = prompt('Please. describe here whether you typed your age in months or in years in the previous window ','months/ years');
ageLabel(age,ageValue);


//P8

function validateNumbers(num1P8) {
    if (typeof +num1P8 === "number" && !isNaN(num1P8) && num1P8!=='') {
        return true;
    } else {
        return false;
    }
}	
function checkSignOfExpr(num1P8,num2P8,num3P8) {
	if (validateNumbers(num1P8) && validateNumbers(num2P8) && validateNumbers(num3P8)) {
		 if ((num1P8 > 0 && num2P8 > 0 && num3P8 > 0) ||
			 (num1P8 < 0 && num2P8 < 0 && num3P8 > 0) ||
			 (num1P8 < 0 && num2P8 > 0 && num3P8 < 0) ||
			 (num1P8 > 0 && num2P8 < 0 && num3P8 < 0)) {
    			alert('+');			
         } if ((num1P8 < 0 && num2P8 > 0 && num3P8 > 0) ||
			 (num1P8 > 0 && num2P8 < 0 && num3P8 > 0) ||
			 (num1P8 > 0 && num2P8 > 0 && num3P8 < 0) || 
			 (num1P8 > 0 && num2P8 > 0 && num3P8 < 0) ||
			 (num1P8 < 0 && num2P8 < 0 && num3P8 < 0)) {
    			alert('-');
		} if (num1P8 == 0 || num2P8 == 0 || num3P8 == 0) {
    			alert('unsigned');
        }
    } else {
		alert('Something was wrong, maybe your input ? :)');
	}
} 
let num1P8 = prompt('Please, enter the first number.');
let num2P8 = prompt('Please, enter the second number.');
let num3P8 = prompt('Please, enter the third number.');
checkSignOfExpr(num1P8,num2P8,num3P8);

//P9 


function validateNumbers(numberP9, digit) {
    if ((typeof +numberP9 === "number" && !isNaN(numberP9) && numberP9!=='') &&
	(typeof +digit === "number" && !isNaN(digit) && numberP9!=='' && digit > 0)) {
        return true;
    } else {
        return false;
    }
}
function checkDigitWithinANumber(numberP9, digit) {
    if ( validateNumbers(numberP9) && validateNumbers(digit)) {
        numberP9 < 0 ? numberP9 *= -1 : numberP9;

        while (numberP9 > 0) {
            let lastDigit = numberP9 % 10;
            if (lastDigit == digit) {
                return "Yes";
            } else {
                numberP9 = Math.floor(numberP9 / 10);
            }
        }
    } 
	return "No";
}
let digit = prompt('Please, enter the digit.');
let numberP9 = prompt('Please, enter the number you want to be checked.');
alert(checkDigitWithinANumber(numberP9, digit));


//P 10 

function validateNumbers(numberP10) {
    if (typeof +numberP10 === "number" && !isNaN(numberP10) && numberP10!=='') {
        return true;
    } else {
        return false;
    }
}
function reverseNumber(numberP10) {
    if (validateNumbers(numberP10)) {
        let numberP10Signed = numberP10;
		numberP10 < 0 ? numberP10 *= -1 : numberP10;
        let revNum = 0;
        while (numberP10) {
            let lastDigit = numberP10 % 10;
            numberP10 = Math.floor(numberP10/10);
            revNum = revNum * 10 + lastDigit;
        }
		numberP10Signed < 0 ? revNum *= -1: revNum;       
		return revNum;
    }
}

let numberP10 = prompt('Please, enter the number.');
alert(reverseNumber(numberP10));
