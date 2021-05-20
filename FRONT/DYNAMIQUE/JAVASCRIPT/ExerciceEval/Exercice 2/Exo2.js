var n = 0;

do {
  n = Number(prompt("Entrez le numéro de la table de multiplication"));
} while (isNaN(n));

function TableMultiplication(n) {
  for (let i = 1; i < 11; i += 1) {
    document.write(`${i} x ${n} = ` + i * n + "</br>");
    console.log(`${i} x ${n} = ` + i * n);
  }
}

TableMultiplication(n);
