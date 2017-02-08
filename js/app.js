$(document).ready(function(){
    $("#button").click(function(){
        var task = $("#task").val();
        console.log("click")
        $("ul").append("<li><input id='checkbox' type='checkbox'>" + task + "</li>")
      })
  })

// alert("Hello World !");
//
// var newTask = document.getElementById("taskInput").value;
//
// console.log('newTask');
