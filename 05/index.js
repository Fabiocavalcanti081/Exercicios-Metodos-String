const numeroCartao = '1111222233334444'; // 16 numeros
const cartaoParte1 = numeroCartao.slice(0, 4);
const cartaoParte2 = numeroCartao.slice(12, 16);
const cartaoEscondido = cartaoParte1 + cartaoParte2.padStart(12, "*");

console.log(cartaoEscondido);