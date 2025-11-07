//1. Variable types
//const, let, var

const firstName = "Hari" //const cannot be reassigned/ cannot be changed
// const firstName = "Ram" //cannot be assigned
//firstName= "Ram" //cannot be changed

let lastName = "Rai" //let cannot be reassigned/ can be changed
// let lastName= "Sharma" // cannot be reassigned
lastName= "Sharma" //can be changed

var age=25 // var can be reassigned / can be changed
var age=20 //can be reassigned
age = 32 // can be changed

//global scope
//scope of variable { }
console.log(continent);
//hoisting
if(true){
    const city="Kathmandu" //block scope 
    let country= "Nepal" //block scope 
    var continent="Asia" //function scope

    console.log(city);
    console.log(country);
    console.log(continent);
}
//console.log(city); //cannot be accessed outside block
//console.log(country); //cannot be accessed outside block 
console.log(continent); //can be accessed outside block

//2. Data types
const stringType = "This is a string" //String " ", ' ', ` `
const numberType=100  // Number 1,2,3,4.5,-5,0.5
const booleanType=true //Boolean true, false
const nullType= null //null - intended empty
let undefinedType //undefined //not assigned any value
let bigNumber = 938259832958 //bigInt if number is greater than 2^31
let symbolType1 = Symbol("name") //symbol unique value
let symbolType2 = Symbol("name") //symbol unique value
//symboltype1 not equal to symboltype2

console.log(typeof stringType)// string
console.log(typeof nullType)// object (empty object)
console.log(typeof undefinedType)//undefined
console.log(typeof bigNumber)//bigInt
console.log(symbolType1 ==symbolType2)

//Operators
// = (equal)
let x1= 10 // one = , assignment operator
let x2=10 == "10" // two = , comparison operator
let x3=10 ==="10"// three= , strict comparison operator

console.log(x1)//10
console.log(x2)//true
console.log(x3)//false
    
console.log(true == "true")
console.log(10.2 == "10.2")
console.log(null == undefined)
console.log(0== undefined)
console.log(0 == null)

//Arithmetic/Mathmatical 
console.log(5 + 3)
console.log(5 - 3)
console.log(5 * 3)
console.log(5 / 3)
console.log(5 % 3)
console.log(2 ** 31)
let num1 = 5 
console.log(num1++)
console.log(num1--)

//Assignment 
let num2 = 10
num2 == 5 // num2 = num2 +5
console.log(num2)
//any arithmetic operator before = is valid

//Comparison 
console.log(5 > 3)
console.log(5 < 3)
console.log(5 >= 3)
console.log(5 <= 3)
console.log(5 != 3)
console.log(5 === "5")
console.log(5 !== "5")

//logical -> returns boolean value
console.log(true && false) // and
console.log(true || false) // or
console.log(true) //not

//nullish coalescting operator (??)
let stats = "Ram"
let var2 = stats ?? "N/A"
console.log(var2) // "N/A"

//Ternary Operator
var age1= 18
var canVote = (age1 >=18) ? "Yes, can vote" : "No, cannot vote"
console.log(canVote)

if(ture){
    console.log("This is true");
}

if(false){
    console.log("if");
}else if(i==1){
    console.log("else if");
}else{
    console.log("else");
}

//switch case
let day=2
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("other day");
}

//loops 
//for loop 
for(let i=0; i<5; i++){
    console.log("for loop iteration: "+ i)
}

//while loop 
let j=0;
while(j<5){
    console.log("while loop iteration"+ j);
    j++
}

do{
    console.log("Runs 1")
}while(false)

