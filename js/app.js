
var config = {
    apiKey: "AIzaSyCdleBWmqU6PomIrzIDxLPL2KdqBwBTydY",
    authDomain: "hackvandy-fb282.firebaseapp.com",
    databaseURL: "https://hackvandy-fb282.firebaseio.com",
    projectId: "hackvandy-fb282",
    storageBucket: "hackvandy-fb282.appspot.com",
    messagingSenderId: "1028202628274"
  };
  firebase.initializeApp(config);

  const txtEmail = document.getElementById('city');
  const txtPassword = document.getElementById('state');
  const txtDistance = document.getElementById('distance');
  const btnEnter = document.getElementById('submit');
  var usersRef = firebase.database().ref();
  // dbRefObject.child("state").set(txtPassword);
  // dbRefObject.child("city").set(txtEmail);
  // dbRefObject.child("distance").set(txtDistance);
  const email = txtEmail;
  const pass = txtPassword;
  const distance = txtDistance;
  usersRef.push({
  city: email,
  state: pass,
  distance: distance
});
// usersRef.child("alanisawesome").set({
//   date_of_birth: "June 23, 1912",
//   full_name: "Alan Turing"
// });

  // btnLogin.addEventListener('click', e => {
  //   const email = txtEmail.value;
  //   const pass = txtPassword.value;
  //   const auth = firebase.auth();
  //
  //   const promise = auth.signInWithEmailandPassword(email, pass);
  //   //console.log(e.message);
  //   promise.catch(e => console.log(e.message));
  // });
  //
  // btnSignUp.addEventListener('click', e => {
  //   const email = txtEmail.value;
  //   const pass = txtPassword.value;
  //   const auth = firebase.auth();
  //
  //   firebase.auth().createUserWithEmailAndPassword(email, pass);//auth.createUserWithEmailandPassword(email, pass);
  //   //promise.catch(e => console.log(e.message));
  // });
