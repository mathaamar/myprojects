
var roster = []

function addNew(){
  var newName = prompt("What name would you like to add? ");
  roster.push(newName)
}
function remove(){
  var remName = prompt("What name would you like to remove?");
  var index = roster.indexOf(remName);
  roster.splice(index,1)
}


function display(){
  console.log(roster);
}


var start = prompt("Would you like to start the roster web app? y/n");
var request = "empty";


if (start === "y") {
  while (request !== "quit") {
    request = prompt("Please select an action: add, remove, display, or quit.")
    if (request === "add") {
      addNew();
    }else if (request === "display") {
      display();
    }else if (request == "remove") {
      remove();
    }
  }
}
alert("Thanks for using the Web App! Please refresh the page to start over.")
