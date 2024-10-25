//Select the HTML elements

const form = document.querySelector("form");
const inputTask = document.querySelector("input");
const listContainer = document.querySelector(".listContainer");


//Add the item into tasklist

const addItem = (input) => {
  
  let li = document.createElement("li");
  li.classList.add("mt-8", "flex", "justify-between",);
  let span = document.createElement("span");
  span.classList.add("text-xl", "tracking-wider",);
  span.innerText = input.value;
  let button = document.createElement("button");
  button.classList.add(
    "h-8",
    "w-8",
    "border",
    "border-black",
    "hover:bg-red-400",
    "border-lg",
    "rounded-full",
  );
  button.innerHTML =  '&#10006';
  li.appendChild(span);
  li.appendChild(button);
  listContainer.appendChild(li);
  saveList();
};

//Remove input item from the list

const removeItemfromLit = (button) => {
  let parentItem = button.parentElement;
  listContainer.removeChild(parentItem);
  saveList();
};

//Save the List content into localStorage
const saveList = () => {
  localStorage.setItem("list", listContainer.innerHTML);
};

//Get the List content from the localStorage

const showList = () => {
  listContainer.innerHTML = localStorage.getItem("list");
};

//Show the list content every time 

document.addEventListener("DOMContentLoaded", showList);


// Handle form submission

form.addEventListener("submit", () => {
  addItem(inputTask);
});


//Handle item removal and editing

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") {
    removeItemfromLit(e.target);
  }

  if (e.target.tagName == "SPAN") {
    e.target.classList.toggle("line-through");
    saveList();
  }
});


