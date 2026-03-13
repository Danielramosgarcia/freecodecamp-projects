//Pega o id da nota e da mensagem de ediçao
const noteEl = document.getElementById("note");
const statusEl = document.getElementById("status");

//variavel para salvar o conteudo atual
let currentContent = "";

//Quando o usuario clica no texto ele ganha foco e limpa a mensagem de status
noteEl.addEventListener("focus", ()=> {
  statusEl.textContent = "";
});

//Quando o usuario sai do texto ele perde foco e verifica se houve alteraçao
noteEl.addEventListener("blur", () => {
  //Variavel que salva o conteudo editado
  const newContent = noteEl.innerHTML;
  //Se nao ouve alteraçao nao faz nada
  if (currentContent === newContent) {
    return;
  }
  //Atualiza o conteudo atual para a nova versao
  currentContent = newContent;
  console.log(currentContent);
 //Imprime uma mensagem de ediçao salva
  statusEl.textContent = "Note saved successfully!";
});

//Quando a pagina carrega, salva o conteudo no currentContent vazio.
window.addEventListener("DOMContentLoaded", () => {
  currentContent = noteEl.textContent;
});