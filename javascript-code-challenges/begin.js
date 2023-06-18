function clock(){
    const clockNode = document.querySelector("#clock");
    return setInterval(() =>{
        let date = new Date();
        let tick = date.toLocaleTimeString();
        clockNode.textContent = tick;
    }, 1000);
}

clock();

function getStudents(classroom){
    let {hasTeachingAssistant, classList} = classroom;
    let teacher, teachingAssistant, students;

    if(hasTeachingAssistant){
        [teacher, teachingAssistant, ...students] = classList;
    } else {
        [teacher, ...students] = classList;
    }
    return students;
}

console.log(
    getStudents({
        hasTeachingAssistant: true,
        classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"],
    })
);

/* 
----------1st option ------------
function makeBodyBlue(){
    document.body.style.background = '#0f62fe';
}
function makeBodyPink(){
    document.body.style.background = '#ff7eb6';
}
function makeBodyGreen(){
    document.body.style.background = '#42be65';
}
 */

function changeColor(color){
    return function(){
        document.body.style.background = color;
    };
    // 2nd document.body.style.background = color;
}

const bgColorBlue = changeColor("#0f62fe");
const bgColorPink = changeColor("#ff7eb6");
const bgColorGreen = changeColor("#42be65");

document.querySelector("#blue").addEventListener('click', bgColorBlue);
//1st makeBodyBlue);
//2nd () => changeColor("#0f62fe"));
document.querySelector("#pink").addEventListener('click', bgColorPink); 
//1st makeBodyPink);
//2nd () => changeColor("#ff7eb6"));
document.querySelector("#green").addEventListener('click', bgColorGreen); 
//1st makeBodyBlue);
//2nd () => changeColor("#42be65"));

// ------numPermutations ----------
/* function numPermutations(letters){
    let total;
    for (let i = 1; i <= letters.length; i++) {
        if (total == undefined){
            total = i;
            continue;
        }
        total *= i;      
    }
    return total;
} */
function numPermutations(letters){
    if(letters.length == 1){
        return 1;
    }
    return letters.length * numPermutations(letters.slice(1));
}

console.log(numPermutations("hello"));

// ------ obtain info from API ----------
async function getUsers(){
    let people = await fetch("https://randomuser.me/api/?results=5");
    let data = await people.json();
    console.log(data);
    const timeline = document.querySelector("#timeline");
    data.results.forEach(person => {
        let image = document.createElement('img');
        image.src = person.picture.medium;
        timeline.appendChild(image);
    });
}

getUsers();

// ------ URLify ----------
function urlify(blogTitle){
    const punctuation = /[.,/#!$%^&*{}=;:\-_`()'"]/g;
    const blogTitleWithoutPunctuation = blogTitle.replace(punctuation, "");
    return blogTitleWithoutPunctuation.toLowerCase().trim().replaceAll(" ", "-");
}

console.log(urlify("How I Got Into Programming"));