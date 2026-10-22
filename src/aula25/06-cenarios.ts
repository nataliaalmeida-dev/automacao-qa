
type Cenario = {
  nome: string;
  repetitivo: boolean;
  critico: boolean;
  estavel: boolean;
};

const cenarios: Cenario[] = [
  {
    nome: "Login válido",
    repetitivo: true,
    critico: true,
    estavel: true
  },
  {
    nome: "Cálculo do carrinho",
    repetitivo: true,
    critico: true,
    estavel: true
  },
  {
    nome: "Aplicação de cupom",
    repetitivo: true,
    critico: true,
    estavel: true
  },
  {
    nome: "Validação de campos obrigatórios",
    repetitivo: true,
    critico: true,
    estavel: true
  },
  {
    nome: "Avaliação subjetiva do visual",
    repetitivo: false,
    critico: false,
    estavel: true
  },
  {
    nome: "Exploração de funcionalidade nova",
    repetitivo: false,
    critico: true,
    estavel: false
  }
];

let quantidadeAutomatizaveis = 0;

for (const cenario of cenarios) {
  if (
    cenario.repetitivo &&
    cenario.critico &&
    cenario.estavel
  ) {
    console.log(`${cenario.nome}: AUTOMATIZAR`);
    quantidadeAutomatizaveis++;
  } else {
    console.log(`${cenario.nome}: NÃO AUTOMATIZAR AGORA`);
  }
}

console.log("Total automatizável:", quantidadeAutomatizaveis);

// Saída esperada:
// Login válido: AUTOMATIZAR
// Cálculo do carrinho: AUTOMATIZAR
// Aplicação de cupom: AUTOMATIZAR
// Validação de campos obrigatórios: AUTOMATIZAR
// Avaliação subjetiva do visual: NÃO AUTOMATIZAR AGORA
// Exploração de funcionalidade nova: NÃO AUTOMATIZAR AGORA
// Total automatizável: 4

export {};
