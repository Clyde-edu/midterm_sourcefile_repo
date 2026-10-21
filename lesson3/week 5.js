'use strict';

console.log('STUDENT SCORE ARRAY ANALYZER');


const studentNames = ['Ana', 'Ben', 'Carla', 'Daniel', 'Ella'];
const studentScores = [85, 72, 91, 64, 78];

const activityScores = [
    [80, 85, 90],
    [70, 72, 74],
    [88, 92, 95],
    [60, 65, 67],
    [75, 78, 81]
];

const originalNames = Array.from(studentNames);


// PART A
console.log('\nPART A: ORIGINAL RECORDS');

for (let i = 0; i < studentNames.length; i++) {
    console.log(i + ' - ' + studentNames[i] + ': ' + studentScores[i]);
}


// PART B
console.log('\nPART B: ADD NEW STUDENTS');


studentNames.push('Faith');
studentScores.push(88);

studentNames.unshift('Aaron');
studentScores.unshift(76);

console.log('Updated Names:', studentNames);
console.log('Updated Scores:', studentScores);
console.log('Number of Students:', studentNames.length);


// PART C
console.log('\nPART C: REMOVE AND REPLACE RECORDS');

studentNames.shift();
studentScores.shift();

studentNames.pop();
studentScores.pop();

let danielIndex = studentNames.indexOf('Daniel');

studentNames.splice(danielIndex, 1);
studentScores.splice(danielIndex, 1);

studentNames.splice(2, 0, 'Grace');
studentScores.splice(2, 0, 82);

console.log('Names:', studentNames);
console.log('Scores:', studentScores);


// PART D
console.log('\nPART D: CLASS STATISTICS');

let total = 0;

for (let i = 0; i < studentScores.length; i++) {
    total = total + studentScores[i];
}

let average = total / studentScores.length;

let highest = studentScores[0];
let lowest = studentScores[0];

for (let i = 1; i < studentScores.length; i++) {
    if (studentScores[i] > highest) {
        highest = studentScores[i];
    }

    if (studentScores[i] < lowest) {
        lowest = studentScores[i];
    }
}

console.log('Total Score:', total);
console.log('Average Score:', average.toFixed(2));
console.log('Highest Score:', highest);
console.log('Lowest Score:', lowest);


// PART E
console.log('\nPART E: PASSING-SCORE ANALYSIS');

const passingScore = 75;

const passingScores = studentScores.filter(function(score) {
    return score >= passingScore;
});

const statuses = studentScores.map(function(score) {
    if (score >= passingScore) {
        return 'Passed';
    } else {
        return 'Failed';
    }
});

const atLeastOneFailed = studentScores.some(function(score) {
    return score < passingScore;
});

const allStudentsPassed = studentScores.every(function(score) {
    return score >= passingScore;
});

console.log('Passing Scores:', passingScores);
console.log('Statuses:', statuses);
console.log('At Least One Failed:', atLeastOneFailed);
console.log('All Students Passed:', allStudentsPassed);


// PART F
console.log('\nPART F: SORT AND SEARCH');

const sortedScores = Array.from(studentScores);

sortedScores.sort((a, b) => b - a);

const contains91 = studentScores.includes(91);
const indexOf91 = studentScores.indexOf(91);

console.log('Scores from Highest to Lowest:', sortedScores);
console.log('Contains 91:', contains91);
console.log('Index of 91:', indexOf91);


// PART G
console.log('\nPART G: TWO-DIMENSIONAL ARRAY');

const activityAverages = [];

for (let i = 0; i < activityScores.length; i++) {

    let totalActivity = 0;

    
    for (let j = 0; j < activityScores[i].length; j++) {
        console.log(originalNames[i] + ' activity score:', activityScores[i][j]);

        totalActivity = totalActivity + activityScores[i][j];
    }

    
    let activityAverage =
        totalActivity / activityScores[i].length;

    activityAverages.push(activityAverage);

    console.log(
        originalNames[i] +
        "'s activity average: " +
        activityAverage.toFixed(2)
    );
}

console.log('Activity Averages:', activityAverages);


// PART H
console.log('\nPART H: TEXT SUMMARY');

console.log('Students: ' + studentNames.join(' | '));