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
            // Checks to make sure no duplicate ranges are added. Does it, though?
            for( let i = 0; i < ranges.length; i++) { if(ranges[i][1] == n) n = tensGenerator(); }
            ranges.push([n - 10, n]);
        }
        return ranges;
    }

    generateBoards() {
        for(let i = 0; i < players.length; i++) { this.boards.push( new Board(this.ranges, players[i]) ); }
    }

    drawNumber() {
        let column = Math.floor(Math.random() * 5);
        let range = this.ranges[column];
        let n = getRandomIntInRange(range[0], range[1]);
        // Write code to check that n does not exist in this.drawNumbers. Recursive function that checks and calls itself if true.
        // this.drawnNumbers.push(n);
        console.log("The number drawn was: " + n);
        
        // At the top level we have a Game object with an array of board objects.
        for(let i = 0; i < this.boards.length; i++) {
            console.log("working on " + this.boards[i].player + "'s board");
            // This loop iterates for the same number as the length of the board array.
            for(let j = 0; j < this.boards[i].columns.length; j++) {
                // Each board has an array of columns. First select the board.
                // Then select the column with the index determined in the variable 'column'.
                // Then select the square in the column.
                let square = this.boards[i].columns[column][j];
                if(square.value == n) {
                    square.value = 'X'; // Remove this line to keep numbers after being selected.
                    square.status = true;
                };
            }
        }

        let winner = this.checkForWin();
        console.log(winner);
        if(winner) {
            console.log('This got triggered.');
            this.gameWon = true;
        }

        if(this.gameWon) {
            this.boards.forEach((board) => {
                if(board.player == winner) board.displayBoard();
            })
            console.log(`Congratulations! ${winner} is the winner!`);
        }
    }

    checkForWin() {
        const isTrue = (value) => { return value; }

        const checkColumns = (board) => {
            let columns = board.columns;
            let check = false;

            for(let i = 0; i < columns.length; i++) {
                let statuses = columns[i].map((square) => square.status);
                check = statuses.every(isTrue);
                if(check) break;
            }
            return check;
        } 

        const checkRows = (board) => {
            let columns = board.columns;
            let rows = [[], [], [], [], []];
            let check = false;

            columns.forEach((column) => {
                rows[0].push(column[0]);
                rows[1].push(column[1]);
                rows[2].push(column[2]);
                rows[3].push(column[3]);
                rows[4].push(column[4]);
            });


            for(let i = 0; i < rows.length; i++) {
                let statuses = rows[i].map((square) => square.status);
                check = statuses.every(isTrue);
                if(check) break;
            }

            return check;
        }

        const checkDiagonals = (board) => {
            let columns = board.columns;
            let diagonals = [[], []];
            let check = false;

            for(let i = 0; i < columns.length; i++) {
                diagonals[0].push(columns[i][i]);
                diagonals[1].push(columns[columns.length - (i + 1)][i])
            }

            for(let i = 0; i < diagonals.length; i++) {
                let statuses = diagonals[i].map((square) => square.status);
                check = statuses.every(isTrue);
                if(check) break;
            }

            return check;
        }

        for(let i = 0; i < this.boards.length; i++) {
            let columnWin = checkColumns(this.boards[i]);
            let rowWin = checkRows(this.boards[i]);
            let diagonalWin = checkDiagonals(this.boards[i]);

            if(columnWin || rowWin || diagonalWin) return this.boards[i].player;
            
            return false;
        }
    }

    play() {
        this.generateBoards();
        while(!this.gameWon) { this.drawNumber(); }
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

    displayBoard() { console.log(this.columns); }
}

class Square {
    constructor(value) {
        this.value = value;
        this.status = false;
    }
}

let players = ['Hermione Granger', 'Ron Weasley'];
let game = new Game(players);
game.play();


 