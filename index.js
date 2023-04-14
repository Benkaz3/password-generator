const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordOneEl = document.getElementById("password-one-el")
let passwordTwoEl = document.getElementById("password-two-el")
let passwordOne = []
let passwordTwo = []

    
function generatePassword() {
    // reset passwords
    passwordOne = []
    passwordTwo = []
    passwordOneEl.textContent = passwordOne
    passwordTwoEl.textContent = passwordTwo
    // get value of password length from user 
    let passwordLengthEl = parseInt(document.getElementById("password-length-el").value)
    // function to generate random char arrays
    function getRandomArr(arr) {
    for (let i = 0; i < characters.length; i+=1) {
        let ranIndex = Math.floor(Math.random()*characters.length)
        if(arr.length < passwordLengthEl) {
            arr.push(characters[ranIndex])
            }
        }
    }
    // generate random password arrays then render to DOM
    getRandomArr(passwordOne)
    passwordOne.textContents = "Password one: "
    for (let i = 0; i < passwordOne.length; i+=1) {
        passwordOneEl.textContent += passwordOne[i]
        }
    getRandomArr(passwordTwo)
    for (let j = 0; j < passwordOne.length; j+=1) {
        passwordTwoEl.textContent += passwordTwo[j]  
    }
}






 

