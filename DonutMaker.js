//Will hold methods and fields for everything dealing with donuts.
//Step 1: need to make methods to add to donut count and retrieve donut count 

export default class DonutMaker{
constructor(donutCount,donutMultiplier,autoClicker){
this.donutCount = 0;
this.donutMultiplier = 0;
this.autoClicker = 0;
this.autoClickerCost = 100;
this.donutMultiplierCost =10;
}

addToDonutCount(){
    this.donutCount++;
}



addToAutoClickerCount(){
    this.autoClicker++;
    this.donutCount-=this.autoClickerCost;
    this.autoClickerCost = Math.round(this.autoClickerCost * 1.1);
   
    }

    // When the 'activate Auto Clickers' event is executed, 
    // increase the donut total by the amount of Auto Clickers owned

activateAutoClicker(){
    this.donutCount += this.autoClicker;
    console.log(this.autoClicker)
}

addToDonutMultiplierCount(){
    this.donutMultiplier++;
    this.donutCount-=this.donutMultiplierCost
    this.donutMultiplierCost = Math.round(this.donutMultiplierCost * 1.1);
}
}


