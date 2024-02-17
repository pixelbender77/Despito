const form = document.querySelector(".form")
const thirdInputField = `<label for="input3" id="label2" >Weight <input id="input3" type="number" placeholder="" required></label>
`;
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const chat_text = document.getElementById("chat-text");
const actionButton = document.getElementById("action-button");
let userEmail;
let userName;
//


// typeWrite();


function login() {
    console.log("Checking entries");
    //removing white space from the text entered in the field with .trim()
    if (input1.value.trim() !== "" && input2.value.trim() !== "") { //making sure after whitespaces are removed from the inputs we are not left with empty string. In order words user should enter something before we proceed
        console.log("You entered stuff");
        userName = input1.value; //assigning input1 to userName variable
        userEmail = input2.value; //assigning input2 to userEmail variable
        // console.log(`Name: ${userName}  Email: ${userEmail}`);

        //adding the third input field to the form
        form.insertAdjacentHTML('beforeend', thirdInputField);

        //updating the fields
        chat_text.textContent = `Welcome ${userName}, I am Desta and i am your Dietician 😊.Tell me abit about you and i'll give you some advice so you grow healthy. `;
        typeWrite(); //We typewrite the new chat_text.


        label1.textContent = "Age ";
        input1.placeholder = "What is your age?";
        input1.type = "number";

        // label2.textContent = "Height(cm) ";
        input2.placeholder = "What is your height?";
        input2.type = "number";

        label3.textContent = "Weight(Kg) ";
        input3.placeholder = "What is your weight?";

    } else {
        console.log("You didn't enter anything");

    }

}




function typeWrite() {
    let splitedText = chat_text.textContent.split(''); //spliting the text in the chat_container character wise and storing it in a variable.
    chat_text.innerText = ""; //now we set the textContent to an empty string so the type writter will start writting from 0
    console.log(splitedText);

    let index = 0;
    const typewritterLoop = setInterval(() => {
        if (index < splitedText.length) {
            chat_text.textContent += splitedText[index]; // adding the next character to the string (Chat text)
            index++;
        } else {
            clearInterval(typewritterLoop); //if we've added all the caracters then we stop can stop the typewritter
        }
    }, 20);
}









//Buttons and Listeners
actionButton.addEventListener("click", login);

















//won't finally use this function.. but was good knowing how to do this.
//input check (checking inputs aren't null)
function checkInput(page) {
    console.log("Checking entries");
    inputValue1 = input1.value.trim(); //removing white space from the text entered in the field
    inputValue2 = input2.value.trim(); //removing white space from the text entered in the field
    inputValue3 = input3.value.trim(); //removing white space from the text entered in the field
    if (inputValue1 !== "" && inputValue2 !== "") { //making sure after whitespaces are removed from the inputs we are not left with empty string. In order words user should enter something before we proceed
        console.log("You entered stuff");
        if (page = 2) {
            if (inputValue3 !== "") {
                console.log("All three values have been entered");
                return true; // the first two inputs have been filled
            } else {
                return false; // the third input was not filled
            }
        } else {
            return true; //Page is 1 (name and email) and so there are only 2 inputs to check .. we can proceed
        }
    } else {
        console.log("You didn't enter anything");
        return false;

    }

}

//old way of doing the typewritter stuff
// chat_text.innerText = ""; //now we set the inner text to an empty string so the type writter will start writting from 0
// console.log(splitedText);
// for (let i = 0; i < splitedText.length; i++) {
//     chat_text.innerText += splitedText[i]; // adding all the characters of the chat_text progressively . The typewritter effect.. giving that bot effect.
// }   chat_text.innerText += splitedText[i]; // adding all the characters of the chat_text progressively . The typewritter effect.. giving that bot effect.
// }