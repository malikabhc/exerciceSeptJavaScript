// Déclaration de la fonction
function calcul () {
  // Déclaration des variables
  var shoeSize = document.getElementById('shoeSize').value;
  var yearOfBirth = document.getElementById('yearOfBirth').value;
  var regex = /^[\d]+$/
  // Boite de dialogue avec appel des variables
  if(regex.test(shoeSize) && regex.test(yearOfBirth) && (shoeSize > 15) && (shoeSize < 50) && (yearOfBirth > 1900 && yearOfBirth < 2018)) {
    var result = (shoeSize * 2 + 5) * 50 - yearOfBirth + 1766
    alert(result)
  } else {
    alert('Incorrect')
  }
}
