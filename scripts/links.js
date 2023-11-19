const baseURL = "https://laishortega.github.io/wdd230/";
const linksURL = "../data/links.json";
const card = document.querySelector(".card");

async function getLinks() {
    const response = fetch("../data/links.JSON")
        .then(res => res.json())
        .then(data => console.log(data))
}

const displayLinks = (lessons) => {
    let sectonTitle = document.createElement("h3");
    sectonTitle.textContent = `Learning Activities`;
    card.appendChild(sectonTitle);
    let list = document.createElement("ul");
    card.appendChild(list);

    lessons.forEach((week) => {
        let listElement = document.createElement("li");
        let weekNumber = document.createElement("span");
        weekNumber.textContent = `W${week.lesson
            }`;
        listElement.appendChild(weekNumber);

        week.links.forEach((click) => {
            let anchor = document.createElement("a");
            anchor.setAttribute("href", click.url);
            anchor.setAttribute("target",
                "_blank");
            anchor.textContent = ` | ${click.title
                }`;
            listElement.appendChild(anchor);
        });

        list.appendChild(listElement);
    });
}

getLinks();