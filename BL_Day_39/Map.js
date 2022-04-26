// 48.00

let keyString = 'a string'
let keyObj = {}
let keyFunc = function () {}

//Set values
let myMap = new Map()
myMap.set(keyString, "Values of string")
myMap.set(keyObj, "Key Objects")
myMap.set(keyFunc, "Key Func")

//Get values
let size = myMap.size
let valStr = myMap.get(keyString)
let isKeyExist = myMap.has('a string')

for (let [key, value] of myMap) console.log("Loop1: "+key+ ' = '+value)
for (let [key, value] of myMap ) console.log("Loop2: "+key+ ' = '+value)
for (let key of myMap.keys())  console.log("Loop3: " +key)
for (let value of myMap.values())  console.log("Loop4: " +value)

//Merge 2 maps. last repeated key wins
//spread op essentially convertsa a map to an array
let first = new Map([[1,'one'],[2,'two'],[3,'three']])
let second = new Map ([[1, 'unos'],[2,'dos']])
let merged = new Map ([...first, ...second, [1,'eins']])

let hashKey = merged.has(1)
let delKey = merged.delete(1)
if (merged.has(1)) console.log(merged.get(1))
console.log("Pos2: " +merged.get(2))
merged.clear();
console.log(merged.size)