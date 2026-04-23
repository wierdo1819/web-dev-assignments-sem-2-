const form = document.getElementById("eventForm");
const title = document.getElementById("title");
const container = document.getElementById("eventContainer");

form.addEventListener("submit", function(e){
e.preventDefault();

const card = document.createElement("div");
card.className = "card";

card.innerHTML = `
<h3>${title.value}</h3>
<button class="delete">Delete</button>
`;

container.appendChild(card);
title.value = "";
});

container.addEventListener("click", function(e){
if(e.target.classList.contains("delete")){
e.target.parentElement.remove();
}
});