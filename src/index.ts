const textplaceholder = document.querySelector('#inputText') as HTMLInputElement;
const button = document.querySelector('#buttonTask') as HTMLButtonElement;
const lists = document.querySelector('#list') as HTMLUListElement;
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
    }
)