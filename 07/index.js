const email = "jose@cubos.academy.br";
const i = email.length - 1;
let validaEmail = 0;

for (const letra of email) {
    if (letra === "@" || letra === ".") {
        validaEmail++;
    }
}
if (email.indexOf(".") === 0 || email.indexOf("@") === 0) {
    console.log(`E-mail inválido.`);
} else if (email.lastIndexOf(".") === i || email.lastIndexOf("@") === i) {
    console.log(`E-mail inválido.`);
} else if (validaEmail < 2) {
    console.log(`E-mail inválido.`);
} else {
    console.log(`E-mail válido.`);
}