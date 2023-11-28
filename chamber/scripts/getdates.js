var current_year = new Date().getFullYear();

document.getElementById("footer_1").innerHTML = "&copy" + current_year + " | Laish Kish T. Ortega | WDD 230";
document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;


document.addEventListener("DOMContentLoaded", function () {
    const day = new Date().getDay();
    const banner = document.querySelector('#banner');
    // console.log(day);

    if ((day >= 1) && (day <= 3)) {
        banner.style.display = 'block'; // Show banner
    } else {
        banner.style.display = 'none'; // Hide banner
    }
});

function closeBanner() {
    // Hide the banner when the close button is clicked
    var banner = document.querySelector('#banner');
    banner.style.display = 'none';
}
