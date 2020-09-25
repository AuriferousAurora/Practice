function getRandomIntInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor( Math.random() * (max - min + 1) + min );
}

class Game {
    constructor(players) {
        this.players = players;
        this.boards = [];
        this.ranges = this.generateRanges();
        this.drawnNumbers = [];
        this.gameWon = false;
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

    generateBoards() {
        for(let i = 0; i < players.length; i++) { this.boards.push( new Board(this.ranges, players[i]) ); }
    }

    displayBoards() {
        for(let i = 0; i < this.boards.length; i++) {
            console.log(this.boards[i].player);
            console.log(this.boards[i].columns);
        }
    }

    drawNumber() {
        let column = Math.floor(Math.random() * 5);
        let range = this.ranges[column];
        let n = getRandomIntInRange(range[0], range[1]);
        // We'll need to save the drawn numbers to a class property and check each draw against what has already been drawn.
        console.log("The number drawn was: " + n);
        
        // At the top level we have a Game object with an array of board objects.
        for(let i = 0; i < this.boards.length; i++) {
            // This loop iterates for the same number as the length of the board array.
            for(let j = 0; j < this.boards[i].columns.length; j++) {
                // Each board has an array of columns. First select the board.
                // Then select the column with the index determined in the variable 'column'.
                // Then select the square in the column.
                let square = this.boards[i].columns[column][j];
                if(square.value == n) {
                    square.value = 'X';
                    square.status = true;
                    this.gameWon = true;
                };
            }
        }
        this.displayBoards();
        if(this.gameWon) {
            console.log('Congratulations! You win!')
        }
    }


}

class Board {
    constructor(ranges, player) {
        this.player = player;
        this.ranges = ranges;
        this.columns = this.generateColumns();
    }

    generateColumns() {
        let columns = [];
        for(let i = 0; i < this.ranges.length; i++) {
            let column = [];
            for(let j = 0; j < this.ranges.length; j++) {
                let n = getRandomIntInRange(this.ranges[i][0], this.ranges[i][1]);
                // Checks to make sure no duplicate values are added.
                for(let k = 0; k < column.length; k++) { if(column[k].value == n) n = getRandomIntInRange(this.ranges[i][0], this.ranges[i][1]); }
                column.push(new Square(n));
            }
            columns.push(column);
        }
        return columns;
    }
}

class Square {
    constructor(value) {
        this.value = value;
        this.status = false;
    }
}

let players = ['Harry Potter', 'Hermione Granger', 'Ron Weasley'];
let game = new Game(players);
game.generateBoards(1);
while(!game.gameWon) {
    game.drawNumber();
}



 