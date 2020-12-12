/* Historical course data/misc info/etc
 * * Pulling historical records from https://imgur.com/user/pikatchum
 * TODO: Figure out how to load JSON from a file so I don't have to
 * dump it up here in the ugliest way possible. thank god for code folding
 */
let data = {
  "cse-6220-01": {
    url: "https://omscs.gatech.edu/cse-6220-intro-hpc",
    history: {
      "Fall 2020": [150, 150],
    },
  },
  "cse-6242-01": {
    url: "https://omscs.gatech.edu/cse-6242-data-visual-analytics",
    history: {
      "Fall 2020": [490, 462],
      "Spring 2020": [400, 399],
      "Fall 2019": [400, 399],
    },
  },
  "cse-6250-01": {
    url:
      "https://omscs.gatech.edu/cse-8803-special-topics-big-data-for-health-informatics",
    history: {
      "Fall 2020": [350, 259],
      "Spring 2020": [300, 247],
      "Fall 2019": [300, 274],
    },
  },
  "cs-6035-01": {
    url:
      "https://omscs.gatech.edu/cs-6035-introduction-to-information-security",
    history: {
      "Fall 2020": [700, 624],
      "Spring 2020": [700, 663],
      "Fall 2019": [800, 776],
    },
    omscentral: "https://omscentral.com/course/CS-6035",
  },
  "cs-6200-01": {
    url: "https://omscs.gatech.edu/cs-6200-introduction-operating-systems",
    history: {
      "Fall 2020": [700, 692],
      "Spring 2020": [800, 700],
      "Fall 2019": [650, 632],
    },
    omscentral: "https://omscentral.com/course/CS-6200",
  },
  "cs-6210-01": {
    url: "https://omscs.gatech.edu/cs-6210-advanced-operating-systems",
    history: {
      "Fall 2020": [350, 227],
      "Spring 2020": [300, 257],
      "Fall 2019": [300, 259],
    },
    omscentral: "https://omscentral.com/course/CS-6210",
  },
  "cs-6238-01": {
    history: {
      "Fall 2020": [100, 61],
      "Spring 2020": [200, 103],
      "Fall 2019": [200, 140],
    },
    omscentral: "https://omscentral.com/course/CS-6238",
  },
  "cs-6250-01": {
    url: "https://omscs.gatech.edu/cs-6250-computer-networks",
    history: {
      "Fall 2020": [750, 749],
      "Spring 2020": [600, 599],
      "Fall 2019": [600, 596],
    },
    omscentral: "https://omscentral.com/course/CS-6250",
  },
  "cs-6260-01": {
    history: {
      "Fall 2020": [100, 77],
      "Spring 2020": [75, 72],
    },
    omscentral: "https://omscentral.com/course/CS-6260",
  },
  "cs-6262-01": {
    url: "https://omscs.gatech.edu/cs-6262-network-security",
    history: {
      "Fall 2020": [300, 241],
      "Spring 2020": [250, 57],
      "Fall 2019": [350, 245],
    },
    omscentral: "https://omscentral.com/course/CS-6262",
  },
  "cs-6263-01": {
    url:
      "https://omscs.gatech.edu/cs-8803-special-topics-cyber-physical-systems",
    history: {
      "Fall 2020": [250, 174],
      "Spring 2020": [300, 260],
      "Fall 2019": [300, 251],
    },
    omscentral: "https://omscentral.com/course/CS-6263",
  },
  "cs-6265-01": {
    url: "https://omscs.gatech.edu/cs-6265-information-security-lab",
    history: {
      "Fall 2020": [50, 18],
      "Spring 2020": [200, 40],
      "Fall 2019": [100, 80],
    },
    omscentral: "https://omscentral.com/course/CS-6265",
  },
  "cs-6290-01": {
    url:
      "https://omscs.gatech.edu/cs-6290-high-performance-computer-architecture",
    history: {
      "Fall 2020": [250, 188],
      "Spring 2020": [350, 265],
      "Fall 2019": [300, 245],
    },
    omscentral: "https://omscentral.com/course/CS-6290",
  },
  "cs-6291-01": {
    url: "https://omscs.gatech.edu/cs-6291-embedded-systems-optimization",
    history: {
      "Fall 2020": [100, 77],
      "Spring 2020": [200, 83],
      "Fall 2019": [200, 93],
    },
    omscentral: "https://omscentral.com/course/CS-6291",
  },
  "cs-6300-01": {
    url: "https://omscs.gatech.edu/cs-6300-software-development-process",
    history: {
      "Fall 2020": [525, 525],
      "Spring 2020": [500, 500],
      "Fall 2019": [500, 500],
    },
    omscentral: "https://omscentral.com/course/CS-6300",
  },
  "cs-6310-01": {
    url: "https://omscs.gatech.edu/cs-6310-software-architecture-design",
    history: {
      "Fall 2020": [550, 546],
      "Spring 2020": [600, 538],
      "Fall 2019": [515, 510],
    },
    omscentral: "https://omscentral.com/course/CS-6310",
  },
  "cs-6340-01": {
    url: "https://omscs.gatech.edu/cs-6340-software-analysis",
    history: {
      "Fall 2020": [450, 344],
      "Spring 2020": [400, 347],
      "Fall 2019": [500, 371],
    },
    omscentral: "https://omscentral.com/course/CS-6310",
  },
  "cs-6400-01": {
    url:
      "https://omscs.gatech.edu/cs-6400-database-systems-concepts-and-design",
    history: {
      "Fall 2020": [525, 499],
      "Spring 2020": [500, 462],
      "Fall 2019": [500, 399],
    },
    omscentral: "https://omscentral.com/course/CS-6400",
  },
  "cs-6440-01": {
    url: "https://omscs.gatech.edu/cs-6440-intro-health-informatics",
    history: {
      "Fall 2020": [400, 386],
      "Spring 2020": [200, 200],
      "Fall 2019": [400, 396],
    },
    omscentral: "https://omscentral.com/course/CS-6440",
  },
  "cs-6457-01": {
    url: "https://omscs.gatech.edu/cs-6457-video-game-design",
    history: {
      "Fall 2020": [100, 96],
    },
  },
  "cs-6460-01": {
    url: "https://omscs.gatech.edu/cs-6460-educational-technology",
    history: {
      "Fall 2020": [250, 188],
      "Spring 2020": [250, 220],
      "Fall 2019": [300, 237],
    },
    omscentral: "https://omscentral.com/course/CS-6460",
  },
  "cs-6475-01": {
    url: "https://omscs.gatech.edu/cs-6475-computational-photography",
    history: {
      "Fall 2020": [500, 451],
      "Spring 2020": [400, 323],
      "Fall 2019": [525, 490],
    },
    omscentral: "https://omscentral.com/course/CS-6475",
  },
  "cs-6476-01": {
    url: "https://omscs.gatech.edu/cs-6476-computer-vision",
    history: {
      "Fall 2020": [450, 449],
      "Spring 2020": [400, 400],
      "Fall 2019": [500, 499],
    },
    omscentral: "https://omscentral.com/course/CS-6476",
  },
  "cs-6515-01": {
    url: "https://omscs.gatech.edu/cs-6515-intro-graduate-algorithms",
    history: {
      "Fall 2020": [603, 603],
      "Spring 2020": [526, 527],
      "Fall 2019": [551, 551],
    },
    omscentral: "https://omscentral.com/course/CS-6515",
  },
  "cs-6601-01": {
    url: "https://omscs.gatech.edu/cs-6601-artificial-intelligence",
    history: {
      "Fall 2020": [750, 672],
      "Spring 2020": [813, 37],
      "Fall 2019": [400, 400],
    },
    omscentral: "https://omscentral.com/course/CS-6601",
  },
  "cs-6750-01": {
    url: "https://omscs.gatech.edu/cs-6750-human-computer-interaction",
    history: {
      "Fall 2020": [650, 590],
      "Spring 2020": [500, 444],
      "Fall 2019": [584, 550],
    },
    omscentral: "https://omscentral.com/course/CS-6750",
  },
  "cs-7637-01": {
    url:
      "https://omscs.gatech.edu/cs-7637-knowledge-based-artificial-intelligence-cognitive-systems",
    history: {
      "Fall 2020": [700, 557],
      "Spring 2020": [650, 584],
      "Fall 2019": [600, 554],
    },
    omscentral: "https://omscentral.com/course/CS-7637",
  },
  "cs-7638-01": {
    url: "https://omscs.gatech.edu/cs-7638-artificial-intelligence-robotics",
    history: {
      "Fall 2020": [800, 776],
      "Spring 2020": [700, 638],
      "Fall 2019": [600, 593],
    },
    omscentral: "https://omscentral.com/course/CS-7638",
  },
  "cs-7639-01": {
    url: "https://omscs.gatech.edu/cs-7639-cyber-physical-design-and-analysis",
    history: {
      "Fall 2020": [100, 92],
      "Spring 2020": [200, 83],
      "Fall 2019": [200, 136],
    },
    omscentral: "https://omscentral.com/course/CS-7639",
  },
  "cs-7641-01": {
    url: "https://omscs.gatech.edu/cs-7641-machine-learning",
    history: {
      "Fall 2020": [900, 900],
      "Spring 2020": [750, 750],
      "Fall 2019": [650, 650],
    },
    omscentral: "https://omscentral.com/course/CS-7641",
  },
  "cs-7642-03": {
    url: "https://omscs.gatech.edu/cs-7642-reinforcement-learning",
    history: {
      "Fall 2020": [500, 480],
      "Spring 2020": [572, 503],
      "Fall 2019": [500, 456],
    },
    omscentral: "https://omscentral.com/course/CS-7642",
  },
  "cs-7643-01": {
    url: "https://omscs.gatech.edu/cs-7643-deep-learning",
    history: {
      "Fall 2020": [150, 150],
    },
  },
  "cs-7646-01": {
    url: "https://omscs.gatech.edu/cs-7646-machine-learning-trading",
    history: {
      "Fall 2020": [950, 950],
      "Spring 2020": [700, 700],
      "Fall 2019": [700, 700],
    },
    omscentral: "https://omscentral.com/course/CS-7646",
  },
  "cs-8803-08": {
    url: "https://omscs.gatech.edu/cs-8803-o08-compilers-theory-and-practice",
    history: {
      "Fall 2020": [50, 44],
      "Spring 2020": [200, 48],
      "Fall 2019": [200, 56],
    },
    omscentral: "https://omscentral.com/course/CS-8803-O08",
  },
  "cs-6603": {
    url: "https://omscs.gatech.edu/cs-8803-o10-ai-ethics-and-society",
    history: {
      "Fall 2020": [300, 300],
      "Spring 2020": [100, 100],
    },
    omscentral: "https://omscentral.com/course/CS-6603",
  },
  "cs-8803-11": {
    url:
      "https://omscs.gatech.edu/cs-8803-o11-information-security-lab-system-and-network-defenses",
    history: {
      "Fall 2020": [50, 23],
      "Spring 2020": [100, 22],
    },
    omscentral: "https://omscentral.com/course/CS-8803-O11",
  },
  "isye-6402-01": {
    url: "https://omscs.gatech.edu/isye-6402-time-series-analysis",
    history: {
      "Fall 2020": [200, 33],
      "Spring 2020": [200, 42],
    },
    omscentral: "https://omscentral.com/course/ISYE-6402",
  },
  "isye-6420-01": {
    url: "http://www.omscs.gatech.edu/isye-6420-bayesian-statistics",
    history: {
      "Fall 2020": [275, 275],
      "Spring 2020": [200, 200],
      "Fall 2019": [100, 100],
    },
    omscentral: "https://omscentral.com/course/ISYE-6420",
  },
  "isye-6501-01": {
    url: "https://omscs.gatech.edu/isye-6501-intro-analytics-modeling",
    history: {
      "Fall 2020": [200, 178],
      "Spring 2020": [300, 249],
    },
    omscentral: "https://omscentral.com/course/ISYE-6501",
  },
  "isye-6644-01": {
    history: {
      "Fall 2020": [200, 158],
      "Spring 2020": [200, 186],
    },
    omscentral: "https://omscentral.com/course/ISYE-6644",
  },
  "isye-8803-01": {
    url:
      "https://omscs.gatech.edu/isye-8803-topics-high-dimensional-data-analytics",
    history: {
      "Fall 2020": [100, 64],
    },
    omscentral: "https://omscentral.com/course/ISYE-8803",
  },
  "pubp-6725-01": {
    url: "https://omscs.gatech.edu/pubp-6725-information-security-policies",
    history: {
      "Fall 2020": [50, 50],
      "Spring 2020": [100, 48],
    },
    omscentral: "https://omscentral.com/course/PUBP-6725",
  },
  "ece-8843-01": {
    url:
      "https://omscs.gatech.edu/ece-8843-side-channels-and-their-role-cybersecurity",
    history: {
      "Fall 2020": [50, 16],
    },
  },
  "mgt-6311-01": {
    history: {},
  },
  "isye-6669-01": {
    history: {},
  },
  "cs-8803-0A": {
    url: "https://omscs.gatech.edu/cs-8803-o12-systems-issues-cloud-computing",
    history: {},
  },
  "cs-8803-0B": {
    url: "https://omscs.gatech.edu/cs-8803-o12-systems-issues-cloud-computing",
    history: {},
  },
  "cs-7632-01": {
    url: "https://omscs.gatech.edu/cs-7632-game-ai",
    history: {},
  },
  "cs-7280-01": {
    url: "https://omscs.gatech.edu/cs-7280-network-science",
    history: {},
  },
  "cs-7210-01": {
    history: {},
  },
  "inta-6450-01": {
    url: "https://omscs.gatech.edu/inta-6450-data-analytics-and-security",
    history: {},
  },
  "inta-6742-01": {
    history: {},
  },
};

