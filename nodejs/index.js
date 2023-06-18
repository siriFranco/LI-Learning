/* let hello = "Good morning World from Node.js";
let justNode = hello.slice(17);


console.log(`Who let the ${justNode} out?`);

const path = require("path");

console.log(
  `The file name is ${path.basename(__filename)}`  
);

for (let key in global){
    console.log(key);
}

console.log(process.argv);

function grab(flag){
    let indexAfterFlag = process.argv.indexOf(flag) +1;
    return process.argv[indexAfterFlag];
}

let greeting = grab("--greeting");
let user = grab("--user");

console.log(greeting);
console.log(user);


process.stdout.write("Hello \n \n");
const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?"
];

const answers = [];

function ask(i = 0){
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(`>`);
}

ask(answers.length);

process.stdin.on("data", function(data){

    answers.push(data.toString().trim());
    //process.stdout.write(data.toString().trim());

    if(answers.length < questions.length){
        ask(answers.length);
    } else {
        process.exit();
    }
});

//ask(answers.length);

process.on("exit", function(){
    process.stdout.write("\n\n\n");
    process.stdout.write(
        `Go ${answers[1]} ${answers[0]} you can finisg writing ${answers[2]} later` 
        );
});

const waitTime = 3000;
console.log(`setting a ${waitTime / 1000} second delay `);
const timerFinished = () => {
    clearInterval(interval);
    console.log("done");
};

setTimeout(timerFinished, waitTime);

const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    console.log(`waiting ${currentTime / 1000} seconds`);
};

const interval = setInterval(incTime, waitInterval);
 */
//--------------Node Modules------------

const path = require("path");
const util = require("util");
const v8 = require("v8");

console.log(path.basename(__filename));
const dirUploads = path.join(
    __dirname,
    "www",
    "files",
    "uploads"
);

util.log(dirUploads);
util.log(path.basename(__filename));
util.log(v8.getHeapStatistics());