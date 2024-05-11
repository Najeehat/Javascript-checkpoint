
   // calcule la factorielle

  function calculerFactorielle(nombre) {
    if (nombre === 0 || nombre === 1) {
      return 1;
    } else {
      let resultat = 1;
      for (let i = 2; i <= nombre; i++) {
        resultat *= i;
      }
      return resultat;
    }
  }


// vérification de nombre premier 
  function estPremier(nbr) {
    // Vérifie si le nombre est inférieur à 2 (non premier)
    if (nbr < 2) {
        return false;
    }

    // Parcourt les nombres de 2 à la racine carrée du nombre
    for (let i = 2; i <= Math.sqrt(nbr); i++) {
        if (nbr % i === 0) {
            // Si le nombre est divisible par un autre nombre, il n'est pas premier
            return false;
        }
    }

    // Si le nombre n'est divisible par aucun autre nombre, il est premier
    return true;
}
// la séquence de Fibonaci
function genererSequenceFibonacci(nombreTermes) {
    let sequence = [0, 1];
    
    if (nombreTermes <= 2) {
      return sequence.slice(0, nombreTermes);
    }
    
    for (let i = 2; i < nombreTermes; i++) {
      let terme = sequence[i - 1] + sequence[i - 2];
      sequence.push(terme);
    }
    
    return sequence;
  }
