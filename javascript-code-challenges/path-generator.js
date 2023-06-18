function* getStop(){
    yield "King's Landing";
    yield "The Twins";
    yield "Riverrun";
    yield "White Harbor";
    yield "Winterfell";
}

const nycWesterosPath = getStop();
const nextStopButton = document.querySelector("#next-stop");
nextStopButton.addEventListener("click", () =>{
    let currStop = nycWesterosPath.next();
    if(currStop.done){
        console.log("We made it!");
        nextStopButton.setAttribute("disabled", true);
    } else {
        console.log(currStop.value);
    }
});