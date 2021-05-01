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
