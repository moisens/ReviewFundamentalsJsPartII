//Javascript is single threaded, synchronous language.
//Javascript runs line after line, regardless how long it is gonna take

//Make Soup
//boil water 10 min
//chop carrots
//add carrots boil for 5 min
//chop onion
//add boil for 5 min

boilWater(10000);
console.log(`chop carrots`);
boilWater(5000);
console.log(`chop onion`);
boilWater(5000)

// console.log(`i'm first`);
// console.log(`i'm second`);
// console.log(`i'm third`);

// console.log(`i'm first`);
// boilWater()
// console.log(`i'm third`);



function boilWater(time){
    console.log('boiling water..');
    for(let i=0; i<time; i++){
        console.log('Still not done...');
    }
    console.log('done');
}



