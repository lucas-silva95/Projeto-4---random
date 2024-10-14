const sortear = document.querySelector(".sortear"); // botão mapeado

sortear.addEventListener("click", buttonFunction);

function red() {
    const inputUm = document.querySelector(".numeroUm");
    const inputDois = document.querySelector(".numeroDois");

    // Adiciona uma borda vermelha caso os numeros dos inputs esteja incorreto  
    inputUm.style.border = "1px solid red";
    inputDois.style.border = "1px solid red";
}

function resetBorder() {
    const inputUm = document.querySelector(".numeroUm");
    const inputDois = document.querySelector(".numeroDois");

    // Remove a modificação na borda, retornando ao estilo original
    inputUm.style.border = "";
    inputDois.style.border = "";
}

function buttonFunction() {
    const inputUm = document.querySelector(".numeroUm");
    const inputDois = document.querySelector(".numeroDois");

    const min = Math.ceil(inputUm.value);
    const max = Math.floor(inputDois.value);
    const format = document.querySelector(".format");

    if (min >= max) {
        alert("O valor minímo não pode ser igual ou maior do que o valor máximo");
        red(); // Aplica a borda vermelha
    } else {
        resetBorder(); // Remove a borda vermelha, retornando ao estilo original
        const resultado = Math.floor(Math.random() * (max - min + 1)) + min;

        format.innerHTML = `Número Sorteado: ${resultado}`;
    }
}
