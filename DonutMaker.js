//Will hold methods and fields for everything dealing with donuts.
//Step 1: need to make methods to add to donut count and retrieve donut count 

export default class DonutMaker{
constructor(donutCount,donutMultiplier,autoClicker){
this.donutCount = 0;
this.donutMultiplier = 0;
this.autoClicker = 0;
this.autoClickerCost = 100;
}

addToDonutCount(){
    this.donutCount++;
}



addToAutoClickerCount(){
    this.autoClicker++;
    this.donutCount-=this.autoClickerCost;
    this.autoClickerCost *= 1.1;
   
    }
}


