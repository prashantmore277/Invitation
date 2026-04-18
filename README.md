# Royal Wedding Invitation Website

A modern, responsive, configuration-driven wedding invitation website template built with Vanilla HTML5, CSS3, JavaScript, and Bootstrap 5.

## Features

- **Configuration-Driven:** Update the entire site content (names, dates, venues) just by editing `config/siteConfig.js`. No need to touch HTML files!
- **One-Page Layout:** The main navigation smoothly scrolls to different sections on the `index.html` page.
- **Dedicated Gallery Page:** The `gallery.html` remains separate to allow for heavy image loading without impacting the main page performance.
- **Glassmorphism UI:** Modern transparent UI components with smooth edges.
- **Multi-language Support:** Easily toggle between English and Marathi (or add your own languages).
- **Animations:** Smooth scrolling and entry effects powered by AOS.
- **Gallery:** Lightbox support using Fancybox for Engagement and Pre-wedding photos.
- **RSVP Form:** Built-in RSVP form layout ready to be connected to EmailJS or any backend.
- **Vercel Ready:** Deploys instantly to Vercel as a static site.

## Folder Structure

```
Invitation/
├── index.html           # Main One-Page layout (Home, Couple, Events, Family, Location, RSVP)
├── gallery.html         # Dedicated separate Photo gallery with Lightbox
├── config/
│   └── siteConfig.js    # ⚙️ CENTRAL CONFIGURATION FILE
├── lang/
│   ├── en.json          # English translations
│   └── mr.json          # Marathi translations
├── assets/
│   ├── css/
│   │   └── styles.css   # Custom Glassmorphism styling
│   ├── js/
│   │   └── main.js      # Core logic
│   ├── images/          # Store your local images here
│   └── fonts/
├── components/          # Note: No longer heavily relied on to avoid CORS locally, nav/footer are inline.
├── vercel.json          # Vercel deployment configuration
└── README.md
```

## How to Update for a New Wedding

1. Open `config/siteConfig.js`.
2. Update the objects for `groom`, `bride`, `wedding`, `engagement`, and `contact`.
3. The changes will automatically reflect across the HTML pages!
4. **Images:** Replace placeholder images in `assets/images` or update the image URLs directly in the `index.html` and `gallery.html` files.

## How to Run Locally

You need a local server because the site uses the Fetch API for languages (`lang/en.json`).

**Option 1: VS Code Live Server Extension (Recommended)**
1. Open the project folder in VS Code.
2. Install the "Live Server" extension.
3. Right-click `index.html` and select "Open with Live Server".

**Option 2: Python HTTP Server**
1. Open a terminal in the project folder.
2. Run: `python -m http.server 8000`
3. Open `http://localhost:8000` in your browser.

**Option 3: Node.js (http-server)**
1. Open a terminal in the project folder.
2. Run: `npx http-server`
3. Open the provided local URL in your browser.

## Deployment on Vercel

Since this is a static site without a backend, Vercel deployment is extremely straightforward.

1. Create a free account on [Vercel](https://vercel.com/).
2. Push this project to a GitHub, GitLab, or Bitbucket repository.
3. In Vercel, click "Add New..." -> "Project".
4. Import your repository.
5. Leave all build settings as default (Framework Preset: Other).
6. Click **Deploy**.
7. Vercel will provide you with a live URL in seconds!

## Technologies Used

- HTML5 / CSS3 / Vanilla JavaScript (ES6 Modules)
- Bootstrap 5
- AOS (Animate on Scroll)
- Fancybox (Gallery Lightbox)