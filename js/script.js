function MAIOR_MENOR() {
    const a = parseInt(document.getElementById('a').value);
    const b = parseInt(document.getElementById('b').value);
    const c = parseInt(document.getElementById('c').value);
    const d = parseInt(document.getElementById('d').value);
    const e = parseInt(document.getElementById('e').value);

    const valores = [a, b, c, d, e];
    const max = Math.max(...valores);
    const min = Math.min(...valores);


    document.getElementById('result1').innerText = `Maior valor: ${max} \n\nMenor valor: ${min}`;
}

function VOGAL() {
    const c = document.getElementById('char').value.toLowerCase();
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    const resultado = vogais.includes(c) ? 1 : 0;

    document.getElementById('result2').innerText = `Resultado: ${resultado}`;
}

function LIMITES() {
    const li = parseInt(document.getElementById('limInf').value);
    const ls = parseInt(document.getElementById('limSup').value);

    let pares = [];
    let soma = 0;

    for (let i = li; i < ls; i++) {
        if (i % 2 === 0) {
            pares.push(i);
            soma += i;
        }
    }

    document.getElementById('result3').innerText = `Pares: ${pares.join(', ')}, \n\nSomatório: ${soma}`;
}

function ORDEM() {
    const a = parseInt(document.getElementById('val1').value);
    const b = parseInt(document.getElementById('val2').value);
    const c = parseInt(document.getElementById('val3').value);

    const sorted = [a, b, c].sort((x, y) => x - y);

    document.getElementById('result4').innerText = `Ordem crescente: ${sorted.join(', ')}`;
}

function POSITIVO_NEGATIVO() {
    const x = parseInt(document.getElementById('poNe').value);
    const resultado = x >= 0;

    document.getElementById('result5').innerText = `Positivo: ${resultado}`;
}

function PAR_IMPAR() {
    const x = parseInt(document.getElementById('paIn').value);
    const resultado = x % 2 === 0;

    document.getElementById('result6').innerText = `Par: ${resultado}`;
}