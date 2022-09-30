import { getLetters, addNewLetter } from "./letters.js";

document.getElementById('app').innerHTML = `
<h2>Pen Pal Society</h2>
<div class="letterForm">
<h4>Author</h4>
<select id="authors" name="authors">
<option value="Zeus">Zeus</option>
<option value="Socrates">Socrates</option>
<option value="Shakespeare">William Shakespeare</option>
<option value="God">God</option>
</select>
<h4>Letter</h4>
<input type="textarea" name="letter" class="letter">
<h4>Topics</h4>
<label for="business">Business</label>
<input id="business" name="topic" type="radio" value="business"/>
<label for="friendly">Friendly</label>
<input id="friendly" name="topic" type="radio" value="friendly"/>
<label for="family">Family</label>
<input id="family" name="topic" type="radio" value="family"/>
<label for="congratulations">Congratulations</label>
<input id="congratulations" name="topic" type="radio" value="congratulations"/>
<label for="condolences">Condolences</label>
<input id="condolences" name="topic" type="radio" value="condolences"/>
<h4>Recipient</h4>
<select id="recipient" name="recipient">
<option value="medusa">Medusa</option>
<option value="plato">Plato</option>
<option value="juliet">Juliet Capulet</option>
<option value="buddha">Buddha</option>
</select><br>
<button id="send-btn">Send Letter</button>
<h4>Letters</h4>
<div id="finalDraft"></div>
</div>
`

const displayLetters = () => {
    let lettersHtml = '';
    const letters = getLetters()
    letters.forEach(letter => {
        lettersHtml += `
        <div><p>Dear ${letter.recipient},</p></div>
        <div><p>${letter.letter}</p></div>
        <div><p>Sincerely, ${letter.author}</p></div>
        <div><p>${letter.topic}</p></div>
        `
    })
    document.getElementById('finalDraft').innerHTML = lettersHtml
}

displayLetters()

document.addEventListener('click', (e) => {
    if(e.target.id === "send-btn"){
        const authorElement = document.getElementById('authors')?.value 
        const letterElement = document.querySelector('input[name="letter"]')?.value
        const topicsElement = document.querySelector('input[name="topic"]:checked')?.value
        const recipientElement = document.getElementById('recipient')?.value

        let newLetter = {
            author: authorElement,
            letter: letterElement,
            topic: topicsElement,
            recipient: recipientElement
        }
        addNewLetter(newLetter)
    }
})

document.addEventListener('stateChanged', event => {
    displayLetters()
})