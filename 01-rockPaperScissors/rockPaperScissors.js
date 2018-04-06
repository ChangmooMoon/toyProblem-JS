/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/
var list = ["rock", "paper", "scissors"];
var returnList = [];
var rockPaperScissors = function (num) {
	var result = [];
	for (var i = 0; i <= 2; i++) {
		for (var j = 0; j <= 2; j++) {
			for (var k = 0; k <= 2; k++) {
				result.push(list[i]);
				result.push(list[j]);
				result.push(list[k]);
			}
		}
	}
	returnList.push(result);
	return returnList;
};
console.log(rockPaperScissors(2));