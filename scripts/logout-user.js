$(document).ready(function(){
    $("#signOut").click(function(){
        console.log("signing out");
        logout();
        location.href = "quickcookLoginPage.html";
    })
})


//Logs out the user
function logout() {
  firebase.auth().onAuthStateChanged(function (user) {
    var promise = firebase.auth().signOut();
    promise.then(function () {
      alert("logged out");
    });
  });
}
