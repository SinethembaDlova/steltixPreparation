var input = document.querySelector("#inputUserName");
var button = document.querySelector("#lookUpButton");
var display = document.querySelector(".inputCover p");

//alert($);

function displayUserName() {

  var url = "https://api.github.com/users/" + input.value + "/repos";

  $.ajax({
       type : 'GET',
       url: url,
       headers: {"Authorization": "token "}
   })
  .then(function(results){

  display.innerHTML = "Hey, you have " + results.length + " repositories in your github.";

  })

  input.value = '';
}



button.addEventListener("click", displayUserName);
