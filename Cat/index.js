
const addBtn = document.getElementById("add-btn");
const dataOne = document.getElementById("data-one")
const newP = document.createElement("p")



addBtn.addEventListener('click', function(){
    newP.textContent = "BUM! Rysiek jest grubasek!"
    dataOne.append(newP);
})