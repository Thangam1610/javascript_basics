// var hospital = {
//     patient:"enter",
//     doctor:"enter",
//     vendor:"enter",
//     visitor:"dontenter"
// };

// var person = "patient";
// console.log(hospital[person]);


// create an object student object
// you should add one element
// you should update on element
// before deleting check whether property is available or not then you should delete one element

var studentList =     {
    student1:  {
        name:"John",
        class:"x",
        subject : {
            tamil: 80,
            english: 90,
            telungu:95
            }
        },
        student2:  {
            name:"jessie",
            class:"IX",
            subject : {
                tamil: 70,
                english: 98,
                telungu:95
            }
        },
        student3:  {
            name:"jayden",
            class:"X",
            subject : {
                tamil: 60,
                english: 68,
                telungu:50
            },
        }
}

//update an element
studentList.student1.name="Jacob";
console.log(studentList);

//add one element
 studentList.student3.gender = "Female";
 console.log(studentList.gender);
 console.log(studentList);

//delete the property
// if(studentList.student3.gender == true){
//  delete studentList.student3.gender;
// }
 console.log(studentList);
