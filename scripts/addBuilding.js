function addBuilding() {

  firebase.auth().onAuthStateChanged(function () {
    console.log(document.getElementById("groupNameID").value);
    console.log("working");
    db.collection("buildings").add({
      name = "test"
    });
  });
}
// $(document).ready(function () {
//   $("#submit").click(function () {
//     addBuilding();
//   });
// });