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
  say(loudMessage)
}

// Instead of console.log("Hello Typescript")
say("Hello Typescript");
shout("Hello Typescript");
say(loud("Hello Typescipt"));

// .join(): convert an array into a string
say(process.argv.join(",\n"));
shout(process.argv.join(",\n"));

