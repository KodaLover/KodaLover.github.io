/*
CIS133DA: Section Number
Sally Student
Lesson 11
*/

//Target an element with an ID of 'lastmodified' and set its innerHTML to the document property for when the page was last modified - Step #3
document.getElementById("lastModified").innerHTML = document.lastModified;

//Function that will display an alert message - Step #4
function formSubmit() {
    alert("The Form has been submitted.");
}

//Function that will target an element with an ID of 'resetmessage' and set the style of the element so that it is visible - Step #5
function formReset() {
    document.getElementById("resetMessage").style.visibility = "visible";
}
