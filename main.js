const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = `I had all and then most of you
Some and now none of you
Take me back to the night we met
I don't know what I'm supposed to do
Haunted by the ghost of you
Oh, take me back to the night we met
When the night was full of terrors
And your eyes were filled with tears
When you had not touched me yet
Oh, take me back to the night we met`;

let idx = 1;
let speed = 300 / speedEl.value;

function writetext() {  
    textEl.innerText = text.slice(0, idx);
    idx++;
    if (idx > text.length) {
        idx = 1;
    }
    setTimeout(writetext, speed);
}

writetext();

speedEl.addEventListener('input', (e) => {
    speed = 300 / e.target.value;
});
