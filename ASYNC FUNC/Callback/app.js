//callback
boilWater();
console.log('chop carrots');

function boilWater(){
    console.log('boiling water..');
    setTimeout(() =>{
        console.log('done.');
        console.log('add carrots.');
        setTimeout(() =>{
            console.log('Carrots are done'); 
            console.log('add onions');
            setTimeout(() =>{
                console.log('onion done.');
            } ,5000)
        }, 5000);
        console.log('chop onions');
    },10000)
    
}