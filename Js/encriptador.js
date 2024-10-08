
//Variable para manipular el DOM
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje__textarea");
const copyButton = document.getElementById('copiar-btn');
const mensajeTitulo = document.querySelector(".mensaje__titulo");
const mensajeParrafo = document.querySelector(".mensaje__parrafo");

//Función encriptar
function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    mensajeTitulo.style.display = "none";
    mensajeParrafo.style.display = "none";
}


function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }   
    return stringEncriptada;
}

//Función de desencriptar
function btnDesenncriptar() {
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    mensajeTitulo.style.display = "none";
    mensajeParrafo.style.display = "none";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }   
    return stringDesencriptada;
}

//Función de botón copiar 
function BotonCopiar() {
    // Selecciona el contenido del área de texto
    mensaje.select();
    mensaje.setSelectionRange(0, 99999); // Para móviles

    try {
        // Ejecuta el comando de copiar
        document.execCommand('copy');
        alert('Texto copiado al portapapeles!');
    } catch (err) {
        console.error('Error al copiar el texto: ', err);
    }
}

// Añade el evento de clic al botón de copiar
copyButton.addEventListener('click', BotonCopiar);


