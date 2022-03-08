import DonutMaker from "./DonutMaker.js";
const donutMaker = new DonutMaker();
console.log(donutMaker);
setInterval(function(){
  donutMaker.activateAutoClicker();
  donutDisplayCount.innerText = "Donut Count: "+ Math.round(donutMaker.donutCount);
},1000);

const addToDonutCount = document.querySelector(".IncreaseDonutCountButton");
const donutDisplayCount = document.querySelector(".DonutCountDisplay");

const addToAutoClickerCount = document.querySelector(".PurchaseAutoClicks");
const autoClickerDisplay = document.querySelector(".AutoClickDisplay");

const buyMultiplier = document.querySelector(".PurchaseDonutMultiplier");
const multiplierDisplay = document.querySelector(".DonutMultiplierDisplay");

addToDonutCount.addEventListener("click", () => {
  donutMaker.addToDonutCount();
  donutDisplayCount.innerText = "Donut Count: "+ Math.round(donutMaker.donutCount);
})

addToAutoClickerCount.addEventListener("click", () => {
  if(donutMaker.donutCount >= donutMaker.autoClickerCost){
    donutMaker.addToAutoClickerCount();
    autoClickerDisplay.innerText = "Auto Clicker Count: "+ donutMaker.autoClicker;
  donutDisplayCount.innerText = "Donut Count: "+ Math.round(donutMaker.donutCount);
  }
  else console.log("Not enough donuts");
  
})

buyMultiplier.addEventListener("click", () => { 
  if(donutMaker.donutCount >= donutMaker.donutMultiplierCost){
    donutMaker.addToDonutMultiplierCount();
    multiplierDisplay.innerText = "Donut Multiplier: "+ donutMaker.donutMultiplier;
  donutDisplayCount.innerText = "Donut Count: "+ Math.round(donutMaker.donutCount);
  }else console.log("You need more donuts to buy the multiplier");

})
const modal = document.querySelector(".modal"); 
const companyButton = document.querySelector(".companyButton");
const close = document.querySelector(".close");
modal.style.display = "none";

companyButton.addEventListener("click", () => {
  modal.style.display = "block";
})

close.addEventListener("click", () => {
  modal.style.display = "none";
  
  
})
  



//1000 means nanosecond
