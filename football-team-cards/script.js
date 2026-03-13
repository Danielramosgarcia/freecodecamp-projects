//Importa as informaçoes dos cards
import {footballTeam} from './cards.js';

//Adiciona o nome do time o ano e o treinador
document.getElementById("team").innerText = footballTeam["team"];
document.getElementById('year').innerText = footballTeam['year'];
document.getElementById('head-coach').innerText = footballTeam["headCoach"];

//Funçao que exibe os cards dos jogadores na tela
function displayPlayers(playersArray) {
  //percorre cada jogador do objeto
  playersArray.forEach(function(player){
    //pega o container aonde os cards serao inseridos
    const playerCards = document.getElementById('player-cards');
     
    //Adiciona no HTML os cards dos jogadores usando template literal e adiciona "(Captain)" caso o jopador seja capitao do time
    playerCards.innerHTML += `
      <div class='player-card'>
      <h2>${player['isCaptain']? "(Captain) " + player['name'] : player.name}</h2>
      <p>Position: ${player['position']}</p>
      </div>
    `;
  });  
}
//Exibe todos os jogadores quando carrega a pagina
displayPlayers(footballTeam.players);

//Pega o id de onde as opçoes e escuta qual opçao foi selecionada e filtra por essa escolha
document.getElementById('players').addEventListener('change', function(){
  //Armazena a opçao e filtra pela posiçao no objeto importado
  const selectedValue = this.value 
  const filtered = footballTeam['players'].filter(player => player.position === selectedValue);

  //Limpa os cards antes de exibir os novos
  document.getElementById('player-cards').innerHTML = "";
  //Se o "all" for selecionado exibe todos
  selectedValue === "all" ? displayPlayers(footballTeam.players) : displayPlayers(filtered);
});
