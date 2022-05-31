const firebaseConfig = {
  apiKey: "AIzaSyCDJB2dCS6Gfd_quPIUNTHxayJU6rNYUtg",
  authDomain: "fon-fon-c93.firebaseapp.com",
  projectId: "fon-fon-c93",
  storageBucket: "fon-fon-c93.appspot.com",
  messagingSenderId: "640814212731",
  appId: "1:640814212731:web:18b099d48736521549e4de"
};

const app = initializeApp(firebaseConfig);

  userName = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  Room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + Room_names);
      row = "<div class='roomName' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
