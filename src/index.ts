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
        });
        item.appendChild(donebutton);
        lists.appendChild(item);
        textplaceholder.value = "";

        saveTasks();
    }
)