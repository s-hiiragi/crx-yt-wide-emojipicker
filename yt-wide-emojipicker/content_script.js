const emojiPicker = document.querySelector('yt-emoji-picker-renderer#emoji');

const defaultNumRows = 5;

// 222px ... 4 lines
// 254px ... 5 lines
// emoji size: 32 x 32 (padding: 4px)
emojiPicker.style.minHeight = `${94 + 32 * defaultNumRows}px`;

chrome.storage.sync.get({
    numRows: defaultNumRows
}, (items) => {
    emojiPicker.style.minHeight = `${94 + 32 * items.numRows}px`;
});
