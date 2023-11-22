const nonprofit = document.querySelector("#nonprofit");
const bronze = document.querySelector("#bronze");
const silver = document.querySelector("#silver");
const gold = document.querySelector("#gold");
const benefit = document.querySelector(".benefit");

function buttonChange() {
    if (nonprofit.checked) {
        document.getElementById('benefit').innerHTML = `&rarr; Free to Register!<br>
        &rarr; Trial training for a month`;
    }
    else if (bronze.checked) {
        benefit.innerHTML = `&rarr; Special Events<br>
        &rarr; Membership plan for 1 year`;
    }
    else if (silver.checked) {
        benefit.innerHTML = `&rarr; Special Events<br>
        &rarr; Membership plan for 2 years<br>
        &rarr; 15% Special Event Discount`;
    }
    else {
        benefit.innerHTML = `&rarr; Freebies<br>
        &rarr; Membership plan for 4 years<br>
        &rarr; 20% Special Event Discount<br>
        &rarr; 20% Training Discount<br>
        &rarr; Can Join the Spotlight Contest`;
    }
}

nonprofit.addEventListener("change", buttonChange);
bronze.addEventListener("change", buttonChange);
silver.addEventListener("change", buttonChange);
gold.addEventListener("change", buttonChange);