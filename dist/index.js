const textplaceholder = document.querySelector('#inputText');
const button = document.querySelector('#buttonTask');
const lists = document.querySelector('#list');
button.addEventListener("click", () => {
    const newText = textplaceholder.value;
    if (newText === "")
        return;
    const item = document.createElement("li");
    item.textContent = newText;
    lists.appendChild(item);
    textplaceholder.value = "";
});
export {};
//# sourceMappingURL=index.js.map