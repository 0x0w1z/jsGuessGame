/*
// arrow functions

// normal functions
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};

// Arrow functions

const calcAge1 = (birthYear) => {
  // body parts
};


// function calling another functions
function fruitCutter(fruit) {
  return fruit * 4;
}

function fruitProcessor(apple, orange) {
  const applePieces = fruitCutter(apple);
  const oragePieces = fruitCutter(orange);
  const juice = `juice with ${applePieces} pieces of  apples and ${oragePieces} pieces of oranges`;
  return juice;
}

console.log(fruitProcessor(2, 2));
*/

// looping arrays

const friends = [
  "Asuna",
  "kirito",
  "sasuke",
  "Teacher",
  "kakashi",
  true,
  10 - 5,
];

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}

// continue and break

// continue
for (i = 0; i < friends.length; i++) {
  if (typeof friends[i] !== "string") continue;
}

// break
for (let i = 0; i < friends.length; i++) {
  if (typeof friends[i] === "number") break;
}

// looping back
for (let i = friends.length - 1; i >= 0; i--) {
  console.log(friends[i]);
}


