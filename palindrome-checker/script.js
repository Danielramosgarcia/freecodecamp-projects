//variaveis para receber o input, botao e resultado
const input = document.querySelector("#text-input");
const button = document.querySelector("#check-btn");
const result = document.querySelector("#result");

//metodo que espera o click para exibir um alerta se o input estiver vazio ou exibir a mensagem de que é ou nao um palindromo
button.addEventListener("click", ()=>{
  //condiçao que verifica se o input esta vazio
  if(input.value === ""){
    alert("Por favor digite algum valor.");
    return
  }
  //variavel que transforma o input em minusculo e substitui tudo que nao é letra e numero por nada
  const cleanInput = input.value.toLowerCase().replace(/[^a-z0-9]/g, "");

  //condiçao que compara o cleanInput com sua versao reversa para exibir a mensagem de que e ou nao um palindromo
  result.textContent = cleanInput === cleanInput.split("").reverse().join("")
  ? `${input.value} É um palíndromo.`
  : `${input.value} Não é um palíndromo.`
})