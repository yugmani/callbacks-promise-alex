// Import stylesheets
import './style.css';

// *****************************************************
// Resolving and rejecting Promises with static methods
// *****************************************************

//Assign Promise to a variable and then invoke it. This is similar to a function expression.
const myPromise = new Promise(function (resolve, reject) {
  //Resolve the promise passing a message as a data
  resolve('Success: promise resolved.');

  //if some error happens
  if (error) {
    //reject the Promise passing a message as a data
    reject('Failure: promise rejected');
  }
});

//invoke the Promise
console.log(myPromise);
// Promise {}

//Returning a Promise from a function. To invoke this Promise, we call the function that returns it. Still, we use the 'new' keyword before Promise constructor.

function myPromiseFunction() {
  //return new Promise
  return new Promise(function (resolve, reject) {
    //resolve the Promise passing a message as a data
    resolve('Success: promise resolved.');

    //if some error happens
    if (error) {
      //reject the Promise passing a message as a data
      reject('Failure: promise rejected');
    }
  });
}

//invoke myPromiseFunction() to invoke the Promise inside it
console.log(myPromiseFunction());
//Promise {}

// *****************************************************
// Handling JavaScript Promises with handler functions
// *****************************************************

//create a Promise
const newPromise = new Promise((resolve, reject) => {
  //fake a delay
  setTimeout(function () {
    //resolve the promise with a simple message
    resolve('Promise has been resolved!');
  }, 1000);
});

//Invoke the newPromise and attach then() handler
//Pass a callback function to the then() handler
//Make that callback function accept one parameter
newPromise.then((receivedData) => {
  //log the data received by Promise
  console.log(receivedData);
});


// output
// Promise has been resolved!