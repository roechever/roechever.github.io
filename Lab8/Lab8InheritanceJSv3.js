
class Bycicle{
  constructor(){
    this._speed = 0;
  }
  applyBrake(value){
    this._speed -= value; 
  }
  speedup(value){
    this._speed += value;
  }
  getSpeed(){
    return this._speed;
  }
}

class MountainBycicle extends Bycicle{
  constructor(){
    super();
    this._gear = 1;
  }
  setGear(gear){
    this._gear = gear;
  }
  getGear(){
    return this._gear;
  }
}

function main(){
    "use strict";
    let b1 = new Bycicle();
    let b2 = new Bycicle();
    let mb1 = new MountainBycicle();
    let mb2 = new MountainBycicle();
    b1.speedup(35);
    b2.speedup(65);
    mb1.setGear(5);
    mb1.speedup(85);
    mb2.setGear(3);
    mb2.speedup(60);
    b2.applyBrake(15);
    alert("Bike 1: Speed " + b1.getSpeed());
    alert("Bike 2: Speed " + b2.getSpeed());
    alert("Mountain Bike 1: Speed " + mb1.getSpeed() + ",   gear:" + mb1.getGear());
    alert("Mountain Bike 2: Speed " + mb2.getSpeed() + ",   gear:" + mb2.getGear());
}
main();