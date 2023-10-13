const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
    if (input.value != "") {
        const listItm = document.createElement("li");
        const listBtn = document.createElement("button");
        listItm.textContent = input.value;
        listBtn.textContent = "❌";
        listBtn.ariaLabel = "Delete";
        listItm.append(listBtn);
        list.append(listItm);
        listBtn.addEventListener("click", () => {
            list.removeChild(listItm);
            input.focus();
        });
        input.value = "";
        input.focus();
    };
});