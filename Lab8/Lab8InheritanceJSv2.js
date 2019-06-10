
"use strict";
const Module = (function() {
  const f1 = (function createBicyclePrototye(){
    return {
  	  speed: 0,
      applyBrake: function(val){ this.speed -= val},
      speedup: function(val){ this.speed += val}
    }
  })();
  const f2 = (function   createMountainBikeProtoype(proto){
    var objTmp = Object.create(proto);
    objTmp.gear = 1;
    objTmp.setGear= function(gear){ this.gear = gear};
    return objTmp;
  })(f1);
  const main = (function(){
    let b1 = Object.create(f1);
    let b2 = Object.create(f1);
    let mb1 = Object.create(f2,b1);
    let mb2 = Object.create(f2,b2);
    b1.speedup(35);
    b2.speedup(65);
    mb1.setGear(5);
    mb1.speedup(85);
    mb2.setGear(3);
    mb2.speedup(60);
    b2.applyBrake(15);
    alert("Bike 1: Speed " + b1.speed);
    alert("Bike 2: Speed " + b2.speed);
    alert("Mountain Bike 1: Speed " + mb1.speed + ",   gear:" + mb1.gear);
    alert("Mountain Bike 2: Speed " + mb2.speed + ",   gear:" + mb2.gear);
   })();
})();