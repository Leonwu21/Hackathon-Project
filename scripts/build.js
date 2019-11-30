function setGenderWashrooms(boolean) {
  firebase.auth().onAuthStateChanged(function (user) {
    db.collection("buildings/").add({
      genderWashroom: boolean
    });
  });
}

function setRamp(boolean) {
  firebase.auth().onAuthStateChanged(function (user) {
    db.collection("buildings/").add({
      wheelchairRamp: boolean
    });
  });
}