let box1 = document.querySelector('#box1');
let box2 = document.querySelector('#box2');
let box3 = document.querySelector('#box3');
let box4 = document.querySelector('#box4');
let box5 = document.querySelector('#box5');
let box6 = document.querySelector('#box6');
let box7 = document.querySelector('#box7');
let box8 = document.querySelector('#box8');
let box9 = document.querySelector('#box9');

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
    if (clicksCount == 2) {
        clicksCount = 0;
    }
}

let winnerFound = false;

function checkWinner() {
    // Checking for ✓ is winner or not;
    // Checking Winner in horizontal lines
    if(!winnerFound){
        if (box1.innerText == '✓' && box2.innerText == '✓' && box3.innerText == '✓') {
            winnerFound = true;
            console.log('✓ is the Winner!');
        }
        if (box4.innerText == '✓' && box5.innerText == '✓' && box6.innerText == '✓') {
            winnerFound = true;
            console.log('✓ is the Winner!');
        }
        if (box7.innerText == '✓' && box8.innerText == '✓' && box9.innerText == '✓') {
            winnerFound = true;
            console.log('✓ is the Winner!');
        }
    
        // Checking Winner in vertical lines
        if (box1.innerText == '✓' && box4.innerText == '✓' && box7.innerText == '✓') {
            winnerFound = true;
            console.log('✓ is the Winner!');
        }
        if (box2.innerText == '✓' && box5.innerText == '✓' && box8.innerText == '✓') {
            winnerFound = true;
            console.log('✓ is the Winner!');
        }
        if (box3.innerText == '✓' && box6.innerText == '✓' && box9.innerText == '✓') {
            winnerFound = true;
            console.log('✓ is the Winner!');
        }
    
        // Checking Winner in cross lines
        if (box1.innerText == '✓' && box5.innerText == '✓' && box9.innerText == '✓') {
            winnerFound = true;
            console.log('✓ is the Winner!');
        }
        if (box3.innerText == '✓' && box5.innerText == '✓' && box7.innerText == '✓') {
            winnerFound = true;
            console.log('✓ is the Winner!');
        }
    
        // Checking ✗ is winner or not;
        // Checking Winner in horizontal lines
        if (box1.innerText == '✗' && box2.innerText == '✗' && box3.innerText == '✗') {
            winnerFound = true;
            console.log('✓ is the Winner!');
        }
        if (box4.innerText == '✗' && box5.innerText == '✗' && box6.innerText == '✗') {
            winnerFound = true;
            console.log('✗ is the Winner!');
        }
        if (box7.innerText == '✗' && box8.innerText == '✗' && box9.innerText == '✗') {
            winnerFound = true;
            console.log('✗ is the Winner!');
        }
    
        // Checking Winner in vertical lines
        if (box1.innerText == '✗' && box4.innerText == '✗' && box7.innerText == '✗') {
            winnerFound = true;
            console.log('✗ is the Winner!');
        }
        if (box2.innerText == '✗' && box5.innerText == '✗' && box8.innerText == '✗') {
            winnerFound = true;
            console.log('✗ is the Winner!');
        }
        if (box3.innerText == '✗' && box6.innerText == '✗' && box9.innerText == '✗') {
            winnerFound = true;
            console.log('✗ is the Winner!');
        }
    
        // Checking Winner in cross lines
        if (box1.innerText == '✗' && box5.innerText == '✗' && box9.innerText == '✗') {
            winnerFound = true;
            console.log('✗ is the Winner!');
        }
        if (box3.innerText == '✗' && box5.innerText == '✗' && box7.innerText == '✗') {
            winnerFound = true;
            console.log('✗ is the Winner!');
        }
        if(winnerFound){
            document.querySelector('#winner').setAttribute('class', 'winner');
        }
    }
    else{
        console.log('winner is already declared');
    }
    
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