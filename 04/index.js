let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";
const nomePartes = nome.split(" ");
nome = "";

for (const letra of nomePartes) {
    nome += letra.slice(0, 1).toUpperCase() + letra.slice(1) + " ";
}
if (identificador.length < 6) {
    identificador = identificador.padStart(6, "0");
}

console.log(identificador);
console.log(nome.trim());
console.log(email.trim());