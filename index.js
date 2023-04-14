const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordOneEl = document.getElementById("password-one-el")
let passwordTwoEl = document.getElementById("password-two-el")
let passwordOne = []
let passwordTwo = []



    
function genPass() {
    // passwordOneEl.textContent = []
    // passwordTwoEl.textContent = []
    function genArr(arr) {
    for (let i = 0; i < characters.length; i+=1) {
        let ranIndex = Math.floor(Math.random()*characters.length)
        if(arr.length < 16) {
            arr.push(characters[ranIndex])
            }
        }
    }
    genArr(passwordOne)
    for (let i = 0; i < passwordOne.length; i+=1) {
        passwordOneEl.textContent += passwordOne[i]
        }
    genArr(passwordTwo)
    for (let j = 0; j < passwordOne.length; j+=1) {
        passwordTwoEl.textContent += passwordTwo[j]  
    }
}

console.log(passwordOne)





 

