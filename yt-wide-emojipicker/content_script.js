const emojiPicker = document.querySelector('yt-emoji-picker-renderer#emoji');

const defaultNumLines = 5;

// 222px ... 4 lines
// 254px ... 5 lines
// emoji size: 32 x 32 (padding: 4px)
emojiPicker.style.minHeight = `${94 + 32 * defaultNumLines}px`;

chrome.storage.sync.get({
    numLines: defaultNumLines
}, (items) => {
    emojiPicker.style.minHeight = `${94 + 32 * items.numLines}px`;
});