// idk how regex works in js but i'm putting this up here in case it needs to compile every time
let re = /O[0-9][0-9]/;

/* Checks if provided row (<tr> element) is an OMSCS course or not
 */
function isOMSCS(row) {
  if (row.children[5].textContent != "O") {
    return false;
  }
  if (!re.exec(row.children[4].textContent)) {
    return false;
  }
  return true;
}

/* Add color to course registration numbers
 */
function colorRow(row) {
  let act = parseInt(row.children[12].textContent);
  let cap = parseInt(row.children[11].textContent);
  let wlCap = parseInt(row.children[14].textContent);
  let wlAct = parseInt(row.children[15].textContent);

  function colorCells(cellIndices, color) {
    cellIndices.forEach((i) => {
      row.children[i].setAttribute("style", `background-color: ${color};`);
    });
  }

  const colorOpen = "rgb(16, 255, 16)";
  const colorClosed = "rgb(255, 16, 16)";

  if (wlAct + act < cap) {
    colorCells([11, 12, 13, 14, 15, 16], colorOpen);
  } else if (wlAct < wlCap) {
    colorCells([11, 12, 13], colorClosed);
    colorCells([14, 15, 16], colorOpen);
  } else {
    colorCells([11, 12, 13, 14, 15, 16], colorClosed);
  }
}

