"use strict";

const panel = document.querySelector("#panel");
const btnClose = document.querySelector("#panel-button-close");
const btnImg = document.querySelector("#btn-img");
const btnText = document.querySelector("#btn-text");
const panelImg = document.querySelector("#panel-imagen");
const panelText = document.querySelector("#panel-texto");
const body = document.querySelector("body");
const btnTheme = document.querySelector("#btn-theme");
const inputImg = document.querySelector("#url-img-input");
const memeImg = document.querySelector("#meme-img");
const inputFondo = document.querySelector("#color-fondo-img-input");
const optionSelect = document.querySelector("#efectos-fondo");

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

// Mostrar panel imagen
btnImg.addEventListener("click", () => {
  panel.classList.remove("ocultar");
  panelText.classList.add("ocultar");
  panelImg.classList.remove("ocultar");
});

// Mostrar panel texto
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

//Fondo Imagen

inputFondo.addEventListener("input", () => {
  const ColorFondo = inputFondo.value;
  memeImg.style.backgroundColor = ColorFondo;
});

//Efecto fondo

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

btnRestart.addEventListener("click", () =>{
  reiniciar();
  actualizarFiltros();
});


