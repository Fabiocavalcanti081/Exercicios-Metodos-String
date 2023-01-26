const cpf = "12345678900";
const cnpj = "12345678000199";

if (cpf.length === 11) {
    const cpfParte1 = cpf.slice(0, 3);
    const cpfParte2 = cpf.slice(3, 6);
    const cpfParte3 = cpf.slice(6, 9);
    const cpfParte4 = cpf.slice(9, 11);
    console.log(`${cpfParte1}.${cpfParte2}.${cpfParte3}-${cpfParte4}`);
} else {
    console.log("CPF Inválido");
}
if (cnpj.length === 14) {
    const cnpjParte1 = cnpj.slice(0, 2);
    const cnpjParte2 = cnpj.slice(2, 5);
    const cnpjParte3 = cnpj.slice(5, 8);
    const cnpjParte4 = cnpj.slice(8, 12);
    const cnpjParte5 = cnpj.slice(12);
    console.log(`${cnpjParte1}.${cnpjParte2}.${cnpjParte3}/${cnpjParte4}-${cnpjParte5}`);
} else {
    console.log("CNPJ Inválido");
}