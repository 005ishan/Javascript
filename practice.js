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



//-------------------------------------------------//Promise async/await and Future then/catch-----------------------------------------------------

// //Write a JavaScript program using Promises:
// Create a function processAfterDelay(ms, num) that:
// Resolves after ms milliseconds if num is divisible by 3,
// Rejects after ms milliseconds otherwise.
// Call this function for (1000, 3), (1500, 4), (2000, 6), (2500, 7).
// Run all of them in parallel using Promise.allSettled() and log all resolved and rejected values separately.
// Then, run (1000, 3), (2000, 6), (2500, 9) sequentially (non-blocking chain using .then()), logging each result.

// Function that returns a promise
function processAfterDelay(ms, num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num % 3 === 0) {
                resolve(`✅ Resolved: ${num} is divisible by 3 (after ${ms}ms)`);
            } else {
                reject(`❌ Rejected: ${num} is NOT divisible by 3 (after ${ms}ms)`);
            }
        }, ms);
    });
}

// --- 1️⃣ Run all in PARALLEL ---
const promises = [
    processAfterDelay(1000, 3),
    processAfterDelay(1500, 4),
    processAfterDelay(2000, 6),
    processAfterDelay(2500, 7)
];

Promise.allSettled(promises).then(results => {
    const resolved = results.filter(r => r.status === "fulfilled").map(r => r.value);
    const rejected = results.filter(r => r.status === "rejected").map(r => r.reason);

    console.log("\n--- Parallel Execution ---");
    console.log("✅ Resolved values:");
    console.log(resolved);
    console.log("❌ Rejected values:");
    console.log(rejected);
});

// --- 2️⃣ Run sequentially using .then() chain ---
console.log("\n--- Sequential Execution ---");

processAfterDelay(1000, 3)
    .then(res => {
        console.log(res);
        return processAfterDelay(2000, 6);
    })
    .then(res => {
        console.log(res);
        return processAfterDelay(2500, 9);
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
