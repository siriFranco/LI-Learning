/* const myModule = require("./myModule");
console.log(myModule.anything);
console.log(myModule.inc()); */

const { inc, dec, getCount } = require("./myModule");

inc();
inc();
inc();

console.log(`the count is ${getCount()}`);

const events = require("events");

let emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`);
});

emitter.emit("customEvent", "Hello", "Computer");
emitter.emit("customEvent", "Cool", "Eve");

process.stdin.on("data", (data) => {
    const input = data.toString().trim();
    if(input === "exit"){
        emitter.emit("customEvent", "Goodbye!", "process");
        process.exit();
    }

    emitter.emit(
        "customEvent",
        data.toString().trim(),
        "terminal"
    );

})
