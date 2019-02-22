// mark and john, full name, mass, height in an object.
// add method in object to calculate bmi
// console log who has the highest bmi, with name and bmi index. Take into consideration same bmi
// bmi = mass / height ^2

var mark = {
  fullName: 'Mark Park',
  mass: 60,
  height: 1.78,
  calcBMI: function(){
    return this.BMI = this.mass / Math.pow(this.height, 2)
  }
};

var john = {
  fullName: 'John Pond',
  mass: 60,
  height: 1.78,
  calcBMI: function(){
    return this.BMI = this.mass / Math.pow(this.height, 2)
  }
};

mark.calcBMI();
john.calcBMI();

if (mark.BMI > john.BMI) {
  console.log(mark.fullName + ' has a higher BMI at ' + mark.BMI);
} else if (john.BMI > mark.BMI) {
  console.log(john.fullName + ' has a higher BMI at ' + mark.BMI);
} else if (john.BMI == mark.BMI || mark.BMI == john.BMI) {
  console.log('Both ' + john.fullName + ' and ' + mark.fullName + ' has the same BMI at ' + john.BMI);
}
