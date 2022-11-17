
const petName = document.querySelector("#petName");
const form = document.querySelector("#form");


form.addEventListener("submit", (event) => {
  const petType = document.querySelector('input[name="pettype"]:checked');  
  const pet = new Pet(petName.value);
  event.preventDefault();

  console.log(pet.name);

  form.remove();
  const controller = new Controller(pet);
  console.log(petType);
  controller.renderPet(petType.value);
  controller.renderStatusBox();
})