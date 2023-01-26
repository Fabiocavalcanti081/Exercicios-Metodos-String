const cpf = "011.022.033-44";

function cpfSemPontuacao(cpf) {
    let retirandoPontuacao = cpf.replace(".", "");

    while (retirandoPontuacao !== retirandoPontuacao.replace(".", "")) {
        retirandoPontuacao = retirandoPontuacao.replace(".", "");
    }
    retirandoPontuacao = retirandoPontuacao.replace("-", "");

    return retirandoPontuacao;
}

console.log(cpfSemPontuacao(cpf));