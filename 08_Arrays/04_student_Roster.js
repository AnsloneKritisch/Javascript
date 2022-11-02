var roster = []

// Add Student 

function add()
{
    var new_name = prompt("What name would you like to add ?")
    roster.push(new_name)
}

function remove()
{
    var remove_name  = prompt("What name would you like to remove ?")
    var index = roster.indexOf(remove_name);
    roster.splice(index,1)
}

function display()
{
    console.log(roster);
}


var start = prompt("Would you like to start the roster Web APP ? y/n")
var request