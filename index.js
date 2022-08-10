let elScore1 = document.getElementById('scores1');

let elScore2 = document.getElementById('scores2');

function one(){
    elScore1.textContent++;
}

function two(){
    elScore1.textContent= parseInt(elScore1.textContent) + 2;
}

function three(){
     elScore1.textContent = parseInt(elScore1.textContent) + 3;
}

function oneMore(){
    elScore2.textContent++;
}

function twoMore(){
    elScore2.textContent = parseInt(elScore2.textContent) + 2;
}

function threeMore(){
    elScore2.textContent = parseInt(elScore2.textContent) + 3;
}