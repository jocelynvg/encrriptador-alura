// Elementos de html
let imagen = document.getElementById("img");
let no_mensaje = document.getElementById("p-no-msg");
let ingr_mensaje = document.getElementById("ingresar-no-msg");
let msg_ingresado = document.getElementById("texto-no-encriptado");
let texto_encriptado = document.getElementById("p-mensaje");
let boton_copiar = document.getElementById("btn_copiar");
let boton_encriptar = document.getElementById("btn_encriptar");
let boton_desencriptar = document.getElementById("btn_desencriptar");

condicionesIniciales();

function condicionesIniciales() {
    texto_encriptado.style.display = "none";
    boton_copiar.style.display = "none";
    // boton_desencriptar.removeAttribute('disabled');
}

function mostrarMensaje(){
    texto_encriptado.style.display = "block";
    boton_copiar.style.display = "block";
    imagen.style.display = "none"; 
    no_mensaje.style.display = "none"; 
    ingr_mensaje.style.display = "none"; 
}

function encriptar() {
    let mensaje = msg_ingresado.value;
    msg_ingresado.value = '';
    mensaje = mensaje.replace('e','enter');
    mensaje = mensaje.replace('i','imes');
    mensaje = mensaje.replace('a','ai');
    mensaje = mensaje.replace('o','ober');
    mensaje = mensaje.replace('u','ufat');
    texto_encriptado.innerHTML = mensaje;
    mostrarMensaje();
}

function desencriptar() {
    let texto = msg_ingresado.value;
    msg_ingresado.value = '';
    texto = texto.replace('enter', 'e');
    texto = texto.replace('imes', 'i');
    texto = texto.replace('ai', 'a');
    texto = texto.replace('ober', 'o');
    texto = texto.replace('ufat', 'u');
    texto_encriptado.innerHTML = texto;
    mostrarMensaje();
}

function copiarTexto() {
    navigator.clipboard.readText();
}

boton_copiar.addEventListener('click', ()=>{
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = texto_encriptado.innerText;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert('Texto copiado al portapapeles');
});