"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// URL for the instructions:
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html
const SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Declare (5) Variables With Type
let prevspacecraftName = "Determination";
let prevspeedMph = 17500;
let kilometersToMars = 225000000;
let kilometersToTheMoon = 384400;
let prevmilesPerKilometer = 0.621;
// Part 2: Print Days to Mars
let milesToMars = kilometersToMars * prevmilesPerKilometer;
let hoursToMars = milesToMars / prevspeedMph;
let daysToMars = hoursToMars / 24;
// Code an output statement here (use a template literal):
let logDaysToMars = `
${prevspacecraftName} would take ${daysToMars} days to get to Mars.
`;
console.log(logDaysToMars);
// Part 3: Create a Function ("getDaysToLocation")
function prevgetDaysToLocation(kilometersAway) {
    let milesTo = kilometersAway * prevmilesPerKilometer;
    let hoursTo = milesTo / prevspeedMph;
    let numOfDaysToLocation = hoursTo / 24;
    return numOfDaysToLocation;
}
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
logDaysToMars = `
 ${prevspacecraftName} would take ${prevgetDaysToLocation(kilometersToMars)} days to get to Mars.
`;
console.log(logDaysToMars);
let logDaysToMoon = `
 ${prevspacecraftName} would take ${prevgetDaysToLocation(kilometersToTheMoon)} days to get to the Moon.
`;
console.log(logDaysToMoon);
// Part 4: Create a Spacecraft Class
// Create an instance of the class here:
class Spacecraft {
    constructor(craftName, speedMph) {
        this.milesPerKilometer = 0.621;
        this.craftName = craftName;
        this.speedMph = speedMph;
    }
    getDaysToLocation(kilometersAway) {
        let milesTo = kilometersAway * this.milesPerKilometer;
        let hoursTo = milesTo / this.speedMph;
        let numOfDaysToLocation = hoursTo / 24;
        return numOfDaysToLocation;
    }
    printDaysToLocation(location) {
        console.log(`${this.craftName} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
    }
}
let spaceShuttle = new Spacecraft("Determination", 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// console.log(`
// ${spaceShuttle.craftName} would take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to get to Mars.
// `)
// console.log(`
// ${spaceShuttle.craftName} would take ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to get to the Moon.
// `)
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation("Mars", kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation("the Moon", kilometersToTheMoon));
//# sourceMappingURL=parts1-5.js.map