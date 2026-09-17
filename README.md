# Astha (আস্থা) - Android Blood Donation App Landing Page
> **রক্তদানে, জীবনের পাশে** (Standing by life through blood donation)

A modern, responsive, high-performance landing page for the **Astha (আস্থা)** Android blood donation app. Built with vanilla HTML5, CSS3, and JavaScript, strictly adhering to relative paths for instant zero-config deployment on **GitHub Pages**.

---

## 🌟 Key Features

- **Hero Showcase**: Features the official Astha logo, slogan, live stats ticker, **Dual Download Buttons** ("সরাসরি APK ডাউনলোড" from GitHub Releases & "Google Play"), and an ultra-sleek 3D-styled smartphone mockup.
- **Direct APK Download**: One-click download from GitHub Releases (`https://github.com/mojnukhan/Astha/releases/latest/download/Astha.apk`).
- **Google Play Integration**: Directly opens the official Google Play Store listing in a new tab.
- **Official App Screens**: Includes 4 genuine app screenshots:
  1. *Smart Dashboard* (জরুরি রক্তের ড্যাশবোর্ড)
  2. *Find Blood Donors* (এলাকা ও রক্তের গ্রুপ নির্বাচন)
  3. *Create Blood Request* (জরুরি রক্তের আবেদন)
  4. *Alerts & Notifications* (জরুরি নোটিফিকেশন)
- **Interactive Screenshot Showcase**: Tabbed viewer with cross-fade transition and feature walkthrough.
- **Interactive Blood Compatibility Matrix**: Click any blood group (A+, A-, B+, B-, AB+, AB-, O+, O-) to see who you can donate to and receive from, with medical tips.
- **3-Step Workflow**: Visual guide explaining *Sign Up*, *Search or Post*, and *Connect & Save*.
- **Interactive FAQ Accordion**: Expandable common questions on donor eligibility, safety, and privacy.
- **Emergency Helplines & Contact Form**: Quick numbers for Bangladesh Red Crescent, Quantum Blood Lab, Sandhani, and National Emergency (999).
- **Google Play Compliant Privacy Policy**: Dedicated `privacy.html` page tailored for medical and emergency applications.
- **GitHub Pages Ready**: 100% relative links (`./...`), lightweight, no node/build step required.

---

## 🚀 How to Deploy on GitHub Pages (২টি ক্লিকে লাইভ করুন)

1. Push this repository to your GitHub account:
   ```bash
   git add .
   git commit -m "Initial Astha landing page"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/Astha.git
   git push -u origin main
   ```
2. On GitHub, go to your repository's **Settings** tab.
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment** > **Branch**:
   - Select `main` branch.
   - Select `/ (root)` folder.
   - Click **Save**.
5. Your website will be live in seconds at:  
   `https://YOUR-USERNAME.github.io/Astha/`

---

## 📁 File Structure

```
.
├── index.html                  # Main landing page
├── privacy.html                # Google Play Privacy Policy page
├── 404.html                    # Error fallback page
├── .nojekyll                   # GitHub Pages configuration
├── css/
│   └── style.css               # Medical dark aesthetic design system
├── js/
│   └── main.js                 # Interactive logic (tabs, matrix, accordion, nav)
└── assets/
    └── images/
        ├── logo.jpg            # Astha official logo
        ├── screen-home.jpg     # Home screen screenshot
        ├── screen-find.jpg     # Find Donors screenshot
        ├── screen-request.jpg  # Blood Request screenshot
        ├── screen-alerts.jpg   # Real-time alerts screenshot
        └── favicon.svg         # Glowing blood-drop SVG favicon
```

---

## 🎨 Tech Stack

- **HTML5**: Semantic tags, OpenGraph metadata, SEO-optimized markup
- **CSS3**: Custom properties, Glassmorphism, CSS Grid, Flexbox, Keyframe animations
- **Vanilla JavaScript**: Zero dependencies, sub-50ms execution
- **Typography**: Google Fonts (*Outfit* & *Hind Siliguri*)
- **Icons**: Handcrafted lightweight SVGs
