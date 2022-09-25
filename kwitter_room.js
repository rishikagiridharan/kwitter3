
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyBL2lvxBh1LaAlt8T2hGXbU8ZaFOiSI3l8",
  authDomain: "kwitterrrr-c91d9.firebaseapp.com",
  databaseURL: "https://kwitterrrr-c91d9-default-rtdb.firebaseio.com",
  projectId: "kwitterrrr-c91d9",
  storageBucket: "kwitterrrr-c91d9.appspot.com",
  messagingSenderId: "201642024302",
  appId: "1:201642024302:web:0e9241831a1abf1180357f"
};

// Initialize Firebase
firebase.initializeApp = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
 function addRoom()
      {
            room_name = document.getElementById("room_name").value;
            
            firebase.database().ref("/").child(room_name).update({
                  purpose : "adding room name"
            });

            localStorage.setItem("room_name", room_name);

            window.location = "kwitter_room.html";
      }
      function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location = "kwitter_room.html";
      }