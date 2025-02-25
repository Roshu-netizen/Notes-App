const noteContainer = document.querySelector(".notes-container");
const noteButton = document.querySelector(".noteBtn");
let notes = document.querySelectorAll(".input-box");

noteButton.addEventListener("click", function () {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "Deleta.png";
  noteContainer.appendChild(inputBox).appendChild(img);
});

noteContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});

function updateStorage() {
  localStorage.setItem("notes", noteContainer.innerHTML);
}

function showNotes() {
  noteContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();
