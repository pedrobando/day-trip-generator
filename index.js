"use strict" ;
let happy = false;
function randomItemFromArray(arrayOne){
    return arrayOne[Math.floor(Math.random() * arrayOne.length)];
}
function calculateTrip(response){
    response = "no";
    while(happy == false){
    let des = randomItemFromArray(["Milwaukee", "Orlando", "Denver", "Chicago"]);
    let res = randomItemFromArray(["Red Lobster", "Ruby Tuesday", "Fridays", "Red Robins"]);
    let tra = randomItemFromArray(["walking", "a flight", "uber", "lyft"]);
    let ent = randomItemFromArray(["Museum", "Aquarium", "Baseball Stadium", "Water park"]);
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
    return [des, res, tra, ent]
}

calculateTrip("no")