// Exercício 2 — Operadores
const preco = 80;
const quantidade = 2;
const subtotal = preco * quantidade;
const frete = 15;
const total = subtotal + frete;
const elegivelParaDesconto = total >= 150;

console.log("Subtotal:", subtotal);
console.log("Total com frete:", total);
console.log("Elegível para desconto:", elegivelParaDesconto);

// Saída esperada:
// Subtotal: 160
// Total com frete: 175
// Elegível para desconto: true

export {};