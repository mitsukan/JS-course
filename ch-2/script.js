var scoreJohn = 1;
var scoreMike = 2;
var scoreMary = 2;

if(scoreJohn > scoreMike && scoreJohn > scoreMary) {
  console.log('John\'s team wins!')
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
  console.log('Mike\'s team wins!')
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
  console.log('Mary\'s team wins!')
} else {
  console.log('It\'s a draw!!')
}


/*
var johnTeamAverage = (89 + 120 + 103) / 3 ;
var mikeTeamAverage = (116 + 94 + 123) / 3 ;
var maryTeamAverage = (97 + 134 + 105) / 3;
*/
