var tab = [
  "Audrey",
  "Aurélien",
  "Flavien",
  "Jérémy",
  "Laurent",
  "Melik",
  "Nouara",
  "Salem",
  "Samuel",
  "Stéphane",
];
var prenom = prompt(
  "Entrez un nom parmi la liste suivante: \n Audrey, Aurélien, Flavien, Jérémy, Laurent, Melik, Nouara, Salem, Samuel, Stéphane"
);

for (var i = 0; i < tab.length; i++) {
  if (prenom == tab[i]) {
    for (var i = i; i < tab.length; i++) {
      tab[i] = tab[i + 1];
      if (tab[i] == undefined) {
        tab[i] = "' '";
        document.write(`[${tab}]`);
        console.log(tab);
      }
    }
  }
}
