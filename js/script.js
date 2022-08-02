const passwordEl = document.querySelector('#password')
const copyEl = document.querySelector('#copy')
const lenghtInput = document.querySelector('#lenght')
const lenghtNumberEl = document.querySelector('.lenghtNumber')
const generateBtn = document.querySelector('#generate')

const upperCheck = document.querySelector('#uppercase')
const lowerCheck = document.querySelector('#lowercase')
const numberCheck = document.querySelector('#number')
const symbolCheck = document.querySelector('#symbol')


const characters = Array.from(Array(26)).map((_, i) => i + 97)
const lowercaseLetters = characters.map((item) => String.fromCharCode(item));
const uppercaseLetters = lowercaseLetters.map((item) => item.toUpperCase())

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const symbols = ['!', '@', '#', '$', '%', '&']

lenghtNumberEl.innerHTML = lenghtInput.value;

lenghtInput.addEventListener('change', () => {
    lenghtNumberEl.innerHTML = lenghtInput.value
})

generateBtn.addEventListener('click', () => {
    generatePassword(upperCheck.checked,
        lowerCheck.checked,
        numberCheck.checked,
        symbolCheck.checked,
        lenghtInput)
})

const generatePassword = (hasUppercase, hasLowercase, hasNumbers, hasSymbols) => {
    const newArray = [
        ...(hasLowercase ? lowercaseLetters : []),
        ...(hasUppercase ? uppercaseLetters : []),
        ...(hasNumbers ? numbers : []),
        ...(hasSymbols ? symbols : [])
    ]

    if (newArray.length === 0) return;

    let password = '';
    let lenght = Number(lenghtInput.value)

    for (let i = 0; i < lenght; i++) {
        const randomIndex = Math.floor(Math.random() * newArray.length)
        password += newArray[randomIndex]
    }

    passwordEl.innerHTML = password
}