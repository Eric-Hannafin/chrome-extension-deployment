let myLeads = JSON.parse(localStorage.getItem("myLeads")) || [];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

renderLeads();

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    updateLocalStorage();
    renderLeads()
})

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear();
    myLeads = [];
    renderLeads();
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

function updateLocalStorage() {
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
}

