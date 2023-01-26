const nome = 'Guido Cerqueira';

function nickname(nome) {
    nome = nome.toLowerCase();
    nome = nome.replace(" ", "");
    nome = nome.slice(0, 12);
    console.log(`@${nome}`);
}

nickname(nome);