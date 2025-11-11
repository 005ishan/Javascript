// Base class with private fields
class Person {
    static species = "Human"; // Static property
    #ssn; // Private field

    constructor(name, age, ssn) {
        this.name = name;
        this.age = age;
        this.#ssn = ssn; // private field cannot be accessed directly outside
    }

    info() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }

    // Getter for private SSN
    get ssn() {
        return this.#ssn;
    }

    // Setter for age
    set setAge(newAge) {
        if (newAge > 0) this.age = newAge;
        else console.log("Invalid age");
    }

    // Static method
    static greet() {
        console.log(`Hello, I am a ${Person.species}`);
    }
}

// Inheritance: Student extends Person
class Student extends Person {
    #grades = []; // private array to store grades

    constructor(name, age, ssn, gradeLevel) {
        super(name, age, ssn); // call parent constructor
        this.gradeLevel = gradeLevel;
    }

    addGrade(grade) {
        this.#grades.push(grade);
    }

    getGrades() {
        return this.#grades;
    }

    gradeInfo() {
        console.log(`Name: ${this.name}, Grade Level: ${this.gradeLevel}`);
    }
}

// --- Usage ---

// Static method
Person.greet(); // Hello, I am a Human

// Create person instance
const person1 = new Person("Ram", 25, "123-45-6789");
person1.info();
person1.setAge = 26;
console.log("Person's age:", person1.age);
console.log("Person's SSN (private):", person1.ssn);

// Create student instance
const student1 = new Student("Shyam", 20, "987-65-4321", "A");
student1.info();       // inherited method
student1.gradeInfo();  // student method
student1.addGrade(95);
student1.addGrade(88);
console.log("Grades:", student1.getGrades());
