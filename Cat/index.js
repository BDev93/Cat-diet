
const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn")

const dataOne = document.getElementById("data-one")


const addData = document.getElementById("add")

const tabs = document.getElementById("cat-tabs")


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

        cats[currentCat].data.push(numberOne);
        cats[currentCat].sum = cats[currentCat].data.reduce((a,b) => a + b, 0)
        renderCat();
        
    } 
}
    

      
    


    function renderCat(){
        dataOne.innerHTML = ""

       
        
        cats[currentCat].data.forEach(val =>{
            const p = document.createElement("p")
            p.className = "data"
            p.textContent = val + "g"
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
        const name = prompt("Podaj imię kota:")
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

    renderTabs();
    renderCat();