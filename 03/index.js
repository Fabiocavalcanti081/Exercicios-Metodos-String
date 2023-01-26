const texto = "Aprenda programar do zero na Cubos Academy";
let textoMinusculo = texto.toLowerCase();

while (textoMinusculo !== textoMinusculo.replace(" ", "-")) {
    textoMinusculo = textoMinusculo.replace(" ", "-");
}

console.log(textoMinusculo);
