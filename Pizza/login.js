const log = document.getElementById("loginBtn")

log.addEventListener("click", function(e){
e.preventDefault()

let name = document.getElementById("username").value;
let upassword = document.getElementById("password").value;

if(name == "" || upassword == ""){
  alert("Invalid information");
  return;
}

let users = [];
let storedUsers = localStorage.getItem("users");
if(storedUsers){
  try{
users = JSON.parse(storedUsers)
  }catch(error){
    console.error("Invalid JSON in localStorage:", error);
      users = [];
  }
}


const userExists = users.find(user => user.name === name && user.password === upassword);

  if (userExists) {
    alert("Login was successful!");
    localStorage.setItem("loggedInUser", JSON.stringify(userExists));

  

    window.location.href = "pizza.html";
  } else {
    alert("Login failed: Incorrect username or password.");
  }

    const firstLetter = users.name.charAt(0).toUpperCase();

  const profile = document.getElementById("icon");
  if(profile){
  profile.textContent = firstLetter;
}

})


function direct(){
  window.location.href = "pizza.html"
}