import DonutMaker from "./DonutMaker.js";
const donutMaker = new DonutMaker();

// const container = (document.querySelector('.container').innerText =
//   'mmmmmmmmm doughnuts.... ahhhhhhh!');


  donutMaker.addToDonutCount()

  let donutCount = donutMaker.donutCount
  
  const addToDonutCount = document.querySelector(".IncreaseDonutCountButton");
  const donutDisplayCount = document.querySelector(".DonutCountDisplay");
  addToDonutCount.addEventListener("click", () => {
    donutMaker.addToDonutCount();
    donutDisplayCount.innerText = "Donut Count: "+ donutMaker.donutCount;

    

  

})