//function 
function greet(name){
    return "Hello, " + name
}
let first = greet("Hari")
let second = greet("Ishan")
console.log(first)
console.log(second)

//no restriction of arguments and return
function greetNormal(){
    console.log("Hello")
}
greetNormal()

const arrowfunc = () => "Hello arrow"
console.log(arrowfunc())

const arrowfunc2 = (firstName) => {
    //function statement
    return "Hello " + firstName
}
console.log(arrowfunc2("Ramu"))

const add = (a, b) => a + b
const subtract = (a, b) => {
    return a - b
}
console.log(add(2 , 4))
console.log(subtract(2 , 4))


//practice
//make a function with "function" keyword names average1
function average1(a, b, c){
    let average = (a+b+c)/3
    return average
}
//function without scope using arrow function
const average2 = (a,b,c) => (a+b+c)/3
//function with scope using arrow function
const average3 = (a,b,c) => {
    let average = (a+b+c)/3
    return average
}


//Higher Order function/ Callbacks
const co1 = (a, b, operation) => {
    console.log("Starting Operation")

    //logic
    return operation(a, b)
}
let num1 = 10
let num2 = 5
let sumFunc = (a, b) => {
    let sum = a + b
    console.log(sum)
    return sum
}
co1(num1, num2, sumFunc)

const res2 = co1(20, 30, (a,b) => a - b)
console.log(res2)


//admin,guest callback
const userStatus=(username, callback) => {
    return callback(username)
}
const isAdmin = (username) => {
    return(username=="admin")
}
const isGuest = (username) => {
    return(username=="guest")
}
let user1 = userStatus("Ram", isAdmin)
let user2 = userStatus("guest", isGuest)
let user3 = userStatus("Ankit", isAdmin)
let user4 = userStatus("admin", isAdmin)
console.log(user1,user2,user3,user4)


//
let user5 = userStatus ("student", (username) => {
    return(username==='student')
})
console.log(user5)


//Closures
function outerfunction(outerVariable){
    console.log("outer function logic")
    return function innerfunction(innerVariable){
        console.log("outer variable "+outerVariable)
        console.log("inner variable "+innerVariable)
    }
}
const newfunction = outerfunction("outside")//new outer function
newfunction("inside")//runs inner function with outer variable preserved

const counter = (start) =>{
    let count = start
    return () => {
        count++
        return count
    }
}
const addOne = counter(5)
console.log(addOne())
console.log(addOne())
console.log(addOne())


    //Make a function studentRecord that takes a parameter name, age
    // inside studentRecord make another function addMarks that takes a parameter
    // (science,math,english)
    //addMarks should print the name age and average of marks
    //studentRecord should return addMarks function
    //call studentRecord with different names
    const studentRecord = (name, age) => {
        const addMarks = (science, math, english) => {
            console.log("Name : "+name)
            console.log("Age : "+age)
            let avgMarks = (science+math+english)/3
            console.log("Average marks : "+avgMarks)
        }
        return addMarks
    }
    const st1 = studentRecord("Ishan", 20)
    st1(100,100,100)
