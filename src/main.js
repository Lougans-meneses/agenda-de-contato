const form = document.getElementById("form-exercicio");
const imgNamorada = '<img src="src/imagens/Namorada.png" alt="Emoji de casal">';
const imgFamilia = '<img src="src/imagens/Familia.png" alt="Emoji de familia">';
const imgAmigos = '<img src="src/imagens/Amigos.png" alt="Emoji de amigos">';
const imgEmpresa = '<img src="src/imagens/Empresa.png" alt="Emoji do trabalho">';
const contato = [];
const numero = [];
const grupo = [];

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionarLinhas();
  atualizarTabela();
});

function adicionarLinhas() {
  const inputNomeContato = document.getElementById("nome-contato");
  const inputNumeroTelefone = document.getElementById("numero-telefone");
  const inputGrupoContato = document.getElementById("grupo-contato");

  if (
    contato.includes(inputNomeContato.value)
  ) {
    alert(`Nome: ${inputNomeContato.value}, já foi registrado.`);
  } else {
    contato.push(inputNomeContato.value);
    numero.push(inputNumeroTelefone.value);
    grupo.push(inputGrupoContato.value);

    let linha = "<tr>";
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroTelefone.value}</td>`;
    if (
      inputGrupoContato.value == "Namorada" ||
      inputGrupoContato.value == "Namorado" ||
      inputGrupoContato.value == "namorado" ||
      inputGrupoContato.value == "namorada"
    ) {
      linha += `<td>${imgNamorada}</td>`;
    } else if (
      inputGrupoContato.value == "Familia" ||
      inputGrupoContato.value == "familia"
    ) {
      linha += `<td>${imgFamilia}</td>`;
    } else if (
      inputGrupoContato.value == "Amigos" ||
      inputGrupoContato.value == "amigos"
    ) {
      linha += `<td>${imgAmigos}</td>`;
    } else if (
      inputGrupoContato.value == "Trabalho" ||
      inputGrupoContato.value == "trabalho"
    ) {
      linha += `<td>${imgEmpresa}</td>`;
    }
    linha += "</tr>";

    linhas += linha;
  }

  inputNomeContato.value = "";
  inputNumeroTelefone.value = "";
  inputGrupoContato.value = "";
}

function atualizarTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}
