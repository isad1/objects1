//When we have to change properties from the properties we have initially given
var indianAircraft = {
    name : 'Tejas mk2',
    version : 4.5 ,
    speed : 'mac ' + 4.5  ,
    stealth : 'Semistealth'
};
indianAircraft.version = 4 + ' version' ;
indianAircraft.speed = 'mac ' + 3.5 ;
indianAircraft.name = 'Tejas mk1' ;
indianAircraft.worldranking = 5 + 'th' ;
indianAircraft.firstInService = 2021 ;
indianAircraft.totalCost = 70 + ' million dollar' ;
console.log(indianAircraft.version);
console.log(indianAircraft.speed);
console.log(indianAircraft.name);
console.log(indianAircraft.stealth);
console.log(indianAircraft.worldranking);
console.log(indianAircraft.totalCost);
console.log(indianAircraft.firstInService);