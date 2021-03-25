// Plain old function syntax
const sayHelloTypescript = function () {
  // body
  console.log("Hello Typescript")
}

// Declaration syntax
function sayHelloAgain() {
  
}

// New fancy arrow function syntax
const sayCommandLineArguments = () => {
  console.log(process.argv)
}

// say("Hello Typescript");
// say(process.argv);

// console.log("Hello Typescript")
sayHelloTypescript();
// Logs the command line arguments
sayCommandLineArguments();


