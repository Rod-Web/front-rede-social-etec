window.addEventListener("DOMContentLoaded", () => {

    function criarMateria(titulo, professor, projeto, data, descricao, linkVisualizar, linkDownload) {

      const banner = document.getElementById("materiaBanner");
      const card = document.getElementById("materiaCard");
  

      const h1 = document.createElement("h1");
      h1.textContent = titulo;
  
      const p = document.createElement("p");
      p.innerHTML = `👤 ${professor}`;
  
      banner.appendChild(h1);
      banner.appendChild(p);
  

      const h2 = document.createElement("h2");
      h2.textContent = projeto;
  
      const postagem = document.createElement("p");
      postagem.classList.add("postagem");
      postagem.textContent = `Data de postagem: ${data}`;
  
      const h3Instrucao = document.createElement("h3");
      h3Instrucao.textContent = "Instruções";
  
      const desc = document.createElement("p");
      desc.classList.add("descricao");
      desc.textContent = descricao;
  
      const h3Material = document.createElement("h3");
      h3Material.textContent = "Material de Apoio";
  
      const materialDiv = document.createElement("div");
      materialDiv.classList.add("material-apoio");
  
      const visualizar = document.createElement("a");
      visualizar.href = linkVisualizar;
      visualizar.target = "_blank";
      visualizar.classList.add("attached");
      visualizar.textContent = "📎 Visualizar Anexo";
  
      const download = document.createElement("a");
      download.href = linkDownload;
      download.download = "";
      download.classList.add("download");
      download.textContent = "📎 Baixar Anexo";
  
      materialDiv.appendChild(visualizar);
      materialDiv.appendChild(download);
  

      card.appendChild(h2);
      card.appendChild(postagem);
      card.appendChild(h3Instrucao);
      card.appendChild(desc);
      card.appendChild(h3Material);
      card.appendChild(materialDiv);
    }
  
    criarMateria(
      "SW II - Projeto Final",
      "Prof. Everson Bacelli",
      "Projeto Final da Matéria",
      "13 de novembro de 2025 às 00:00",
      "Aqui vai a descrição detalhada da tarefa!",
      "../assets/docs/material.pdf",
      "../assets/docs/material.pdf"
    );
  });