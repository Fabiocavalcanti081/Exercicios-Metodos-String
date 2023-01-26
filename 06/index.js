const celular = 7199918888;
const celularString = String(celular);

function formatarCelular(celular) {
    if (celular.length === 11) {
        const cel1 = celular.slice(0, 2);
        const cel2 = celular.slice(2, 3);
        const cel3 = celular.slice(3, 7);
        const cel4 = celular.slice(7, 11);
        console.log(`(${cel1}) ${cel2} ${cel3}-${cel4}`);
    } else if (celular.length === 10) {
        const cel1 = celular.slice(0, 2);
        const cel2 = celular.slice(2, 6);
        const cel3 = celular.slice(6, 10);

        console.log(`(${cel1}) 9 ${cel2}-${cel3}`);
    } else if (celular.length === 9) {
        const cel1 = celular.slice(0, 1);
        const cel2 = celular.slice(1, 5);
        const cel3 = celular.slice(5, 9);

        console.log(`${cel1} ${cel2}-${cel3}`);
    } else if (celular.length === 8) {
        const cel1 = celular.slice(0, 4);
        const cel2 = celular.slice(4, 8);

        console.log(`9 ${cel1}-${cel2}`);
    }
}

formatarCelular(celularString);