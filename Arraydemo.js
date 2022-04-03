let oriDogs = ["Bulldog","Beagle","Labrador",];
let cats = new Array("Americanl curl","Bengal");
let birds = new Array("Falcons","Ducks","Flamingoes");

//Array copy Elements
let sliceDogs = oriDogs.slice(1,2);
let copyDogs = [...oriDogs];
let dogs = oriDogs.slice(0);

//Stack Functions (LIFO) push and pop
let pushDogs = oriDogs.slice(1,2);
let popDogs = [...oriDogs];
dogs[dogs.length] = "poodle";

//add and remove frpm first
let addFirst = dogs.unshift("Golden Retriver");
let shiftDog = dogs.shift();

//atomic add and reove elements (where,how many to remove,element list)
dogs.splice(2,1, "pug","Boxer");

//arrays function-concat, slice and sort
let animals = dogs.concat(cats,birds);
let newAnimal  = [...dogs,...cats, ...birds].toString();
let sortDog = dogs.slice(0).sort();
function scanArray([first,second]) {console.log("Scan: "+first + " " + second); }
scanArray(animals);
let joinAnimals = animals.join(" ");
let allAnimals = "";
for (let animals of animals) allanimals += animal + " ";

console.log("Animals : "+ allAnimals);

