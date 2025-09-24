
const addBtn = document.getElementById("add-btn");


const dataOne = document.getElementById("data-one")


const addData = document.getElementById("add")
const sumTab = document.getElementById("sum-tab")

const sumOne = [];




addBtn.addEventListener('click', function() {
    addFood();
    document.getElementById('add').value = '';
});


function addFood() {
    const value = addData.value;
    const numberOne = Number(value);
    if(!isNaN(numberOne)){
        sumOne.push(numberOne);

        // Dodaj nową liczbę do kontenera
        const newP = document.createElement("p");
        newP.className = "data";    
        newP.textContent = value;
        dataOne.appendChild(newP);

        // Oblicz i wyświetl sumę w sum-tab
        const suma = sumOne.reduce((a, b) => a + b, 0);
        sumTab.textContent = "Razem: " + suma + "g";
    } 
}

