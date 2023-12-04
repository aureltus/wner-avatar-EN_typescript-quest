// Données du jeu
let health1 = 10;
let health2 = 100;

// Fonction d'attaque
function attack(player) {
  const opponent = player === 1 ? 2 : 1;
  const damage = Math.floor(Math.random() * 20) + 1; // Dégâts aléatoires entre 1 et 20

  // Met à jour la santé de l'adversaire
  window["health" + opponent] -= damage;
  if (window["health" + opponent] < 0) {
    window["health" + opponent] = 0;
  }

  // Met à jour l'affichage
  updateUI();

  // Vérifie si le jeu est terminé
  if (window["health" + opponent] === 0) {
    alert("Player " + player + " wins!");
    resetGame();
  }
}

// Fonction de mise à jour de l'interface utilisateur
function updateUI() {
  document.getElementById("health1").style.width = health1 + "%";
  document.getElementById("health2").style.width = health2 + "%";
}

// Fonction de réinitialisation du jeu
function resetGame() {
  health1 = 100;
  health2 = 100;
  updateUI();
}
