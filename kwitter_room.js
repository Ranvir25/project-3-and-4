const firebaseConfig = {
    apiKey: "AIzaSyDT9WLfbtNW4Sw3c6Cf7FFMLztH9RK-GD8",
    authDomain: "kitter-806c8.firebaseapp.com",
    databaseURL: "https://kitter-806c8-default-rtdb.firebaseio.com",
    projectId: "kitter-806c8",
    storageBucket: "kitter-806c8.appspot.com",
    messagingSenderId: "292478256854",
    appId: "1:292478256854:web:0597c7f51bf8f02bb1ab77"}
    
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name"); 
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addroom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({ purpose : "adding room name"
});

localStorage.setItem("room_name",room_name);

window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("roomname-" + Room_names);
       row = "<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+= row;
      //End code
      });});}

getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setitem("room_name", name);
       window.location = "kitter_page.html";
}
function logout() {
    localStorage.removeItem("room_names");
    localStorage.removeItem("username");
    window.location = "kwitter.html";
}