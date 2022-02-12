// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �

const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

const bmiMark = markWeight / markHeight ** 2;
console.log(bmiMark);

const bmiJohn = johnWeight / (johnHeight * johnHeight);
console.log(bmiJohn);

const markHigherBMI = (bmiMark > bmiJohn);
console.log(markHigherBMI);

if (bmiMark > bmiJohn) {
      console.log("Mark's BMI is higher than John's");
} else {
      console.log("John's BMI is higher than Mark's");
}


if (bmiMark > bmiJohn) {
      console.log (`Mark's bmi ${bmiMark} is higher than John's ${bmiJohn}`);
} else {
      console.log (`John's bmi ${bmiMark} is higher than Mark's ${bmiJohn}`);
}