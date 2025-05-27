function geraRecomendacao(idade, gostaDeFantasia) {
    if (idade >= 10) {
        if (idade >= 14) {
            return "malevola";
        } else {
            if (gostaDeFantasia) {
                return "vingadores";
            } else {
                return "cruella";
            }
        }
    } else {
        if (gostaDeFantasia) {
            return "minha culpa";
        } else {
            return "barbie";
        }
    }
}
function setup() {
    createCanvas(800, 400);

    // 🔵 Texto para informar ao usuário
    createSpan("Sua idade: ");
    campoIdade = createInput("5");

    // 🔵 Checkbox com descrição clara
    campoFantasia = createCheckbox(" Gosta de fantasia?");
}
function draw() {
    background("black"); // ⚪ Fundo branco
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia);

    fill(color("red")); // 🟣 Cor do texto (roxo escuro)
    textAlign(CENTER, CENTER); // 🎯 Alinhamento centralizado
    textSize(38); // 🔠 Tamanho maior para boa leitura

    text(recomendacao, width / 2, height / 2); // 📍 Texto exibido no centro
}
 
