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
    todoDiv.classList.add()
}