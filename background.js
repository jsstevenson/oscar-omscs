function handleClick(tab) {

    function onExecuted(result) {
        console.log(`We executed in all subframes`);
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }
    // execute content script
    console.log("hello");

    let executing = browser.tabs.executeScript({
        file: "/content-script.js",
        allFrames: true
    });
    executing.then(onExecuted, onError);
}

browser.browserAction.onClicked.addListener(handleClick);
