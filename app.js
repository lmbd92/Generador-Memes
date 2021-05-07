"use strict";
//General
const panel = document.querySelector("#panel");
const btnClose = document.querySelector("#panel-button-close");
const btnImg = document.querySelector("#btn-img");
const btnText = document.querySelector("#btn-text");
const btnTheme = document.querySelector("#btn-theme");
const btnDescargar = document.querySelector("#btn-descargar");
const memeContainer = document.querySelector(".meme-container");
const panelImg = document.querySelector("#panel-imagen");
const panelText = document.querySelector("#panel-texto");
const body = document.querySelector("body");
const inputImg = document.querySelector("#url-img-input");
const memeImg = document.querySelector("#meme-img");
const inputFondo = document.querySelector("#color-fondo-img-input");
const optionSelect = document.querySelector("#efectos-fondo");
const inpFile = document.querySelector("#inpFile");

inpFile.addEventListener("change", function () {
  const file = this.files[0];
  const reader = new FileReader();
  if (file) {
    reader.addEventListener("load", function () {
      memeImg.style.backgroundImage = `url(${this.result})`;
    });
  }else{
    memeImg.style.backgroundImage = "";
  }
  reader.readAsDataURL(file);
});

//Filtros
const filtroBrillo = document.querySelector("#brillo-range");
const filtroOpacidad = document.querySelector("#opacidad-range");
const filtroContraste = document.querySelector("#contraste-range");
const filtroDesenfoque = document.querySelector("#desenfoque-range");
const filtroGrises = document.querySelector("#grises-range");
const filtroSepia = document.querySelector("#sepia-range");
const filtroHUE = document.querySelector("#hue-range");
const filtroSaturado = document.querySelector("#saturado-range");
const filtroNegativo = document.querySelector("#negativo-range");

//Restablecer filtros
const btnRestart = document.querySelector("#restablecer-filtros");

// Ocultar panel
btnClose.addEventListener("click", () => {
  panel.classList.add("ocultar");
});

// Mostrar panel imagen y ocultar panel texto
btnImg.addEventListener("click", () => {
  panel.classList.remove("ocultar");
  panelText.classList.add("ocultar");
  panelImg.classList.remove("ocultar");
});

// Mostrar panel texto y ocultar panel imagen
btnText.addEventListener("click", () => {
  panel.classList.remove("ocultar");
  panelImg.classList.add("ocultar");
  panelText.classList.remove("ocultar");
});

//Cambio de tema oscuro/claro
btnTheme.addEventListener("click", () => {
  if (body.className == "light-theme") {
    body.className = "dark-theme";
    btnTheme.textContent = "Modo claro";
  } else if (body.className == "dark-theme") {
    body.className = "light-theme";
    btnTheme.textContent = "Modo Oscuro";
  }
});

// Url imagen
inputImg.addEventListener("input", () => {
  const url = inputImg.value;
  memeImg.style.backgroundImage = `url(${url})`;
});

//Fondo imagen meme
inputFondo.addEventListener("input", () => {
  const ColorFondo = inputFondo.value;
  memeImg.style.backgroundColor = ColorFondo;
});

//Efecto de fondo (select list down)
optionSelect.addEventListener("change", () => {
  memeImg.style.backgroundBlendMode = optionSelect.value;
});

// Filtros imagen
const actualizarFiltros = () => {
  memeImg.style.filter = `brightness(${filtroBrillo.value}) 
  opacity(${filtroOpacidad.value}) contrast(${filtroContraste.value}%) 
  blur(${filtroDesenfoque.value}px) grayscale(${filtroGrises.value}%) 
  sepia(${filtroSepia.value}%) hue-rotate(${filtroHUE.value}deg) 
  saturate(${filtroSaturado.value}%) invert(${filtroNegativo.value})`;
};

filtroBrillo.addEventListener("change", actualizarFiltros);
filtroOpacidad.addEventListener("change", actualizarFiltros);
filtroContraste.addEventListener("change", actualizarFiltros);
filtroDesenfoque.addEventListener("change", actualizarFiltros);
filtroGrises.addEventListener("change", actualizarFiltros);
filtroSepia.addEventListener("change", actualizarFiltros);
filtroHUE.addEventListener("change", actualizarFiltros);
filtroSaturado.addEventListener("change", actualizarFiltros);
filtroNegativo.addEventListener("change", actualizarFiltros);

//Resestablecer filtros
const reiniciar = () => {
  filtroBrillo.value = "1";
  filtroOpacidad.value = "1";
  filtroContraste.value = "1000";
  filtroDesenfoque.value = "0";
  filtroGrises.value = "0";
  filtroSepia.value = "0";
  filtroHUE.value = "0";
  filtroSaturado.value = "100";
  filtroNegativo.value = "0";
};
// Botón reset panel imagen
btnRestart.addEventListener("click", () => {
  reiniciar();
  actualizarFiltros();
});

