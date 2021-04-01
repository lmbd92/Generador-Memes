"use strict";

const panel = document.querySelector("#panel");
const btnClose = document.querySelector("#button-close");
const btnImg = document.querySelector("#btn-img");
const btnText = document.querySelector("#btn-text");
const panelImg = document.querySelector("#panel-imagen");
const panelText = document.querySelector("#panel-texto");

btnClose.addEventListener("click", () => {
  panel.classList.add("ocultar");
});

btnImg.addEventListener("click", () => {
  panel.classList.remove("ocultar");
  panelText.classList.add("ocultar");
  panelImg.classList.remove("ocultar");
});

btnText.addEventListener("click", () => {
  panel.classList.remove("ocultar");
  panelImg.classList.add("ocultar");
  panelText.classList.remove("ocultar");
});
