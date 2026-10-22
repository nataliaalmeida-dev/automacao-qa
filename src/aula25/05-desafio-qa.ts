// Exercício 5 — Desafio de QA
type ResultadoTeste = "passou" | "falhou";

const resultados: ResultadoTeste[] = [
  "passou",
  "falhou",
  "passou",
  "passou"
];

let aprovados = 0;
let reprovados = 0;

for (const resultado of resultados) {
  if (resultado === "passou") {
    aprovados++;
  } else {
    reprovados++;
  }
}

console.log("Testes aprovados:", aprovados);
console.log("Testes reprovados:", reprovados);

// Saída esperada:
// Testes aprovados: 3
// Testes reprovados: 1

export {};