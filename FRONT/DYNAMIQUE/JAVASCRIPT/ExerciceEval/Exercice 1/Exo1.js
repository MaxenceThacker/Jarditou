var nbrJeunes = 0;
var nbrMoyens = 0;
var nbrVieux = 0;
var ageClient = 0;

while (ageClient < 100) {
  ageClient = prompt("Veuillez rentrer l'age de la personne");

  if (ageClient < 20) {
    nbrJeunes += 1;
  } else if (ageClient > 40) {
    nbrVieux += 1;
  } else {
    nbrMoyens += 1;
  }
}

alert(
  `Le nombre de jeunes personnes est de : ${nbrJeunes}. \n Le nombre de personnes d'age moyen est de : ${nbrMoyens}. \n Le nombre de vielles personnes est de : ${nbrVieux}.`
);
