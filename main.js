var newInput = document.querySelector("input");
var addBtn = document.querySelector("#add");

newInput.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    addItem();
  }
});

addBtn.addEventListener("click", function () {
  if (newInput.style.display === "none") {
    newInput.style.display = "inline-block";
  } else {
    newInput.style.display = "none";
  }
});

function deleteItem(e) {
  event.stopPropagation();
  var item = event.currentTarget.parentNode;
  item.style.opacity = "0";
  setTimeout(function () {
    item.parentNode.removeChild(item);
  }, 200);
}

function addItem(e) {
  var list = document.createElement("li");
  list.innerHTML =
    '<span><i class="far fa-trash-alt"></i></span>' + newInput.value;
  document.querySelector("ul").appendChild(list);
  list.addEventListener("click", completeItem);
  list.querySelector("span").addEventListener("click", deleteItem);
  newInput.value = "";
}

function completeItem(e) {
  e.currentTarget.classList.toggle("done");
}
