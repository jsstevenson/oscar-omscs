function isOMSCS(row) {
    if (row.children[5].textContent != "O") {
        console.log(`wrong campus: ${row.children[8].textContent}`);
        // wrong campus
        return false;
    }
    let re = /O[0-9][0-9]/;
    if (!re.exec(row.children[4].textContent)) {
        console.log(`section no match: ${row.children[8].textContent}`)
        // section doesn't match
        return false;
    }
    return true;
}

function iterateTable(table) {
    for (i = 0; i < table.length; i++) {
        if (table[i].children.length > 0 && table[i].children[0].classList.length > 0 && table[i].children[0].classList[0] === "dddefault") {
            if (!isOMSCS(table[i])) {
                table[i].setAttribute("style", "display:none");
            }
        }
    }
}

function cleanPage() {
    console.log("working");
    let table = document.getElementsByClassName('datadisplaytable')[0];
    let tableBody = table.children[1];
    let rows = tableBody.children;
    iterateTable(rows);
}

cleanPage()
