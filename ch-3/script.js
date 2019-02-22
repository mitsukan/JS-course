function calculateTip(bill){
  if(bill < 50){
    return bill * 0.2
  } else if (bill > 50 && bill < 200) {
    return bill * 0.15
  } else if (bill > 200){
    return bill * 0.1
  }
};

// var restaurantBills = [124, 48, 268];
var restaurantTips = [];
var totalBills = [];

restaurantTips.push(calculateTip(124));
restaurantTips.push(calculateTip(48));
restaurantTips.push(calculateTip(268));

totalBills.push(124 + restaurantTips[0]);
totalBills.push(48 + restaurantTips[1]);
totalBills.push(268 + restaurantTips[2]);

console.log('tips for each restaurant: ' + restaurantTips)
console.log('tips and bill totals for each restaurant: ' + totalBills)
