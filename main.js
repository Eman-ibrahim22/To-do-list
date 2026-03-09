// var names = ["ahmed", "ali", "sayed", "hassan"];
// var myText = "";
// for (var i = 0; i < names.length; i++) {
//   var myText = "";
//   myText = myText + names[i] + "<br>";
// }
// document.getElementById("demo").innerHTML = myText;

// var person = {
//   firstName: "ali",
//   lastName: "mohammed",
//   color: "black",
//   isAdmin: true,
// };
// for (var x in person) {
//   console.log(x + " " + person[x]);
// }

// document.querySelector("#red").onclick = function () {
//   document.querySelector("#demo").style.color = "red";
// };

// document.querySelector("#green").onclick = function () {
//   document.querySelector("#demo").style.color = "green";
// };

// document.querySelector("#blue").onclick = function () {
//   document.querySelector("#demo").style.color = "blue";
// };

document.querySelectorAll(".pen").forEach(function (item) {
  item.onclick = function () {
    document.querySelector("#demo").style.color = item.dataset.color;
  };
});

// //////////////////////////////////////////////////////////////////////////

document.querySelector("#myForm").addEventListener("submit", function (event) {
  var tasks = document.querySelector("#tasks").value;
  var result = document.querySelector("#result");
  if (tasks == "") {
    alert("Enter Task");
    event.preventDefault();
  } else {
    var myLi = document.createElement("li");
    // myLi.innerHTML = tasks;
    myLi.innerHTML = `<span class="task-text">${tasks}</span>
  <i class="fa-solid fa-check complete"></i>
  <i class="fa-solid fa-trash delete"></i>`;

    result.append(myLi);
    document.querySelector("#tasks").value = "";
    // new
    result.addEventListener("click", function (e) {
      if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
      }
    });
    //new
    result.addEventListener("click", function (e) {
      if (e.target.classList.contains("complete")) {
        e.target.previousElementSibling.classList.toggle("done");
      }
    });

    event.preventDefault();
  }
});
//////////////////////////////////////////
document.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  var scrollValue = window.scrollY;
  if (scrollValue > 350) {
    navbar.setAttribute(
      "class",
      "navbar navbar-expand-lg navbar-light bg-primary",
    );
  } else {
    navbar.setAttribute(
      "class",
      "navbar navbar-expand-lg navbar-light bg-dark",
    );
  }
});
