//déclaration de la fonction affichage
function view(){
  //déclaration de variable 'x'
  var x = document.getElementById('text');
  //vérification affichage de la variable x et effacement
  if (x.style.display === 'block') {
        x.style.display = 'none';
    // sinon affichage la variable x de l'affichage
    } else {
        x.style.display = 'block';
    }
}
