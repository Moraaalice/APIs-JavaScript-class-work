const userContainer = document.getElementById("users")

const getUsers = ()=>{
    return fetch("https://dummyjson.com/users")
     .then(response=>response.json())
     .then(response=>response)
     .catch(error=>console.log(error))
 }
 getUsers();
 const displayUsers = async()=>{
     const users = await getUsers();
     console.log(users)
     users.users.map(item=>{
         let div = document.createElement("div");
         let image = document.createElement("img")
         let name = document.createElement("h2")
         let username = document.createElement("p")
 
         image.src = item.image;
         name.innerHTML = `${item.firstName}${item.lastName}`
         username.innerHTML = item.username;
 
         div.appendChild(image);
         div.appendChild(name);
         div.appendChild(username);
         div.setAttribute("key",item.id);
         div.setAttribute("class","people")
         userContainer.appendChild(div)
         
     })
 }
 displayUsers();

 