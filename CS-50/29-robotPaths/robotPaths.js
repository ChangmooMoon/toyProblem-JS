/**
 *
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the
 *  bottom right corner. The robot can move either up, down, left, or right,
 *  but cannot visit the same spot twice. How many possible unique paths are
 *  there to the bottom right corner?
 *
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

const makeBoard = (n) => {
  let board = []
  for (let i = 0; i < n; i++) {
    board.push([]);
    for (let j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function (i, j) { this[i][j] = !this[i][j] }
  board.hasBeenVisited = function (i, j) { return !!this[i][j] }
  return board
}

const robotPaths = (n) => {
  let
    count = 0,
    board = makeBoard(n)

  const counter = (x, y) => {
    if (x === n - 1 && y === n - 1) { count++; return; }
    else if (x < 0 || y < 0 || x >= n || y >= n) return
    else if (board.hasBeenVisited(x, y)) return
    else {
      board.togglePiece(x, y)
      counter(x - 1, y) // right
      counter(x + 1, y) // left
      counter(x, y - 1) // up
      counter(x, y + 1) // down
      board.togglePiece(x, y)
    }
  }

  counter(0, 0)
  return count
}

let a = robotPaths(5)
console.log(a)
