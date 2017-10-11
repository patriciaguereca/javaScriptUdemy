/*
var name = 'Patty';
console.log(name);

var lastName = 'Guereca';
console.log(lastName);

var age = 22;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

// lecture variable 2
/*
var name = 'pat';
var age = 22;
console.log(name + ' ' + age);
var job, isMarried;
console.log(job);
job = 'teacher';
isMarried = false;

console.log(name + ' ' + age + ' ' + job + ' ' + isMarried);
age = '27';
console.log(age);
var lastName = prompt('what is your last name?');
console.log(lastName);
*/

/*
var now = 2017;
var birthYear = now - 22;

console.log(birthYear);

var agePat = 22;
var ageEmi = 23;

ageEmi = agePat = (3 + 5) * 4 - 6;

agePat++;

console.log(ageEmi + ' ' + agePat);
*/

// if/else statements
/*
var name = 'Patty';
var age = 22;
var isMarried = 'no';
/// === is the comparison operator (is married equal to yes)
if (isMarried === 'yes') {
    console.log(name + ' is married!');
} else {
    console.log(name + ' not married but could be engagged!');
}

isMarried = true;
*/
/*
if(isMarried) {
    console.log('YES!');
} else {
    console.log('NO!');
}
*/
/*
if(isMarried){
    console.log('YES');
}
// comparison operator to use, traditionally 
if (23 === '23') {
    console.log('Something to print...');
}
//section 2 lecture 13: boolean logic and switch
var age = 20;

if (age < 20) {
    console.log('Pat is a teenager');
} else if (age >= 20 && age < 30) {
          console.log('Pat is a young woman.') 
           }
else {
    console.log('Pat is a woman');
}
*/
//switch statement instead of doing else if else if else if
/*
var job = 'developer';
job = prompt('What does Pat do?');
switch (job) {
    case 'developer':
        console.log('Pat is a developer.');
        break;
    case 'social media creator':
        console.log('Pat is a social media creator.');
        break;
    case 'assistant':
        console.log('Pat is an assistant at AXA.');
        break;
    default:
        console.log('Pat does something else...');
        break;
}
*/
//Challenge, game.
/*
var heightOne = 167.74;
var heightTwo = 160.02;
var ageOne = 21;
var ageTwo = 23;

var friendOneScore = heightOne + (ageOne * 5);
var friendTwoScore = heightTwo + (ageTwo * 5);

if (friendOneScore < friendTwoScore) {
    console.log('Friend Two has won! ' + friendTwoScore)
}else if (friendOneScore > friendTwoScore) {
    console.log('Friend One has won! ' + friendOneScore)
} else {
    console.log('DRAW! ' + friendOneScore + ' ' + friendOneScore);
}
*/

//EXTRA - CHALLENGE 1
/*
var heightOne = 167.74;
var heightTwo = 160.02;
var heightThree = 177.03;

var ageOne = 21;
var ageTwo = 11;
var ageThree = 45;

var friendOneScore = heightOne + (ageOne * 5);
var friendTwoScore = heightTwo + (ageTwo * 5);
var friendThreeScore = heightThree + (ageThree * 5);

if (friendOneScore > friendTwoScore && 
    friendOneScore > friendThreeScore) {
    console.log('Friend One has won! ' + friendOneScore);
}else if (friendTwoScore > friendOneScore && friendTwoScore > friendThreeScore) {
    console.log('Friend Two has won! ' + friendTwoScore);
}else if (friendThreeScore > friendOneScore && friendThreeScore > friendTwoScore) {
    console.log('Friend Three has won! ' + friendThreeScore);
} else {
    console.log('DRAW! ' + friendOneScore + ' ' + friendOneScore
               + ' ' + friendThreeScore);
}
*/
// functions in JS
//functions are containers and arguments are being passed to it
//functions recieve input and return something else, do not repeat yourself so you use functions
// calculate the age of the person by knowing their year
/*
function calculateAge(yearOfBirth) {
    var age = 2017 - yearOfBirth;
    return age; // because you want to return the age
}
var agePatty = calculateAge(1995);
var ageEmmitt = calculateAge(1994);
var ageLils = calculateAge(1996);
console.log(agePatty + ' ' + ageEmmitt + ' ' + ageLils);

function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if(retirement >= 0) {
        console.log(name + ' retires in ' +
                   retirement + ' years.');
    } else {
        console.log(name + ' is already retired.')
    }
}
yearsUntilRetirement('Patty', 1995);
yearsUntilRetirement('Emmitt', 1994);
yearsUntilRetirement('Mom', 1946);
*/
// Lecture - statement and expressions
/*
function someFun(par) {
    //code 
}
//function expressions
var someFun = function(par) {
    //code
}
// expressions
 3 + 4;
var x = 3;
// statements 
if (x === 5) {
    //do something
}
*/
// Arrays
var names = ['Patty', 'Emmitt', 'Karen'];
var years = new Array(1995, 1994, 2002);
console.log(names[0]);
names[1] = 'Rachel';
console.log(names);

var mike = ['Mike', 'Guereca', 1996, 'developer', false];
mike.push('green'); //adds something at the end of the array
mike.unshift('Mr.'); //adds something to the beginning
mike.pop(); // deletes the last element of the array
mike.shift(); // goes back to the beginning
console.log(mike);
alert(mike.indexOf('developer')); //counts for you what number in the array it is (3)
//9:06 arrays 18






