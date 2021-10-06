"use strict" ;
let happy = false;
function randomItemFromArray(arrayOne){
    return arrayOne[Math.floor(Math.random() * arrayOne.length)];
}
function calculateTrip(response){
    let des;
    let res;
    let tra;
    let ent;
    response = "no";
    while(happy == false){
        des = randomItemFromArray(["Milwaukee", "Orlando", "Denver", "Chicago"]);
        res = randomItemFromArray(["Red Lobster", "Ruby Tuesday", "Fridays", "Red Robins"]);
        tra = randomItemFromArray(["walking", "a flight", "uber", "lyft"]);
        ent = randomItemFromArray(["Museum", "Aquarium", "Baseball Stadium", "Water park"]);
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

let trip = calculateTrip("no");
console.log(`Congratulations! Your Destinations is ${trip[0]}, the restaurant is ${trip[1]}, you are getting there by ${trip[2]} and you will be entertain with ${trip[3]}`);
