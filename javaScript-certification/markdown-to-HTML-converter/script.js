//constante para armazenar o input do usuario
const input = document.querySelector("#markdown-input")

//funçao que converte o input para o seu determinado padrao usando replace com regex
const convertMarkdown = () => { 
  
  const result = input.value
    .replace(/^### (.+)/gm, "<h3>$1</h3>")
    .replace(/^## (.+)/gm, "<h2>$1</h2>")
    .replace(/^# (.+)/gm, "<h1>$1</h1>")
    .replace(/\*\*(.+?)\*\*/gm, "<strong>$1</strong>")
    .replace(/__(.+?)__/gm, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/gm, "<em>$1</em>")
    .replace(/_(.+?)_/gm, "<em>$1</em>")
    .replace(/!\[(.+?)\]\((.+?)\)/gm, `<img alt="$1" src="$2">`)
    .replace(/\[(.+?)\]\((.+?)\)/gm,`<a href="$2">$1</a>`)
    .replace(/^> (.+)/gm, "<blockquote>$1</blockquote>");
  return result;
}

//evento para ouvir o input e converter em tempo real com textContet para texto e innerHTML para modificar direto no HTML
input.addEventListener("input", () =>{
    const htmOutput = convertMarkdown();
    document.querySelector("#html-output").textContent = htmOutput;
    document.querySelector("#preview").innerHTML = htmOutput;

})