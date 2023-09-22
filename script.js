
console.log('Hello World');

const listenBtn = document.querySelector("button");
const selectEl = document.querySelector("select");

const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const stopBtn = document.querySelector("#stopBtn");

const speech =  new SpeechSynthesisUtterance();
let voices = null;


listenBtn.addEventListener("click", () => {
    const textValue = document.querySelector("textarea").value;
    speech.text = textValue;
    speechSynthesis.speak(speech);

});



speechSynthesis.onvoiceschanged = () => {
    voices = speechSynthesis.getVoices();
    console.log(voices);
    speech.voice = voices[0];

    voices.forEach((voice, i) => selectEl.options[i] = new Option(voice.name, i));

};

selectEl.addEventListener("change", () => {
    speech.voice = voices[selectEl.value];
});


pauseBtn.addEventListener("click", () => {
    const textValue = document.querySelector("textarea").value;
    speech.text = textValue;
    speechSynthesis.pause(speech);

});

resumeBtn.addEventListener("click", () => {
    const textValue = document.querySelector("textarea").value;
    speech.text = textValue;
    speechSynthesis.resume(speech);

});

stopBtn.addEventListener("click", () => {
    const textValue = document.querySelector("textarea").value;
    speech.text = textValue;
    speechSynthesis.cancel(speech);

});










// const listenBtn = document.querySelector('#listen')
// const selectEl = document.querySelector('select')
// const pauseEl = document.querySelector('#pause')
// const resumeEl = document.querySelector('#resume')
// const stopEl = document.querySelector('#stop')
// const speech = new SpeechSynthesisUtterance()
// let voices = null


// listenBtn.addEventListener('click', () => {
//     const textValue = document.querySelector('textarea').value
//     speech.text = textValue
//     window.speechSynthesis.speak(speech)

// })

// speechSynthesis.onvoiceschanged = () => {
//     voices = speechSynthesis.getVoices()
//     // console.log(voices)
//     speech.voice = voices[0]
//     voices.forEach((voice, i) => {
//         return selectEl.options[i] = new Option(voice.name, i)
// });

// }

// selectEl.addEventListener('change', () => {
//     speech.voice = voices[selectEl.value]
// })


// pauseEl.addEventListener('click', () => {
//     const textValue = document.querySelector('textarea').value
//     speech.text = textValue
//     window.speechSynthesis.pause(speech)
    
// })


// resumeEl.addEventListener('click', () => {
//     const textValue = document.querySelector('textarea').value
//     speech.text = textValue
//     window.speechSynthesis.resume (speech)
    
// })


// stopEl.addEventListener('click', () => {
//     const textValue = document.querySelector('textarea').value
//     speech.text = textValue
//     window.speechSynthesis.cancel(speech)

// })
