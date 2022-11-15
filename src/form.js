
const petName = document.querySelector("#petName");
const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const pet = new Pet(petName.value);
  console.log(pet.name);

  form.remove();
  const controller = new Controller(pet);

  controller.renderCat();
  controller.renderStatusBox();
  controller.renderNameBox();
})