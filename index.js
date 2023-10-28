// Add your code here

function submitData(name,email){

    let usersObj = {
    name: name,
    email: email
}

getAllNames(usersObj);
// getId();
// 

}

function renderOneUser(user){
    //build the user


    let rando = document.body.innerHTML=`${user.id}`
    
}

function erronous(user){

    let rando = document.body.innerHTML=`${user}`
}


function getAllNames(usersObj){
    fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body:JSON.stringify(usersObj)
    })
    .then(function(response){ return response.json();
    })
    .then (function(object){
        
        // renderOneUser(object);
        console.log(object);
        renderOneUser(object);


    })
    .catch(function(error){
        let message = 'Unauthorized Access';
        // alert("Unauthorized Access")
        // console.log(error.message);
        error.object = {
            message:message
        }
        erronous(object);


    });
}



submitData("Jim","jim@jim.com");




// function getId(){
//     fetch("http://localhost:3000/users")
//     .then(response => response.json())
//     .then(usersObj => usersObj.forEach(user => renderOneUser(user)))
// }

// submitData1 ("Ussen", "Ukimanuka@gmail.com");

// // function handlesubmit(e){
// //     e.preventDefault()
// //     let usersObj={
// //         userName : e.target.name.value,
// //         userEmail: e.target.email.value
// //     }
// // submit

// // }