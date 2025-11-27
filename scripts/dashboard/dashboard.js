window.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("aulasContainer");
  
    function criarCard(titulo, professor, link) {
      const a = document.createElement("a"); 
      a.href = link;
      a.classList.add("card-link");
  
      const card = document.createElement("div");
      card.classList.add("card");
  
      const h4 = document.createElement("h4");
      h4.textContent = titulo;
  
      const p = document.createElement("p");
      p.textContent = "👤 " + professor;
  
      card.appendChild(h4);
      card.appendChild(p);
  
      a.appendChild(card);
  
  
      container.appendChild(a);
    }
  
    criarCard("SW - Sistemas Web", "Prof. Everson", "../html/material.html");
    criarCard("PW - Programação Web", "Prof. Thayane", "../html/material.html");
    criarCard("AD - Arte Digital", "Prof. Elvis", "../html/material.html");
    criarCard("MT - Matemática", "Prof. Fábio", "../html/material.html");
  });
  
  
    const elementoData = document.getElementById("date");
    const dataAtual = new Date();
    elementoData.textContent = dataAtual.toLocaleDateString("pt-BR");