const input = document.querySelector('[data-input]');
const buttonRm = document.querySelector('[data-buttonRm]');
const buttonAd = document.querySelector('[data-buttonAd]');
const resultado = document.querySelector('[data-resultado]');
const tabela = document.querySelector('[data-tabela]')

let lista = [];

input.focus();

function adicionarItens() {
    if(lista.indexOf(input.value) != -1) {
        alert("Esse item já está na lista!");
    }
    else if(input.value === "") {
        alert("Digite um item!")
    }
    else {
        lista.push(input.value);

        let tbody = document.getElementById("tbody");
        tbody.innerText = "";

        for(let i = 0; i < lista.length; i++) {
            let tr = tbody.insertRow();
            tr.textContent = lista[i];
        }
    }
    
    input.value = "";
    input.focus();

}

buttonAd.addEventListener("click", () => {
    adicionarItens();
})


function removerItens() {
    if(lista.indexOf(input.value) === -1) {
        alert("Esse item não está na lista!")
    }
    else {
        for(let i = 0; i < lista.length; i++) {
            if(input.value == lista[i]) {
                lista.splice(lista.indexOf(input.value), 1);
            }
        }
        
        let tbody = document.getElementById("tbody");
        tbody.innerText = "";
    
        for(let i = 0; i < lista.length; i++) {
           let tr = tbody.insertRow();
           tr.textContent = lista[i];
        }
    }
    
    input.value = "";
    input.focus();
}

buttonRm.addEventListener("click", () => {
    removerItens();   
})

input.addEventListener("keyup", (event) => {
    if(event.code === "Enter") {
        adicionarItens();
    }
    else if(event.code === "Delete") {
        removerItens();
    }
})









   
    


