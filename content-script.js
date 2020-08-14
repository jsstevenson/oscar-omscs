/* Historical course data/misc info/etc
 * * Pulling historical records from https://imgur.com/user/pikatchum
 * TODO: Figure out how to load JSON from a file so I don't have to
 * dump it up here in the ugliest way possible. thank god for code folding
 */
let data = {
  "cse-6220-01": {
    url: "https://omscs.gatech.edu/cse-6220-intro-hpc",
    history: {},
  },
  "cse-6242-01": {
    url: "https://omscs.gatech.edu/cse-6242-data-visual-analytics",
    history: {
      "Spring 2020": [400, 399],
      "Fall 2019": [400, 399],
    },
  },
  "cse-6250-01": {
    url:
      "https://omscs.gatech.edu/cse-8803-special-topics-big-data-for-health-informatics",
    history: {
      "Spring 2020": [300, 247],
      "Fall 2019": [300, 274],
    },
  },
  "cs-6035-01": {
    url:
      "https://omscs.gatech.edu/cs-6035-introduction-to-information-security",
    history: {
      "Spring 2020": [700, 663],
      "Fall 2019": [800, 776],
    },
  },
  "cs-6200-01": {
    url: "https://omscs.gatech.edu/cs-6200-introduction-operating-systems",
    history: {
      "Spring 2020": [800, 700],
      "Fall 2019": [650, 632],
    },
  },
  "cs-6210-01": {
    url: "https://omscs.gatech.edu/cs-6210-advanced-operating-systems",
    history: {
      "Spring 2020": [300, 257],
      "Fall 2019": [300, 259],
    },
  },
  "cs-6238-01": {
    history: {
      "Spring 2020": [200, 103],
      "Fall 2019": [200, 140],
    },
  },
  "cs-6250-01": {
    url: "https://omscs.gatech.edu/cs-6250-computer-networks",
    history: {
      "Spring 2020": [600, 599],
      "Fall 2019": [600, 596],
    },
  },
  "cs-6260-01": {
    history: {
      "Spring 2020": [75, 72],
    },
  },
  "cs-6262-01": {
    url: "https://omscs.gatech.edu/cs-6262-network-security",
    history: {
      "Spring 2020": [250, 57],
      "Fall 2019": [350, 245],
    },
  },
  "cs-6263-01": {
    url:
      "https://omscs.gatech.edu/cs-8803-special-topics-cyber-physical-systems",
    history: {
      "Spring 2020": [300, 260],
      "Fall 2019": [300, 251],
    },
  },
  "cs-6265-01": {
    url: "https://omscs.gatech.edu/cs-6265-information-security-lab",
    history: {
      "Spring 2020": [200, 40],
      "Fall 2019": [100, 80],
    },
  },
  "cs-6290-01": {
    url:
      "https://omscs.gatech.edu/cs-6290-high-performance-computer-architecture",
    history: {
      "Spring 2020": [350, 265],
      "Fall 2019": [300, 245],
    },
  },
  "cs-6291-01": {
    url: "https://omscs.gatech.edu/cs-6291-embedded-systems-optimization",
    history: {
      "Spring 2020": [200, 83],
      "Fall 2019": [200, 93],
    },
  },
  "cs-6300-01": {
    url: "https://omscs.gatech.edu/cs-6300-software-development-process",
    history: {
      "Spring 2020": [500, 500],
      "Fall 2019": [500, 500],
    },
  },
  "cs-6310-01": {
    url: "https://omscs.gatech.edu/cs-6310-software-architecture-design",
    history: {
      "Spring 2020": [600, 538],
      "Fall 2019": [515, 510],
    },
  },
  "cs-6340-01": {
    url: "https://omscs.gatech.edu/cs-6340-software-analysis",
    history: {
      "Spring 2020": [400, 347],
      "Fall 2019": [500, 371],
    },
  },
  "cs-6400-01": {
    url:
      "https://omscs.gatech.edu/cs-6400-database-systems-concepts-and-design",
    history: {
      "Spring 2020": [500, 462],
      "Fall 2019": [500, 399],
    },
  },
  "cs-6440-01": {
    url: "https://omscs.gatech.edu/cs-6440-intro-health-informatics",
    history: {
      "Spring 2020": [200, 200],
      "Fall 2019": [400, 396],
    },
  },
  "cs-6457-01": {
    url: "https://omscs.gatech.edu/cs-6457-video-game-design",
    history: {},
  },
  "cs-6460-01": {
    url: "https://omscs.gatech.edu/cs-6460-educational-technology",
    history: {
      "Spring 2020": [250, 220],
      "Fall 2019": [300, 237],
    },
  },
  "cs-6475-01": {
    url: "https://omscs.gatech.edu/cs-6475-computational-photography",
    history: {
      "Spring 2020": [400, 323],
      "Fall 2019": [525, 490],
    },
  },
  "cs-6476-01": {
    url: "https://omscs.gatech.edu/cs-6476-computer-vision",
    history: {
      "Spring 2020": [400, 400],
      "Fall 2019": [500, 499],
    },
  },
  "cs-6515-01": {
    url: "https://omscs.gatech.edu/cs-6515-intro-graduate-algorithms",
    history: {
      "Spring 2020": [526, 527],
      "Fall 2019": [551, 551],
    },
  },
  "cs-6601-01": {
    url: "https://omscs.gatech.edu/cs-6601-artificial-intelligence",
    history: {
      "Spring 2020": [813, 37],
      "Fall 2019": [400, 400],
    },
  },
  "cs-6750-01": {
    url: "https://omscs.gatech.edu/cs-6750-human-computer-interaction",
    history: {
      "Spring 2020": [500, 444],
      "Fall 2019": [584, 550],
    },
  },
  "cs-7637-01": {
    url:
      "https://omscs.gatech.edu/cs-7637-knowledge-based-artificial-intelligence-cognitive-systems",
    history: {
      "Spring 2020": [650, 584],
      "Fall 2019": [600, 554],
    },
  },
  "cs-7638-01": {
    url: "https://omscs.gatech.edu/cs-7638-artificial-intelligence-robotics",
    history: {
      "Spring 2020": [700, 638],
      "Fall 2019": [600, 593],
    },
  },
  "cs-7639-01": {
    url: "https://omscs.gatech.edu/cs-7639-cyber-physical-design-and-analysis",
    history: {
      "Spring 2020": [200, 83],
      "Fall 2019": [200, 136],
    },
  },
  "cs-7641-01": {
    url: "https://omscs.gatech.edu/cs-7641-machine-learning",
    history: {
      "Spring 2020": [750, 750],
      "Fall 2019": [650, 650],
    },
  },
  "cs-7642-03": {
    url: "https://omscs.gatech.edu/cs-7642-reinforcement-learning",
    history: {
      "Spring 2020": [572, 503],
      "Fall 2019": [500, 456],
    },
  },
  "cs-7643-01": {
    url: "https://omscs.gatech.edu/cs-7643-deep-learning",
    history: {},
  },
  "cs-7646-01": {
    url: "https://omscs.gatech.edu/cs-7646-machine-learning-trading",
    history: {
      "Spring 2020": [700, 700],
      "Fall 2019": [700, 700],
    },
  },
  "cs-8803-08": {
    url: "https://omscs.gatech.edu/cs-8803-o08-compilers-theory-and-practice",
    history: {
      "Spring 2020": [200, 48],
      "Fall 2019": [200, 56],
    },
  },
  "cs-8803-10": {
    url: "https://omscs.gatech.edu/cs-8803-o10-ai-ethics-and-society",
    history: {
      "Spring 2020": [100, 100],
    },
  },
  "cs-8803-11": {
    url:
      "https://omscs.gatech.edu/cs-8803-o11-information-security-lab-system-and-network-defenses",
    history: {
      "Spring 2020": [100, 22],
    },
  },
  "isye-6402-01": {
    url: "https://omscs.gatech.edu/isye-6402-time-series-analysis",
    history: {
      "Spring 2020": [200, 42],
    },
  },
  "isye-6420-01": {
    url: "http://www.omscs.gatech.edu/isye-6420-bayesian-statistics",
    history: {
      "Spring 2020": [200, 200],
      "Fall 2019": [100, 100],
    },
  },
  "isye-6501-01": {
    url: "https://omscs.gatech.edu/isye-6501-intro-analytics-modeling",
    history: {
      "Spring 2020": [300, 249],
    },
  },
  "isye-6644-01": {
    history: {
      "Spring 2020": [200, 186],
    },
  },
  "isye-8803-01": {
    url:
      "https://omscs.gatech.edu/isye-8803-topics-high-dimensional-data-analytics",
    history: {},
  },
  "pubp-6725-01": {
    url: "https://omscs.gatech.edu/pubp-6725-information-security-policies",
    history: {
      "Spring 2020": [100, 48],
    },
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
        if (data[courseName]["url"]) {
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
