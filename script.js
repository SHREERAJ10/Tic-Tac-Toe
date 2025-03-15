const boxes = [];
let gameStatus = document.querySelector("#game-status");
let XTurn = true;
let symbol = 'X';
let winCases = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[3,6,9],[2,5,8],[1,5,9],[3,5,7]];

for(let i=1;i<=9;i++){
    let box = document.createElement('div');
    box.classList.add("box");
    box.setAttribute("id",`n${i}`);
    document.querySelector("#container").appendChild(box);
    gameStatus.innerText = `${symbol}'s turn`;
    boxes.push(box);
}

function checkWin(){
    for(let condition of winCases){
        let box1 = document.querySelector(`#n${condition[0]}`).innerText;
        let box2 = document.querySelector(`#n${condition[1]}`).innerText;
        let box3 = document.querySelector(`#n${condition[2]}`).innerText;
        if(box1!="" && box2!="" && box3!=""){
            if(box1 == box2 && box2 == box3){
                return box1;
            }
        }
    }
}

function checkDraw(){
    for(let box of boxes){
        if(box.innerText==""){
            return false;
        }
    }
    return true;
}

for(let box of boxes){
    box.addEventListener('click',()=>{
        if(XTurn == true && box.innerHTML == ""){
            box.innerHTML = `<span>${symbol}</span>`;
            XTurn = false;
            symbol = "O";
            gameStatus.innerText = `${symbol}'s Turn!`;
        }
        else if(XTurn == false && box.innerHTML == ""){
            box.innerHTML = `<span>${symbol}</span>`;
            XTurn = true;
            symbol = "X";
            gameStatus.innerText = `${symbol}'s Turn!`;
        }
        if(checkWin()!=undefined){
            gameStatus.innerText = `${checkWin()} WINS!`;
            XTurn = 2;
        }
        else if(checkDraw()){
            gameStatus.innerText = `IT'S A TIE!`;
        }
    })
}