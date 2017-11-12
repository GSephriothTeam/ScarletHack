var board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

var myMove = true

function Humanstarts() {
    console.log('Human starts game');
}

function AIstarts(){
    console.log('AI starts game')
}

function getWinner(board) {

    // Check if someone won
    vals = [true, false];
    var allNotNull = true;
    for (var k = 0; k < vals.length; k++) {
        var value = vals[k];

        // Check rows, columns, and diagonals
        var diagonalComplete1 = true;
        var diagonalComplete2 = true;
        for (var i = 0; i < 3; i++) {
            if (board[i][i] != value) {
                diagonalComplete1 = false;
            }
            if (board[2 - i][i] != value) {
                diagonalComplete2 = false;
            }
            var rowComplete = true;
            var colComplete = true;
            for (var j = 0; j < 3; j++) {
                if (board[i][j] != value) {
                    rowComplete = false;
                }
                if (board[j][i] != value) {
                    colComplete = false;
                }
                if (board[i][j] == null) {
                    allNotNull = false;
                }
            }
            if (rowComplete || colComplete) {
                return value ? 1 : 0;
            }
        }
        if (diagonalComplete1 || diagonalComplete2) {
            return value ? 1 : 0;
        }
    }
    if (allNotNull) {
        return -1;
    }
    return null;
}

function max(board) {
  if(is_Terminal(board)) {
    return getWinner(board);
  } else {
    var a = NUMBER.NEGATIVE_INFINITY
    for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (board[i][j] == null) {
                   board[i][j] = player;
                  a = Math.max(a, min(board));
                }
            }
    }
    return a;
  }
}

function min(board) {
  if(is_Terminal(board)) {
    return getWinner(board);
  } else {
    var b = NUMBER.POSITIVE_INFINITY
    for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (board[i][j] == null) {
                   board[i][j] = player;
                  b = Math.min(b, max(board));
                }
            }
    }
    return a;
  }
}

$(document).ready(function() {
    $("button").click(function(){
        console.log('ccc');
    });
});
