let listaDeParticipantes = [];
let listaDePalestrantes = [];
const dataAtual = new Date(); // Gera a data atual
var continuar = 's';


while (continuar == "s") {
    var dataev = prompt("Digite a data do evento (dd/mm/aaaa): ")
    dataev = dataev.replace(/[/]+/g, ""); // substitui as "/" da data por "-"
    var dataev = dataev.substring(4, 8) + "-" + dataev.substring(2, 4) + "-" + dataev.substring(0, 2); // altera a data para o padrão americano.
    var dataEvento = new Date(dataev); // transforma a string em objeto para poder ser comparada com a data atual.

    if (dataEvento > dataAtual) {
        while (listaDeParticipantes.length < 100) {
            var continuar = "n"
            let idade = prompt("Digite a idade do participante/palestrante: ");

            if (idade >= 18) {
                let nome = prompt("Digite o nome do participante/palestrante: ");
                let respostaPaPL = prompt("Digite PA se você for um participante ou PL se você for um palestrante: ")
                respostaPaPL = respostaPaPL.toLowerCase()

                if (respostaPaPL == "pa") {
                    listaDeParticipantes.push(nome);
                    console.log("Palestrantes\n", listaDePalestrantes);
                    console.log("Participantes\n", listaDeParticipantes);
                    let resposta = prompt("Deseja adicionar outra pessoa? S / N");
                    resposta = resposta.toLocaleLowerCase();

                    if (resposta == "s") {
                        continue;
                    } else {
                        break
                    }

                } else if (respostaPaPL == "pl") {
                    listaDePalestrantes.push(nome);
                    console.log("Palestrantes\n", listaDePalestrantes);
                    console.log("Participantes\n", listaDeParticipantes);
                    let resposta = prompt("Deseja adicionar outra pessoa? S / N");
                    resposta = resposta.toLocaleLowerCase();

                    if (resposta == "s") {
                        continue;
                    } else {
                        break
                    }

                } else {
                    alert("Você não digitou uma opção correta!")
                    continue
                }

            } else {
                alert("Idade inferior a 18 anos, cadastro não permitido.");
                var continuar = prompt("Deseja cadastrar uma nova pessoa? S / N");
                continuar = continuar.toLowerCase();

                if (continuar == "s") {
                    continue;

                } else {
                    var continuar = "n"
                    break
                }

            }
        }

    } else {
        alert("Data do evento é inválida!");
        var continuar = prompt("Deseja informar uma nova data? S / N");
        continuar = continuar.toLocaleLowerCase()

        if (continuar == "s") {
            continue;
        } else {
            var continuar = "n";
        }
    }
}


if (listaDeParticipantes.length == 100) {
    alert("O evento atingiu o número máximo de participantes!")
}