//Panel Texto
const textSup = document.querySelector("#sup-text"); //Input
const checkSup = document.querySelector("#sup-check"); // CheckBox
const textInf = document.querySelector("#inf-text"); //Input
const checkInf = document.querySelector("#inf-check"); // CheckBox
const memeTextSup = document.querySelector("#top-text"); // <p>
const memeTextInf = document.querySelector("#bottom-text"); // <p>
const optionFont = document.querySelector("#input-font"); // Lista tipos de letra
const tamanioText = document.querySelector("#font-size"); // Tamaño de letra
const btnLeft = document.querySelector("#btn-text-left"); // botón text izq
const btnCenter = document.querySelector("#btn-text-center"); // botón text centro
const btnRight = document.querySelector("#btn-text-right"); // botón text der
const colorText = document.querySelector("#text-color");
const colorFondoText = document.querySelector("#fondo-color-text");
const sinFondoText = document.querySelector("#fondo-check");
const btnSinContorno = document.querySelector("#strokeNone"); //bnt contorno
const btnContornoClaro = document.querySelector("#strokeLight"); //bnt contorno
const btnContornoOscuro = document.querySelector("#strokeDark"); //bnt contorno
const labelColorText = document.querySelector("#spantext-color"); //Span color text
const labelColorFondotxt = document.querySelector("#spantext-colorFondo"); // Span Color fondo text

// Asignar a la etiqueta <p> superior el texto ingresado por el usuario
textSup.addEventListener("input", () => {
  memeTextSup.innerText = textSup.value;
});

// Asignar a la etiqueta <p> inferior el texto ingresado por el usuario
textInf.addEventListener("input", () => {
  memeTextInf.innerText = textInf.value;
});

// Deshabilitar el texto <p> y textArea superior
checkSup.addEventListener("click", () => {
  if (checkSup.checked) {
    memeTextSup.classList.add("ocultar");
    textSup.disabled = true;
  } else {
    memeTextSup.classList.remove("ocultar");
    textSup.disabled = false;
  }
});

// Deshabilitar el texto <p> y textArea inferior
checkInf.addEventListener("click", () => {
  if (checkInf.checked) {
    memeTextInf.classList.add("ocultar");
    textInf.disabled = true;
  } else {
    memeTextInf.classList.remove("ocultar");
    textInf.disabled = false;
  }
});

//Cambiar tipo de letra para texto superior e inferior
optionFont.addEventListener("change", () => {
  memeTextSup.style.fontFamily = optionFont.value;
  memeTextInf.style.fontFamily = optionFont.value;
});

//Cambiar tamaño de letra para texto superior e inferior
tamanioText.addEventListener("change", () => {
  memeTextSup.style.fontSize = `${tamanioText.value}px`;
  memeTextInf.style.fontSize = `${tamanioText.value}px`;
});
//Alinear texto a la izquierda
btnLeft.addEventListener("click", () => {
  memeTextSup.style.textAlign = "left";
  memeTextInf.style.textAlign = "left";
});
//Alinear texto al centro
btnCenter.addEventListener("click", () => {
  memeTextSup.style.textAlign = "center";
  memeTextInf.style.textAlign = "center";
});
//Alinear texto a la derecha
btnRight.addEventListener("click", () => {
  memeTextSup.style.textAlign = "right";
  memeTextInf.style.textAlign = "right";
});

//Remover contornos texto superior e inferior
btnSinContorno.addEventListener("click", () => {
  memeTextSup.style.textShadow = "";
  memeTextInf.style.textShadow = "";
});
//Contorno claro texto superior e inferior
btnContornoClaro.addEventListener("click", () => {
  memeTextSup.style.textShadow = `-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white`;
  memeTextInf.style.textShadow = `-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white`;
});
//Contorno oscuro texto superior e inferior
btnContornoOscuro.addEventListener("click", () => {
  memeTextSup.style.textShadow = `-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black`;
  memeTextInf.style.textShadow = `-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black`;
});

//Color texto
colorText.addEventListener("input", () => {
  memeTextSup.style.color = colorText.value;
  memeTextInf.style.color = colorText.value;
  labelColorText.textContent = colorText.value;
});

//Color fondo texto superior e inferior
colorFondoText.addEventListener("input", () => {
  memeTextInf.style.backgroundColor = colorFondoText.value;
  memeTextSup.style.backgroundColor = colorFondoText.value;
  labelColorFondotxt.textContent = colorFondoText.value;
});

//Remover color fondo texto superior e inferior
sinFondoText.addEventListener("click", () => {
  if (sinFondoText.checked) {
    memeTextSup.style.backgroundColor = "transparent";
    memeTextInf.style.backgroundColor = "transparent";
    colorFondoText.disabled = true;
  } else {
    memeTextInf.style.backgroundColor = colorFondoText.value;
    memeTextSup.style.backgroundColor = colorFondoText.value;
    colorFondoText.disabled = false;
  }
});

//Evento boton descargar meme
btnDescargar.addEventListener("click", () => {
  domtoimage.toBlob(memeContainer).then(function (blob) {
    window.saveAs(blob, "meme.png");
  });
});
