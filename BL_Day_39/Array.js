let origDogs = ["BullDog","Labrador", "Beagle"];
let cats = new Array("American","Bengal");
let birds = new Array("Falcon","Eagle");

//Copy
let slicedDogs = origDogs.slice(1,2);
let copyDogs = [...origDogs];
let dogs = origDogs.slice(0);

//Stack
let pushDogs = dogs.push("Retriever");
let popDog = dogs.pop();
dogs[dogs.length] = "Poodle";

//Add & Remove first
let addFirst = dogs.unshift("Retriever");
let shiftDogs = dogs.shift();

//Atomic add remove (where, how many remove, element list)
dogs.splice(2, 1, "Pug", "Boxer");

//Array f  - concat, slice , sort
let animals = dogs.concat(cats,birds);
let newAnimal = [...dogs,...cats,...birds].toString();
let sortDog = dogs.slice(0).sort();
function scanArray([first, second]){ console.log("Scan: " +first+" "+second);}
scanArray(animals);
let joinAnimals = animals.join(" ");
let allAnimals = "";
for (let animal of animals) allAnimals += animal + " ";

console.log("Animals: " + allAnimals);

