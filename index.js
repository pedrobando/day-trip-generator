"use strict" ;

function genDestination(){
    let destinations = ["Milwaukee", "Chicago", "New York", "Denver", "San Diego", "Orlando", "Dallas"];
    let randomCity = destinations[Math.floor(Math.random() * destinations.length)];
    return randomCity;
}

function genRestaurant(){
    let restaurants = ["Red Lobster", "McDonalds", "Red Robins", "Ruby Tuesday", "Prime Steaks", "Chik Fil A", "Fridays"];
    let randomRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
    return randomRestaurant;
}

function genTransport(){
    let transport = ["Walk", "Shared Drive - Uber", "Flight", "Walk"];
    let randomTransport = transport[Math.floor(Math.random() * transport.length)];
    return randomTransport;
}

function genEnt(){
    let ent = ["Museum", "Aquarium", "Baseball Stadium", "Water park"];
    let randomEnt = ent[Math.floor(Math.random() * ent.length)];
    return randomEnt;
}


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