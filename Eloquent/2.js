function FizzBuzz() {
  for ( let i = 1; i < 101; i++ ) {
    switch(true) {
      case( i % 3 == 0 ): console.log('Fizz');
      case( i % 5 == 0 ): console.log('Buzz'); break;
      default: console.log(i); break; 
    } 
  }
}

function ChessBoard(size) {
  let board = '';
  for (let y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
      if ((x + y) % 2 == 0)
        board += " ";
      else
        board += "#";
    }
    board += "\n";
  }
  console.log(board);
}

ChessBoard(8);