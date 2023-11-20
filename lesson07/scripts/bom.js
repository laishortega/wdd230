const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
    if (input.value != "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    };
});

function displayList(item) {
    const listItm = document.createElement("li");
    const listBtn = document.createElement("button");
    listItm.textContent = /*input.value*/ item;
    listBtn.textContent = "❌";
    listBtn.ariaLabel = "Delete";
    listItm.append(listBtn);
    list.append(listItm);
    listBtn.addEventListener("click", () => {
        list.removeChild(listItm);
        deleteChapter(listItm.textContent)
        input.focus();
    });
}

let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}