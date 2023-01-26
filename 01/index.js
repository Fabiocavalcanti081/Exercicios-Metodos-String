const comentario = "Esse é COVID muito perigoso!";
const comentario1 = "Essa pandemia é mentira";

function filtro(comentario) {
    let covid = ["covid", "Covid", "COVID"];
    if (comentario.indexOf("COVID") != -1 || comentario.indexOf("covid") != -1 || comentario.indexOf("Covid") != -1) {
        console.log("Comentário bloqueado por conter palavras proibidas");
    } else if (comentario.indexOf("PANDEMIA") != -1 || comentario.indexOf("pandemia") != -1 || comentario.indexOf("Pandemia") != -1) {
        console.log("Comentário bloqueado por conter palavras proibidas");
    } else {
        console.log("Comentário autorizado");
    }
}

filtro(comentario1);