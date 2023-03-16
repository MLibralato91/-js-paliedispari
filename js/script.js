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

let result;
let reverseResult;
function verifyWord(){
    result = myText.value.split("");
    
    

    reverseResult = result.reverse();
    
    console.log(result);
    console.log(reverseResult);
    console.log(myText.value);
    if (result === reverseResult) {
        write.innerText = `La parola è palindroma`;
        

    }else{
        write.innerText = `La parola non è palindroma`;
    }
    //console.log(result);
    
}