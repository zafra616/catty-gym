let imagenes = ["gimnasio1.jpg", "gimnasio2.jpg", "gimnasio3.jpg"];
let indice = 0;

function siguienteImagen() {
    indice = (indice + 1) % imagenes.length;
    document.getElementById("imagen-galeria").src = imagenes[indice];
}

function anteriorImagen() {
    indice = (indice - 1 + imagenes.length) % imagenes.length;
    document.getElementById("imagen-galeria").src = imagenes[indice];
}function redirectToWhatsApp() {
    window.location.href = 'https://wa.me/+573202215625';
}

function redirectToMap() {
    window.location.href = 'https://www.google.com/maps/place/YOUR_LOCATION';
}
