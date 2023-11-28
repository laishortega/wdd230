const membersURL = "https://laishortega.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    const response = await fetch(membersURL);
    const data = await response.json();

    const filteredData = data.members.filter(function (company) {
        return company.membership === "Gold" || company.membership === "Silver";
    });

    const randomCompanies = shuffleData(filteredData);
    displayMembers(randomCompanies);
}

function shuffleData(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayMembers(randomCompanies) {
    const card = document.querySelector(".spotlight");
    for (let i = 0; i < 3; i++) {
        const companyCard = document.createElement("section");
        card.appendChild(companyCard);

        const companyName = document.createElement("h2");
        companyName.textContent = randomCompanies[i].name;
        companyCard.appendChild(companyName);

        const companyURL = document.createElement("a");
        companyURL.setAttribute("href", randomCompanies[i].url);
        companyURL.setAttribute("target", "_blank");
        companyURL.setAttribute("title", "Visit Website");
        companyCard.appendChild(companyURL);

        const companyIMG = document.createElement("img");
        companyIMG.setAttribute("src", randomCompanies[i].image);
        companyIMG.setAttribute("alt", `Spotlight image of ${randomCompanies[i].name}`);
        companyIMG.setAttribute("loading", "lazy");
        companyURL.appendChild(companyIMG);
    }
}

getMembers();