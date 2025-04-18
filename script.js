// Cette fonction vérifie si les champs sont bien remplis
function verifierChamps() {
    let champMontant = document.getElementById("addition").value;
    let champPersonnes = document.getElementById("personnes").value;
  
    let montant = parseFloat(champMontant);
    let personnes = parseInt(champPersonnes);
  
    let ok = true;
  
    // Efface les messages d'erreur avant chaque validation
    document.getElementById("erreurAddition").textContent = "";
    document.getElementById("erreurPersonnes").textContent = "";
  
    // Vérifie si le montant est bien rempli et supérieur à 0
    if (isNaN(montant) || montant <= 0) {
      document.getElementById("erreurAddition").textContent = "Veuillez entrer un montant valide.";
      ok = false;
    }
  
    // Vérifie si le nombre de personnes est bien rempli et supérieur à 0
    if (isNaN(personnes) || personnes <= 0) {
      document.getElementById("erreurPersonnes").textContent = "Veuillez entrer un nombre de personnes valide.";
      ok = false;
    }
  
    return ok;
  }
  
  // Fonction principale qui fait le calcul
  function calculerPourboire(pourcentage) {
    if (verifierChamps()) {
      let montant = parseFloat(document.getElementById("addition").value);
      let personnes = parseInt(document.getElementById("personnes").value);
  
      let totalPourboire = montant * (pourcentage / 100);
      let pourboireParPersonne = totalPourboire / personnes;
  
      // Affichage avec 2 chiffres après la virgule
      document.getElementById("total").textContent = totalPourboire.toFixed(2) + " DH";
      document.getElementById("parPersonne").textContent = pourboireParPersonne.toFixed(2) + " DH";
    }
  }
  