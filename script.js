function calcular() {

    let hectares = Number(document.getElementById("hectares").value);

    if (hectares <= 0) {
        document.getElementById("resultado").innerHTML =
        "Digite um valor válido.";
        return;
    }

    let producao = hectares * 50;

    document.getElementById("resultado").innerHTML =
    "Produção estimada: " + producao + " toneladas.";
}
