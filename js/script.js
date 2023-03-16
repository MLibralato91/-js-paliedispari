/* Esercizio parola Palindroma
--------------------------------
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


let myText = document.getElementById('myText');
const btn = document.getElementById('verify');
let write = document.querySelector('.writeTheSolution');

btn.addEventListener('click', verifyWord);



function verifyWord() {
    let firstWord = myText.value;
    let result;
    let newWord = '';
    result = myText.value.split("")

    for (let i = result.length - 1; i >= 0; i--) {
        newWord += result[i];
    }

    console.log(newWord);
    console.log(firstWord);

    if (firstWord === newWord) {
        write.innerText = `La parola è palindroma`;

    } else {
        write.innerText = `La parola non è palindroma`;
    }
    //console.log(result);

}

/* Esercizio Pari e Dispari
--------------------------------
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

const choose = document.getElementById('choose');
let myChoose;

document.getElementById('choose').addEventListener('change', function () {
    myChoose = this.value;
    console.log(myChoose);
});

console.log(myChoose);

let myNumber = document.querySelector('.myNumber');
let pcNumber = document.querySelector('.pcNumber');
let winLost = document.querySelector('.winLost');

myChoice = document.getElementById('myNumber');

console.log(pcNumber);

pcChoice = Math.floor(Math.random() * 5) + 1;

playBtn = document.getElementById('play');
console.log(pcChoice);
let addict;


playBtn.addEventListener('click', calc);

function calc() {
    addict = pcChoice + parseInt(myChoice.value);

    myNumber.innerText = `Il tuo numero è ${myChoice.value}`;
    pcNumber.innerText = `Il numero del computer è ${pcChoice}`;


    if (addict % 2 === 0 && myChoose === 'even') {
        winLost.innerText = `Hai vinto`;

    }
    winLost.innerText = `Hai perso`;

}