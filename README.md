[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19230801&assignment_repo_type=AssignmentRepo)
# 🌐 Énoncé du CC2 (Durée : 1h30)

## 🔧 Contexte :
Vous allez développer une page web permettant de calculer un **pourboire** à partir d’un montant d’addition, d’un pourcentage choisi, et du nombre de personnes qui partageront ce pourboire.

L’interface se compose de deux parties :
1. Un **formulaire** contenant :
   - Un champ pour saisir le **montant de l’addition**.
   - Un champ pour saisir le **nombre de personnes** qui vont partager le pourboire.
   - Une série de **boutons** permettant de choisir un pourcentage de pourboire : **5 %, 10 %, 15 %, 25 %, 50 %**.
2. Une **zone de résultats** qui affiche :
   - Le **montant total du pourboire**.
   - Le **montant du pourboire par personne**.

## 🎯 Objectifs :
Vous devez :
- Créer le formulaire en **HTML**.
- Styliser l’interface en **CSS**.
- Ajouter l’interactivité en **JavaScript**, selon les consignes ci-dessous.

## 🔍 Fonctionnalités attendues en JavaScript :

### 1. Validation du formulaire :
- Le montant de l’addition doit être **strictement positif** (exemples: 10.90, 115.22, 235.70, ...).
- Le nombre de personnes doit être **supérieur à zéro** (exemples: 1, 2, 3, ...).
- Si ces conditions ne sont pas respectées, un **message d’erreur** en rouge doit apparaître à côté des champs concernés, et **aucun calcul ne doit être effectué**.

### 2. Calcul du pourboire :
- Lorsqu’un bouton de pourcentage est cliqué, une fonction spécifique est appelée :
  - `calculerPourboire5()` pour le bouton 5 %
  - `calculerPourboire10()` pour 10 %
  - `calculerPourboire15()` pour 15 %
  - `calculerPourboire25()` pour 25 %
  - `calculerPourboire50()` pour 50 %
- Chacune de ces fonctions :
  - Appelle une fonction commune `validerFormulaire()` pour vérifier les champs du formulaire.
  - Si le formulaire est valide, calcule :
    - Le **total du pourboire** = montant * (pourcentage choisi / 100)
    - Le **pourboire par personne** = total du pourboire / nombre de personnes
  - Les résultats sont affichés dans la zone de droite, avec **2 décimales** suivies de "DH".

## 💡 Conseils :
- Pensez à utiliser `parseFloat()` ou `Number()` pour manipuler les valeurs numériques.
- Vous pouvez utiliser `toFixed(2)` pour formater les résultats à 2 décimales.
- La fonction `validerFormulaire()` doit renvoyer `true` si tout est correct, sinon `false`.

## 📸 Exemple visuel :
- Si au moins l'un des champs est invalide → les messages d’erreurs sont affichés, aucun calcul n’est fait.
- Si tous les champs sont valides, et par exemple un pourcentage de 5 % est cliqué, le calcul sera effectué.

## ✅ Livrables attendus :
- Un fichier `index.html`
- Un fichier `style.css`
- Un fichier `script.js`
