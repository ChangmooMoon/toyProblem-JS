
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
const rockPaperScissors = (rounds = 3) => {
	let outcome = []
	const RPS = ["rock", "scissors", "paper"]

	const resultCase = (nowPlaying, lefts) => {
		if (lefts === 0) outcome.push(nowPlaying)
		else {
			for (let i = 0; i <= 2; i++) {
				resultCase(nowPlaying.concat(RPS[i]), lefts - 1)
			}
		}
	}

	resultCase([], rounds)
	return outcome
}

console.log(rockPaperScissors()) // [기본 파라미터 = 3 이므로 3번 내는 모든 케이스 반환]
console.log(rockPaperScissors(4)) //[4번 내는 모든 케이스 반환]
