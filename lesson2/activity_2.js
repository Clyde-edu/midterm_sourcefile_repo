// Arjohn Clyde E Prado
// An Advance Grade Analyzer

class Student {
    constructor(name, scores) {
        this.name = name;
        this.scores = scores;
    }

    getAverage() {
        let sum = 0;

        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }

        return sum / this.scores.length;
    }

    getLetterGrade() {
        let average = this.getAverage();

        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else {
            return "F";
        }
    }
}


const studentData = [
    { name: "James", scores: [85, 70, 75] },
    { name: "Ellaine", scores: [96, 91, 94] },
    { name: "Joshua", scores: [85, 84, 89] },
    { name: "Sherwin", scores: [55, 65, 61] }
];


let students = [];

for (let i = 0; i < studentData.length; i++) {
    let student = new Student(
        studentData[i].name,
        studentData[i].scores
    );

    students.push(student);
}

function analyzeStudents(students) {

    let total = 0;
    let topStudent = "";
    let highestAverage = 0;

    console.log("------- STUDENT REPORT -------");

    for (let i = 0; i < students.length; i++) {

        let average = students[i].getAverage();
        let grade = students[i].getLetterGrade();

        console.log(
            `${students[i].name} - Average: ${average.toFixed(1)} | Grade: ${grade}`
        );

        total += average;

        if (average > highestAverage) {
            highestAverage = average;
            topStudent = students[i].name;
        }
    }

    let classAverage = total / students.length;

    console.log("------------------------------");
    console.log(`Class Average: ${classAverage.toFixed(1)}`);
    console.log(`Top Student: ${topStudent} with ${highestAverage.toFixed(1)}`);
}


analyzeStudents(students);
