const letters = []


export const addNewLetter = (letter) => {
    letters.push(letter)
    document.dispatchEvent(new CustomEvent ('stateChanged'))
}

export const getLetters = () => {
    let lettersData = letters.map(letter => ({...letter}))
    return lettersData;
}