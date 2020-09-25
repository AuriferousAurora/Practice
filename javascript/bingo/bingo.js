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

    displayBoards() {
        for(let i = 0; i < this.boards.length; i++) {
            console.log(this.boards[i].board);
        }
    }

    drawNumber() {
        let range = this.ranges[Math.floor(Math.random() * 5)];
        let n = getRandomIntInRange(range[0], range[1]);
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
                let n = getRandomIntInRange(this.ranges[i][0], this.ranges[i][1]);
                // Checks to make sure no duplicate values are added.
                for(let k = 0; k < column.length; k++) { if(column[k].value == n) n = getRandomIntInRange(this.ranges[i][0], this.ranges[i][1]); }
                column.push(new Square(n));
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



let game = new Game();
game.generateBoards(1);
// game.displayBoards();
game.drawNumber();

 