
// fonction afficher reduire
function displayDiv(id) {
  var div = document.getElementById(id);
  if (div.style.display === "none") {
    div.style.display = "block";
    
  } else {
    div.style.display = "none";
  }
}


// Fonction random
function getRandomInt(array) {
  return Math.floor(Math.random() * array.length) // recupere nombre aleatoire par rapport a la taile de tableau
}
// Tableau
function random() {
  var listeApprenant = ['Farima','Asad','Abdoulaye','Alexis','Alicia','Ayoub','Bamba','Caroline','Charles','David','Denis','Fodie','Elyesse','Flora','Gaelle','Jules','Kevin','Lobna','Jonathan','Lyes','Maelys','Muhammad','Mohamed','Nasser']; 
  // tableau des apprenant
  var alea = getRandomInt(listeApprenant)  //
  document.getElementById('boutonrandom').value = listeApprenant[alea]
}
