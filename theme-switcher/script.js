//Array de temas e mensagens 
const themes = [
  {
   name: "light",
   message: "Hello sunshine — Light theme is on!" 
  },
    {
   name: "dark",
   message: "The night is yours — Dark theme is on!" 
  },
    {
   name: "ocean",
   message: "Blue skies and high tides — Ocean theme is on!" 
  },
    {
   name: "nord",
   message: "The frost has settled - Nord theme is on!" 
  }
];

// elemento do switcher e do dropdown
const themeSwitcherButton = document.getElementById("theme-switcher-button");
const dropdown = document.getElementById("theme-dropdown");

//funçao para receber o click, verificar se o dropdown esta aberto ou fechado ai então fechar ou abrir o mesmo
themeSwitcherButton.addEventListener("click", () =>{
  if(!dropdown.hidden){
    dropdown.hidden = true;
    themeSwitcherButton.setAttribute("aria-expanded", "false");
  } else {
    dropdown.hidden = false;  
    themeSwitcherButton.setAttribute("aria-expanded", "true");
  }
});

//funçao que verifica em que tema foi clicado busca a mensagem no array e atribui o tema no body do html
dropdown.addEventListener("click", (event) =>{
  //pega o id do tema
  const clickedTheme = event.target.id;
  //remove a class do body andes de adicionar outra para nao acumular
  themes.forEach(theme => {
    document.body.classList.remove("theme-" + theme.name);
  });
  //adiciona a class do tema clicado no body
  document.body.classList.add(clickedTheme);
  
  //remove o "theme-" no clickedTheme para achar o objeto dentro do array theme correspondente
  const messageFinder = themes.find(theme =>{
     return theme.name === clickedTheme.replace("theme-", "");
  });
  
  //recebe o id e adiciona a message do objeto buscado no messageFinder
  const statusMessage = document.getElementById("status");
  statusMessage.textContent = messageFinder.message;
  
  dropdown.hidden= true;
  themeSwitcherButton.setAttribute("aria-expanded", "false");
});