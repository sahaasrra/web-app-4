//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyLXkSgv25IUHe8-VXtVD2SBfd14gslJc",
    authDomain: "kwitter-project-398bf.firebaseapp.com",
    databaseURL: "https://kwitter-project-398bf-default-rtd.firebaseio.com",
    projectId: "kwitter-project-398bf",
    storageBucket: "kwitter-project-398bf.appspot.com",
    messagingSenderId: "539053865141",
    appId: "1:539053865141:web:4642a5bf892fc0fec266fc"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
    purpose : "creating room name"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 "<div>"
 console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
 "</div>"
//End code
});});}
getData();

function redirectToRoomName()
{ 
  console.log(name);
   localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout()
{
  window.location = "index.html";
}
