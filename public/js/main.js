let inputUser = document.querySelector("#inputbox")
let tacheMot = document.querySelector(".tacheMot")
let addBtn = document.querySelector("#btnadd")
let tacheLigne = document.querySelector(".divtache")
let divParent = document.querySelector("#divtachesliste")
let todoList = document.querySelector(".todo")
let boutonClear = document.querySelector("#btnclear")

let termineBtn = document.querySelector("#btntermine")
let afaireBtn = document.querySelector("#btnafaire")
let toutBtn = document.querySelector("#btntout")

// CLICK ADD

addBtn.addEventListener('click', addTodo)

// ENTER

inputUser.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        addTodo(e)
    }
})

// SUPPRIMER OU MODIFIER UNE TACHE

divParent.addEventListener('click', deleteCheck)

// EDIT LA TACHE

divParent.addEventListener('click', editToDo)
divParent.addEventListener('click', editToDoButton)

// CLEAR LIST

boutonClear.addEventListener('click', clearList)

// MENUS

termineBtn.addEventListener('click', termineMenu)

// FONCTION ADD TACHE

function addTodo(event) {
    event.preventDefault();

    // créer la div
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")
    divParent.appendChild(todoDiv)

    // créer un p
    const newTodo = document.createElement("p")
    newTodo.innerText = inputUser.value
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)

    // créer la div des 3 boutons
    const threebuttonsDiv = document.createElement("div")
    threebuttonsDiv.classList.add("threebuttons")
    todoDiv.appendChild(threebuttonsDiv)

    // créer bouton check
    const completedButton = document.createElement("button")
    completedButton.innerHTML = '<i class="fas fa-check-circle"></i>'
    completedButton.classList.add("complete-button")
    threebuttonsDiv.appendChild(completedButton)

    // créer bouton edit
    const editButton = document.createElement("button")
    editButton.innerHTML = '<i class="fas fa-save"></i>'
    editButton.classList.add("edit-button")
    threebuttonsDiv.appendChild(editButton)

    // créer bouton delete
    const trashButton = document.createElement("button")
    trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>'
    trashButton.classList.add("trash-button")
    threebuttonsDiv.appendChild(trashButton)

    // AJOUTER TACHE A LA TO DO LIST
    divParent.appendChild(todoDiv)
    inputUser.value = ""
}

// FONCTION SUPPRIMER TACHE + COMPLETED

function deleteCheck(e) {
    const item = e.target

    // delete todo
    if (item.classList[0] === "trash-button") {
        const todo = item.parentElement;
        const parentParent = todo.parentElement;
        parentParent.remove()
    }

    // check mark
    if (item.classList[0] === "complete-button") {
        const todo = item.parentElement;
        const parentParent = todo.parentElement;
        parentParent.classList.toggle("completed")
    }
}

// FONCTION EDIT CLIC SUR TEXTE

function editToDo(e) {
    let item = e.target
    if (item.classList[0] === "todo-item") {
        let texte = item.innerText
        let inputTexte = document.createElement("input") 
        inputTexte.type = "text"
        inputTexte.value = texte
        item.innerText = ""
        item.appendChild(inputTexte)
        item.addEventListener('keyup', (e) => {
            if (e.keyCode ===  13) {
                let newTexte = inputTexte.value
                item.innerText = newTexte
            }
        })
    }
}

// FONCTION EDIT CLIC SUR ICONE

function editToDoButton(e) {
    let item = e.target
    if (item.classList[0] === "edit-button") {
        let leTexte = item.parentElement.previousSibling
        let inputTexte2 = document.createElement("input") 
        inputTexte2.type = "text"
        inputTexte2.value = leTexte.innerText
        leTexte.innerText= ""
        leTexte.appendChild(inputTexte2)
        leTexte.addEventListener('keyup', (e) => {
            if (e.keyCode ===  13) {
                let newTexte = inputTexte2.value
                leTexte.innerText = newTexte
            }
        })
    }
}    

// FONCTION CLEAR LIST

function clearList(e) {
    e = "divtachesliste";
    document.getElementById(e).innerHTML = "";
}

// MENU TERMINE - COMPLETED

function termineMenu(e) {
    // classes sans "completed" : display-none
    e.target 
}



// FONCTION DARK MODE

// let darkMode = document.querySelector('html')
// document.getElementById('btn-darkmode').addEventListener('click', darkMode)

// function darkMode() {

//     html.style.filter = "invert(100%)";
// };



