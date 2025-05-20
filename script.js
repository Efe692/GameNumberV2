let nombremystere = Math.floor(Math.random() * 10) + 1;
let essais = 3;

for (let zebi = 0; zebi < essais; zebi++) {
  let reponse = prompt("Choisis un nombre entre 1 et 10");

  if (parseInt(reponse) == nombremystere) {
    alert("Gagné !");
    break;
  }
}

  alert("Perdu le nombre etait" +nombremystere);