/* Walk through the table and perform necessary actions on each row
 *  * Hide non-OMSCS classes
 *  * Style OMSCS course rows
 */
function iterateTable(rows) {
  Array.from(rows).forEach((row) => {
    if (
      row.children.length > 0 &&
      row.children[0].classList.length > 0 &&
      row.children[0].classList[0] === "dddefault"
    ) {
      if (!isOMSCS(row)) {
        row.setAttribute("style", "display:none");
      } else {
        colorRow(row);
        let courseName = `${row.children[2].textContent}-${
          row.children[3].textContent
        }-${row.children[4].textContent.slice(-2)}`.toLowerCase();
        row.id = courseName;
        if (data[courseName] && data[courseName]["url"]) {
          let link = document.createElement("a");
          link.href = data[courseName]["url"];
          link.textContent = row.children[8].textContent;
          link.setAttribute("target", "_blank");
          link.setAttribute("rel", "noopener noreferrer");
          row.children[8].textContent = "";
          row.children[8].appendChild(link);
        }
      }
    }
    if (row.children.length > 19) {
      [4, 5, 6, 7, 9, 10, 18, 19].forEach((i) => {
        row.children[i].setAttribute("style", "display:none");
      });
    }
  });
}

/* Hide the registration instructions section by default and generate
 * toggle button to show them
 */
