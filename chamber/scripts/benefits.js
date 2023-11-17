const nonprofit = document.querySelector(".nonprofit");
const bronze = document.querySelector(".bronze");
const silver = document.querySelector(".silver");
const gold = document.querySelector(".gold");
const benefit = document.querySelector(".benefit");

function buttonChange() {
    if (nonprofit.checked) {
        benefit.innerHTML = `&bull; Free Registration<br>
        &bull; Invitation to Events`;
    }
    else if (bronze.checked) {
        benefit.innerHTML = `&bull; Invitation to Events<br>
        &bull; Access to Trainings`;
    }
    else if (silver.checked) {
        benefit.innerHTML = `&bull; Invitation to Events<br>
        &bull; Access to Trainings<br>
        &bull; 10% Event Discount`;
    }
    else {
        benefit.innerHTML = `&bull; Invitation to Events<br>
        &bull; Access to Trainings<br>
        &bull; 15% Event Discount<br>
        &bull; 15% Training Discount<br>
        &bull; Organization Spotlight`;
    }
}

nonprofit.addEventListener("change", buttonChange);
bronze.addEventListener("change", buttonChange);
silver.addEventListener("change", buttonChange);
gold.addEventListener("change", buttonChange);