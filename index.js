"use strict" ;
let happy = false;

while(happy == false){
    let des = genDestination();
    let res = genRestaurant();
    let tra = genTransport();
    let ent = genEnt();
    alert("Your Day Trip Looks like the destination is " + des + " the restaurant is " + res + " the mode of transport is " + tra + " and the entertainment is " + ent);
    let response = prompt("Are you satisfied? Please type YES or NO");
    if(response == "yes"){
        happy = true; 
        console.log(des + " "+" "+ res +" "+ tra+" " + ent); 
    }
    else{ 
    happy = false 
    }
}

function randomItemFromArray(arrayOne){
    return arrayOne[Math.floor(Math.random() * arrayOne.length)];
}

randomItemFromArray(["Museum", "Aquarium", "Baseball Stadium", "Water park"]);