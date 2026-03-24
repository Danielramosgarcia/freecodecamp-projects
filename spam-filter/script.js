//variavel que armazena o input do usuario
const messageInput = document.getElementById("message-input");
//variavel que armazena o resultado
const result = document.getElementById("result");
//variavel que armazena a checagem 
const checkMessageButton = document.getElementById("check-message-btn");

//regexs que definem o que vai ser considerado spam
const helpRegex = /please help|assist me/i;
const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;
const dearRegex = /(?:^|\s)d[e3][a4@]r fr[i1|][e3]nd(?:$|\s)/i;

//variavel que transforma em array todas as regex para serem validadas
const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

//funçao que recebe a mensagen usa o some para seperar os regex e comparar com test para retorna true ou false
const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

//evento que exibe mensagem se o input estiver vazio, se for spam ou nao e limpa o input
checkMessageButton.addEventListener("click", () => {
    //verifica o input vazio
    if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }
  //verifica se é spam ou nao
  result.textContent = isSpam(messageInput.value)
  ? "Oh no! This looks like a spam message."
  : "This message does not seem to contain any spam.";
  //limpa o input
  messageInput.value = "";
});