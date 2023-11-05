var current_year = new Date().getFullYear();

document.getElementById("footer_1").innerHTML = "&copy" + current_year + " | Laish Kish T. Ortega | Philippines";
document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;

let visitNumber = Number(localStorage.getItem("visitStored")) || 0;
if (visitNumber == 0) {
    document.querySelector(".visits").innerHTML = "This is your first time on this page";
}
else {
    document.querySelector(".visits").innerHTML = "Number of visits: " + visitNumber;
}
visitNumber++;
localStorage.setItem("visitStored", visitNumber);