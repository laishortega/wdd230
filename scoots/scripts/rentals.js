const listElement = document.querySelector(".rentals-page")

function scootsTemplate(scoot) {
    return `
        <div>
            <img src="${scoot.image}" alt="image of ${scoot.rentalType}">
            <Table
                style="border-collapse: collapse; border: 1px solid #000000; margin-left: auto; margin-right: auto;"
                border="1" cellpadding="5">
                <tbody>
                    <tr>
                        <td style="background-color: navy; text-align: center;" colspan="6"><span
                                style="color: #ffffff; font-size: 14pt;"><strong>Rental Pricing</strong></span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2"></td>
                        <td style="text-align: center;" colspan="2"><strong>Reservation</strong></td>
                        <td style="text-align: center;" colspan="2"><strong>Walk-In</strong></td>
                    </tr>
                    <tr>
                        <td style="text-align: center;"><strong>Rental Type</strong></td>
                        <td style="text-align: center;"><strong>Max. Persons</strong></td>
                        <td style="text-align: center;"><strong>Half Day<br>(3 hrs)</strong></td>
                        <td style="text-align: center;"><strong>Full Day</strong></td>
                        <td style="text-align: center;"><strong>Half Day<br>(3 hrs)</strong></td>
                        <td style="text-align: center;"><strong>Full Day</strong></td>
                    </tr>
                    <tr>
                        <td style="text-align: center;">${scoot.rentalType}</td>
                        <td style="text-align: center;">${scoot.maxPersons}</td>
                        <td style="text-align: center;">${scoot.reservation.halfDay}</td>
                        <td style="text-align: center;">${scoot.reservation.fullDay}</td>
                        <td style="text-align: center;">${scoot.waklkIn.halfDay}</td>
                        <td style="text-align: center;">${scoot.waklkIn.fullDay}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    `;
}

async function convertToJson(res) {
    var data = await res.json();
    if (res.ok) {
        return data;
    } else {
        throw { name: "servicesError", message: data };
    }
}

async function getScoots() {
    const data = await fetch("https://laishortega.github.io/wdd230/scoots/data/scoots.json");
    const response = await convertToJson(data);

    return response.Result;
}

getScoots().then(list => {
    renderTemplate(list, listElement);
})

function renderTemplate(list, element) {
    const htmlStrings = list.map(scootsTemplate);
    element.insertAdjacentHTML("afterbegin", htmlStrings.join(""));
}