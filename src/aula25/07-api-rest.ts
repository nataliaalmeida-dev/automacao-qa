
async function consultarUsuario(): Promise<void> {
  const url = "https://jsonplaceholder.typicode.com/users/1";

  try {
    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new Error(`Erro HTTP: ${resposta.status}`);
    }

    const usuario = await resposta.json();

    console.log("Requisição realizada com sucesso!");
    console.log("Status HTTP:", resposta.status);
    console.log("Nome:", usuario.name);
    console.log("Email:", usuario.email);
    console.log("Cidade:", usuario.address.city);
  } catch (erro) {
    console.error("Falha na requisição:", erro);
  }
}

consultarUsuario();
