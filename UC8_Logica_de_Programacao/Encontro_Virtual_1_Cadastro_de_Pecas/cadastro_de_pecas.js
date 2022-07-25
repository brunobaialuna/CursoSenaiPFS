let listadepecas = [];

do {
    let pesodapeca = prompt("Digite o peso da peça: ");
    if (pesodapeca > 100) {
        let nomedapeca = prompt("Digite o nome da peça: ");
        if (nomedapeca.length >= 3) {
            listadepecas.push(nomedapeca);
            console.log(listadepecas);
            let continuar = prompt("Deseja cadastrar outra peça? S / N")
            if (continuar == "S" || continuar == 's') {
                continue;
            } else {
                break;
            }
        } else {
            alert("O nome da peça é inferior a 3 caracteres.");
            respostaNome = prompt("Deseja cadastrar uma nova peça? S / N");
            if (respostaNome == "S" || respostaNome == "s") {
                continue
            } else {
                break
            }
        }
    } else {
        alert("O peso da peça é inválido.");
        respostaPeso = prompt("Deseja cadastrar uma nova peça? S / N");
        if (respostaPeso == "S" || respostaPeso == "s") {
            continue
        } else {
            break
        }
    }
}

while (listadepecas.length < 10)

if (listadepecas.length == 10) {
    console.log("A caixa atingiu o número máximo de peças.")
}








