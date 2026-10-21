// Arjohn Clyde E Prado
// A Simple Grade Analyzer

const scores = [71, 96, 75, 65, 82];

let total = 0;
let highest = scores[0];
let lowest = scores[0];
let passed = 0;
let failed = 0;

console.log("Student Scores:");

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}

console.log("\nStudent Results:");

for (let i = 0; i < scores.length; i++) {
    let score = scores[i];
    let grade;
    let status;

    if (score >= 90 && score <= 100) {
        grade = "Excellent";
    } else if (score >= 80 && score <= 89) {
        grade = "Very Good";
    } else if (score >= 75 && score <= 79) {
        grade = "Good";
    } else {
        grade = "Failed";
    }

    if (score >= 75) {
        status = "Passed";
        passed++;
    } else {
        status = "Failed";
        failed++;
    }

    total = total + score;

    if (score > highest) {
        highest = score;
    }

    if (score < lowest) {
        lowest = score;
    }

    console.log("Student " + (i + 1) + ": " + score + " - " + grade + " - " + status);
}

let average = total / scores.length;

console.log("\nSummary:");
console.log("Total Score: " + total);
console.log("Average Score: " + average);
console.log("Highest Score: " + highest);
console.log("Lowest Score: " + lowest);
console.log("Passed: " + passed);
console.log("Failed: " + failed);
