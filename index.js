// Add your code here
// .then(function(resp){
//     resp,json()
// })
// .then(function(data){
//     console.log(data)
// }
// )

// const postInfo ={
//     method: "POST",
//         headers: {
//             "content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify({
//             name: userName,
//             email: userEmail,
//         }),
// }
function submitData(userName, userEmail){
    fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName ,
            email: userEmail,
        }),
    })
    .then(function(resp){
        return resp.json()
    })
    .then(function(ans){
        
    })
    
}

fetch("http://localhost:3000/users")


submitData()