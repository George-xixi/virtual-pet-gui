(function exportController() {
  class Controller {
    constructor(pet) {
      const feedButton = document.querySelector("#feed-button");
      const playButton = document.querySelector("#play-button");

      this.pet = pet;
      this.dayCycle();
      this.checkIfAlive();
      this.ageUp();

      feedButton.addEventListener("click", () => {
        this.feedPet();
      })
      playButton.addEventListener("click", () => {
        this.playPet();
      })
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
      }, 2000);
    }
    
    renderCat() {
      const catElement = document.createElement("img");
      const viewport = document.querySelector("#viewport");
      catElement.src = "./images/cat.png";
      catElement.className = "cat";
      viewport.appendChild(catElement);

    }
    renderStatusBox() {
      const ageElement = document.querySelector("#age");
      const nameElement = document.querySelector("#name");
      const statusBoxDiv = document.querySelector("#status-box");
      const petAge = this.pet.age;
      statusBoxDiv.style.visibility = "visible";
      ageElement.innerText = "age " + petAge;
      const petName = this.pet.name;
      nameElement.innerHTML = petName;
    }
    ageUp() {
      const pet = this.pet;
      const ageElement = document.querySelector("#age");
      const catElement = document.getElementsByClassName("cat");
      let age;
      window.setInterval(() => {
        pet.growUp()
        age = pet.age;
        
        console.log(age);
        console.log(catElement);
        ageElement.innerText = "age " + age;
        this.updateHungerBar();
        this.updateFitnessBar();
        
      }, 2000)
    }
    updateHungerBar() {
      const pet = this.pet;
      const hungerNum = Math.abs(pet.hunger - 10);
      const hungerImg = document.querySelector("#hunger-img")

      hungerImg.src = `./images/hunger/hungerbar${hungerNum}.png`;
    }
    updateFitnessBar() {
      const pet = this.pet
      const fitnessNum = pet.fitness;
      const fitnessImg = document.querySelector("#fitness-img");

      fitnessImg.src = `./images/fitness/fit${fitnessNum}.png`;
    }
    feedPet() {
      const pet = this.pet;
      pet.feed();
      this.updateHungerBar();
    }
    playPet() {
      const pet = this.pet;
      pet.walk();
      this.updateFitnessBar();
    }
    checkIfAlive() {
      const pet = this.pet;
      const catElement = document.getElementsByClassName("cat");
      window.setInterval(() => {
        if (pet.isAlive == false) {
          console.log(catElement);
          catElement[0].src = "./images/grave.png";
        }
      }, 500)
    }
  }


  if (typeof module !== "undefined" && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();
