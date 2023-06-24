const getNameQuestion = document.querySelector('div.name h1.question');
const getNameAnswerDiv = document.querySelector('div.name div.width50');
const getName = document.querySelector('#getName');

const HIDDEN_CLASSNAME = 'hidden';

if(localStorage.username) {
    getNameQuestion.innerText = greeting(localStorage.username);
    getNameAnswerDiv.classList.add(HIDDEN_CLASSNAME);
}

function greeting(a) {
    const time = new Date();
    let greeting = "";
    // console.log(time);

    // console.log(time.getHours());
    if(time.getHours() > 4 && time.getHours() < 12 ) {
        greeting = "Good morning, ";
    } else if(time.getHours() < 18) {
        greeting = "Good afternoon, ";
    } else if(time.getHours() < 23) {
        greeting = "Good evening, ";
    } else {
        greeting = "Everybody is sleeping now, "
    }

    return `${greeting} ${a}!`;
}

getName.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        // console.log(greeting(getName.value));
        e.preventDefault();

        const username = getName.value;
        localStorage.setItem("username", username);

        getNameQuestion.innerText = greeting(username);
        getNameAnswerDiv.classList.add(HIDDEN_CLASSNAME);
        // console.log('minsun');
    }
})
