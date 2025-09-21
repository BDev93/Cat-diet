
const addBtn = document.getElementById("add-btn");
const dataOne = document.getElementById("data-one")
const newP = document.createElement("p")
const addData = document.getElementById("add")




addBtn.addEventListener('click', function() {
    addFood();
});

function addFood() {
    const value = addData.value;
    const newP = document.createElement("p");    
    newP.textContent = value;
    dataOne.append(newP);
}