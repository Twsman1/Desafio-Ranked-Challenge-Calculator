// Calculadora de partidas Rankeadas - DIO Challenge

// Leitura de entrada do usuário
let vitórias = 25
let derrotas = 5

// Função que recebe vitórias e derrotas e retorna o resultado
function calcularNivelRankeado(vitórias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = vitórias - derrotas;
    
    // Determina o nível baseado na quantidade de vitórias
    let nivel;
    
    if (vitórias < 10) {
        nivel = "Ferro";
    } else if (vitórias >= 11 && vitórias <= 20) {
        nivel = "Bronze";
    } else if (vitórias >= 21 && vitórias <= 50) {
        nivel = "Prata";
    } else if (vitórias >= 51 && vitórias <= 80) {
        nivel = "Ouro";
    } else if (vitórias >= 81 && vitórias <= 90) {
        nivel = "Diamante";
    } else if (vitórias >= 91 && vitórias <= 100) {
        nivel = "Lendário";
    } else if (vitórias >= 101) {
        nivel = "Imortal";
    }
    
    // Retorna a mensagem formatada
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}


// Executa a função e exibe o resultado
let resultado = calcularNivelRankeado(vitórias, derrotas);
console.log(resultado);


