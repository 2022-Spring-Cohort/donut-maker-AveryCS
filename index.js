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
const multiplierDisplay = document.querySelector(".DonutMultiplierDisplay");

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

buyMultiplier.addEventListener("click", () => { 
  if(donutMaker.donutCount >= donutMaker.donutMultiplierCost){
    donutMaker.addToDonutMultiplierCount();
    multiplierDisplay.innerText = "Donut Multiplier: "+ donutMaker.donutMultiplier;
  donutDisplayCount.innerText = "Donut Count: "+ donutMaker.donutCount;
  }else console.log("You need more donuts to buy the multiplier");

})
  
  // Math.round(donutMaker.donutCount);



//1000 means nanosecond
