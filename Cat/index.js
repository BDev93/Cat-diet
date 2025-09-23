
const addBtn = document.getElementById("add-btn");
const addBtnTwo = document.getElementById("add-btn-two");

const dataOne = document.getElementById("data-one")
const dataTwo = document.getElementById("data-two")

const addData = document.getElementById("add")
const addDataTwo = document.getElementById("add-two")

const sumOne = [];
const sumTwo = [];

"add-btn-two"

addBtn.addEventListener('click', function() {
    addFood();
});
addBtnTwo.addEventListener('click', function() {
    addFoodTwo();
});

function addFood() {
    const value = addData.value;
    const numberOne = Number(value);
    if(!isNaN(numberOne)){
        sumOne.push(numberOne);

        // Sprawdź, czy suma już istnieje
        let sumaOne = document.getElementById("suma-one");
        if(!sumaOne){
            sumaOne = document.createElement("p");
            sumaOne.id = "suma-one";
            dataOne.append(sumaOne); // dodaj sumę na koniec
        }

        // Dodaj nową liczbę przed sumą
        const newP = document.createElement("p");    
        newP.textContent = value;
        dataOne.insertBefore(newP, sumaOne);

        // Oblicz i wyświetl sumę
        const suma = sumOne.reduce((a, b) => a + b, 0);
        sumaOne.textContent = "Razem: " + suma + "g"
    } 
}

function addFoodTwo(){    
    const value = addDataTwo.value;
    const numberTwo = Number(value);
    const newP = document.createElement("p");    
    newP.textContent = value;
    dataTwo.append(newP);
}
