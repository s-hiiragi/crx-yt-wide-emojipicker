function restoreOptions() {
    chrome.storage.sync.get({
        numLines: 5
    }, (items) => {
        document.querySelector('#numLines').value = items.numLines;
    });
}

function saveOptions() {
    const numLines = Number(document.querySelector('#numLines').value);
    chrome.storage.sync.set({
        numLines: numLines
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector('#numLines').addEventListener('change', saveOptions);
