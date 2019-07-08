// Your code here
const saturdayFun = (activity = 'roller-skate') => `This Saturday, I want to ${activity}!`;
const mondayWork = (activity = 'go to the office') => `This Monday, I will ${activity}.`;
const wrapAdjective = (flair = '*') => (adjective = 'special') => `You are ${flair}${adjective}${flair}!`
wrapAdjective("%")('a dedicated programmer');

const Calculator = {
  add: (x,y) => x + y,
  subtract: (x,y) => x - y,
  multiply: (x,y) => x * y,
  divide: (x,y) => x / y
};

function actionApplyer(int, arr) {
  let result = int;
  arr.forEach(fn => result = fn(result));
  return result;
}
