/* Esercizio parola Palindroma
--------------------------------
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


let myText = document.getElementById('myText');
const btn = document.querySelector('button');
let write = document.querySelector('.writeTheSolution');

btn.addEventListener('click', verifyWord);



function verifyWord(){
    let firstWord = myText.value;
    let result;
    let newWord = '';
    result = myText.value.split("")

    for (let i = result.length - 1; i >= 0; i--) { 
        newWord += result[i];
    }
    console.log(result);
    console.log(newWord);
    console.log(firstWord);
    
    if (firstWord === newWord) {
        write.innerText = `La parola è palindroma`;

    }else{
        write.innerText = `La parola non è palindroma`;
    }
    //console.log(result);
    
}