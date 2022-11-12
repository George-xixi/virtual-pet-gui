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
    "./images/background/11.jpg"
  ];
  let backgroundIndex = 0;
window.setInterval(() => {
  document.querySelector("#viewport").style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
  backgroundIndex +=1;
}, 500)
}
}