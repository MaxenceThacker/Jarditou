// Variable
var form = document.querySelector("#loginForm");
var nom = form.nom.value;
var prenom = form.prenom.value;
var dateNaissance = form.ddn.value;
var CP = form.cp.value;
var adresse = form.adresse.value;
var ville = form.ville.value;
var email = form.email.value;
var demande = form.demande.value;
var commentaire = form.commentaire.value;
var traitement = form.traitement.checked;
var sending = true;

// Variable de manque
var noNom = document.getElementById("noNom");
var noPrenom = document.getElementById("noPrenom");
var noSexe = document.getElementById("noSexe");
var noDate = document.getElementById("noDate");
var noCP = document.getElementById("noCP");
var noEmail = document.getElementById("noEmail");
var noDemande = document.getElementById("noDemande");
var noCommentaire = document.getElementById("noCommentaire");
var noTraitement = document.getElementById("noTraitement");

// Expression régulière
const nomReg = /^[A-Z][A-Za-z\é\è\ê\-]+$/;
const prenomReg = /^[A-Z][A-Za-z\é\è\ê\-]+$/;
const emailReg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

// Variable d'écoute
var submit = form.submit;
submit.addEventListener("click", valid);
var cancel = form.cancel;
cancel.addEventListener("click", reset);

// Fonction d'annulation
function reset() {
  noNom.textContent = "";
  noPrenom.textContent = "";
  noSexe.textContent = "";
  noDateNaissance.textContent = "";
  noCP.textContent = "";
  noEmail.textContent = "";
  noDemande.textContent = "";
  noCommentaire.textContent = "";
  noTraitement.textContent = "";
}

// Fonction de Validation globale du contenu
function valid() {
  validNom();
  validPrenom();
  validSexe();
  validDate();
  validCP();
  validAdresse();
  validVille();
  validEmail();
  validCommentaire();
  validDemande();
  validTraitement();
  sendFormulaire();
  sending = true;
}

// Fonction de validation discrète du contenu
function validNom() {
  nom = document.getElementById("nom").value;
  if (nom == "") {
    noNom.textContent = "Nom manquant";
    noNom.style.color = "red";
    sending = false;
  } else {
    noNom.textContent = "";
    if (nomReg.test(nom) == false) {
      noNom.textContent = "Nom non conforme";
      noNom.style.color = "orange";
      sending = false;
    } else {
      noNom.textContent = "";
    }
  }
}
function validPrenom() {
  prenom = document.getElementById("prenom").value;
  if (prenom == "") {
    noPrenom.textContent = "Prénom manquant";
    noPrenom.style.color = "red";
    sending = false;
  } else {
    noPrenom.textContent = "";
    if (prenomReg.test(prenom) == false) {
      noPrenom.textContent = "Prénom non conforme";
      noPrenom.style.color = "orange";
      sending = false;
    } else {
      noPrenom.textContent = "";
    }
  }
}
function validSexe() {
  var femme = document.getElementById("femme").checked;
  var homme = document.getElementById("homme").checked;
  var autre = document.getElementById("autre").checked;
  if (homme == true) {
    noSexe.textContent = "";
  } else {
    if (femme == true) {
      noSexe.textContent = "";
    } else {
      if (autre == true) {
        noSexe.textContent = "";
      } else {
        noSexe.textContent = "Indiquez votre sexe";
        noSexe.style.color = "red";
        sending = false;
      }
    }
  }
}
function validDate() {
  dateNaissance = document.getElementById("ddn").value;
  if (isNaN(dateNaissance)) {
    noDateNaissance.textContent = "Rentrez une date valide";
    noDateNaissance.style.color = "red";
    sending = false;
  } else {
    if (dateNaissance > Date.now()) {
      noDateNaissance.textContent = "Rentrez une date valide";
      noDateNaissance.style.color = "orange";
      sending = false;
    }
  }
}
function validCP() {
  CP = document.getElementById("cp").value;
  var CPlenght = document.getElementById("cp").value.length;
  if (CP == "") {
    noCP.textContent = "Rentrez un code postal";
    noCP.style.color = "red";
    sending = false;
  } else {
    noCP.textContent = "";
    if (5 < CPlenght) {
      noCP.textContent = "Rentrez un code postal valide (5 chiffres)";
      noCP.style.color = "orange";
      sending = false;
    } else {
      if (5 > CPlenght) {
        noCP.textContent = "Rentrez un code postal valide (5 chiffres)";
        noCP.style.color = "orange";
        sending = false;
      } else {
        noCP.textContent = "";
      }
    }
  }
}
function validAdresse() {
  adresse = document.getElementById("adresse").value;
  if (adresse == "") {
    noAdresse.textContent = "Adresse manquante";
    noAdresse.style.color = "red";
  }
}

function validVille() {
  ville = document.getElementById("ville").value;
  if (ville == "") {
    noVille.textContent = "Ville manquante";
    noVille.style.color = "red";
  }
}

function validEmail() {
  email = document.getElementById("email").value;
  if (email == "") {
    noEmail.textContent = "Indiquez un email";
    noEmail.style.color = "red";
    sending = false;
  } else {
    noEmail.textContent = "";
    if (emailValid.test(email) == false) {
      noEmail.textContent = "Indiquez un email valide";
      noEmail.style.color = "orange";
      sending = false;
    } else {
      noEmail.textContent = "";
    }
  }
}
function validDemande() {
  demande = document.getElementById("demande").value;
  if (demande == "") {
    noDemande.textContent =
      "Veuillez sélectionner un sujet ci-dessus dans le menu déroulant";
    noDemande.style.color = "red";
    sending = false;
  } else {
    noDemande.textContent = "";
  }
}
function validCommentaire() {
  commentaire = document.getElementById("commentaire").value;
  if (commentaire == "") {
    noCommentaire.textContent = "Veuillez écrire votre question";
    noCommentaire.style.color = "red";
    sending = false;
  } else {
    if (commentaire.length < 10) {
      noCommentaire.textContent = "Pas assez de caractères (minimum 10)";
      noCommentaire.style.color = "orange";
      sending = false;
    } else {
      noCommentaire.textContent = "";
      if (commentaire.length > 200) {
        noCommentaire.textContent = "Trop de caractères (maximun 200)";
        noCommentaire.style.color = "orange";
        confirmationEnvoi = false;
      } else {
        noCommentaire.textContent = "";
      }
    }
  }
}
function validTraitement() {
  traitement = document.getElementById("traitement").checked;
  if (traitement == false) {
    noTraitement.textContent = "Cochez la case pour accepter le traitement";
    noTraitement.style.color = "red";
    sending = false;
  } else {
    noTraitement.textContent = "";
  }
}
function sendFormulaire() {
  if (sending == true) {
    window.alert("Evaluation réussie");
  }
}
