"use strict";



// let users =[

//     {
//         name:"Mubariz",
//         surname:"Agayev",
//         age:18
//     },

//     {
//         name:"Aqshin",
//         surname:"Hummatov",
//         age:27
//     },
//     {
//         name:"Mirze",
//         surname:"Besirzade",
//         age:27
//     },

//     {
//         name:"Pervin",
//         surname:"Rehimli",
//         age:27
//     },

//     {
//         name:"Ibrahim",
//         surname:"Akberov",
//         age:20
//     },


// ];

// function getUsersByName(str){
//     let result = users.filter(m=>m.name.includes(str)); 
//     console.log(result);
// }

// getUsersByName("r")


let ul = document.querySelector("ul")


// function getUsers(datas){
//     setTimeout(() =>{

//         let str ="";
//         datas.forEach(user => {

//             str += `<li class="list-group-item"><b>${user.name}</b>  <b>${user.surname}</b> <b>${user.age}</b></li>`
//         });
//         ul.innerHTML =str;

//   }, 2000  );

// }



// getUsers();


// function createUser(user,){

//     return new Promise((resolved,rejected)=>{
//         setTimeout(() =>{
//             users.push(user);

//            let err =false
//            if(!err){
//             resolved(users)
//            }else{
//             rejected()
//            }

//             }, 3000);

//     })


// }

// createUser({name:"Elcan",surname:"Qurbanov", age:20}).then(response =>{
//     getUsers(response)
// })


// function getAllPost() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(datas => {
//             let str = "";
//             datas.forEach(data => {
//                 str += `<li data-id="${data.id}" class="list-group-item"><b>${data.id}-</b><b>${data.body}-</b><b>${data.userid}</b></li>`

//             });
//             ul.innerHTML = str;
//         })

// }

// getAllPost();  


// function getAllPostById(id){
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     .then(response => response.json())
//     .then(res => {

//        // ul.innerHTML = `<li class="list-group-item"><b>${res.id}-</b><b>${res.body}-</b><b>${res.userid}</b></li>`

//        alert(res.id + " " + res.body)
//     })
// }




// setTimeout(() => {
//     let elems = document.querySelectorAll("li")

//     elems.forEach(elem => {
//         elem.addEventListener("click", function () {
//             let id = parseInt(this.getAttribute("data-id"));

//             getAllPostById();
//         })
//     });
// }, 2000);





// setTimeout(() => {
//     let elems = document.querySelectorAll("li")

//     elems.forEach(elem => {
//         elem.addEventListener("click", function () {
//             let id = parseInt(this.getAttribute("data-id"));

//             getPostById();
//         })
//     });
// }, 2000);


// async function getPostById(id) {
//     let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     let result = data.json();

//     alert(result.id + " " + result.body)
// }






// $(function () {

//     $("button").click(function () {
//         $.ajax({
//             url: "https://jsonplaceholder.typicode.com/posts", success: function (datas) {
//                 let str = "";
//                 datas.forEach(data => {
//                     str += `<li data-id="${data.id}" class="list-group-item"><b>${data.id}-</b><b>${data.body}-</b><b>${data.userid}</b></li>`

//                 });

//                 $("ul").html("str"); 
//             }
//         });
//     });



// })


















































