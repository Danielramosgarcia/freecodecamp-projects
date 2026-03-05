import {footballTeam} from './cards.js';

document.getElementById("team").innerText = footballTeam["team"];
document.getElementById('year').innerText = footballTeam['year'];
document.getElementById('head-coach').innerText = footballTeam["headCoach"];

function displayPlayers(playersArray) {
  playersArray.forEach(function(player){
    const playerCards = document.getElementById('player-cards');
    
    playerCards.innerHTML += `
      <div class='player-card'>
      <h2>${player['isCaptain']? "(Captain) " + player['name'] : player.name}</h2>
      <p>Position: ${player['position']}</p>
      </div>
    `;
  });  
}
displayPlayers(footballTeam.players);

document.getElementById('players').addEventListener('change', function(){
  const selectedValue = this.value 
  const filtered = footballTeam['players'].filter(player => player.position === selectedValue);

  document.getElementById('player-cards').innerHTML = "";
  selectedValue === "all" ? displayPlayers(footballTeam.players) : displayPlayers(filtered);
});
