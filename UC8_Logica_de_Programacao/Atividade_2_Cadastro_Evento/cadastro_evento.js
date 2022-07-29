let listaDeParticipantes = [];
let listaDePalestrantes = [];
const data = new Date();
var continuar = 'S';

while (continuar == "S" || continuar == "s") {
    var dataev = prompt("Digite a data do evento (dd/mm/aaaa): ")
    dataev = dataev.replace(/[/]+/g, "");
    var dataev = dataev.substring(4, 8) + "-" + dataev.substring(2, 4) + "-" + dataev.substring(0, 2);
    var dataEvento = new Date(dataev);
    if (dataEvento > dataAtual) {
        while (listaDeParticipantes.length < 100) {
            var continuar = "N"
            let idade = prompt("Digite a idade do participante/palestrante: ");
            if (idade >= 18) {
                let nome = prompt("Digite o nome do participante/palestrante: ");
                let respostaPaPL = prompt("Digite PA se você for um participante ou PL se você for um palestrante: ")
                if (respostaPaPL == "PA" || respostaPaPL == "pa") {
                    listaDeParticipantes.push(nome);
                    console.log("Palestrantes\n", listaDePalestrantes);
                    console.log("Participantes\n", listaDeParticipantes);
                    let resposta = prompt("Deseja adicionar outra pessoa? S / N");
                    if (resposta == "S" || resposta == "s") {
                        continue;
                    } else {
                        break
                    }
                } else if (respostaPaPL == "PL" || respostaPaPL == "pl") {
                    listaDePalestrantes.push(nome);
                    console.log("Palestrantes\n", listaDePalestrantes);
                    console.log("Participantes\n", listaDeParticipantes);
                    let resposta = prompt("Deseja adicionar outra pessoa? S / N");
                    if (resposta == "S" || resposta == "s") {
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
                if (continuar == "S" || continuar == "s") {
                    continue;
                } else {
                    var continuar = "N"
                    break
                }

            }
        }

    } else {
        alert("Data do evento é inválida!");
        var continuar = prompt("Deseja informar uma nova data? S / N");
        if (continuar == "S" || continuar == "s") {
            continue;
        } else {
            var continuar = "N";
        }
    }
}


if (listaDeParticipantes.length == 100) {
    alert("O evento atingiu o número máximo de participantes!")
}


