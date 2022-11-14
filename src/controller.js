(function exportController() {
  class Controller {
    constructor() {
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
      const statusBoxElement = document.createElement("div");
      const hungerElement = document.createElement("img");
      const ageElement = document.createElement("h3");
      const fitnessElement = document.createElement("img");
      const viewport = document.querySelector("#viewport");
      statusBoxElement.id = "status-box";
      viewport.appendChild(statusBoxElement);
      const statusBoxDiv = document.querySelector("#status-box")
      hungerElement.src = "./images/hunger/hunger10.png";
      ageElement.innerText = "Age";
      fitnessElement.src ="./images/fitness/fit10.png";
      statusBoxDiv.appendChild(hungerElement);
      statusBoxDiv.appendChild(ageElement);
      statusBoxDiv.appendChild(fitnessElement);


      
    }
  }


  if (typeof module !== "undefined" && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();
