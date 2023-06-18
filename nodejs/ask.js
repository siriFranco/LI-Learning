const collectAnswers = require("./lib/collectAnswers");


const questions = [
    "What is ur name?",
    "Where do u live?"
];

const answerEvents = collectAnswers(
    questions,
     (answers) =>{
    console.log("Thank u");
    console.log(answers);
    process.exit();
    }
);

answerEvents.on("answer", (answer) => 
    console.log(`the answer is ${answer}`)
);