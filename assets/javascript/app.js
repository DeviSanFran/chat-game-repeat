console.log("connected")

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBwUiqLs7LWBlaX_sBHuOajw4Rm_sd3LgQ",
    authDomain: "chat-game-repeat.firebaseapp.com",
    databaseURL: "https://chat-game-repeat.firebaseio.com",
    projectId: "chat-game-repeat",
    storageBucket: "",
    messagingSenderId: "1055844481675"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  // database stuffs

  // sign in logic

  var provider = new firebase.auth.GoogleAuthProvider();

  // sign in on click
  $("#signIn").on("click", function() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log(error)
      });
  })