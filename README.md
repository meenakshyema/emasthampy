# Ema S Thampy - Professional Portfolio Website ⚡

A modern, high-impact developer and AI researcher portfolio website tailored for **Ema S Thampy** (M.Tech in AI & Data Science scholar, Deepfake Detection & AI Security Researcher, and Full Stack Web Developer).

Built as a lightweight, lightning-fast static website with **zero build steps** and **zero hidden files** — 100% ready for **GitHub Pages**.

---

## 📁 File Structure (No Hidden Files)

```text
ema-thampy-portfolio/
├── index.html        # Main semantic HTML structure, content & developer terminal
├── css/
│   └── style.css     # Responsive dark/light theme, glassmorphic styling & syntax highlighting
├── js/
│   └── script.js     # Dark/light theme toggle, project filter, copy-to-clipboard
└── README.md         # Deployment & update instructions (this file)
```

> **Note:** There are absolutely no hidden files (no `.next`, no `.DS_Store`, no `.env`). Everything is clean, visible, and ready to be dragged or pushed directly into GitHub.

---

## 🚀 How to Upload to GitHub and Host for Free (GitHub Pages)

You can publish this portfolio live to the web in less than 2 minutes using either of these two methods:

### Method 1: Upload Directly via GitHub Web (Easiest - No Terminal Required)

1. Open [GitHub.com](https://github.com) and sign in.
2. Click the **`+`** icon in the top right corner and choose **"New repository"**.
3. Name your repository (e.g. `portfolio` or `ema-thampy-portfolio` or `emasthampy.github.io`):
   - Choose **Public**.
   - Do **NOT** initialize with a README (this folder already has one).
   - Click **Create repository**.
4. On the page that appears, click the link that says **"uploading an existing file"**.
5. Drag and drop all the files and folders from this directory into the GitHub browser window:
   - `index.html`
   - `css/` (containing `style.css`)
   - `js/` (containing `script.js`)
   - `README.md`
6. Type a commit message (e.g. `Initial portfolio release`) and click **Commit changes**.

---

### Method 2: Push Using Git Commands (For Terminal Users)

Inside this folder, run:

```bash
git init
git add .
git commit -m "Initial portfolio release"
git branch -M main
git remote add origin https://github.com/meenakshyema/emasthampy.git
git push -u origin main
```

---

## 🌐 Enabling GitHub Pages (Make It Live on the Web)

Once your files are uploaded to GitHub:

1. In your GitHub repository, click on the **⚙️ Settings** tab at the top.
2. In the left sidebar, click on **Pages** (under the "Code and automation" section).
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` from the dropdown, and leave the folder as `/ (root)`.
   - Click **Save**.
4. Wait about 60 to 90 seconds. Refresh the page, and GitHub will provide you with your live URL:
   ```
   https://<your-username>.github.io/<repository-name>/
   ```
   *(Or `https://<your-username>.github.io` if your repository was named `<your-username>.github.io`)*

---

## ✏️ How to Easily Update Your Information Later

Every section in `index.html` includes friendly comment markers to make updating quick:

### 1. Update Your LinkedIn & GitHub Links
Open `index.html` and search for `EDIT LINK`:
- Replace `https://www.linkedin.com` with your full LinkedIn profile URL (e.g., `https://www.linkedin.com/in/emasthampy/`).
- Replace `https://github.com` with your GitHub profile URL (e.g., `https://github.com/emasthampy`).

### 2. Add or Update Your Resume PDF
1. Place your resume PDF file directly inside the portfolio folder and name it `resume.pdf`.
2. In `index.html`, find the resume button in the hero section and change `href="mailto:emasthampy2002@gmail.com"` to `href="resume.pdf" target="_blank" download`.

### 3. Customize the Developer Code Terminal
You can easily adjust the code snippet inside the hero terminal card in `index.html` (under `<!-- Hero Visual / Tech Terminal Card -->`) to showcase any new frameworks, models, or research topics.

### 4. Add a New Project
In `index.html`, locate the `<!-- PROJECTS SECTION -->` and duplicate any `<article class="project-card glass-card">` block:
- Set `data-category="ai"` (for AI/Deep Learning), `data-category="web"` (for Web projects), or `data-category="iot"` (for IoT).
- Change the title, date, description, and technology tags.

### 5. Update CGPA, Education, or Experience
In `index.html`:
- Search for `8.43` to update your current M.Tech CGPA.
- Search for `Offenso Certified Security Professional` to update certification completion dates.

---

## 🎨 Features Included

- **Dark & Light Mode Switcher**: Automatically saves user preference in `localStorage` and detects OS mode.
- **Glassmorphic UI Design**: Neon accents (emerald & cyan) reflecting both AI and Cybersecurity focus.
- **Interactive Project Filtering**: Instant client-side filtering by category (AI, Web, IoT).
- **One-Click Email Copy**: Click to copy `emasthampy2002@gmail.com` with an interactive toast notification.
- **Interactive Contact Form**: Automatically composes formatted email messages.
- **100% Mobile Responsive**: Seamless layout on phones, tablets, and desktop displays.
- **Zero Dependencies**: Pure HTML5, CSS3, and vanilla ES6+ JavaScript. No npm, no webpack, no build steps required.

---

Crafted with care for **Ema S Thampy**.
