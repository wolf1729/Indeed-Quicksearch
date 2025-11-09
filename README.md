# 🔎 Indeed QuickSearch

**Indeed QuickSearch** is a lightweight Chrome extension that adds a floating search bar on your [Indeed Applied Jobs](https://myjobs.indeed.com/applied) page — letting you instantly search and filter your applied roles by **job title**, **company**, or **location**.

---

## 🚀 Features

- 🔍 **Instant Filtering:** Quickly find jobs you've applied for without scrolling endlessly.  
- 📄 **Smart Search:** Searches across role names, company names, and locations.  
- 📌 **Floating Search Bar:** Always visible, even when you scroll.  
- 🖱️ **One-Click Activation:** Works seamlessly when visiting your Indeed Applied Jobs page.  
- 🧩 **Minimal & Fast:** No background tracking, no external dependencies — 100% client-side.

---

## 🧠 How It Works

When you visit **https://myjobs.indeed.com/applied**, the extension automatically injects a small floating search bar at the top-right corner of the screen.  
Typing into the bar filters all job cards in real time, matching your query with the job’s **title**, **company**, or **location**.

---

## 📁 Project Structure

```
indeed-quicksearch/
│
├── manifest.json          # Extension configuration
├── content.js             # Injected script for search functionality
├── style.css              # Floating bar styling
├── default_icon.png       # Extension icon
└── README.md              # Documentation
```

---

## 🧩 manifest.json Overview

```json
{
  "manifest_version": 3,
  "name": "Indeed QuickSearch",
  "version": "1.0",
  "description": "Search through your applied jobs on Indeed.",
  "permissions": ["activeTab", "scripting"],
  "host_permissions": ["https://in.indeed.com/*"],
  "content_scripts": [
    {
      "matches": ["https://myjobs.indeed.com/applied*"],
      "js": ["content.js"],
      "css": ["style.css"]
    }
  ],
  "action": {
    "default_icon": "default_icon.png",
    "default_title": "Search Applied Jobs on Indeed"
  }
}
```

---

## 💡 Example Use Case

If you’ve applied to 100+ jobs on Indeed, finding a specific one later can be frustrating.
With **Indeed QuickSearch**, you can type *“software engineer”* or *“Google”* and instantly see only matching applications.

---

## 🧰 Tech Stack

* **Manifest V3** – Chrome Extensions API
* **Vanilla JavaScript (ES6)** – No frameworks
* **CSS3** – For styling and layout
* **HTML5** – Dynamic DOM injection

---

## 🔐 Privacy

This extension **does not collect or store any personal data**.
All searches are processed locally within your browser.

---

## 🧑‍💻 Author

**Aryan Mishra**
💼 [LinkedIn](https://www.linkedin.com/in/aryan-mishra-78578b22a/)
📦 [GitHub](https://github.com/wolf1729)

---

## 🌍 License

This project is licensed under the **MIT License** — feel free to use, modify, and distribute it.

---

### ⭐ If you find this useful, give the repo a star on GitHub!

