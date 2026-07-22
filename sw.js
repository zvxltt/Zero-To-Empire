function resetGame(isPrestige = false) {
    // ÉTAPE 1 : Gestion du prestige & nettoyage de la sauvegarde
    if (!isPrestige) {
        // Si c'est un reset total (pas un prestige) :
        gameData.prestigeMultiplier = 1.00;
        localStorage.removeItem('zeroToEmpireSave'); // Efface la sauvegarde du navigateur
    } else {
        // Si c'est un reset de type "Prestige", tu augmentes le multiplicateur
        // Par exemple : gameData.prestigeMultiplier += 0.5;
    }

    // ÉTAPE 2 : Remise à zéro des valeurs
    gameData.money = 0;
    gameData.incomePerSecond = 0;
    gameData.clickValue = 1;
    // ... le reste de tes réinitialisations ...

    // ÉTAPE 3 : Mise à jour de l'affichage
    updateUI();
}

