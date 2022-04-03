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
room_name = localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
              name: user_name,
              message: msg,
              like: 0
            });
      document.getElementById("msg").value = "";
}