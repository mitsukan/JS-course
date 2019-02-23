// 20% if less than 50, 15% between 50 and 200, 10% over 200
// add method to calculate tips
// return array of tips and array of tips + bills


var johnTipz = {
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    this.tips  = [];
    var i = 0;
    while (i < this.bills.length) {
      if (this.bills[i] < 50){
        this.tips.push(this.bills[i] * 0.2);
      } else if (this.bills[i] > 50 && this.bills[i] < 200) {
        this.tips.push(this.bills[i] * 0.15);
      } else if (this.bills[i] > 200) {
        this.tips.push(this.bills[i] * 0.1);
      }
      i++;
    }
    return this.tips;
  },
  calcTotals: function(tipArray) {
    this.totals = [];
    var i = 0;
    while (i < this.bills.length) {
      this.totals.push(this.bills[i] + tipArray[i]);
      i++;
    }
    return this.totals;
  }
}

var tips = johnTipz.calcTips()
console.log('These are the tips: ' + tips)
console.log('These are the totals: ' + johnTipz.calcTotals(tips))
//     for (var i = 0, i < (this.bills).length; i++) {
//       if (this.bills[i] < 50){
//         this.tips.push(this.bills[i] * 0.2);
//       } else if (this.bills[i] > 50 && this.bills[i] < 200) {
//         this.tips.push(this.bills[i] * 0.15);
//       } else if (this.bills[i] > 200) {
//         this.tips.push(this.bills[i] * 0.1);
//       }
//     }
//     return this.tips;
//   }
//   ,
//   calcTotals: function(tipArray) {
//     this.totals = [];
//     for(var i = 0, i < this.bills.length; i++) {
//       this.totals.push(this.bills[i] + tipArray[i]);
//     };
//     return this.totals;
//   }
// };
