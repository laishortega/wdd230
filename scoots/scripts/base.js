document.querySelector('#burger').addEventListener('click', () => {
    document.querySelector('.navigation').classList.toggle('open');
    document.querySelector('#burger').classList.toggle('open');
});

document.querySelector("#dark-btn").addEventListener("click", () => {
    darkAddRemove();
    document.querySelector("#dark-btn").classList.toggle("dark");
    document.querySelector("body").classList.toggle("dark");
});