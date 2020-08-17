# OSCAR-OMSCS v 0.2

Hides all non-OMSCS classes in [OSCAR](https://oscar.gatech.edu/pls/bprod/twbkwbis.P_GenMenu?name=bmenu.P_StuMainMnu) Advanced Course Lookup interface.

## Version history

### v0.3

- Add ECE 8843
- Fix handling of new courses
- Fix add-on updating

### v0.21

- Icons made slightly less ugly

### v0.2

- Basic color coding by seat availability
- Show/hide enrollment history

### v0.1

- Remove extraneous columns
- Remove non-OMSCS course rows
- Toggle hide registration instructions

## Installation

You'll need to download and install the extension file yourself. All versions are hosted in the `extension-files` directory, or you can download them directly:

```bash
curl -O https://github.com/jsstevenson/oscar-omscs/blob/master/extension-files/oscar_clean-0.21-fx.xpi?raw=true
```

Then, navigate in Firefox to `about:addons` (or pull up the add-ons page from the toolbar), click the gear icon, and select `Install add-ons from file...`. Open the .xpi file through that prompt.

You should then see a yellow "O" icon in your toolbar. I recommend customizing your toolbar and moving it out of view.

## Usage

Within the OSCAR interface, click on "Look Up Classes" and then click on "Advanced Search". Select all subjects (departments) of interest - for OMSCS students, this would be, at most, "Computational Science & Engr", "Computer Science",  "Electrical & Computer Engr", "Industrial & Systems Engr", and "Public Policy". Click the "Section Search" button (no need to select "Online" for Campus). You should arrive at this page:

![screenshot of oscar course lookup listing](/docs/oscar-screenshot1.png?raw=true)

Clicking the "O" icon in your Firefox toolbar (top-right in the above screenshot) will hide that gigantic image and all non-OMSCS classes, but should not otherwise impact the function of this interface. You should end up with something like this:

![screenshot of cleaned oscar course lookup listing](/docs/oscar-screenshot2.png?raw=true)

## Comments/Issues

Raise them via GitHub or send them to jstevenson42@gatech.edu.
