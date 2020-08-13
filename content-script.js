let re = /O[0-9][0-9]/;
function isOMSCS(row) {
    if (row.children[5].textContent != "O") {
        return false;
    }
    if (!re.exec(row.children[4].textContent)) {
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
    document.getElementsByClassName("pic")[0].setAttribute("style", "display:none");
    let table = document.getElementsByClassName('datadisplaytable')[0];
    let tableBody = table.children[1];
    let rows = tableBody.children;
    iterateTable(rows);
}

cleanPage()
