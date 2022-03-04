import DonutMaker from "./DonutMaker.js";
const donutMaker = new DonutMaker();


const addToDonutCount = document.querySelector(".IncreaseDonutCountButton");
const donutDisplayCount = document.querySelector(".DonutCountDisplay");

const addToAutoClickerCount = document.querySelector(".PurchaseAutoClicks");
const autoClickerDisplay = document.querySelector(".AutoClickDisplay");

const buyMultiplier = document.querySelector(".PurchaseDonutMultiplier");
const multiplierDisplay = document.querySelector(".DonutMultiplier Display");

addToDonutCount.addEventListener("click", () => {
  donutMaker.addToDonutCount();
  donutDisplayCount.innerText = "Donut Count: "+ donutMaker.donutCount;
})

addToAutoClickerCount.addEventListener("click", () => {
  donutMaker.addToAutoClickerCount();
  autoClickerDisplay.innerText = "Auto Clicker Count: "+ donutMaker.autoClicker;
  donutDisplayCount.innerText = "Donut Count: "+ donutMaker.donutCount;


})
//Why do all of these }) have to be at the bottom? Why are they not at the end of each query selector?

