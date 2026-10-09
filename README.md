# 🔍 Smart Research Assistant — Chrome Extension (Manifest V3)

[![Chrome Extension](https://img.shields.io/badge/Chrome-Manifest%20V3-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)](manifest.json)
[![React](https://img.shields.io/badge/Frontend-React%20%7C%20Babel-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**Smart Research Assistant** is an AI-powered browser extension built on Chrome's **Manifest V3** standard. It allows students, researchers, and professionals to summarize active browser tabs, translate foreign text selections, and rewrite complex technical passages on the fly without leaving their current web page.

---

## ✨ Features

* 📑 **One-Click Tab Summarization:** Ingests the current DOM via `content.js` and condenses long articles into executive bullet points.
* 🌐 **Instant Highlight Translation:** Select any passage on any webpage to translate it into your target language.
* ✍️ **Intelligent Text Rewriting:** Rephrase, expand, or simplify highlighted text for academic and professional clarity.
* ⚡ **Manifest V3 Service Worker:** Modern background service worker (`background.js`) with active tab permissions and zero persistent background memory drain.

---

## 📁 Repository Structure

```text
SmartResearchAssistant/
├── manifest.json       # Manifest V3 extension configuration
├── background.js       # Extension service worker
├── content.js          # In-page content script DOM extractor
├── App.js / App.jsx    # React popup UI interface
├── index.js            # Extension popup DOM bootstrap
├── index.css           # Styling rules
├── .babelrc            # Babel transpiler preset configuration
├── package.json        # Dependencies & build scripts
├── LICENSE             # MIT License
└── README.md
```

---

## 🚀 Installation & Setup

### 1. Build Extension
```bash
git clone https://github.com/Tarunjit45/SmartResearchAssistant.git
cd SmartResearchAssistant

npm install
npm run build
```

### 2. Load in Google Chrome
1. Open Google Chrome and navigate to `chrome://extensions/`.
2. Toggle on **Developer mode** in the top-right corner.
3. Click **Load unpacked** and select the extension directory.
4. Pin the Smart Research Assistant icon to your toolbar!

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).
