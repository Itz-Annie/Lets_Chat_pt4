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
room_name = localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value="";
}
