var firebaseConfig = {
      apiKey: "AIzaSyBeYD4k36tmnXg2sB9Vnt4jEsCj-TaWUQw",
      authDomain: "lets-chat-cd2fe.firebaseapp.com",
      databaseURL: "https://lets-chat-cd2fe-default-rtdb.firebaseio.com",
      projectId: "lets-chat-cd2fe",
      storageBucket: "lets-chat-cd2fe.appspot.com",
      messagingSenderId: "349283803905",
      appId: "1:349283803905:web:cf47dd3f648edc4ae1f100"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
 user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "Welcome " +user_name+ "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom(){
      room_name = document.getElementById("room_name").value; 

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location  = "kwitter_page.html";
}

function logout(){ 
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}