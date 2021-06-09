// 1. Declare and assign the variables here:
let shuttleName = 'Determination';
let speedMPH = 17500;
let distanceToMarsKM = 225000000;
let distanceToMoonKM = 384400;
let speedKM = 0.621;

console.log(shuttleName);
console.log(speedMPH);
console.log(distanceToMarsKM);
console.log(distanceToMoonKM);
console.log(speedKM);

// 2. Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof shuttleName);
console.log(typeof speedMPH);
console.log(typeof distanceToMarsKM);
console.log(typeof distanceToMoonKM);
console.log(typeof speedKM);

// Code your solution to exercises 3 and 4 here:

let milesToMars = distanceToMarsKM * speedKM;
console.log(milesToMars);

let hoursToMars = milesToMars / speedMPH;
console.log(hoursToMars);

let daysToMars = hoursToMars / 24;
console.log(daysToMars); 

console.log(shuttleName + " will take " + daysToMars + " days to reach Mars.")

// Code your solution to exercise 5 here:

let milesToMoon = distanceToMoonKM * speedKM;
console.log(milesToMoon);

let hoursToMoon = milesToMoon / speedMPH;
console.log(hoursToMoon);

let daysToMoon = hoursToMoon / 24;
console.log(daysToMoon);
console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.");