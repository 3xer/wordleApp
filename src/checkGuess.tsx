export function submitLength() {
    const wordLength = document.getElementById('choose-word-length')
    console.log(wordLength?.value)
    const lengthInput = document.getElementById('choose-word-length')
    const wordInput = document.getElementById('letter-input')
    lengthInput?.setAttribute('class', 'displayNone');
    wordInput?.setAttribute('class', '')
}
export function wordIsAllowed(){
    const wordLength = document.getElementById('choose-word-length')
    const wordInput = document.getElementById('letter-input')
        if (wordInput?.value.length == wordLength?.value)
        {
            console.log('isAllowedLength');
        }
}