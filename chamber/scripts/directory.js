const baseURL = "https://laishortega.github.io/wdd230/";
const membersURL = "https://laishortega.github.io/wdd230/chamber/data/members.json"
const tiles = document.querySelector('#tiles');

async function getlinkdata() {
    const response = await fetch(membersURL);
    // const response = await fetch();
    const data = await response.json();
    console.log(data.members);

    displayMembers(data.members);
}

getlinkdata();

const displayMembers = (members) => {
    // card build will go here
    members.forEach((member) => {
        let tile = document.createElement('section');
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let link = document.createElement('a');
        let membership = document.createElement('p');
        let icon = document.createElement('img');

        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `Phone: ${member.phone}`;
        link.textContent = `Website: ${member.name}`;
        link.setAttribute('href', member.website);
        membership.textContent = `Membership Level: ${member.membership}`;

        icon.setAttribute('src', member.image);
        icon.setAttribute('alt', `Business Icon for ${member.name}`);
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', '200px');
        // icon.setAttribute('height', '440');

        tile.setAttribute('class', 'card');

        tile.appendChild(name);
        tile.appendChild(icon);
        tile.appendChild(address);
        tile.appendChild(phone);
        tile.appendChild(link);
        tile.appendChild(membership);

        tiles.appendChild(tile);
    });
}





// View changer - grid & list
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}