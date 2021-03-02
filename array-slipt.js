const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// const part = nums.slice(2, 5);              //slice --> we have clear start and end count;

const removed = nums.splice(2, 3, 15, 20)              //splice --> we have clear start and delete count. It also replace delete index. i mean add i think
// console.log(removed);
// console.log(nums);

const together = nums.join(',');                    //join --> every element is add together.
console.log(together);