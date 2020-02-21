// Problem 1
		// 1st version - convert @ntacqum a arum 
function validateNumbers(parandzem){
    if(parandzem === null || !parandzem.trim() || isNaN(parandzem)){
        alert(`invalid input of ${parandzem}`);
        return false;
    } else {
        return true;
    }
}
function ascendingOrder(num1P1,num2P1,num3P1){
    if (validateNumbers(num1P1) && validateNumbers(num2P1) && validateNumbers(num3P1)) {
        if (+num1P1 >= +num2P1 && +num2P1 >= +num3P1) {
            alert(` ${num3P1}, ${num2P1}, ${num1P1}`);
        } else if (+num1P1 >= +num3P1 && +num3P1 >= +num2P1) {
            alert(`${num2P1}, ${num3P1}, ${num1P1}`);
        } else if (+num2P1 >= +num1P1 && +num1P1 >= +num3P1) {
            alert(`${num3P1}, ${num1P1}, ${num2P1}`);
        } else if (+num2P1 >= +num3P1 && +num3P1 >= +num1P1) {
            alert(`${num1P1}, ${num3P1}, ${num2P1}`)
        } else if (+num3P1 >= +num1P1 && +num1P1 >= +num2P1) {
            alert(`${num2P1}, ${num1P1}, ${num3P1}`);
        } else {
            alert(`${num1P1}, ${num2P1}, ${num3P1}`)
        }
    } else {
        alert('You have done something wrong');
    }
}
let num1P1 = prompt('Please, enter the first number.');
let num2P1 = prompt ('Please, enter the second number.');
let num3P1 = prompt ('Please, enter the third number');
ascendingOrder(num1P1,num2P1,num3P1);

		// 2nd version - convert skzbum a arvum

function validateNumbers(parandzem){
	if(parandzem === null || !parandzem.trim() || isNaN(parandzem)){
		alert(`invalid input of ${parandzem}`);
		return false;
  	} else {
		return true;
	}
}
function ascendingOrder(num1P1,num2P1,num3P1,min){
	if (validateNumbers(num1P1) && validateNumbers(num2P1) && validateNumbers(num3P1)) {
		num1P1 = +num1P1;
		num2P1 = +num2P1;
		num3P1 = +num3P1;
 		if (num1P1 >= num2P1 && num2P1 >= num3P1) {
			alert(` ${num3P1}, ${num2P1}, ${num1P1}`);
		} else if (num1P1 >= num3P1 && num3P1 >= num2P1) {
			alert(`${num2P1}, ${num3P1}, ${num1P1}`);
		} else if (num2P1 >= num1P1 && num1P1 >= num3P1) {
			alert(`${num3P1}, ${num1P1}, ${num2P1}`);
		} else if (num2P1 >= num3P1 && num3P1 >= num1P1) {
			alert(`${num1P1}, ${num3P1}, ${num2P1}`)
		} else if (num3P1 >= num1P1 && num1P1 >= num2P1) {
			alert(`${num2P1}, ${num1P1}, ${num3P1}`);
		} else {
			alert(`${num1P1}, ${num2P1}, ${num3P1}`)
		} 
	} else {
		alert('You have done something wrong');
  	}
}
let num1P1 = prompt('Please, enter the first number.');
let num2P1 = prompt ('Please, enter the second number.');
let num3P1 = prompt ('Please, enter the third number');
ascendingOrder(num1P1,num2P1,num3P1);


// Problem 2 

function validateNumbers(parandzem){
	if(parandzem === null || !parandzem.trim() || isNaN(parandzem)){
		alert(`invalid input of ${parandzem}`);
		return false;
    } else { 
		return true;
	}
}
function avgOfExams(gradeExam1,gradeExam2,gradeExam3) {
	if (validateNumbers(gradeExam1) && validateNumbers(gradeExam2)
		 && validateNumbers(gradeExam3)) {
		let avgExamGrade = (+gradeExam1 + +gradeExam2 + +gradeExam3)/3;
		return avgExamGrade;
    } else {
		alert('Something is wrong. Ensure to enter numbers!')
	}
}

function checkExamFailPass(gradeExam1,gradeExam2,gradeExam3){
	if (validateNumbers(gradeExam1) && validateNumbers(gradeExam2)
		 && validateNumbers(gradeExam3)) {
		if ((gradeExam1 >= 40 && gradeExam2 >= 40 && gradeExam3 >= 40) ||
			(gradeExam1 < 40 && gradeExam2 >= 40 && gradeExam3 >= 40 && avgOfExams(gradeExam1,gradeExam2,gradeExam3) >= 50) ||
			(gradeExam2 < 40 && gradeExam1 >= 40 && gradeExam3 >= 40 && avgOfExams(gradeExam1,gradeExam2,gradeExam3) >= 50) ||
			(gradeExam3 < 40 && gradeExam1 >= 40 && gradeExam2 >= 40 && avgOfExams(gradeExam1,gradeExam2,gradeExam3) >= 50)) {
			alert('Passed');
		} else {
			alert('Not passed');
	}
    } else { 
		alert('Ensure that inputed values are numbers!');
	}
}

