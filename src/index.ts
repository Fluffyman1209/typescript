const textplaceholder = document.querySelector('#inputText') as HTMLInputElement;
const button = document.querySelector('#buttonTask') as HTMLButtonElement;
const lists = document.querySelector('#list') as HTMLUListElement;
button.addEventListener("click",() => 
    {
        const newText = textplaceholder.value;
        if(newText === "") return;
        const item = document.createElement("li");
        item.textContent = newText;
        lists.appendChild(item);
        textplaceholder.value = "";
    }
)