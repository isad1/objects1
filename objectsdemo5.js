//assigning behaviours and running it
var indianAircraft = {
    name : 'Tejas mk2',
    version : 4.5 ,
    speed : 'mac ' + 4.5  ,
    stealth : 'Semistealth' ,
    acheivements : function(){
         console.log('Tejas is ordered by ' + 6 + ' countries');
     },
    milestones : function(){
        console.log('USA ordered ' + 300 + ' tejas aircrafts')

    }
    
};
console.log(indianAircraft.version);
console.log(indianAircraft.speed);
console.log(indianAircraft.name);
console.log(indianAircraft.stealth);
indianAircraft.milestones();
indianAircraft.acheivements();
//we can also access the properties without using . rather we can use it in square bracket format like how it is given below

console.log(indianAircraft['version']);
console.log(indianAircraft['speed']);
console.log(indianAircraft['name']);
console.log(indianAircraft['stealth']);