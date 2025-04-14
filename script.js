
function converterTemp(diferenciar) {
    // O parametro aqui é para diferenciar se ta sendo convertido de celsius para fahrenheit ou vice-versa
    // vou usar bool por eficiencia, evitando variáveis inúteis
    // true = C>F | false = F>C

    var temperatura = document.getElementById("temp").value;
    temperatura = parseFloat(temperatura);
    var resultado;

    if (diferenciar == true) {
        resultado = (temperatura * 9/5) + 32;
        resultado = `${temperatura}°C = ${resultado.toFixed(2)}°F`;

    }
    else {
        resultado = (temperatura - 32) * 5/9;
        resultado = `${temperatura}°F = ${resultado.toFixed(2)}°C`; 
    }

    // a partir daqui os esforços é pra inserir esse resultado numa posição especifica do nosso site (HTML)

    let DivResultado = document.getElementById("resultadodiv");
    if (!DivResultado) {

        DivResultado = document.createElement("div");
        DivResultado.id = "resultadodiv";
        DivResultado.classList.add("resultado");

        var texto = document.createElement("p");
        texto.id="resultadotexto";
        texto.textContent = resultado;
        DivResultado.appendChild(texto);

        const bloco = document.querySelector(".conversionblock");
        bloco.insertAdjacentElement("afterend", DivResultado);
    }

    else {
        document.getElementById("resultadotexto").textContent = resultado;
    }

}




















 

