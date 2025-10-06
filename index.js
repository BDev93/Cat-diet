
const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn")
const dataOne = document.getElementById("data-one")

const addData = document.getElementById("add")
const tabs = document.getElementById("cat-tabs")

const modalOverlay = document.getElementById("modalOverlay")
const modalInput = document.getElementById("cat-name-input")
const modalOk = document.getElementById("modal-ok")
const modalCancel = document.getElementById("modal-cancel")
const modalError = document.querySelector(".error")

let lastFocusedElement = null;


const cats = [
    { name: "Rysiek", data: [], sum:0}
];
let currentCat = 0;




addBtn.addEventListener('click', function() {
    addFood();
    document.getElementById('add').value = '';
});


function addFood() {
    const value = addData.value;
    const numberOne = Number(value);
    if(!isNaN(numberOne)){
        
        const now = new Date()
        const hours = now.getHours().toString().padStart(2, "0")
        const minutes = now.getMinutes().toString().padStart(2, "0")
        const time = `${hours}:${minutes}`

        cats[currentCat].data.push({grams: numberOne, time: time});
        cats[currentCat].sum = cats[currentCat].data.reduce((a,b) => a + b, 0)
        renderCat();
        
    } 
}
    

      
    


    function renderCat(){
        dataOne.innerHTML = ""

       
        
        cats[currentCat].data.forEach(entry =>{
            const p = document.createElement("p")
            p.className = "data"
            p.innerHTML = `${entry.grams} g <span class="time">— ${entry.time}</span>`
            dataOne.appendChild(p)
            
        })

        const sumP = document.createElement("p")
        sumP.id = "sum-tab"
        sumP.className = "sum-tab"
        sumP.textContent = "Razem: " + cats[currentCat].sum + "g"
        dataOne.appendChild(sumP)
    }

    function renderTabs() {

        tabs.innerHTML = ""

        const innerDiv = document.createElement("div");
        innerDiv.className = "cat-tabs-inner";

        cats.forEach((cat, idx) =>{
            const btn = document.createElement("button");
            btn.textContent = cat.name;
            btn.className = "cat-btn"
            if (idx === currentCat) {
                btn.classList.add("active-cat-btn")
            }       
            btn.onclick = () => switchCat(idx);
            innerDiv.appendChild(btn);
            
        })

        const addBtn = document.createElement("button")
        addBtn.textContent = "+"
        addBtn.className = "add-cat-btn"
        addBtn.onclick = addCat;
        innerDiv.appendChild(addBtn);

        tabs.appendChild(innerDiv);

    };

    function addCat() {
        openModal()
        
        if(name){
            cats.push({name, data: [], sum: 0})
            renderTabs()
            switchCat(cats.length - 1);
        }
    }

    function switchCat(idx){
        currentCat = idx;
        renderTabs();
        renderCat()
    }

    //Modal function

   function openModal(){
    lastFocusedElement = document.activeElement;
    modalOverlay.classList.add("open");
    modalInput.value = ""
    modalError.textContent = ""
    modalInput.focus()

    document.body.style.overflow = "hidden";


   } 

   function closeModal(){
    modalOverlay.classList.remove("open")
    document.body.style.overflow = ""
    }
    //Keyboard operation

    document.addEventListener("keydown", function(event){
        if(!modalOverlay.classList.contains("open")){
            return;
        }
        if(event.key === "Enter"){
            modalOk.click()
        }
        if(event.key === "Escape"){
            closeModal()
        }
    })

   

   // OK and Cancel button operation
   modalOk.addEventListener('click', function() {
    const name = modalInput.value.trim()

    if(name === ""){
        showError("Imie kota nie może być puste")
        modalInput.focus()
        return
    }

    function addCatWithName(name){
        cats.push({name: name, data: [], sum: 0})
        renderTabs()
        switchCat(cats.length - 1)
    }

    // Displaying an error  in the h2 element

    function showError(message){
        const title = document.getElementById("modal-title")
        title.textContent = message
        title.classList.add("error")
    }
    function showTitle() {
        const title = document.getElementById("modal-title")
        title.textContent = "Podaj imię kota"
        title.classList.remove("error")
    }
    



    addCatWithName(name)
    
    showTitle()
    closeModal()

   })



   modalCancel.addEventListener("click", function() {
    closeModal()
   })


    renderTabs();
    renderCat();