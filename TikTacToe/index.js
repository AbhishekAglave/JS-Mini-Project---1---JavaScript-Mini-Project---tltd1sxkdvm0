let box1 = document.querySelector('#box1');
let box2 = document.querySelector('#box2');
let box3 = document.querySelector('#box3');
let box4 = document.querySelector('#box4');
let box5 = document.querySelector('#box5');
let box6 = document.querySelector('#box6');
let box7 = document.querySelector('#box7');
let box8 = document.querySelector('#box8');
let box9 = document.querySelector('#box9');
let winnerDiv = document.querySelector('#winner');

let clicksCount = 0;
function mark() {

    // Marking boxes
    if (clicksCount % 2 == 0) {
        this.innerText = '✓';
        this.setAttribute('disabled', '');
        clicksCount++;
        console.log(clicksCount);
    } else {
        this.innerText = '✗';
        this.setAttribute('disabled', '');
        clicksCount++;
        console.log(clicksCount);
    }
    // Checking Winner
    checkWinner();

    // increament count for next player's mark
    if (clicksCount == 9 && !winnerFound) {
        highlightAll()
        setTimeout(() => {
            showDraw();
        }, 1000);
    }
}

let winnerFound = false;
let winner = '';

function checkWinner() {
    // Checking for ✓ is winner or not;
    if(!winnerFound){
        // Checking Winner in horizontal lines
        if (box1.innerText == '✓' && box2.innerText == '✓' && box3.innerText == '✓') {
            winnerFound = true;
            highlightDivs(box1, box2, box3);
            winner='✓ is the winner!';
        }
        if (box4.innerText == '✓' && box5.innerText == '✓' && box6.innerText == '✓') {
            winnerFound = true;
            highlightDivs(box4, box5, box6);
            winner='✓ is the winner!';
        }
        if (box7.innerText == '✓' && box8.innerText == '✓' && box9.innerText == '✓') {
            winnerFound = true;
            highlightDivs(box7, box8, box9);
            winner='✓ is the winner!';
        }
    
        // Checking Winner in vertical lines
        if (box1.innerText == '✓' && box4.innerText == '✓' && box7.innerText == '✓') {
            winnerFound = true;
            highlightDivs(box1, box4, box7);
            winner='✓ is the winner!';
        }
        if (box2.innerText == '✓' && box5.innerText == '✓' && box8.innerText == '✓') {
            winnerFound = true;
            highlightDivs(box2, box5, box8);
            winner='✓ is the winner!';
        }
        if (box3.innerText == '✓' && box6.innerText == '✓' && box9.innerText == '✓') {
            winnerFound = true;
            highlightDivs(box3, box6, box9);
            winner='✓ is the winner!';
        }
    
        // Checking Winner in cross lines
        if (box1.innerText == '✓' && box5.innerText == '✓' && box9.innerText == '✓') {
            winnerFound = true;
            highlightDivs(box1, box5, box9);
            winner='✓ is the winner!';
        }
        if (box3.innerText == '✓' && box5.innerText == '✓' && box7.innerText == '✓') {
            winnerFound = true;
            highlightDivs(box3, box5, box7);
            winner='✓ is the winner!';
        }
    
        // Checking ✗ is winner or not;
        // Checking Winner in horizontal lines
        if (box1.innerText == '✗' && box2.innerText == '✗' && box3.innerText == '✗') {
            winnerFound = true;
            highlightDivs(box1, box2, box3);
            winner='✗ is the winner!';
        }
        if (box4.innerText == '✗' && box5.innerText == '✗' && box6.innerText == '✗') {
            winnerFound = true;
            highlightDivs(box4, box5, box6);
            winner='✗ is the winner!';
        }
        if (box7.innerText == '✗' && box8.innerText == '✗' && box9.innerText == '✗') {
            winnerFound = true;
            highlightDivs(box7, box8, box9);
            winner='✗ is the winner!';
        }
    
        // Checking Winner in vertical lines
        if (box1.innerText == '✗' && box4.innerText == '✗' && box7.innerText == '✗') {
            winnerFound = true;
            highlightDivs(box1, box4, box7);
            winner='✗ is the winner!';
        }
        if (box2.innerText == '✗' && box5.innerText == '✗' && box8.innerText == '✗') {
            winnerFound = true;
            highlightDivs(box2, box5, box8);
            winner='✗ is the winner!';
        }
        if (box3.innerText == '✗' && box6.innerText == '✗' && box9.innerText == '✗') {
            winnerFound = true;
            highlightDivs(box3, box6, box9);
            winner='✗ is the winner!';
        }
    
        // Checking Winner in cross lines
        if (box1.innerText == '✗' && box5.innerText == '✗' && box9.innerText == '✗') {
            winnerFound = true;
            highlightDivs(box1, box5, box9);
            winner='✗ is the winner!';
        }
        if (box3.innerText == '✗' && box5.innerText == '✗' && box7.innerText == '✗') {
            winnerFound = true;
            highlightDivs(box3, box5, box7);
            winner='✗ is the winner!';
        }
        // showing winner;
        if(winnerFound){
            setTimeout(() => {
                showWinner();
            }, 1000);
        }
    }
    else{
        console.log('winner is already declared');
    }
    
}

function resetGame(){
    location.reload();
}

function highlightDivs(first, second, third){
    first.classList.add('highlight');
    second.classList.add('highlight');
    third.classList.add('highlight');
}

function highlightAll(){
    for(let i=0; i<9; i++){
        let alldivs = document.querySelectorAll('.box');
        alldivs[i].classList.add('highlightAll');
    }
}

function showWinner(){
    winnerDiv.setAttribute('class', 'winner');
    let playagainbtn = document.createElement('button');
    winnerDiv.innerText = winner;
    playagainbtn.innerText = 'Play Again';
    playagainbtn.setAttribute('id', 'playagainbtn');
    playagainbtn.addEventListener('click', resetGame);
    winnerDiv.appendChild(playagainbtn);
}

function showDraw(){
    winnerDiv.setAttribute('class', 'winner');
    winnerDiv.innerText='Draw!'
    let playagainbtn = document.createElement('button');
    playagainbtn.innerText = 'Play Again';
    playagainbtn.setAttribute('id', 'playagainbtn');
    playagainbtn.addEventListener('click', resetGame);
    winnerDiv.appendChild(playagainbtn);
}

box1.addEventListener('click', mark);
box2.addEventListener('click', mark);
box3.addEventListener('click', mark);
box4.addEventListener('click', mark);
box5.addEventListener('click', mark);
box6.addEventListener('click', mark);
box7.addEventListener('click', mark);
box8.addEventListener('click', mark);
box9.addEventListener('click', mark);