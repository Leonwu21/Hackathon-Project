
//Global Varable to store IDs and id numbers
var d;
var idList = [];

createTable();
$(document).on('click', '#display', showResult);
$(document).on('click', '#no', closeConfirm);
$(document).on('click', '#yes', removeRow);
$(document).on('click', 'img[id^=delete]', showConfirm);


//////////////////////////////////////////////////
//This shows the confirm popup and extracts the id number to variable d
//////////////////////////////////////////////////
function showConfirm() {
    $("#confirm").show()
    d = $(event.target).attr("id").charAt(6);
    d = parseInt(d);
    
    console.log("showconfirm" + d)
}


//////////////////////////////////////////////////
//This closes the confirm popup
//////////////////////////////////////////////////
function closeConfirm() {
    $("#confirm").hide()
}

//////////////////////////////////////////////////
//This removes the table row
//////////////////////////////////////////////////
function removeRow() {
    console.log("yes clicked")
    console.log("delete is clicked and id is: " + d);
    db.collection("buildings").doc(idList[d]).delete().then(function() {
        console.log("Document successfully deleted!");
        $("#row" + d).remove();
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
    closeConfirm();
}


//////////////////////////////////////////////////
//This displays or hides the table
//////////////////////////////////////////////////
function showResult() {
    var x = document.getElementById("newContent");
    if (window.getComputedStyle(x).display === "none") {
        $("#newContent").show();
    } else {
        $("#newContent").hide();
    }
}


//////////////////////////////////////////////////
//This creates a table by reading data from database
//////////////////////////////////////////////////

function createTable() {
    console.log("table created")
    db.collection("buildings").get().then(function (querySnapshot) {
        let name;
        let wheelchair;
        let washroom;
        let table = "<table>";
        table += "<tr><th>Building Name</th>";
        table += "<th>Wheelchair Access</th>";
        table += "<th>Gender Neutral Washroom</th></tr>";
        var newContent = $("<div id='newContent' class='content'></div>");

        let i = 0;
        
        querySnapshot.forEach(function (doc) {
            let deleteImg;
            deleteImg = "<img id='delete" + i + "' src='images/delete.png'>"
            idList.push(doc.id);
            name = doc.data().name;
            wheelchair = doc.data().wheelchair;
            washroom = doc.data().washroom;
            table += "<tr id='row" + i + "'><td>" + name + "</td><td>"
                                   + wheelchair + "</td><td>" + washroom + deleteImg + "</td></tr>";
            //console.log("what is in   " + table);
            i++;
        })
        
        $("#newContent").append(table);
        console.log(idList);
    })
}




//////////////////////////////////////////////////
//This submits the form and writes to database
//////////////////////////////////////////////////
$(document).ready(function () {
    console.log("hello here");
    var groupForm = document.querySelector('#buildingForm');

    groupForm.addEventListener('submit', (e) => {
        console.log(e);
        e.preventDefault();
        console.log("test");
        db.collection('buildings').add({
            name: document.getElementById("name").value,
            wheelchair: groupForm.wheelchair.value,
            washroom: groupForm.washroom.value

        }).then(function(){location.reload()});
    });
});
