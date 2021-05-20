var pu = prompt("Entrez le prix unitaire du produit :");
var qtecom = prompt("Entrez la quantité commandée :");
var tot = pu * qtecom;
var rem = 0;

if (tot > 100) {
  if (tot > 200) {
    rem = tot * 0.1;
  } else {
    rem = tot * 0.05;
  }
}
if (tot - rem > 500) {
  var port = 0;
} else {
  var port = (tot - rem) * 0.02;
  if (port < 6) {
    port = 6;
  }
}

var pap = tot - rem + port;

document.write("Votre prix à payer est de : " + pap);
