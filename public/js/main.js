let inputUser = document.querySelector("#inputbox")
let tacheMot = document.querySelector(".tacheMot")
let addBtn = document.querySelector("#btnadd")
let tacheLigne = document.querySelector(".divtache")

let divParent = document.querySelector("#divtachesliste")

// inputUser.addEventListener('keyup', (e) => {
//     if (e.keyCode === 13) {
//         tacheMot.innerText = inputUser.value
//         tacheLigne.style.display = 'flex'
//     }
// })

// addBtn.addEventListener('click', () => {
//     tacheMot.innerText = inputUser.value
//     tacheLigne.style.display = 'flex'
// })

addBtn.addEventListener('click', addTodo)

function addTodo(event) {
    event.preventDefault();

    // créer la div
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")

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