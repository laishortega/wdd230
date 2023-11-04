let darkSwitch = localStorage.getItem("dark-switch") || "";

document.addEventListener("DOMContentLoaded", darktest);

function darktest() {
    if (darkSwitch == "dark") {
        document.querySelector("#dark-btn").classList.add("dark");
        document.querySelector("body").classList.add("dark");
    }
}
function darkAddRemove() {
    if (darkSwitch == "dark") {
        localStorage.removeItem("dark-switch", "dark");
        darkSwitch = "";
    }
    else {
        localStorage.setItem("dark-switch", "dark");
        darkSwitch = "dark";
    }
}

let lastModified = new Date(document.lastModified);
document.querySelector("#lastModified").innerHTML = `Last Modification: ${lastModified}`;

document.querySelector('#burger').addEventListener('click', () => {
    document.querySelector('.navigation').classList.toggle('open');
    document.querySelector('#burger').classList.toggle('open');
});

document.querySelector("#dark-btn").addEventListener("click", () => {
    darkAddRemove();
    document.querySelector("#dark-btn").classList.toggle("dark");
    document.querySelector("body").classList.toggle("dark");
});