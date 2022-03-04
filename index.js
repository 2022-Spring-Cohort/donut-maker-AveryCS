import DonutMaker from "./DonutMaker.js";
const donutMaker = new DonutMaker();
console.log(donutMaker);
setInterval(function(){
  donutMaker.activateAutoClicker();
  donutDisplayCount.innerText = "Donut Count: "+ donutMaker.donutCount;
},1000);

const addToDonutCount = document.querySelector(".IncreaseDonutCountButton");
const donutDisplayCount = document.querySelector(".DonutCountDisplay");

const addToAutoClickerCount = document.querySelector(".PurchaseAutoClicks");
const autoClickerDisplay = document.querySelector(".AutoClickDisplay");

const buyMultiplier = document.querySelector(".PurchaseDonutMultiplier");
const multiplierDisplay = document.querySelector(".DonutMultiplier Display");

addToDonutCount.addEventListener("click", () => {
  donutMaker.addToDonutCount();
  donutDisplayCount.innerText = "Donut Count: "+ donutMaker.donutCount;
  // Math.round(donutMaker.donutCount);
})

addToAutoClickerCount.addEventListener("click", () => {
  if(donutMaker.donutCount >= donutMaker.autoClickerCost){
    donutMaker.addToAutoClickerCount();
    autoClickerDisplay.innerText = "Auto Clicker Count: "+ donutMaker.autoClicker;
  donutDisplayCount.innerText = "Donut Count: "+ donutMaker.donutCount;
  }
  else console.log("Not enough donuts");
  
})



//1000 means nanosecond
//Why do all of these }) have to be at the bottom? Why are they not at the end of each query selector?

