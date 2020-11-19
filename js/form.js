

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBh3ayrABFu2pnmzo5-myUyh8wi9gc6EjQ",
    authDomain: "contact-form-7533d.firebaseapp.com",
    databaseURL: "https://contact-form-7533d.firebaseio.com",
    projectId: "contact-form-7533d",
    storageBucket: "contact-form-7533d.appspot.com",
    messagingSenderId: "1099463667417",
    appId: "1:1099463667417:web:038115771b102d0effd8c8",
    measurementId: "G-NHDK1N3R1M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

var messagesref= firebase.database().ref('messages')


document.getElementById('Contact').addEventListener('submit',submitform);
function submitform(e){
    e.preventDefault();
    
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var message = document.getElementById('message').value;
    
    savemessage(fname,lname,email,mobile,message);
    
}

function savemessage(fname,lname,email,mobile,message){
    var newMessageref = messagesref.push();
    newMessageref.set({
       fname:fname,
       lname:lname,
        email:email,
        mobile:mobile,
        message:message
        
    });
    

    
}

var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    function myFunction() {
        if(fname.value.length == 0 || lname.value.length == 0  || email.value.length == 0 || mobile.value.length == 0)
        {
            alert("Please Fill All The Details");
        }
        else if (mobile.value.length!=10 ){
            alert("Please Enter A Valid Mobile Number");
            
            
        }
        
       
            
            
        
        else if (isNaN(mobile.value)){
             alert("Please Enter A Valid Mobile Number");
        }
        
        else  {
            
              
                alert("Thankyou For Contacting Us . We will revert shortly.");
                 document.getElementById("Contact").reset();
          }
}