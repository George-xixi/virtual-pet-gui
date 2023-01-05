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
      }, 2000); // <--- Increase this number to make the day longer, decrease to make the day shorter
    }
    
    renderPet(petType) {
      const petElement = document.createElement("img");
      const viewport = document.querySelector("#viewport");

      petElement.src = `./images/${petType}.png`;
      petElement.className = "pet";
      petElement.id = petType;
      viewport.appendChild(petElement);
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
      let age;
      window.setInterval(() => {
        pet.growUp()
        age = pet.age;
        
        console.log(age);
        ageElement.innerText = "age " + age;
        this.updateHungerBar();
        this.updateFitnessBar();
        
      }, 48000) // Decrease this number to age more quickly and make the game more difficult
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
      const playElement = document.querySelector("#play");
      const foodElement = document.querySelector("#food");
      const catElement = document.querySelector("#cat");
      const duckElement = document.querySelector("#duck");
      if (playElement || foodElement) {
        console.log("Please wait");
      } else if (catElement) {
        pet.feed();
        this.updateHungerBar();
        this.eatFish();
      } else if (duckElement) {
        pet.feed();
        this.updateHungerBar();
        this.eatBread();
      } else {
      pet.feed();
      this.updateHungerBar();
      this.drinkBoba();
    }}
    drinkBoba() {
      const viewport = document.querySelector("#viewport");
      const tea = document.createElement("img");

      let teaIndex = 1;
      tea.id = "food";
      tea.src = "./images/boba/boba1.png";
      viewport.appendChild(tea);

      const bobaAnimation = window.setInterval(() => {
        tea.src = `./images/boba/boba${teaIndex}.png`;
        teaIndex += 1;
      }, 170)

      setTimeout(() => {
        tea.remove();
        clearInterval(bobaAnimation);
      }, 4000)
    }
    eatFish(){
      const viewport = document.querySelector("#viewport");
      const fish = document.createElement("img");

      let fishIndex = 1;
      fish.id = "food";
      fish.src = "./images/fish/fish1.png";
      viewport.appendChild(fish);
      fish.style.insetInlineEnd = "100px";
      fish.style.insetBlockStart = "365px";
      const fishAnimation = window.setInterval(() => {
        fish.src = `./images/fish/fish${fishIndex}.png`;
        fishIndex += 1;
      }, 170)

      setTimeout(() => {
        fish.remove();
        clearInterval(fishAnimation);
      }, 4000)
    }
    eatBread() {
      const viewport = document.querySelector("#viewport");
      const bread = document.createElement("img");

      let breadIndex = 1;
      bread.id = "food";
      bread.src = "./images/bread/bread1.png";
      viewport.appendChild(bread);
      bread.style.insetInlineEnd = "130px";
      bread.style.insetBlockStart = "340px";
      const breadAnimation = window.setInterval(() => {
        bread.src = `./images/bread/bread${breadIndex}.png`;
        breadIndex += 1;
      }, 170);

      setTimeout(() => {
        bread.remove();
        clearInterval(breadAnimation);
      }, 4100)
    }
    playPet() {
      const pet = this.pet;
      const playElement = document.querySelector("#play");
      const foodElement = document.querySelector("#food");
      const duckElement = document.querySelector("#duck");
      if (foodElement || playElement) {
        console.log("Please wait");
      } else if (duckElement) {
        pet.walk();
        this.updateFitnessBar();
        this.playBasketBall();
      } else {
      pet.walk();
      this.updateFitnessBar();
    }
  };
    playBasketBall() {
      const viewport = document.querySelector("#viewport");
      const ball = document.createElement("img");
      let ballIndex = 1;
      
      ball.src = "./images/ball/ball1.png";
      ball.id = "play";
      viewport.appendChild(ball);

      ball.style.position = "relative";
      ball.style.inlineSize = "325px";
      ball.style.blockSize = "325px";
      ball.style.insetBlockStart = "100px";
      ball.style.zIndex = "100";
      const ballAnimation = window.setInterval(() => {
        ball.src = `./images/ball/ball${ballIndex}.png`;
        ballIndex += 1;
      }, 170)

      setTimeout(() => {
        ball.remove();
        clearInterval(ballAnimation);
      }, 6000);
    };
    checkIfAlive() {
      const pet = this.pet;
      const petElement = document.getElementsByClassName("pet");
      window.setInterval(() => {
        if (pet.isAlive == false) {
          petElement[0].src = "./images/grave.png";
          this.updateFitnessBar();
          this.updateHungerBar();
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
