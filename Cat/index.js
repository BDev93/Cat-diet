
const addBtn = document.getElementById("add-btn");
const addBtnTwo = document.getElementById("add-btn-two");

const dataOne = document.getElementById("data-one")
const dataTwo = document.getElementById("data-two")

const addData = document.getElementById("add")
const addDataTwo = document.getElementById("add-two")


"add-btn-two"

addBtn.addEventListener('click', function() {
    addFood();
});
addBtnTwo.addEventListener('click', function() {
    addFoodTwo();
});


function addFood() {
    const value = addData.value;
    const newP = document.createElement("p");    
    newP.textContent = value;
    dataOne.append(newP);
}

function addFoodTwo(){    
    const value = addDataTwo.value;
    const newP = document.createElement("p");    
    newP.textContent = value;
    dataTwo.append(newP);
}
