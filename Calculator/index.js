let input = document.querySelector('#input');
let expression = document.querySelector('#expression');
let answer = 0;

function display(){
    if(input.value==answer && this.value==0){
        input.value="";
    }
    if(input.value==answer && this.value==1){
        input.value="";
    }
    if(input.value==answer && this.value==2){
        input.value="";
    }
    if(input.value==answer && this.value==3){
        input.value="";
    }
    if(input.value==answer && this.value==4){
        input.value="";
    }
    if(input.value==answer && this.value==5){
        input.value="";
    }
    if(input.value==answer && this.value==6){
        input.value="";
    }
    if(input.value==answer && this.value==7){
        input.value="";
    }
    if(input.value==answer && this.value==8){
        input.value="";
    }
    if(input.value==answer && this.value==9){
        input.value="";
    }

    if(input.value.length==0){
        input.value="";
    }
    input.value+=this.value;
}

function flashIn(){
    input.classList.add('flash');
}
function flashOut(){
    input.classList.remove('flash');
}

function calculate(event){
    event.preventDefault();
    answer = eval(input.value);
    if(input.value!=''){
        expression.innerHTML = input.value+" =";
        input.value = answer;
    }
}

function clear(){
    input.value = '';
    expression.innerHTML = input.value+"";
}
document.querySelector('#block00').addEventListener('mousedown', flashIn);
document.querySelector('#block00').addEventListener('mouseup', flashOut);

document.querySelector('#block0').addEventListener('mousedown', flashIn);
document.querySelector('#block0').addEventListener('mouseup', flashOut);

document.querySelector('#block1').addEventListener('mousedown', flashIn);
document.querySelector('#block1').addEventListener('mouseup', flashOut);

document.querySelector('#block2').addEventListener('mousedown', flashIn);
document.querySelector('#block2').addEventListener('mouseup', flashOut);

document.querySelector('#block3').addEventListener('mousedown', flashIn);
document.querySelector('#block3').addEventListener('mouseup', flashOut);

document.querySelector('#block4').addEventListener('mousedown', flashIn);
document.querySelector('#block4').addEventListener('mouseup', flashOut);

document.querySelector('#block5').addEventListener('mousedown', flashIn);
document.querySelector('#block5').addEventListener('mouseup', flashOut);

document.querySelector('#block6').addEventListener('mousedown', flashIn);
document.querySelector('#block6').addEventListener('mouseup', flashOut);

document.querySelector('#block7').addEventListener('mousedown', flashIn);
document.querySelector('#block7').addEventListener('mouseup', flashOut);

document.querySelector('#block8').addEventListener('mousedown', flashIn);
document.querySelector('#block8').addEventListener('mouseup', flashOut);

document.querySelector('#block9').addEventListener('mousedown', flashIn);
document.querySelector('#block9').addEventListener('mouseup', flashOut);

document.querySelector('#plus').addEventListener('mousedown', flashIn);
document.querySelector('#plus').addEventListener('mouseup', flashOut);

document.querySelector('#minus').addEventListener('mousedown', flashIn);
document.querySelector('#minus').addEventListener('mouseup', flashOut);

document.querySelector('#divide').addEventListener('mousedown', flashIn);
document.querySelector('#divide').addEventListener('mouseup', flashOut);

document.querySelector('#multiply').addEventListener('mousedown', flashIn);
document.querySelector('#multiply').addEventListener('mouseup', flashOut);

document.querySelector('#dot').addEventListener('mousedown', flashIn);
document.querySelector('#dot').addEventListener('mouseup', flashOut);

document.querySelector('#clr').addEventListener('mousedown', flashIn);
document.querySelector('#clr').addEventListener('mouseup', flashOut);

document.querySelector('#ans').addEventListener('mousedown', flashIn);
document.querySelector('#ans').addEventListener('mouseup', flashOut);


document.querySelector('#block00').addEventListener('click', display);
document.querySelector('#block0').addEventListener('click', display);
document.querySelector('#block1').addEventListener('click', display);
document.querySelector('#block2').addEventListener('click', display);
document.querySelector('#block3').addEventListener('click', display);
document.querySelector('#block4').addEventListener('click', display);
document.querySelector('#block5').addEventListener('click', display);
document.querySelector('#block6').addEventListener('click', display);
document.querySelector('#block7').addEventListener('click', display);
document.querySelector('#block8').addEventListener('click', display);
document.querySelector('#block9').addEventListener('click', display);
document.querySelector('#plus').addEventListener('click', display);
document.querySelector('#minus').addEventListener('click', display);
document.querySelector('#divide').addEventListener('click', display);
document.querySelector('#multiply').addEventListener('click', display);
document.querySelector('#dot').addEventListener('click', display);

document.querySelector('#form').addEventListener('submit', calculate);
document.querySelector('#clr').addEventListener('click', clear);
input.addEventListener('keydown', flashIn);
input.addEventListener('keyup', flashOut);