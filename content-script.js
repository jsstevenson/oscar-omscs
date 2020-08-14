/* TODO:
 * Figure out how to load JSON from a file so I don't have to
 * dump it up here in the ugliest way possible. thank god for code folding
 */

let data = {
    "cse-6220-01": {
        "spr-20": [0, 0]
    },
    "cse-6242-01": {
        "spr-20": [400, 399]
    },
    "cse-6250-01": {
        "spr-20": [300, 247]
    },
    "cs-6035-01": {
        "spr-20": [700, 663]
    },
    "cs-6200-01": {
        "spr-20": [800, 700]
    },
    "cs-6210-01": {
        "spr-20": [300, 257]
    },
    "cs-6238-01": {
        "spr-20": [200, 103]
    },
    "cs-6250-01": {
        "spr-20": [600, 599]
    },
    "cs-6260-01": {
        "spr-20": [75, 72]
    },
    "cs-6262-01": {
        "spr-20": [250, 57]
    },
    "cs-6263-01": {
        "spr-20": [300, 260]
    },
    "cs-6265-01": {
        "spr-20": [200, 40]
    },
    "cs-6290-01": {
        "spr-20": [350, 265]
    },
    "cs-6291-01": {
        "spr-20": [200, 83]
    },
    "cs-6300-01": {
        "spr-20": [500, 500]
    },
    "cs-6310-01": {
        "spr-20": [600, 538]
    },
    "cs-6340-01": {
        "spr-20": [400, 347]
    },
    "cs-6400-01": {
        "spr-20": [500, 462]
    },
    "cs-6440-01": {
        "spr-20": [200, 200]
    },
    "cs-6457-01": {
        "spr-20": [0, 0]
    },
    "cs-6460-01": {
        "spr-20": [250, 220]
    },
    "cs-6475-01": {
        "spr-20": [400, 323]
    },
    "cs-6476-01": {
        "spr-20": [400, 400]
    },
    "cs-6515-01": {
        "spr-20": [526,  527]
    },
    "cs-6601-01": {
        "spr-20": [813, 37]
    },
    "cs-6750-01": {
        "spr-20": [500, 444]
    },
    "cs-7637-01": {
        "spr-20": [650, 584]
    },
    "cs-7638-01": {
        "spr-20": [700, 638]
    },
    "cs-7639-01": {
        "spr-20": [200, 83]
    },
    "cs-7641-01": {
        "spr-20": [750, 750]
    },
    "cs-7642-03": {
        "spr-20": [572, 503]
    },
    "cs-7643-01": {
        "spr-20": [0, 0]
    },
    "cs-7646-01": {
        "spr-20": [700, 700]
    },
    "cs-8803-08": {
        "spr-20": [200, 48]
    },
    "cs-8803-10": {
        "spr-20": [100, 100]
    },
    "cs-8803-11": {
        "spr-20": [100, 22]
    },
    "isye-6402-01": {
        "spr-20": [200, 42]
    },
    "isye-6420-01": {
        "spr-20": [200, 200]
    },
    "isye-6501-01": {
        "spr-20": [300, 249]
    },
    "isye-6644-01": {
        "spr-20": [200, 186]
    },
    "isye-8803-01": {
        "spr-20": [0, 0]
    },
    "pubp-6725-01": {
        "spr-20": [100, 48]
    }
}

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

    const colorOpen = "rgb(16, 255, 16)";
    const colorClosed = "rgb(255, 16, 16)";

    if ((wlAct + act) < cap) {
        colorMain(colorOpen);
        colorWL(colorOpen);
    } else if (wlAct < wlCap) {
        colorMain(colorClosed);
        colorWL(colorOpen);
    } else {
        colorMain(colorClosed);
        colorWL(colorClosed);
    }
}

// https://imgur.com/user/pikatchum
function iterateTable(table) {
    for (i = 0; i < table.length; i++) {
        if ((table[i].children.length > 0) && (table[i].children[0].classList.length > 0) && (table[i].children[0].classList[0] === "dddefault")) {
            if (!isOMSCS(table[i])) {
                // non-OMSCS class; hide
                table[i].setAttribute("style", "display:none");
            } else {
                // is OMSCS class
                colorRow(table[i]);

                // fill in history TODO
                let courseName = `${table[i].children[2].textContent}-${table[i].children[3].textContent}-${table[i].children[4].textContent.slice(-2)}`.toLowerCase();
                table[i].id = courseName;
            }
        }
        // clear out unnecessary columns
        if (table[i].children.length > 19) {
            table[i].children[4].setAttribute("style", "display:none");
            table[i].children[5].setAttribute("style", "display:none");
            table[i].children[6].setAttribute("style", "display:none");
            table[i].children[7].setAttribute("style", "display:none");
            table[i].children[9].setAttribute("style", "display:none");
            table[i].children[10].setAttribute("style", "display:none");
            table[i].children[18].setAttribute("style", "display:none");
            table[i].children[19].setAttribute("style", "display:none");
        }
    };
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

function addHistory(rows) {
    let courses = Object.keys(data);
    console.log(courses);
    // add history rows
    courses.map(course => {
        let oldRow = document.getElementById(course);
        if (oldRow) {
            let courseData = data[course];
            let newRows = []
            Object.keys(courseData).map(prevCourse => {
                let newRow = document.createElement("tr");
                Array.from(Array(4)).forEach(() => {
                    newRow.insertCell();
                })
                let cName = newRow.insertCell();
                cName.classList.add("dddefault");
                cName.textContent = `${prevCourse}:`;
                let prevCourseData = courseData[prevCourse];
                let cCap = newRow.insertCell();
                cCap.classList.add("dddefault");
                cCap.textContent = prevCourseData[0];
                let cAct = newRow.insertCell();
                cAct.classList.add("dddefault");
                cAct.textContent = prevCourseData[1];
                let cRem = newRow.insertCell();
                cRem.classList.add("dddefault");
                cRem.textContent = prevCourseData[0] - prevCourseData[1];
                newRows.push(newRow);
                oldRow.after(newRow);
            });

            // create button
            let buttonCell = oldRow.insertCell();
            let button = document.createElement("button");
            let hidden = false;
            button.type = "button";
            function toggle() {
                if (hidden) {
                    hidden = false;
                    newRows.forEach(row => {
                        row.setAttribute("style", "display:visible");
                        button.textContent = "Hide enrollment history";
                    })
                } else {
                    hidden = true;
                    newRows.forEach(row => {
                        row.setAttribute("style", "display:none");
                        button.textContent = "Show enrollment history";
                    })
                }
            }
            toggle();
            button.addEventListener("click", toggle);
            buttonCell.appendChild(button);
        };
    });
    // add header column
    let elements = document.getElementsByTagName("tr");
    Array.from(elements).forEach(row => {
        if (row.children[0].classList[0] === "ddheader") {
            let newCell = row.insertCell();
            newCell.classList.add("ddheader");
            newCell.textContent = "Enrollment History";
        }
    });
}

function cleanPage() {
    hideInstructions();
    let rows = document.getElementsByClassName("datadisplaytable")[0].children[1].children;
    iterateTable(rows);
    addHistory(rows);
}

cleanPage()
