/*Handling Create a Group button (type "submit")
on click -> collect data user has written
generate group ID, store in ID field
generate time stamp to put in "Time Created" */


$(document).ready(function() {




    /*const refID = db.collection("Groups").document();
    String groupID = refID.();*/
    var currentDateandTime = new Date();


    $(document).on('click', 'button#create_group_btn', function() {
        var nameOfGroup = $('#groupName').val();
        var nameOfCourse = $('#courseSelect').val();
        var setLocation = $('#groupLocation').val();
        var detailsOfGroup = $('#groupDetails').val();
        
        console.log("values are .." + nameOfCourse + nameOfCourse);

        console.log(nameOfGroup);
        db.collection("Groups").doc().set({
            groupName: nameOfGroup,
            course: nameOfCourse,
            location: setLocation,
            details: detailsOfGroup
        });
    });
});


