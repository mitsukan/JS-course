var markMass, markHeight, johnMass, johnHeight;
markMass = 62;
markHeight = 1.78;
johnMass = 76;
johnHeight = 1.75;

var markBMI = markMass / (markHeight * markHeight)
var johnBMI = johnMass / (johnHeight * johnHeight)

console.log("Mark's BMI is: " + markBMI)
console.log("John's BMI is: " + johnBMI)

//mark > john

console.log('Is Mark\'s BMI higher than John\'s?: ' + (markBMI > johnBMI))
