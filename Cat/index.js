
const addBtn = document.getElementById("add-btn");
const dataOne = document.getElementById("data-one")
const newP = document.createElement("p")




// Dodaj nasłuchiwanie kliknięcia
addBtn.addEventListener('click', function() {
    addFood();
});

function addFood() {
    const newP = document.createElement("p");
    newP.textContent = "105g";
    dataOne.append(newP);
}