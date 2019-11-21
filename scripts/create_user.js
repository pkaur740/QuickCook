// Creates the user and adds it in the database
function createUser(){
    firebase.auth().onAuthStateChanged(function(user){
        db.collection("users").doc(user.uid).set(
    	{
        "name":user.displayName, 
         "email":user.email,
        },{ merge: true });
    });
}