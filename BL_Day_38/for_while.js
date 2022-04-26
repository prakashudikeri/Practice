let dogs = ["BullDog","Labrador"];

//old
var allDogs = "";
for (var i = 0; i < dogs.length; i++){ allDogs += dogs[i] + " ";}
console.log("Old: " +allDogs);

//New
allDogs = "";
for (let dog of dogs){ allDogs += dogs + " ";   }
console.log("New: " +allDogs);

while (i<dogs.length){ allDogs += dogs[i++] + "";}
console.log("While: " +allDogs);

do{ allDogs += dogs[i++] + "";}
while(i<dogs.length)