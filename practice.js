//-----------------------------------------------Functions--------------------------------------------------------

// Make a function employeeRecord that takes parameters employeeName and designation.
// Inside employeeRecord, make another function addSalary that takes parameters basicSalary and bonus.
// addSalary should print the employee name, designation, total salary (basic + bonus), and average salary (total ÷ 2).
// employeeRecord should return the addSalary function.
// Call employeeRecord with different employee names and designations, and then call the returned function with salaries.

const employeeRecord = (employeeName,designation) => {
    const addSalary = (basicSalary,bonus) => {
        console.log("Employee name : "+ employeeName)
        console.log("Designation : "+ designation)
        let total = basicSalary + bonus
        console.log("Total Salary : " + total)
        let avgSalary = total/2
        console.log("Average Salary : " + avgSalary)
    }
    return addSalary

}
const empR = employeeRecord("Sachit","Manager")
empR(150000,5000)



//-----------------------------------------------List/Array-------------------------------------------------------

//Filter the students who passed the exam.
// Map the filtered students to a new array of objects containing:
// name
// score
// grade (assign "A" if score ≥ 90, "B" if score ≥ 75, "C" if score ≥ 60, otherwise "D")
// Use reduce to calculate the average score of the students who passed.

const students = [
    {name: "Alice", score: 85, passed: true},
    {name: "Bob", score: 55, passed: false},
    {name: "Charlie", score: 90, passed: true},
    {name: "David", score: 65, passed: true},
    {name: "Eve", score: 40, passed: false}
]

const passedStudents = students.filter(student => student.passed==true)
console.log(passedStudents)

const mappedStudents = passedStudents.map(student => {
    let grade
    if(student.score >= 90) grade = "A"
    else if(student.score >= 75) grade = "B"
    else if(student.score >= 60) grade = "C"
    else grade="D"

    return{ 
        name : student.name,
        score : student.score,
        grade : grade
    }
})

console.log("Students who passed with grades : ", mappedStudents)


const totalScore = mappedStudents.reduce(
    (acc, student) => acc+student.score, 
    0
)
console.log("Total score of passed students : "+ totalScore)



//-----------------------------------------------Objects and Functions-------------------------------------------------------
