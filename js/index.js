function User(email, username, password){
    this.email = email;
    this.username = username;
    this.password = password;
}

function registerUser(user){
    localStorage.setItem("user", JSON.stringify(user));
}

$(document).ready(function(){
$("#register-form").submit(function () {
    var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    var email = $("#register-form").find('input[name="email-input"]').val();
    var username = $("#register-form").find('input[name="username-input"]').val();
    var password = $("#register-form").find('input[name="password-input"]').val();
    var confirm_password = $("#register-form").find('input[name="password-confirm-input"]').val();

    if(password != confirm_password){
        alert("Confirm password doesn't match!");
    }
    else if(!email.match(emailformat)){
        alert("Email format is wrong!");
    }
    else{
        var user = new User(email, username, password);
        registerUser(user);
    }
})
$("#sound-btn-1").click(function(){
    var audio = new Audio('audio/good-ring.mp3');
    audio.play();
})
$("#sound-btn-2").click(function(){
    var audio = new Audio('audio/metallica-ring.mp3');
    audio.play();
})
$("#sound-btn-3").click(function(){
    var audio = new Audio('audio/yeahbaby-ring.mp3');
    audio.play();
})

});