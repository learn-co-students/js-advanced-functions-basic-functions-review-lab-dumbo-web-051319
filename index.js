// Your code here

function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`
}
  // saturdayFun("sleep")
  // console.log(saturdayFun("sleep"))


function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}
  // console.log(mondayWork("work from home"))

function wrapAdjective(default_value="*"){
  return function(single_parameter="special"){
    return `You are ${default_value}${single_parameter}${default_value}!`
  }
}
// console.log(wrapAdjective('$')('alright'))
// let encouragingPromptFunction = wrapAdjective("!!!")

//const and let define objects
const Calculator = {
  add: function(a,b) {
    return a + b;
  },
  subtract: function(a,b) {
    return a - b
  },
  multiply: function(a,b) {
    return a * b
  },
  divide: function(a,b) {
    return a / b;
  }
};

function actionApplyer(integer, array){
  return
}
//NOTES:
// Define a Function Using Function Declaration
// Define the Term Hoisting
// JavaScript's ability to call functions before they appear in the code is called hoisting. For hoisting to work, the function must be defined as a function declaration.

// Define a Function Using a Function Expression
// A function expression comes about when we write function(){...} and assign it to a variable
// This function expression evaluates to "stored work" (a "potential" function)
// i.e. fn => ƒ () { "potential" function }
// i.e. fn() => 'evoked function'

// Define the term 'anonymous function'
// function   (){
//          ^ Nothing defined
// This is an anonymous function
// }


//Define an IIFE: Instantly Invoked Function Expressions
// console.log(function(x){ return x + 2 }(2)) >> why did this work?
// console.log((function(x){ return x + 2 }()2)) >> why didnt this work?

//Define the term "function-level scope"
//Define the term "closure"
// The "inner" function (the anonymous function) is a "closure"

//Define the term "scope chain"
