const a = document.querySelector('title');
console.log(a.innerText);

const title = document.querySelector('h1');

function handleTitleClick(){
    console.log('title was clicked~');
}

title.addEventListener('click', handleTitleClick);
handleTitleClick();
