# 📘 **KrishnaVerse — Mood-Based Quote Recommendation Web App**
*A simple and meaningful web application that displays Bhagavad Gita shlokas based on the user’s mood.*

---

## 🌟 Overview
KrishnaVerse is a mood-based quote recommendation web app that presents curated Bhagavad Gita shlokas along with accurate English translations. Users select a mood (Happy, Sad, Angry, Peaceful, etc.), and the app fetches a random shloka from a JSON dataset, displaying it in a clean, multi-line format.

---

## 🛠 Tech Stack
- **HTML** – Page structure  
- **CSS** – Styling and layout  
- **JavaScript** – Logic, routing, and randomization  
- **JSON** – Structured data storage for shlokas  

---

## ✨ Features
- Mood-based shloka recommendation  
- Random shloka selection using JavaScript  
- URL parameter routing (`main.html → shloka.html?mood=Happy`)  
- Multi-line Sanskrit rendering using `white-space: pre-line`  
- Clean and minimal UI  
- Modular file structure (HTML, JS, JSON separation)

---

## 📂 Project Structure

```text
KrishnaVerse/
│
├── index.html        # Title page with "Enter" button
├── main.html         # Mood selection page
├── shloka.html       # Displays the selected mood's shloka
├── quotes.json       # Database of shlokas categorized by mood
├── quotes.js         # Logic: Fetching data, random selection, & rendering
└── styles.css        # Global styling for the application

---

## 🔧 How It Works

1. **User lands on the homepage (index.html)**  
   - Displays the KrishnaVerse title, a headline, and an **Enter** button.  
   - Clicking the button navigates to the mood selection page (*main.html*).

2. **User selects a mood on main.html**  
   - Several mood options are displayed as cards/buttons.  
   - When a mood is selected, the user is redirected to:  
     ```
     shloka.html?mood=Happy
     ```

3. **quotes.js reads the mood from the URL**  
   - Using `URLSearchParams`, the script identifies which mood was selected.

4. **The app fetches shlokas from quotes.json**  
   - Each mood category contains multiple Sanskrit shlokas and their translations.

5. **A random shloka is selected**
   - Math.floor(Math.random() * list.length)

6. **The Sanskrit shloka and its English translation are displayed cleanly**
   - Multi-line Sanskrit text is rendered properly using white-space: pre-line.
---
## ▶️ How to Run

### **Option 1: Run the Live Website (Recommended)**
The project is deployed on Netlify.  
Simply visit the live link to use the application — no setup required.

➡️ **Live Site:** https://krishnaverse-gita.netlify.app

---

### **Option 2: Run Locally**

1. **Download or clone the repository**
   git clone https://github.com/niteeshayadav/KrishnaVerse.git
   
2. **Open the project folder**
   cd KrishnaVerse

3. **Open `index.html` in any browser**
   Since JSON files load correctly on Netlify and modern browsers handle local fetch requests differently,the app works locally without needing a server.

4. **Use the application**
- `index.html` → Homepage with **Enter**  
- `main.html` → Mood selection  
- `shloka.html?mood=SelectedMood` → Displays a random shloka with translation
