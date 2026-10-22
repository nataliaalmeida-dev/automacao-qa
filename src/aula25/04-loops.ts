// Exercício 4 — Loops
const cenarios = [
  "Login válido",
  "Login inválido",
  "Adicionar produto ao carrinho"
];

for (let i = 0; i < cenarios.length; i++) {
  console.log(`${i + 1}. ${cenarios[i]}`);
}

// Saída esperada:
// 1. Login válido
// 2. Login inválido
// 3. Adicionar produto ao carrinho

export {};