/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function (n) {
  let solution;
  // create new instance of a board
  const board = new Board({
    n: n
  });

  const find = (row) => {
    // row will be equal to zero for the first invocation
    row = row || 0;
    // if we have run this function for all rows, then return the new board
    if (n === row) {
      return board.rows();
    } else {
      for (let i = 0; i < n; i++) {
        // place a piece
        board.togglePiece(row, i);
        // if it does not have any conflicts use recursion to rerun find with row incremented
        if (!board.hasAnyRooksConflicts()) {
          return find(row + 1);
        }
        board.togglePiece(row, i);
      }
    }
  }

  solution = find();


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function (n) {
  let solutionCount = 0;
  const board = new Board({
    'n': n
  });

  const search = (row) => {

    row = row || 0;
    if (n === row) {
      solutionCount++;
    } else {
      for (let i = 0; i < n; i++) {
        board.togglePiece(row, i);
        if (!board.hasColConflictAt(i)) {
          search(row + 1);
        }
        board.togglePiece(row, i);
      }
    }
  }

  search();
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;

};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function (n) {
  let solution;
  // create new instance of a board
  const board = new Board({
    n: n
  });

  const find = (row) => {
    // row will be equal to zero for the first invocation
    row = row || 0;
    // if we have run this function for all rows, then return the new board
      for (let i = 0; i < n; i++) {
        // place a piece
        board.togglePiece(row, i);
        // if it does not have any conflicts use recursion to rerun find with row incremented
        if (!board.hasAnyQueensConflicts() && !undefined) {
          return find(row + 1);
        } else {
          return find(row);
        }
        board.togglePiece(row, i);
      }
    }
  solution = find();
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function (n) {
  // var board = new Board({n:n});
  var solutionCount = undefined; //fixme
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};