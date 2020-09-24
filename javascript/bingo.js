function getRandomIntInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor( Math.random() * (max - min + 1) + min );
}

class Game {
    constructor() {
        this.boards = [];
        this.ranges = this.generateRanges();
    }

    generateRanges() {
        let ranges = [];
        let tensGenerator = () => (Math.floor(Math.random() * Math.floor(10)) + 1) * 10;
        for(let i = 0; i < 5; i++) {
            let n = tensGenerator();
            // Checks to make sure no duplicate ranges are added.
            for( let i = 0; i < ranges.length; i++) { if(ranges[i][1] == n) n = tensGenerator(); }
            ranges.push([n - 10, n]);
        }
        return ranges;
    }

    generateBoards(n) {
        for(let i = 1; i <= n; i++) { this.boards.push( new Board(this.ranges) ); }
    }
}

class Board {
    constructor(ranges) { 
        this.ranges = ranges;
        this.board = this.generateBoard();
    }

    generateBoard() {
        let board = [];
        for(let i = 0; i < this.ranges.length; i++) {
            let column = [];
            for(let j = 0; j < this.ranges.length; j++) {
                column.push(new Square(getRandomIntInRange(this.ranges[i][0], this.ranges[i][1])) );
            }
            board.push(column);
        }
        return board;
    }
}

class Square {
    constructor(value) {
        this.value = value;
        this.status = false;
    }
}



let game = new Game()
game.generateBoards(1);
console.log(game.boards[0].board);

// Need to implement the same recursive structure to ensure that value assigned to Square inside of range has not already been used. Ln 41. Reference ln 19.