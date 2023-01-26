const nomeArquivo = 'Foto da Familia.png';

function validaArquivo(arquivo) {
    if (arquivo.includes("jpg") || arquivo.includes("jpeg") ||
        arquivo.includes("gif") || arquivo.includes("png")) {
        console.log("Arquivo válido");
    } else {
        console.log("Arquivo inválido");
    }
}

validaArquivo(nomeArquivo);