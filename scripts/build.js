console.log("hi");




createTable();
$(document).on('click', '#submit', showResult);
showResult();
function showResult() {
$("#result").show();

}

function createTable() {

console.log("table created")

db.collection("buildings").get().then(function (querySnapshot) {


  querySnapshot.forEach(function (doc) {
    
  let name;
  let wheelchair;
  let washroom;
    name = doc.data().name;
    wheelchair = doc.data().wheelchair;
    washroom = doc.data().washroom;

    
  let table = "<table>";
  table += "<tr><th>Building Name</th>";
  table += "<th>Wheelchair</th>";
  table += "<th>Washroom</th></tr>";

  table += "<tr><td>" + name + "</td><td>" + wheelchair + "</td><td>" + washroom + "</td></tr>" ;
  $("#result").html(table);

  })



})
}


// db.collection("buildings").get().then(function (querySnapshot) {
//   //////This querySnapshot.empty is a boolean that returns true is the collection is empty(no docs)
//   if (!querySnapshot.empty) {
//     console.log("hello");
//     //var size = querySnapshot.size
//     querySnapshot.forEach(function (doc) {
//       console.log(doc.data().name);
//       name = doc.data().name;
//       wheelchair = doc.data().wheelChair;
//       washroom = doc.data().washroom;
//       //console.log(doc.id, " => ", doc.data().course);
//       //console.log(doc.data().location);
//       let location = doc.data().location;
//       if (location == "SE12") {
//         idListSE12.push(doc.id);
//       }
//       if (location == "SE2") {
//         idListSE2.push(doc.id);
//         //console.log("SE2 pushed: " + doc.id);
//       }
//       idList.push(doc.id);
//     });

//     let se2Size = idListSE2.length;
//     let se12Size = idListSE12.length;

//     ////////////////////SE12
//     function se12() {
//       for (let i = 0; i < se12Size; i++) {
//         db.collection('Groups').doc(idListSE12[i]).onSnapshot(function (snap) {
//           //console.log(snap.data().course);
//           var indexSe12 = idList.indexOf(idListSE12[i]);
//           g += createGroup(indexSe12, snap.data().course, snap.data().groupName);
//           if (i == se12Size - 1) {
//             markerSE12 = new L.marker([49.25018, -123.001519], { icon: myIcon }).addTo(mymap)
//               .bindPopup('<div class="iconPopup">' + g + '</div>');
//             mymap.addLayer(markerSE12);
//           }
//         });
//       };
//     }

//     //console.log(idListSE2);
//     function se2() {
//       for (let i = 0; i < se2Size; i++) {
//         // console.log(" The second x?" + x);
//         db.collection('Groups').doc(idListSE2[i]).onSnapshot(function (snap) {
//           //console.log("SE2 List: " + idListSE2);
//           //console.log("what is x the third time " + x);
//           var indexSe2 = idList.indexOf(idListSE2[i]);
//           x += createGroup(indexSe2, snap.data().course, snap.data().groupName);
//           //SE2
//           //console.log("what is x the fourth time" + x);
//           if (i == se2Size - 1) {
//             markerSE2 = new L.marker([49.251434, -123.001143], { icon: myIcon }).addTo(mymap)
//               .bindPopup('<div class="iconPopup">' + x + '</div>');
//             mymap.addLayer(markerSE2);
//           }
//         });
//       };
//     };
//     //se2 function
//     se2();
//     //se12 function
//     se12();
//   };
// });
