// Signin Section //

const signin = document.getElementById("signBtn")

signin.addEventListener("click", function(e){
  e.preventDefault()

let newuser = document.getElementById("uname").value;
let newpassword = document.getElementById("userpassword").value;
let newemail = document.getElementById("useremail").value;


if(newuser =="" || newpassword == "" || newemail == ""){
  alert("Sign in was unsucessful");
  return;
}

if(!newemail.includes("@")){
  alert("Sign in was unsucessful");
  return;
}

  let users = [];
  const storedUsers = localStorage.getItem("users");
  if (storedUsers) {
    try {
      users = JSON.parse(storedUsers);
    } catch (error) {
      console.error("Invalid JSON in localStorage:", error);
      users = [];
    }
  }
const userExists = users.some(user => user.name === newuser || user.email === newemail);
  if (userExists) {
    alert("Sign in was unsuccessful: Username or email already exists.");
    return;
  }

const user =
  {name: newuser,
    password: newpassword,
    email: newemail
  };

users.push(user);
 localStorage.setItem("users", JSON.stringify(users));


alert("Sign in was a success!");
  window.location.href = "login.html";


}
)





function Redirect(){
  window.location.href = "shop.html"
}