function hideInstructions() {
  let hidden = false;
  let infoDiv = document.getElementsByClassName("infotextdiv")[0];
  let button;

  function toggleInstructions() {
    if (hidden) {
      hidden = false;
      infoDiv.setAttribute("style", "display:visible");
      button.textContent = "Hide registration instructions";
    } else {
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

/* Add history sections - generates extra rows w/ enrollment history +
 * toggle buttons to show/hide.
 * rows: HTMLCollection of <tr> elements
 * TODO: figure out how to load that JSON file instead of dumping it up top here
 */
function addHistory(rows) {
  let courses = Object.keys(data);
  courses.map((course) => {
    let oldRow = document.getElementById(course);
    if (oldRow) {
      let prevEnrollment = data[course]["history"];
      let newRows = [];
      Object.keys(prevEnrollment).map((semester) => {
        let newRow = document.createElement("tr");
        Array.from(Array(4)).forEach(() => {
          newRow.insertCell();
        });
        let cName = newRow.insertCell();
        cName.classList.add("dddefault");
        cName.setAttribute("style", "font-style:italic");
        cName.textContent = semester;
        let semesterData = prevEnrollment[semester];
        let cCap = newRow.insertCell();
        cCap.classList.add("dddefault");
        cCap.textContent = semesterData[0];
        let cAct = newRow.insertCell();
        cAct.classList.add("dddefault");
        cAct.textContent = semesterData[1];
        let cRem = newRow.insertCell();
        cRem.classList.add("dddefault");
        cRem.textContent = semesterData[0] - semesterData[1];
        newRows.push(newRow);
        oldRow.after(newRow);
      });

      // create button
      let buttonCell = oldRow.insertCell();
      let button = document.createElement("button");
      let hidden = false;
      button.type = "button";
      function toggleHistory() {
        if (hidden) {
          hidden = false;
          newRows.forEach((row) => {
            row.setAttribute("style", "display:visible");
            button.textContent = "Hide";
          });
        } else {
          hidden = true;
          newRows.forEach((row) => {
            row.setAttribute("style", "display:none");
            button.textContent = "Show";
          });
        }
      }
      toggleHistory();
      button.addEventListener("click", toggleHistory);
      buttonCell.appendChild(button);
    }
  });
  // add header column
  let elements = document.getElementsByTagName("tr");
  Array.from(elements).forEach((row) => {
    if (row.children[0].classList[0] === "ddheader") {
      let newCell = row.insertCell();
      newCell.classList.add("ddheader");
      newCell.textContent = "Enrollment History";
    }
  });
}

/* Main container function - calls subroutines
 * Shouldn't return anything
 *
 */
function cleanPage() {
  hideInstructions();
  let rows = document.getElementsByClassName("datadisplaytable")[0].children[1]
    .children;
  iterateTable(rows);
  addHistory(rows);
}

cleanPage();
