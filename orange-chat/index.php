<script type="module">

  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";

    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";


  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  const firebaseConfig = {

    apiKey: "AIzaSyAyuzvLAtOuBZGuOtW7rSLG_39cwzEVvqI",

    authDomain: "orange-share-chat.firebaseapp.com",

    projectId: "orange-share-chat",

    storageBucket: "orange-share-chat.appspot.com",

    messagingSenderId: "644416059324",

    appId: "1:644416059324:web:e61c8e90e7acf539325db9"

  };


  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  var myName = prompt("Enter your name");

  function sendMessage() {
    // getmessage
    var message = document.getElementById("messaage").value;

    //salvar no bd
    firebase.database().ref("messages").push().set({
        "sender": myName,
        "message": message
    })

    // previne submit
      return false;

    //ouvir mensagens futuras
    firebase.database().ref("messages").on("child_added", function (snapshot) {
        var html ="";
        // id unico para cada mensagem
        html += "<li id='mesage-" +snapshot.key + "'>";
        html += "<li>";
            //mostrar botao delete quando a mensagem é enviada
            if(snapshot.val().sender ==  myName) {
                html += "<button data-id='" + snapshot.key + " onclick='deleteMessage(this);'>";
                    html += "Delete"
                html += "<button>"
            }
            html += snapshot.val().sender + ": " + snapshot.val().message;
        html += "</li>";    

        document.getElementById("messages").innerHTML += html;
    });
    function deleteMessage(self){
        // message ID
        var messageId = self.getAttribute("data-id");

        //deletar mensagem
        firebase.database().ref("messages").child(messageId).remove();  

        //listener para a mensagem delete
        firebase.database().ref("messages").on("child_removed", function(snapshot) {
            // remover node da mensagem
            document.getElementById("message=" + snapshot.key).innerHTML = "Essa mensagem foi apagada";
        });
    }
  }

</script>

<!--cria form e envia msg  -->
<form onsubmit="return sendMessage();">
    <input id="menssaage" placeholder="Digite algo" autocomplete="off">
    
    <input type="submit">
</form>

<!--cria lista   -->
<ul id="messages"></ul>