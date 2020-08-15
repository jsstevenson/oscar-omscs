# OSCAR-OMSCS v 0.2

Hides all non-OMSCS classes in [OSCAR](https://oscar.gatech.edu/pls/bprod/twbkwbis.P_GenMenu?name=bmenu.P_StuMainMnu) Advanced Course Lookup interface.

## Version history

### v0.2

- Basic color coding by seat availability
- Show/hide enrollment history

### v0.1

- Remove extraneous columns
- Remove non-OMSCS course rows
- Toggle hide registration instructions

## Installation

In the future, you should be able to install directly via the Firefox extension interface.

For now, you can use this extension by [loading it locally](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/). Create a local clone of the repository, navigate to `about:debugging` in Firefox, click "This Firefox" on the left, select "Load Temporary Add-on", and navigate to the repo, selecting any file within the extension directory. You should then see an ugly yellow "O" icon on your browser toolbar.

## Usage

Within the OSCAR interface, click on "Look Up Classes" and then click on "Advanced Search". Select all subjects (departments) of interest - for OMSCS students, this would be, at most, "Computational Science & Engr", "Computer Science", "Industrial & Systems Engr", and "Public Policy". Click the "Section Search" button (no need to select "Online" for Campus). You should arrive at this page:

![screenshot of oscar course lookup listing](/docs/oscar-screenshot1.png?raw=true)

Clicking the "O" icon in your Firefox toolbar (top-right in the above screenshot) will hide that gigantic image and all non-OMSCS classes, but should not otherwise impact the function of this interface. You should end up with something like this:

![screenshot of cleaned oscar course lookup listing](/docs/oscar-screenshot2.png?raw=true)

## Comments/Issues

Raise them via GitHub or send them to jstevenson42@gatech.edu.
