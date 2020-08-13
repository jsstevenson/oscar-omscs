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

function colorRow(row) {
    let act = parseInt(row.children[12].textContent);
    let cap = parseInt(row.children[11].textContent);
    let wlCap = parseInt(row.children[14].textContent);
    let wlAct = parseInt(row.children[15].textContent);

    function colorMain(color) {
        row.children[11].setAttribute("style", `background-color: ${color};`);
        row.children[12].setAttribute("style", `background-color: ${color};`);
        row.children[13].setAttribute("style", `background-color: ${color};`);
    }

    function colorWL(color) {
        row.children[14].setAttribute("style", `background-color: ${color};`);
        row.children[15].setAttribute("style", `background-color: ${color};`);
        row.children[16].setAttribute("style", `background-color: ${color};`);
    }

    if ((wlAct + act) < cap) {
        colorMain("#6dff33");
        colorWL("#6dff33");
    } else if (wlAct < wlCap) {
        colorMain("#ff1010");
        colorWL("#6dff33");
    } else {
        colorMain("#ff1010");
        colorWL("ff1010");
    }
}

function iterateTable(table) {
    for (i = 0; i < table.length; i++) {
        if (table[i].children.length > 0 && table[i].children[0].classList.length > 0 && table[i].children[0].classList[0] === "dddefault") {
            if (!isOMSCS(table[i])) {
                table[i].setAttribute("style", "display:none");
            }
            else {
                colorRow(table[i]);
            }
        }
        if (table[i].children.length > 19) {
            console.log(table[i].children[3].textContent);
            table[i].children[4].setAttribute("style", "display:none");
            table[i].children[5].setAttribute("style", "display:none");
            table[i].children[6].setAttribute("style", "display:none");
            table[i].children[7].setAttribute("style", "display:none");
            table[i].children[9].setAttribute("style", "display:none");
            table[i].children[10].setAttribute("style", "display:none");
            table[i].children[18].setAttribute("style", "display:none");
            table[i].children[19].setAttribute("style", "display:none");
        }
    }
}

function hideInstructions() {
    let hidden = false;
    let infoDiv = document.getElementsByClassName("infotextdiv")[0];
    let button;

    function toggleInstructions() {
        if (hidden) {
            // show it
            hidden = false;
            infoDiv.setAttribute("style", "display:visible");
            button.textContent = "Hide registration instructions";
        } else {
            // hide it
            hidden = true;
            infoDiv.setAttribute("style", "display:none");
            button.textContent = "Show registration instructions";
        }
    }

    button = document.createElement("button");
    button.type = "button";
    document.getElementsByClassName("pagetitlediv")[0].after(button);
    toggleInstructions();
    button.addEventListener("click", toggleInstructions);
}

function cleanPage() {
    hideInstructions();
    let rows = document.getElementsByClassName("datadisplaytable")[0].children[1].children;
    iterateTable(rows);
}

cleanPage()
