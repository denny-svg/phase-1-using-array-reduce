const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// Write a reduce function.
function reduce(batteries) {
    return batteries.reduce((acc, current) => acc + current, 0);
}
const batteries = [4, 5, 3, 4, 4, 6, 5];
const totalBatteries = reduce(batteries);
console.log (totalBatteries);