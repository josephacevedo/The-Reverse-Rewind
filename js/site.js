// get the string from the page
// controller
function getValue(){

    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayString(revString);

}

// reverse the string
// logic
function reverseString(userString){
    let revString = [];

    // reverse string using for loop
    for (let i = userString.length - 1 ; i >= 0; i--) {
        revString += userString[i];
        
    }
    return revString
}

// display the reversed string
// View
function displayString(revString){
// write message to page
document.getElementById("message").innerHTML = `Your string reversed is: ${revString}`
// show alert box
document.getElementById("alert").classList.remove("invisible");
}