const clocked = document.querySelector('#clock');

function getclock() {
    const clock = new Date();
    // console.log(`${clock.getHours()}:${clock.getMinutes()}:${clock.getSeconds()}`);
    // console.log(clock);

    const hours = String(clock.getHours()).padStart(2, "0");
    const minutes = String(clock.getMinutes()).padStart(2, "0");
    const seconds = String(clock.getSeconds()).padStart(2, "0");
    clocked.innerText = `${hours}:${minutes}`;
}

getclock();
setInterval(getclock, 10000);