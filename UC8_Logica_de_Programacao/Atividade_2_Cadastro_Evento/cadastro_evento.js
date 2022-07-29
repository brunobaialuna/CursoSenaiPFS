let listaDeParticipantes = [];
let listaDePalestrantes = [];
const data = new Date();
var continuar = 'S';

while (continuar == "S" || continuar == "s") {
    let diaEvento = prompt("Digite o dia do evento: "); 
    let mesEvento = prompt("Digite o mês do evento: "); 
    let anoEvento = prompt("Digite o ano do evento: ");
    let dtEvento = anoEvento + "-" + mesEvento + "-" + diaEvento;
    var dataEvento = new Date(dtEvento); // Como a função date só reconhece data no formato americano, utilzei a entrada separada do dia, mês e ano para poder concatenar as informações no padrão aceito e transformar a string em um objeto para fazer a comparação de data.
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


