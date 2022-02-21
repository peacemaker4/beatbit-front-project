function User(email, username, password, description){
    this.email = email;
    this.username = username;
    this.password = password;
    this.description = description;
}

function updateUser(user){
    localStorage.setItem("user", JSON.stringify(user));
}

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show-filter");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show-filter");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

$(document).ready(function(){
$("#register-form").submit(function () {

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
        var description = "Hello world!"
        var user = new User(email, username, password, description);
        updateUser(user);
    }
})
$("#update-form").submit(function () {
    var email = $("#update-form").find('input[name="change-email-input"]').val();
    var username = $("#update-form").find('input[name="change-username-input"]').val();
    var description = $("#update-form").find('textarea[name="change-description-input"]').val();

    if(!email.match(emailformat)){
        alert("Email format is wrong!");
    }
    else{
        var user = JSON.parse(localStorage.getItem("user"));
        user.email = email;
        user.username = username;
        user.description = description;

        updateUser(user);
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
$("#sound-btn-4").click(function(){
    var audio = new Audio('audio/rushe-ring.mp3');
    audio.play();
})
$("#sound-btn-1").mouseover(function(){
    $("#preview-image-1").attr("src", "img/preview-1.gif");
})
$("#sound-btn-1").mouseout(function(){
    $("#preview-image-1").attr("src", "img/screenshot_3.png");
})
$("#search-input").keypress(function(){
    var audio = new Audio('audio/key2-sound.mp3');
    audio.play();
})



});