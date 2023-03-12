const input = document.querySelector('[data-input]');
const buttonRm = document.querySelector('[data-buttonRm]');
const buttonAd = document.querySelector('[data-buttonAd]');
const resultado = document.querySelector('[data-resultado]');
const tabela = document.querySelector('[data-tabela]')

let lista = [];

input.focus();

buttonAd.addEventListener("click", () => {
    lista.push(input.value);
    input.value = "";

    let tbody = document.getElementById("tbody");
    tbody.innerText = "";

    for(let i = 0; i < lista.length; i++) {
       let tr = tbody.insertRow();
       tr.textContent = lista[i];
    }

    input.focus();

})

buttonRm.addEventListener("click", () => {
    for(let i = 0; i < lista.length; i++) {
        if(input.value == lista[i]) {
            lista.splice(lista.indexOf(input.value), 1);
        }
    }

    input.value = "";
    
    let tbody = document.getElementById("tbody");
    tbody.innerText = "";

    for(let i = 0; i < lista.length; i++) {
       let tr = tbody.insertRow();
       tr.textContent = lista[i];
    }

    input.focus();
})









   
    


