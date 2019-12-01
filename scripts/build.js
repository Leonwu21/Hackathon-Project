console.log("hi");



createTable();
$(document).on('click', '#display', showResult);

function showResult() {
  $("#newContent").show();

}

function createTable() {

  console.log("table created")

  db.collection("buildings").get().then(function (querySnapshot) {

    //<<<<<<< HEAD
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
      console.log("what is in   " + table);
      $("#newContent").html(table);
      

    })

  })

}


$(document).ready(function () {
  console.log("hellohere");

  /*Date object to add to a data field in the future*/
  var currentDateandTime = new Date();

  var groupForm = document.querySelector('#buildingForm');

  groupForm.addEventListener('submit', (e) => {

    console.log(e);
    e.preventDefault();
    console.log("hrewq");
    db.collection('buildings').add({
      name: document.getElementById("name").value,
      wheelchair: groupForm.wheelchair.value,
      washroom: groupForm.washroom.value
        

    })
      
//        location.reload();
  });
    
});
