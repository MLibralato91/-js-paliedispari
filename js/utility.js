const listMarket = [

    'pasta',
    'pesto',
    'verdura',
    'tiramisù',
    'formaggio'


]

const list = document.querySelector('ul');
let listItem= '';

for (let i = 0; i < listMarket.length; i++) {
    const listItem = document.createElement('li');
    listItem.innerHTML = listMarket[i];
    listMarket.appendChild(listItem);
    
}



