const nomes = ["Filipe", "Adriana", "César", "Arruda", "Alexandre", "Elionaldo", "Jonnatha"];

function sorteio(array) {
  array.sort(() => Math.random() - 0.5);
}

sorteio(nomes);

for (const nome of nomes) {
  console.log(nome);
}
