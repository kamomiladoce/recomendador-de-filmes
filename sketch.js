let filmes = [
  { nome: "Branca de neve e o caçador", idade: 16, categorias: ["fantasia", "aventura"] },
  { nome: "meu amigo dragão", idade: 10, categorias: ["fantasia", "aventura"] },
  { nome: "dolittle", idade: 10, categorias: ["drama", "fantasia", "aventura"] },
  { nome: "vingadores", idade: 10, categorias: ["fantasia"] },
  { nome: "continencia ao amor", idade: 14, categorias: ["drama"] },
  { nome: "minha culpa", idade: 16, categorias: ["drama"] }
];

// Etapa 3 – Preparando variáveis do usuário
let idadeUsuario;
let gostaFantasia, gostaAventura, gostaDrama;
let filmesRecomendados = [];

// Etapa 4 – Coletando dados do usuário com prompt
function setup() {
  createCanvas(600, 400);
  background(240);
  textSize(16);
  fill(50);
  text("Recomendador de Filmes", 20, 30);

  // Coletar idade
  idadeUsuario = int(prompt("Qual sua idade?"));

  // Coletar preferências
  gostaFantasia = prompt("Você gosta de filmes de fantasia? (sim/não)").toLowerCase() === "sim";
  gostaAventura = prompt("Você gosta de filmes de aventura? (sim/não)").toLowerCase() === "sim";
  gostaDrama = prompt("Você gosta de filmes de drama? (sim/não)").toLowerCase() === "sim";

  // Etapa 5 – Lógica de recomendação
  for (let filme of filmes) {
    if (idadeUsuario >= filme.idade) {
      if (
        (gostaFantasia && filme.categorias.includes("fantasia")) ||
        (gostaAventura && filme.categorias.includes("aventura")) ||
        (gostaDrama && filme.categorias.includes("drama"))
      ) {
        filmesRecomendados.push(filme.nome);
      }
    }
  }

  // Etapa 6 – Exibir recomendações na tela
  if (filmesRecomendados.length > 0) {
    text("Filmes recomendados para você:", 20, 70);
    for (let i = 0; i < filmesRecomendados.length; i++) {
      text("- " + filmesRecomendados[i], 40, 100 + i * 25);
    }
  } else {
    text("Nenhum filme disponível para sua idade e preferências.", 20, 70);
  }
}

// A função draw() é chamada continuamente após setup()
function draw() {
  // Podemos adicionar animações ou interações aqui se quisermos
}
