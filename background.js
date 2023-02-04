chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: "ON",
    });
    chrome.action.setBadgeBackgroundColor({ color: "#34d14e" })

    chrome.storage.local.set({"shortcuts": {}})
});


// chrome.webRequest.onBeforeRequest.addListener(function (details) {
//     console.log(details)
// },   {urls: ["<all_urls>"]},
// [])

