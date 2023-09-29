let Turn = "X"
let gameover = false;

const ChangeTurn = () => {
    return Turn === "X" ? "O" : "X"
}

const CheckWin = () => {
let boxtext = document.getElementsByClassName('boxtext');
let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
win.forEach(e => {
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
        document.querySelector('.Info').innerText = boxtext[e[0]].innerText + "Won"
        gameover = true
    }
})
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if(boxtext.innerText === ''){
            boxtext.innerText = Turn;
            Turn = ChangeTurn();
            CheckWin();
            if (!gameover){
                document.getElementsByClassName('TurnInfo')[0].innerText = "Turn for " + Turn;
            }
        }
    })
})