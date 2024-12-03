// content.js
function getPageText() {
  const elements = document.body.querySelectorAll('*');
  let pageText = '';
  elements.forEach((el) => {
    if (el.tagName !== 'SCRIPT' && el.tagName !== 'STYLE' && el.innerText) {
      pageText += el.innerText + ' ';
    }
  });
  return pageText;
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'extractText') {
    const pageText = getPageText();
    sendResponse({ text: pageText });
  }
});
