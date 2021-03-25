// Plain old function syntax
const sayHelloTypescript = function () {
  // body
  console.log("Hello Typescript")
}

const sayCommandLineArguments = function () {
  console.log(process.argv)
}

const loud = function(text: string) {
  // body
  const loudText = text.toUpperCase() + "!";
  return loudText;
};

const say = function(message: string) {
  console.log(message)
}

const shout = function(message: string) {
  const loudMessage = loud(message);
  console.log(loudMessage)
}



// console.log("Hello Typescript")
// sayHelloTypescript();
// say("Hello Typescript");
shout("Hello Typescript");

// console.log("BELEN!", "Hello Belen")
// console.log(loud("Belen"), "Hello Belen");

// const myBox = new Date();
// const myBox = Math.random();

// const myHelloMessage = "Hello to all of you"
// console.log(myHelloMessage.toUpperCase() + "!")

// Logs the command line arguments
// sayCommandLineArguments();
// .join(): convert an array into a string
// say(process.argv.join(",\n"));
// shout(process.argv.join(",\n"));

