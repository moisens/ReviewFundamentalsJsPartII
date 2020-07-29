//Asynchronous
//Borwser!!! fetch data, Get geolocalisation setTimeout, setTimer, etc
//asynchronous simply means that things are happend in the background

boilWater(1000);
console.log('chop carrots');
for(let i=0; i<10000; i++){
    console.log('still busy');
}

function boilWater(time){
    console.log('boiling water..');
    setTimeout(() =>{
        console.log('done.');
    },time)
    
}