
/*fonctions pour rechercher les valeur maximales et minimales dans un tableau de nombre */
function trouverMinMax(tableau) {
    let minimum = tableau[0];
    let maximum = tableau[0];
  
    for (let i = 1; i < tableau.length; i++) {
      if (tableau[i] < minimum) {
        minimum = tableau[i];
      }
      if (tableau[i] > maximum) {
        maximum = tableau[i];
      }
    }
  
    return [minimum, maximum];
  }

/*fonction qui calcule la somme de tous les éléments d'un tableau */
  function calculerSomme(tableau) {
    let somme = 0;
  
    for (let i = 0; i < tableau.length; i++) {
      somme += tableau[i];
    }
  
    return somme;
  }
/*fonction qui filtre les element d'un tableau en fonction d'une condition donnée */
  function filtrerTableau(tableau, condition) {
    let resultat = tableau.filter(element => condition(element));
    return resultat;
  }
