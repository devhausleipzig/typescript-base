// Plain old function syntax
const sayHelloTypescript = function () {
  // body
  console.log("Hello Typescript")
}

const sayCommandLineArguments = function () {
  console.log(process.argv)
}

const say = function(message: string) {
  console.log(message)
}

const shout = function(message: string) {
  const messageUpperCasedAndWithBang = message.toUpperCase() + "!";
  console.log(messageUpperCasedAndWithBang)
}

const myMessage: string = "Hello"

// console.log("Hello Typescript")
// sayHelloTypescript();
say("Hello Typescript");
shout("Hello Typescript");

// const myHelloMessage = "Hello to all of you"
// console.log(myHelloMessage.toUpperCase() + "!")

// Logs the command line arguments
// sayCommandLineArguments();
// .join(): convert an array into a string
say(process.argv.join(",\n"));
shout(process.argv.join(",\n"));

