const averageCalculator = function (score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
};

const playSimulation = function (competitorTeam, score) {
  console.log(`${competitorTeam} has played and scored ${score}.`);
  return score;
};

const checkWinner = function (team1, avgScore1, team2, avgScore2) {
  if (avgScore1 / 2 >= avgScore2) {
    console.log(`${team1} win (${avgScore1} vs. ${avgScore2})`);
  } else if (avgScore2 / 2 >= avgScore1) {
    console.log(`${team2} win (${avgScore2} vs. ${avgScore1})`);
  } else {
    console.log(
      "The competition is not over. One team has to double the points of other team to win the game."
    );
  }
};

const team1 = "Koalas";
const team2 = "Dolphins";

const koalasScore1 = playSimulation(team1, 44);
const koalasScore2 = playSimulation(team1, 23);
const koalasScore3 = playSimulation(team1, 71);

const dolphinsScore1 = playSimulation(team2, 65);
const dolphinsScore2 = playSimulation(team2, 54);
const dolphinsScore3 = playSimulation(team2, 49);

let avgOfKoalas = averageCalculator(koalasScore1, koalasScore2, koalasScore3);
let avgOfDolphins = averageCalculator(
  dolphinsScore1,
  dolphinsScore2,
  dolphinsScore3
);

checkWinner(team1, avgOfKoalas, team2, avgOfDolphins);

const koalasScore4 = playSimulation(team1, 85);
const koalasScore5 = playSimulation(team1, 54);
const koalasScore6 = playSimulation(team1, 41);

const dolphinsScore4 = playSimulation(team2, 23);
const dolphinsScore5 = playSimulation(team2, 34);
const dolphinsScore6 = playSimulation(team2, 27);

avgOfKoalas = averageCalculator(koalasScore4, koalasScore5, koalasScore6);
avgOfDolphins = averageCalculator(
  dolphinsScore4,
  dolphinsScore5,
  dolphinsScore6
);

checkWinner(team1, avgOfKoalas, team2, avgOfDolphins);