let gradeExam1 = prompt('Please, enter the grade of the first exam.');
let gradeExam2 = prompt('Please, enter the grade of the second exam.');
let gradeExam3 = prompt('Please, enter the grade of the third exam.');
checkExamFailPass(gradeExam1,gradeExam2,gradeExam3);
			

// Problem 3 
function validateNumbers(parandzem){
	if(parandzem === null || !parandzem.trim() || isNaN(parandzem)){
		alert(`invalid input of ${parandzem}`);
		return false;
    } else {
		return true;
	}
}

function solveQuadEquat(a,b,c){
	if (validateNumbers(a) && a != 0 &&  validateNumbers(b) && validateNumbers(c)){
		a = +a;
		b = +b;
		c = +c;
		let root1 = (-b - Math.sqrt(Math.pow(b,2) - 4*a*c)) / (a*2);
		let root2 = (-b + Math.sqrt(Math.pow(b,2) - 4*a*c)) / (a*2);
		if ((Math.pow(b,2) - 4*a*c) > 0) {
			alert(`Solutions are ${root1} and ${root2}.`);// karanq grenq -b/2a, bayc tarberutyun chka, mek a D = 0 => no difference between root1 and root2 - root1=root2;
		} else if ((Math.pow(b,2) - 4*a*c) === 0) { 
			alert(`Solution is ${root1}.`);
		} else {
			alert('Solution does not exists');
        }
    } else {
		alert('Enter valid constants.');
	} 
}
let a = prompt('Enter the value for "a".');
let b = prompt('Enter the value for "b".');
let c = prompt('Enter the value for "c".');
solveQuadEquat(a,b,c);

//Problem 4
var n = +prompt();
var i = 0;
var j = 0;
if (n % 2 === 0 && !Math.floor(n/10)) {
	i += 1;
	}
if (n % 3 === 0 && n % 10 === 1) {
	j += 1;
	}

//Problem 5
function validateNumbers(parandzem) {
	if(parandzem === null || !parandzem.trim() || isNaN(parandzem) || parandzem <= 0 ){
		alert(`invalid input of ${parandzem}`);
		return false;
    } else {
		parandzem = +parandzem;
		return parandzem;
	}
}

function areaOfAnObject(objectType) {
		if (objectType === 'rectangle') {
			let lengthRec = prompt('Please, insert the value for length of the rectangle'); 
			let breadth = prompt('Please, insert the value for breadth of the rectangle');
         	if (validateNumbers(lengthRec) && validateNumbers(breadth)) {
				let square = validateNumbers(breadth) * validateNumbers(lengthRec);
				alert(`Square of the ${objectType} is ${square}`);
			}
       		} else if (objectType === 'triangle') {
			let height = prompt('Please, insert the value for height of the triangle');
			let base = prompt('Pleawse, insert the value for base of the triangle');
			if (validateNumbers(height) && validateNumbers(base)) {
				let square = (validateNumbers(height) * validateNumbers(base))/2;
				alert(`Square of the ${objectType} is ${square}`);
			}
    		} else {
			alert('wrong input for geometrical object!');
    	}      
}
let objectType = prompt('Please, insert name of the geometrical object by choosing one of the options.','rectangle/triangle');
areaOfAnObject(objectType);

// Problem 6

function validateNumbers(parandzem){
	if(parandzem === null || !parandzem.trim() || isNaN(parandzem)){
		alert(`invalid input of ${parandzem}`);
		return false;
    } else {
		return true;
	}
}

function calcDiffOfMaxMin(numberP6){
	if (validateNumbers(numberP6)) {
		if (numberP6 < 0) {
			numberP6 *= -1;
            }
		let lastDigit = numberP6%10;
		let max = lastDigit;
		let min = lastDigit;
		while (numberP6 > 0) {
			let lastDigit = numberP6%10;
			numberP6 = (numberP6 - lastDigit)/10;
			if (lastDigit > max){
				max = lastDigit;
			}
			if (lastDigit < min) {
				min = lastDigit;
			}
		} 
		let diffOfMAxMin = max - min;
		alert(diffOfMAxMin);
    }
}
let numberP6 = prompt('Please insert the number to be checked.');
calcDiffOfMaxMin(numberP6);

 