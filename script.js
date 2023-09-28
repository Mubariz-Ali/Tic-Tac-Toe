let Turn = "X"

const ChangeTurn = () => {
    return Turn === "X" ? "O" : "X"
}

const CheckWin = () => {

}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if(boxtext.innerText === ''){
            boxtext.innerText = Turn;
            Turn = ChangeTurn();
        }
    })
})