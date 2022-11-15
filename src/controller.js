(function exportController() {
  class Controller {
    constructor(pet) {
      this.pet = pet;
      this.dayCycle();
    }

    dayCycle() {
      const backgrounds = [
        "./images/background/12.jpg",
        "./images/background/13.jpg",
        "./images/background/14.jpg",
        "./images/background/15.jpg",
        "./images/background/16.jpg",
        "./images/background/17.jpg",
        "./images/background/18.jpg",
        "./images/background/19.jpg",
        "./images/background/20.jpg",
        "./images/background/21.jpg",
        "./images/background/22.jpg",
        "./images/background/23.jpg",
        "./images/background/24.jpg",
        "./images/background/1.jpg",
        "./images/background/2.jpg",
        "./images/background/3.jpg",
        "./images/background/4.jpg",
        "./images/background/5.jpg",
        "./images/background/6.jpg",
        "./images/background/7.jpg",
        "./images/background/8.jpg",
        "./images/background/9.jpg",
        "./images/background/10.jpg",
        "./images/background/11.jpg",
      ];
      let backgroundIndex = 0;
      window.setInterval(() => {
        document.querySelector("#viewport").style.backgroundImage = `url('${
          backgrounds[backgroundIndex % backgrounds.length]
        }')`;
        backgroundIndex += 1;
      }, 500);
    }
    renderCat() {
      const catElement = document.createElement("img");
      const viewport = document.querySelector("#viewport");
      catElement.src = "./images/cat.png";
      catElement.id = "cat";
      viewport.appendChild(catElement);

    }
    renderStatusBox() {
      const infoDiv = document.querySelector("#info-div");
      const hungerElement = document.createElement("img");
      const ageElement = document.createElement("h3");
      const fitnessElement = document.createElement("img");
      const statusBoxDiv = document.querySelector("#status-box");
      const petAge = this.pet.age;
      statusBoxDiv.style.visibility = "visible";
      hungerElement.src = "./images/hunger/hungerbar10.png";
      ageElement.innerText = "age " + petAge;
      fitnessElement.src ="./images/fitness/fit10.png";
      const nameElement = document.createElement("h3");
      const petName = this.pet.name;
      nameElement.innerHTML = petName;
      infoDiv.appendChild(nameElement);
      infoDiv.appendChild(ageElement);
    }
  }


  if (typeof module !== "undefined" && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();
