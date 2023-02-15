(function exportController() {
  class Controller {
    constructor(pet) {
      const feedButton = document.querySelector("#feed-button");
      const playButton = document.querySelector("#play-button");
      const moonButton = document.querySelector("#moon-button");
      const desertButton = document.querySelector("#desert-button");
      const snowButton = document.querySelector("#snow-button");

      this.pet = pet;
      this.dayCycle();
      this.checkIfAlive();
      this.ageUp();

      feedButton.addEventListener("click", () => {
        this.feedPet();
      });
      playButton.addEventListener("click", () => {
        this.playPet();
      });
      moonButton.addEventListener("click", () => {
        this.moonHoliday();
      });
      desertButton.addEventListener("click", () => {
        this.desertHoliday();
      });
      snowButton.addEventListener("click", () => {
        this.snowHoliday();
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
      }, 4000); // <--- Increase this number to make the day longer, decrease to make the day shorter
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
    renderHolidaySelector() {
      const holidaySelectorDiv = document.querySelector("#holiday-selector");
      holidaySelectorDiv.style.visibility = "visible";
      holidaySelectorDiv.style.position = "absolute";
      holidaySelectorDiv.style.inlineSize = "600px";
    }
    ageUp() {
      const pet = this.pet;
      const ageElement = document.querySelector("#age");
      let age;
      window.setInterval(() => {
        pet.growUp();
        age = pet.age;

        console.log(age);
        ageElement.innerText = "age " + age;
        this.updateHungerBar();
        this.updateFitnessBar();
      }, 48000); // <--- Decrease this number to age more quickly and make the game more difficult
    }
    updateHungerBar() {
      const pet = this.pet;
      const hungerImg = document.querySelector("#hunger-img");
      let hungerNum = pet.hunger

      if (hungerNum > 10) {
        hungerImg.src = `./images/hunger/hungerbar0.png`;
      } else {
      hungerNum = Math.abs(pet.hunger - 10);
      hungerImg.src = `./images/hunger/hungerbar${hungerNum}.png`;
      }
    }
    updateFitnessBar() {
      const pet = this.pet;
      const fitnessNum = pet.fitness;
      const fitnessImg = document.querySelector("#fitness-img");
      if (fitnessNum < 0) {
        fitnessImg.src = `./images/fitness/fit0.png`;
      } else {
      fitnessImg.src =  `./images/fitness/fit${fitnessNum}.png`;
    }
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
      }
    }
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
      }, 170);

      setTimeout(() => {
        tea.remove();
        clearInterval(bobaAnimation);
      }, 4000);
    }
    eatFish() {
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
      }, 135);

      setTimeout(() => {
        fish.remove();
        clearInterval(fishAnimation);
      }, 4000);
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
      }, 4100);
    }
    playPet() {
      const pet = this.pet;
      const playElement = document.querySelector("#play");
      const foodElement = document.querySelector("#food");
      const duckElement = document.querySelector("#duck");
      const catElement = document.querySelector("#cat");
      if (foodElement || playElement) {
        console.log("Please wait");
      } else if (duckElement) {
        pet.walk();
        this.updateFitnessBar();
        this.playBasketBall();
      } else if (catElement) {
        pet.walk();
        this.updateFitnessBar();
        this.treadmillRun();
      } else {
        pet.walk();
        this.updateFitnessBar();
        this.playBoomerang();
      }
    }
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
      }, 170);

      setTimeout(() => {
        ball.remove();
        clearInterval(ballAnimation);
      }, 6000);
    }
    treadmillRun() {
      const viewport = document.querySelector("#viewport");
      const treadmill = document.createElement("img")
      const catElement = document.querySelector("#cat");
      let runIndex = 0;

      treadmill.src = "./images/treadmill/treadmill1.png";
      treadmill.id = "play";
      viewport.appendChild(treadmill);

      catElement.style.visibility = "hidden";

      treadmill.style.position = "relative";
      treadmill.style.blockSize = "500px";
      treadmill.style.insetInlineEnd = "170px";
      treadmill.style.zIndex = "100";
      const treadmillArray = [
        "./images/treadmill/treadmill1.png",
        "./images/treadmill/treadmill2.png",
        "./images/treadmill/treadmill3.png",
        "./images/treadmill/treadmill4.png",
        "./images/treadmill/treadmill5.png",
        "./images/treadmill/treadmill4.png",
        "./images/treadmill/treadmill3.png",
        "./images/treadmill/treadmill2.png",
        "./images/treadmill/treadmill1.png"
      ];
      const runAnimation = window.setInterval(() => {
        treadmill.src = treadmillArray[runIndex % treadmillArray.length];
        runIndex += 1;
      }, 170);

      setTimeout(() => {
        treadmill.remove();
        clearInterval(this.runAnimation);
        catElement.style.visibility = "visible";
      }, 6000);
    }
    playBoomerang() {
      const viewport = document.querySelector("#viewport");
      const boomerang = document.createElement("img");
      const turtleElement = document.querySelector("#turtle");

      let boomerIndex = 1;

      boomerang.src = "./images/boomerang/boomerang1.png";
      boomerang.id = "play";
      viewport.appendChild(boomerang);

      turtleElement.style.visibility = "hidden";

      boomerang.style.position = "relative";
      boomerang.style.blockSize = "400px";
      boomerang.style.insetBlockStart = "145px";
      boomerang.style.insetInlineStart = "75px";
      boomerang.style.zIndex = "100";
      const boomerangAnimation = window.setInterval(() => {
        boomerang.src = `./images/boomerang/boomerang${boomerIndex}.png`;
        boomerIndex += 1;
      }, 170);

      setTimeout(() => {
        boomerang.remove();
        clearInterval(boomerangAnimation);
        turtleElement.style.visibility = "visible";
      }, 5000);
    }
    checkIfAlive() {
      const pet = this.pet;
      const petElement = document.getElementsByClassName("pet");
      window.setInterval(() => {
        if (pet.isAlive == false) {
          petElement[0].src = "./images/grave.png";
          this.updateFitnessBar();
          this.updateHungerBar();
          console.log(pet.age);
          console.log(pet.hunger + "hunger");
          console.log(pet.fitness + "fitness");

        }
      }, 500);
    }
    moonHoliday() {
      const viewport = document.querySelector("#viewport");
      const moonImg = document.createElement("img");

      moonImg.src = "./images/moonbackground.png";
      moonImg.style.position = "fixed";
      moonImg.style.zIndex = "5";

      viewport.appendChild(moonImg);

      setTimeout(() => {
        moonImg.remove();
      }, 10000)
    }
    desertHoliday() {
      const viewport = document.querySelector("#viewport");
      const desertImg = document.createElement("img");

      desertImg.src = "./images/desertbackground.png";
      desertImg.style.position = "fixed";
      desertImg.style.zIndex = "5";

      viewport.appendChild(desertImg);

      setTimeout(() => {
        desertImg.remove();
      }, 10000)
    }
    snowHoliday() {
      const pet = this.pet;
      const viewport = document.querySelector("#viewport");
      const snowImg = document.createElement("img");

      snowImg.src = "./images/snowbackground.png";
      snowImg.style.position = "fixed";
      snowImg.style.zIndex = "5";

      viewport.appendChild(snowImg);
      pet.walk()
      this.updateFitnessBar();

      setTimeout(() => {
        snowImg.remove();
      }, 10000)
    }
  }


  if (typeof module !== "undefined" && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();
