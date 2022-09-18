function restoreOptions() {
    chrome.storage.sync.get({
        numRows: 5
    }, (items) => {
        document.querySelector('#numrows').value = items.numRows;
    });
}

function saveOptions() {
    const numRows = Number(document.querySelector('#numrows').value);
    chrome.storage.sync.set({
        numRows: numRows
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector('#numrows').addEventListener('change', saveOptions);
