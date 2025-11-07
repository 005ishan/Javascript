class Person{
    static species = "Human"
    constructor(name, age){
        this.name = name
        this.age = age
    }
    info () {
        console.log(`Name : ${this.name}, Age: ${this.age}`)
    }
    //setter gettor/ new attributes
    set setAge(newAge){
        this.age = newAge
    }
    get getAge(){
        return this.age
    }
}
const person1 = new Person("Ram", 25)
console.log(Person.species)
person1.info()
person1.setAge = 26
console.log(person1.getAge)

//Inheritance 
class Student extends Person{
    constructor(name, age, grade){
        super(name, age) //parent constructor
        this.grade=grade
    }
    gradeInfo(){
        console.log(`Name : ${this.name}, Grade : ${this.grade}`)
    }
}
const student1 = new Student("Shyam", 20, "A")
student1.info()
student1.gradeInfo()

