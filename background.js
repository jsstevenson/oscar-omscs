function handleClick(tab) {
  function onExecuted(result) {
    console.log(`Executed in all subframes`);
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }
  let executing = browser.tabs.executeScript({
    file: "/content-script.js",
    allFrames: true,
  });
  executing.then(onExecuted, onError);
}

browser.browserAction.onClicked.addListener(handleClick);
