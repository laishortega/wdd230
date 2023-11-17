const nonprofit = document.querySelector("#nonprofit");
const bronze = document.querySelector("#bronze");
const silver = document.querySelector("#silver");
const gold = document.querySelector("#gold");
const benefit = document.querySelector(".benefit");

function buttonChange() {
    if (nonprofit.checked) {
        document.getElementById('benefit').innerHTML = `&bull; Free Registration<br>
        &bull; Trial training for a month`;
    }
    else if (bronze.checked) {
        benefit.innerHTML = `&bull; Special Events<br>
        &bull; Membership plan for 1 year`;
    }
    else if (silver.checked) {
        benefit.innerHTML = `&bull; Special Events<br>
        &bull; Membership plan for 2 years<br>
        &bull; 10% Special Event Discount`;
    }
    else {
        benefit.innerHTML = `&bull; Freebies<br>
        &bull; Membership plan for 4 years<br>
        &bull; 20% Special Event Discount<br>
        &bull; 20% Training Discount<br>
        &bull; Can Join the Spotlight Contest`;
    }
}

nonprofit.addEventListener("change", buttonChange);
bronze.addEventListener("change", buttonChange);
silver.addEventListener("change", buttonChange);
gold.addEventListener("change", buttonChange);