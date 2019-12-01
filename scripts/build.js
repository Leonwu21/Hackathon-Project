console.log("hi");


createTable();
$(document).on('click', '#display', showResult);




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

    querySnapshot.forEach(function (doc) {
      name = doc.data().name;
      wheelchair = doc.data().wheelchair;
      washroom = doc.data().washroom;
      table += "<tr><td>" + name + "</td><td>" + wheelchair + "</td><td>" + washroom + "</td></tr>";
      //console.log("what is in   " + table);
      $("#newContent").html(table);
    })
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
