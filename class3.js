//List/array
const arr = [3,4,5]
const arr2 = [1 , true , undefined , "Hello"]
//data type is not restricted in 35
//Spread operator
const arr3 = [arr , 3 , 5] // [ [3,4,5] , 3 , 5]
const arr4 = [...arr, 3 , 5] // [3,4,5,3,5]
const arr5 = [...arr, ...arr2] // [3,4,5,1,true,undefined,"Hello"]
console.log(arr5)
arr.push(10) //adds element at the end
console.log(arr)
const popped = arr.pop() // removes element from the end
console.log(popped)
arr.unshift(100) // adds element the start
console.log(arr)
const shifted = arr.shift() // removes element from the start
console.log(shifted)
console.log(arr)

//array access
console.log(arr[0])
console.log(arr.at(0))
arr[0] = 500 //although  variable is const, array are mutable
// arr = [100, 200] unchangable

//Iterate array
for(let i=0; i<arr.length; i++){
    console.log(i, arr[i])
}
//Iterate with Index
for(let index in arr){
    console.log(index, arr[index])
}
//Iterate with value
for(let value of arr){
    console.log(value)
}

//object/map/record
const person = {
    fName : "Hari",
    age : 30,
    "isAdmin" : false, //quotation is not necessary in key
    hobbies : ["reading", "traveling"],
    address : {
        street : "Kathmandu",
        country : "Nepal"
    }

}
console.log(person)
console.log(person.fName)
console.log(person["fName"])
person.age = 31 //modify
person.isAdmin = true
console.log(person.hobbies[0])
console.log(person.address.street)
delete person.hobbies // delete key
console.log(person)

//Nullish checking
console.log(person.address.home) //undefined
//console.log(person.address.home.number) //error, cannot read property of undefined
console.log(person.address.home?.number) //undefined
console.log(person.address.home?.number?.prefix) //undefined

console.log(person.address?.home?.number ?? 0) //0
console.log(person.address?.home?.continent ?? "Not specfied") //Not specified
console.log(person.gender?.type ?? "N/A") //N/A

//Array/Iterable functions
//forEach, map, filter, reduce
arr.forEach(
    (value, index) => {
        console.log(index, value)
})
//callback can take 3 args: value, index, array
arr.forEach(elem => console.log(elem = 2))
//forEach does not return anything

const mappedArr = arr.map(value => value * 3)
console.log(mappedArr)
const mappedArr2 = arr.map((value, index) =>{
    return value + index
})
console.log(mappedArr2) //map returns new array/ with same size/ length

const names = ["Sarjak", "Anjali", "Anisha"]
const components = names.map(
    name => `li${name}</li>`
)
console.log(components)

const filteredArr = arr.filter(value => value > 10)
console.log(filteredArr) //filter returns new array with size <= original array

const reducedVal = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0 // 2nd args, initial value of accumulator
)
console.log(reducedVal) //reduce returns single aggregated value

const cart = [
    {name:"Milk", category:"grocery", price:2.5, qty:2, inStock : true},
    {name:"Shampoo", category:"beauty", price:1.8, qty:3, inStock : false},
    {name:"Egg", category:"grocery", price:5.0, qty:1, inStock : true}
]
 
const filterCart = cart.filter(item => item.inStock==true && item.category==="grocery")
console.log(filterCart)

const mappedCart = cart.map(item => ({
    name: item.name,
    qty: item.qty,
    lineTotal: item.price * item.qty
}))
console.log(mappedCart)

const grandTotal = mappedCart.reduce(
    (acc,item) => acc + item.lineTotal,
    0
)

console.log("Grand Total: ",grandTotal)