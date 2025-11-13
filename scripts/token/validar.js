export let infoUser;
async function validarToken() {

  try {
    const response = await fetch("http://localhost:3001/perfil", {
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      // Se status for 401, 403, 500, etc...
      throw new Error("Token inválido ou expirado");
    }

    infoUser = await response.json();
    console.log("Token válido:", infoUser);
  } catch (error) {
    console.error("Erro:", error);
    alert(error)
    return window.location.href = "./error.html"; // redireciona antes de carregar
  }
  document.querySelector("body").style.display = "block";
}

await validarToken();
