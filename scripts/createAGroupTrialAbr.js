/*Handling Create a Group button (type "submit")
on click -> collect data user has written
generate group ID, store in ID field
generate time stamp to put in "Time Created" */


$(document).ready(function() {
  
    
    /*Date object to add to a data field in the future*/
    var currentDateandTime = new Date();
   
    var groupForm =  document.querySelector('#createAGroupForm');
  
    groupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      db.collection('Groups').add({
        groupName: groupForm.groupNameA.value,
        course: groupForm.courseSelectA.value,
        location: groupForm.groupLocationA.value,
        details: groupForm.groupDetailsA.value,
        
      })
    });
});

