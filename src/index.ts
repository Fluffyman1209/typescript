const textplaceholder = document.querySelector('#inputText') as HTMLInputElement;
const button = document.querySelector('#buttonTask') as HTMLButtonElement;
const lists = document.querySelector('#list') as HTMLUListElement;

window.addEventListener("load", () => {
  const saved = localStorage.getItem("tasks");
  if (saved) {
    lists.innerHTML = saved; 
  }
});

function saveTasks() {
  localStorage.setItem("tasks", lists.innerHTML);
}

const clearButton = document.createElement("button");
clearButton.textContent = "Clear All";
clearButton.addEventListener("click", () => {
    lists.innerHTML = "";             
    localStorage.removeItem("tasks");  
});

document.body.appendChild(clearButton);
button.addEventListener("click",() => 
    {
        const newText = textplaceholder.value;
        if(newText === "") return;
        const item = document.createElement("li");
        item.textContent = newText;
        const donebutton = document.createElement("button");
        donebutton.textContent = "Done";
        donebutton.addEventListener("click", () => {
            item.style.color = "green";
            saveTasks();
        });

        const editbutton = document.createElement("button");
        editbutton.textContent = "edit";
        editbutton.addEventListener("click", () => {
            item.firstChild!.textContent = prompt("Edit task:", item.firstChild?.textContent || "");
            saveTasks();
        }
        )

        item.appendChild(donebutton);
        lists.appendChild(item);
        item.appendChild(editbutton);
        textplaceholder.value = "";

        saveTasks();
    }
)