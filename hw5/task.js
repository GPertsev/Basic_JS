let createChessboard = function () {
    //Создаю саму доску
    let body = document.getElementsByTagName('body')[0];
    let board = document.createElement('div');
    board.style.width = "850px";
    board.style.height = "800px";
    board.style.margin = "0 auto";
    board.style.display = "flex";
    board.style.flexWrap = "wrap";
    board.style.justifyContent = "flex-end";


    //Создаю и добавляю тег стайл в хэде, для более удобной работы со стилями классов
    let head = document.getElementsByTagName('head')[0];
    let style = document.createElement('style');
    head.appendChild(style);
    style.innerText = "*{margin: 0; padding: 0;} .title {padding-top: 50px; padding-bottom: 50px; font-size: 70px; text-align: center;}.blackCell {background-color: #3D2B1F;} .whiteCell {background-color: #FDF5E6;} .cellNumber {text-align: center; line-height: 100px; font-size: 30px; color: #F5F5DC; background-color: #8B4513} .cellLetter {text-align: center; line-height: 50px; font-size: 30px; color: #F5F5DC; background-color: #8B4513} .chessFigure {font-size: 80px; text-align: center; line-height: 100px;}";

    //Добавляю доску в боди
    body.appendChild(board);

    //Генерирую 64 поля и ячейки для нумерации строк
    for (let i = 1; i <= 4; i++) {

        let cellNumberOdd = document.createElement('div');
        cellNumberOdd.style.width = "50px";
        cellNumberOdd.style.height = "100px";
        cellNumberOdd.className = "cellNumber";
        board.appendChild(cellNumberOdd);

        for (let j = 1; j <= 8; j++) {
            let cell = document.createElement('div');
            cell.style.width = "100px";
            cell.style.height = "100px";
            if (j % 2 !== 0) {
                cell.className = "chessCell whiteCell";
            } else {
                cell.className = "chessCell blackCell";
            }
            board.appendChild(cell);
        }

        let cellNumberEven = document.createElement('div');
        cellNumberEven.style.width = "50px";
        cellNumberEven.style.height = "100px";
        cellNumberEven.className = "cellNumber";
        board.appendChild(cellNumberEven);

        for (let k = 1; k <= 8; k++) {
            let cell = document.createElement('div');
            cell.style.width = "100px";
            cell.style.height = "100px";
            if (k % 2 == 0) {
                cell.className = "chessCell whiteCell";
            } else {
                cell.className = "chessCell blackCell";
            }
            board.appendChild(cell);
        }
    }

    //Нумерую строки
    let existingCellNumber = board.getElementsByClassName('cellNumber');

    for (let p = existingCellNumber.length - 1; p >= 0; p--) {
        existingCellNumber[p].innerText = `${8 - p}`;
    }
    //Создаю ячейки для нумерации столбцов
    for (let i = 0; i < 8; i++) {
        let cellLetter = document.createElement('div');
        cellLetter.style.width = "100px";
        cellLetter.style.height = "50px";
        cellLetter.className = "cellLetter";
        board.appendChild(cellLetter);
    }
    //Нумерую столбцы
    alp = ["A", "B", "C", "D", "E", "F", "G", "H"];

    let existingCellLetter = board.getElementsByClassName('cellLetter');

    for (let i = 0; i < existingCellLetter.length; i++) {
        existingCellLetter[i].innerText = alp[i];
    }

    //Создал объект с информацией об игровых фигурах, их порядке и метод создающий их.
    let figures = {
        rook: {
            letter: "R",
            imgName: "Rook.png"
        },
        knight: {
            letter: "N",
            imgName: "kNight.png"
        },
        bishop: {
            letter: "B",
            imgName: "Bishop.png"
        },
        queen: {
            letter: "Q",
            imgName: "Queen.png"
        },
        king: {
            letter: "K",
            imgName: "King.png"
        },
        pawn: {
            letter: "P",
            imgName: "Pawn.png"
        },
        figuresOrder: ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],


        addFigure: function (color, value, place) {
            // let newFigure = document.createElement("p");  //Для вставки фигур буквой, а не картинкой.
            let newFigure = document.createElement("img");
            newFigure.style.width = "100px";
            newFigure.style.height = "100px";
            // newFigure.style.color = color;  //Для вставки фигур буквой, а не картинкой.
            for (fig in this) {
                if (value == this[fig].letter) {
                    newFigure.className = `chessFigure ${color}` + fig;
                    // newFigure.innerText = this[fig].letter;  //Для вставки фигур буквой, а не картинкой.
                    newFigure.src = `img/` + color + this[fig].imgName;
                }
            }
            return place.appendChild(newFigure);
        }
    }

    //Заполняю необходимые игровые поля фигурами.

    let chessCellArr = board.getElementsByClassName('chessCell');

    for (i = 0; i < chessCellArr.length; i++) {
        if (i >= 0 && i < figures.figuresOrder.length) {
            figures.addFigure("black", figures.figuresOrder[i], chessCellArr[i]);
        }
        if (i >= 8 && i <= 15) {
            figures.addFigure("black", "P", chessCellArr[i]);
        }
        if (i >= 56 && i <= 63) {
            figures.addFigure("white", figures.figuresOrder[-(56 - i)], chessCellArr[i]);
        }
        if (i >= 48 && i <= 55) {
            figures.addFigure("white", "P", chessCellArr[i]);
        }
    }


    //Заполнение поля буквами без объектов и дополнительных тегов. Так проще и правильнее? То что выше это избыточный код по сути с таким же функционалом, но тяжелочитаемый?

    // let figuresOrder = ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']

    // for(i = 0; i<chessCellArr.length; i++) {
    //     if(i>=0 && i<figuresOrder.length) {
    //         chessCellArr[i].innerText = figuresOrder[i];
    //     }
    //     if(i>=8 && i<=15 || i>=48 && i<=55) {
    //         chessCellArr[i].innerText = "P";
    //     }
    //     if(i>=56 && i<=63) {
    //         chessCellArr[i].innerText = figuresOrder[-(56-i)];
    //     }
    //     if(i>=0 && i<=15) {
    //         chessCellArr[i].style.color = "black";
    //     }
    //     if(i>=48 && i<=63) {
    //         chessCellArr[i].style.color = "white";
    //     }
    // };
}

createChessboard();