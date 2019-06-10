const f1 = (function createBicyclePrototye(){
  return {
  	speed: 0,
    applyBrake: function(val){ this.speed -= val},
    speedup: function(val){ this.speed += val}
  }
})();
//const f2 = (function createMountainBikeProtoype(proto){
//  let objTmp = Object.create(proto);
//  objTmp.gear = 1;
//  objTmp.prototype.setGear= function(gear){ //this.gear = gear;}
//  return objTmp;
//})();
alert("Inicio");
let bikeTomas = Object.create(f1);
alert("Bike Tomas: Speed "+bikeTomas.speed);
//let bikeCarlos = Object.create(f2(f1));
//alert("Bike Carlos: Speed "+bikeCarlos.speed+", //gear:"+bikeCarlos.gear);