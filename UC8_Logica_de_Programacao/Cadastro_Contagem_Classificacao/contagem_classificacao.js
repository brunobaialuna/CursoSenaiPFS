// // Codificação de um sistema de Contagem e classificação.

// A EMPRESA SAVINIS, FOCADA NO DESENVOLVIMENTO DE SOFTWARE DE ALTA PERFORMANCE, CONTRATOU VOCÊ PARA REALIZAR A PROGRAMAÇÃO DE UM SISTEMA DE CONTROLE DE ALUNOS DE UMA ESCOLA. O SISTEMA DEVERÁ FUNCIONAR DA SEGUINTE FORMA:

// CONSIDERE A QUANTIDADE DE ALINOS PRESENTES NA SALA, PERCORRA DO ZERO ATÉ O NÚMERO TOTAL DE ALUNOS E RETORNAR OS SEGUINTES RESULTADOS:

// SE O NÚMERO FOR PAR, ESCREVA "PAR" E O NÚMERO CORRESPONDENTE.
// SE O NÚMERO FOR ÍMPAR, ESCREVA ÍMPAR E O NÚMERO CORRESPONDENTE.
// SE O NÚMERO FOR "ZERO", ESCREVA ZERO E O NÚMERO CORRESPONDENTE.

var qtdAlunos = prompt("Informe a quantidade de alunos: ");
qtdAlunos = parseInt(qtdAlunos); // Transforma a string em inteiro.

for (var alunos = 0; alunos <= qtdAlunos; alunos++) {

    if (alunos == 0) {
        console.log(`${alunos} - Zero.`);

    } else if ((alunos % 2) != 0) {
        console.log(`${alunos} - Ímpar.`);

    } else {
        console.log(`${alunos} - Par.`);
    }
}
