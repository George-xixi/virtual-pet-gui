// const Controller = require("./controller");

const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  form.style.visibility = "hidden";
  const controller = new Controller();

  controller.renderCat();
  controller.renderStatusBox();
})