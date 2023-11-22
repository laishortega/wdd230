const membersURL = "https://laishortea.github.io/wdd230/chamber/data/members.json";
const card = document.querySelector(".directory-main");

async function getMembers() {
    const response = await fetch(membersURL);
    const data = await response.json();
    displayMembers(data.members);
    console.log(data);
}

const displayMembers = (members) => {
    members.forEach((company) => {
        let container = document.createElement("section");
        card.appendChild(container);

        let name = document.createElement("h2");
        name.textContent = company.name;
        container.appendChild(name);

        let image = document.createElement("img");
        image.setAttribute("src", company.image);
        image.setAttribute("alt", `A picture of ${company.name}`);
        image.setAttribute("loading", "lazy");
        container.appendChild(image);

        let linkBox = document.createElement("div");
        linkBox.classList.add("linkBox");
        container.appendChild(linkBox)

        let website = document.createElement("a");
        website.textContent = "Visit the Website";
        website.setAttribute("href", company.url);
        website.setAttribute("target", "_blank");
        linkBox.appendChild(website);

        let address = document.createElement("p");
        address.textContent = company.address;
        address.classList.add("address");
        container.appendChild(address);

        let phone = document.createElement("p");
        phone.textContent = company.phone;
        phone.classList.add("phone");
        container.appendChild(phone);

        let memberlevel = document.createElement("p");
        memberlevel.textContent = company.memberlevel;
        container.appendChild(memberlevel);
        if (memberlevel.textContent.includes("Gold")) {
            memberlevel.classList.add("gold");
        } else if (memberlevel.textContent.includes("Silver")) {
            memberlevel.classList.add("silver");
        } else if (memberlevel.textContent.includes("Bronze")) {
            memberlevel.classList.add("bronze");
        } else {
            memberlevel.classList.add("np");
        }
    });
}

getMembers();

const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");
const dMain = document.querySelector(".directory-main");

gridBtn.addEventListener("click", () => {
    dMain.classList.add("grid");
    dMain.classList.remove("list");
})
listBtn.addEventListener("click", () => {
    dMain.classList.add("list");
    dMain.classList.remove("grid");
})
