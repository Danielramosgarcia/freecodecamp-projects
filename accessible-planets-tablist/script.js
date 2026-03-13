// Seleciona todas as abas (elementos com role="tab")
const tabs = document.querySelectorAll('[role="tab"]');

// Seleciona todos os painéis de conteúdo (elementos com role="tabpanel")
const panels = document.querySelectorAll('[role="tabpanel"]');

// Adiciona evento de clique em cada aba
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    
    // Reseta todas as abas: marca como não selecionadas
    tabs.forEach(t => t.setAttribute("aria-selected", "false"));    
    // Esconde todos os painéis
    panels.forEach(p => p.hidden = true);

    // Marca a aba clicada como selecionada
    tab.setAttribute("aria-selected", "true");
    
    // Pega o id do painel associado a esta aba (ex: "panel-earth")
    const associatedPanel = tab.getAttribute("aria-controls");    
    // Encontra o painel correspondente pelo id
    const panel = document.getElementById(associatedPanel);    
    // Mostra o painel correspondente
    panel.hidden = false;

  });
});