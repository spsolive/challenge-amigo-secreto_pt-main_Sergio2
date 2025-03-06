//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value.trim(); // Remove espaços em branco extras;
    
	if(!nomeAmigo) {
        alert("Digite o nome do amigo");
        return;
	}
	
	if (!/^[A-Za-z]+$/.test(nomeAmigo)) {
        alert("Por favor, insira apenas letras no nome.");
        inputAmigo.value = "";
        inputAmigo.focus();
        return;
    }
    
    if (nomeAmigo.length < 3) {
        alert("O nome deve ter no mínimo 3 letras.");
        inputAmigo.value = "";
        inputAmigo.focus();
        return;
    }
	
    amigos.push(nomeAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    atualizarLista();
}

function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    
    for(let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if(amigos.length < 2) {
        alert("É necessário inserir pelo menos dois amigos para realizar o sorteio.");
        return;
    }
    
    if (amigos.length === 0) {
        alert("Nenhum amigo adicionado");
        return;
    }
    
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sortedo foi: ${sorteado}`;
}

function resetarAmigo() {
    amigos = []; // Limpa a lista de amigos
    atualizarLista(); // Atualiza a lista exibida
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpa o resultado do sorteio
}
