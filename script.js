const sortear = document.querySelector(".sortear") // button mapeado //

sortear.addEventListener("click", buttonFunction)

function buttonFunction(){
    const min = Math.ceil (document.querySelector(".numeroUm").value)
    const max = Math.floor (document.querySelector(".numeroDois").value)
    const format = document.querySelector(".format")

    if(min >= max){
        alert("O valor minímo não pode ser igual ou maior do que o valor máximo")
    } 
    
    else {
        const resultado = Math.floor(Math.random() * (max - min + 1) ) + min;
    
        format.innerHTML = `Número Sorteado: ${resultado}`
    }
}

