async function getScoots() {
    const json = await fetch("./data/scoots.json")
    console.log(json);
}

getScoots()