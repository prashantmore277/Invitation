import { config } from '../../config/siteConfig.js';

let currentLang = config.languages.default;
let langData = {};

// Load Language Data
async function loadLanguage(lang) {
  try {
    const response = await fetch(`lang/${lang}.json`);
    langData = await response.json();
    window.currentLangData = langData; // Ensure accessible globally for embedded scripts
    applyLanguage();
  } catch (error) {
    console.error("Error loading language file:", error);
  }
}

// Apply Language to DOM
function applyLanguage() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (langData[key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = langData[key];
      } else {
        element.textContent = langData[key];
      }
    }
  });
}

// Toggle Language
window.toggleLanguage = function() {
  const currentIndex = config.languages.supported.indexOf(currentLang);
  const nextIndex = (currentIndex + 1) % config.languages.supported.length;
  currentLang = config.languages.supported[nextIndex];

  // Update both mobile and desktop buttons
  const btnDesktop = document.getElementById('langToggleBtnDesktop');
  const btnMobile = document.getElementById('langToggleBtnMobile');
  const newText = currentLang === 'en' ? 'MR' : 'EN';

  if(btnDesktop) btnDesktop.textContent = newText;
  if(btnMobile) btnMobile.textContent = newText;

  loadLanguage(currentLang);
  populateData();
};

// Populate Dynamic Data from Config
function populateData() {
  const separator = currentLang === 'mr' ? ' व ' : ' & ';
  const coupleNames = `${config.groom.name}${separator}${config.bride.name}`;
  document.querySelectorAll('.couple-names').forEach(el => {
    // Only set text if it's not the logo link which we handle below
    if(el.id !== 'nav-brand-link') {
       el.textContent = coupleNames;
    }
  });

  // Logo Setup (Hide text, show only image)
  const navLogo = document.getElementById('nav-logo');
  const navTextLogo = document.getElementById('nav-text-logo');
  if (config.logo) {
    if (navLogo) {
      navLogo.src = config.logo;
      navLogo.classList.remove('d-none');
    }
    if (navTextLogo) navTextLogo.classList.add('d-none');
  }

  // Hero Image
  const heroBgEl = document.querySelector('.hero-bg');
  if (heroBgEl && config.hero && config.hero.bgImage) {
    heroBgEl.style.background = `url('${config.hero.bgImage}') no-repeat center center/cover`;
  }

  // Hero Date
  const heroDateEl = document.getElementById('hero-wedding-date');
  if(heroDateEl) heroDateEl.textContent = currentLang === 'mr' ? "०३ मे २०२६" : "03 May 2026";

  // Couple Section Fixes (Grandparents & Families added properly)
  const groomNameEl = document.getElementById('groom-name');
  if(groomNameEl) groomNameEl.textContent = config.groom.fullName;

  const gRelation = document.getElementById('groom-relation');
  if(gRelation) gRelation.textContent = config.groom.relation;

  const gFather = document.getElementById('groom-father');
  if(gFather) gFather.textContent = config.groom.fatherName;

  const gMother = document.getElementById('groom-mother');
  if(gMother) gMother.textContent = config.groom.motherName;

  const gGrandparents = document.getElementById('groom-grandparents');
  if(gGrandparents) gGrandparents.textContent = config.groom.grandparents;

  const gDesc = document.getElementById('groom-desc');
  if(gDesc) {
    gDesc.innerHTML = `<span class="d-block mb-1 text-dark fw-bold">${config.groom.grandparents}</span>
                       <span class="d-block mb-3">${config.groom.address}</span>
                       <strong class="text-maroon fs-5 bg-white px-3 py-1 rounded-pill shadow-sm border d-inline-block">${config.groom.family}</strong>`;
  }
  const groomImgEl = document.getElementById('groom-photo');
  if(groomImgEl && config.groom.photo) groomImgEl.src = config.groom.photo;

  // Bride Fixes
  const brideNameEl = document.getElementById('bride-name');
  if(brideNameEl) brideNameEl.textContent = config.bride.fullName;

  const bRelation = document.getElementById('bride-relation');
  if(bRelation) bRelation.textContent = config.bride.relation;

  const bFather = document.getElementById('bride-father');
  if(bFather) bFather.textContent = config.bride.fatherName;

  const bMother = document.getElementById('bride-mother');
  if(bMother) bMother.textContent = config.bride.motherName;

  const bGrandparents = document.getElementById('bride-grandparents');
  if(bGrandparents) bGrandparents.textContent = config.bride.grandparents;

  const bDesc = document.getElementById('bride-desc');
  if(bDesc) {
    bDesc.innerHTML = `<span class="d-block mb-1 text-dark fw-bold">${config.bride.grandparents}</span>
                       <span class="d-block mb-3">${config.bride.address}</span>
                       <strong class="text-maroon fs-5 bg-white px-3 py-1 rounded-pill shadow-sm border d-inline-block">${config.bride.family}</strong>`;
  }
  const brideImgEl = document.getElementById('bride-photo');
  if(brideImgEl && config.bride.photo) brideImgEl.src = config.bride.photo;

  // Events
  const wDate = document.getElementById('event-wedding-date');
  if(wDate) wDate.textContent = currentLang === 'mr' ? `रविवार, 03 मे 2026 (${config.wedding.tithi})` : `Sunday, May 03, 2026 (${config.wedding.tithi})`;
  const wTime = document.getElementById('event-wedding-time');
  if(wTime) wTime.textContent = config.wedding.time;
  const wVenue = document.getElementById('event-wedding-venue');
  if(wVenue) wVenue.textContent = config.wedding.venue;
  const wAddress = document.getElementById('event-wedding-address');
  if(wAddress) wAddress.textContent = config.wedding.address;

  const eDate = document.getElementById('event-engagement-date');
  if(eDate) eDate.textContent = currentLang === 'mr' ? "शनिवार, 02 मे 2026" : "Saturday, May 02, 2026";
  const eTime = document.getElementById('event-engagement-time');
  if(eTime) eTime.textContent = config.engagement.time;
  const eVenue = document.getElementById('event-engagement-venue');
  if(eVenue) eVenue.textContent = config.engagement.venue;
  const eAddress = document.getElementById('event-engagement-address');
  if(eAddress) eAddress.textContent = config.engagement.address;

  // Family
  if (config.family) {
    const invGroomEl = document.getElementById('inviting-families-groom');
    if(invGroomEl) invGroomEl.innerHTML = config.family.invitingFamiliesGroom.map(item => `<li>${item}</li>`).join('');

    const invBrideEl = document.getElementById('inviting-families-bride');
    if(invBrideEl) invBrideEl.innerHTML = config.family.invitingFamiliesBride.map(item => `<li>${item}</li>`).join('');

    const mamasEl = document.getElementById('family-mamas');
    if(mamasEl) mamasEl.innerHTML = config.family.mamas.map(item => `<li>${item}</li>`).join('');

    const atyaKakaEl = document.getElementById('family-atyamama-kaka');
    if(atyaKakaEl) {
      let html = `<strong class="text-maroon">आत्या-मामा:</strong><br>` + config.family.atyaMama.map(item => `<li>${item}</li>`).join('');
      html += `<br><strong class="text-maroon">काका:</strong><br>` + config.family.kaka.map(item => `<li>${item}</li>`).join('');
      atyaKakaEl.innerHTML = html;
    }

    const coordWelcomeEl = document.getElementById('family-coordinators-welcome');
    if(coordWelcomeEl) {
      let html = `<strong class="text-maroon">कार्यवाहक:</strong><br>` + config.family.coordinators.map(item => `<li>${item}</li>`).join('');
      html += `<br><strong class="text-maroon">स्वागताध्यक्ष:</strong><br>` + config.family.welcomeTeam.map(item => `<li>${item}</li>`).join('');
      coordWelcomeEl.innerHTML = html;
    }

    const familyNameEl = document.getElementById('family-name');
    if(familyNameEl) familyNameEl.textContent = config.family.familyName;
  }

  // Location Block
  const wvNameContact = document.getElementById('wedding-venue-name-contact');
  if(wvNameContact) wvNameContact.textContent = config.wedding.venue;

  const wvAddrContact = document.getElementById('wedding-venue-address-contact');
  if(wvAddrContact) wvAddrContact.textContent = config.wedding.address;

  const mapLinkBtn = document.getElementById('map-link-btn');
  if(mapLinkBtn && config.wedding.mapLink) mapLinkBtn.href = config.wedding.mapLink;

  // Conditionally hide gallery button if no photos
  const navGalleryItem = document.getElementById('nav-gallery-item');
  if (navGalleryItem && config.gallery) {
      let hasPhotos = false;
      if (Array.isArray(config.gallery)) {
          hasPhotos = config.gallery.some(tab => tab.count > 0);
      }

      if(!hasPhotos) {
          navGalleryItem.classList.add('d-none');
      } else {
          navGalleryItem.classList.remove('d-none');
      }
  }

  // Disable "No" RSVP Option
  const attendNoBtn = document.getElementById('attend-no');
  if (attendNoBtn) {
    attendNoBtn.disabled = true;
    attendNoBtn.style.cursor = "not-allowed";
    const attendNoLabel = document.querySelector('label[for="attend-no"]');
    if(attendNoLabel) attendNoLabel.style.cursor = "not-allowed";

    // Add a quick click listener to the parent card to show an alert when clicking the disabled button area
    const noOptionCard = attendNoBtn.closest('.custom-card');
    if(noOptionCard) {
      noOptionCard.style.opacity = '0.6';
      noOptionCard.addEventListener('click', (e) => {
        if(attendNoBtn.disabled) {
          alert(currentLang === 'mr' ? 'हा पर्याय उपलब्ध नाही! तुम्हाला यावेच लागेल! 😉' : 'This option is disabled! You must attend! 😉');
        }
      });
    }
  }
}

// Countdown Timer
function initCountdown() {
  const countdownEl = document.getElementById('countdown');
  if (!countdownEl) return;

  const weddingDate = new Date(`${config.wedding.date}T12:30:00`).getTime();

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
      clearInterval(timer);
      countdownEl.innerHTML = "<h2 class='text-gold text-shadow px-4 py-2 custom-card d-inline-block' style='font-size: 1.5rem'>शुभविवाह संपन्न! / Just Married!</h2>";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
  }, 1000);
}

// Smooth scroll for nav links
document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        // Handle normal page load if clicking gallery on same nav setup
        if(targetId === 'gallery.html' || !document.querySelector(targetId)) {
          window.location.href = targetId;
          return;
        }

        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });

        // Collapse mobile menu
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if(bsCollapse) bsCollapse.hide();
        }
    });
});

// Preloader & Init
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
      if (typeof AOS !== 'undefined') AOS.init({ duration: 800, once: true, offset: 50 });
    }, 500);
  }
});

document.addEventListener('DOMContentLoaded', async () => {
  // Check if we are on index.html (or root) to run full main.js
  if(document.getElementById('countdown')) {
    await loadLanguage(currentLang);
    populateData();
    initCountdown();

    const btnDesktop = document.getElementById('langToggleBtnDesktop');
    const btnMobile = document.getElementById('langToggleBtnMobile');
    const langText = currentLang === 'en' ? 'MR' : 'EN';

    if(btnDesktop) btnDesktop.textContent = langText;
    if(btnMobile) btnMobile.textContent = langText;
  }
});

// RSVP Validation & Submit
const rsvpForm = document.getElementById('rsvp-form');
if (rsvpForm) {
  rsvpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!rsvpForm.checkValidity()) {
        e.stopPropagation();
    } else {
        // Collect form data
        const formData = new FormData(rsvpForm);
        const name = formData.get('name');

        // Extract WhatsApp number from config
        // Remove spaces, dashes, or any non-digit/plus characters
        const cleanNumber = config.contact.phone.replace(/[^\d+]/g, '');
        // For the WhatsApp API link, the plus sign should typically be omitted, e.g., 919876543210
        const waNumber = cleanNumber.startsWith('+') ? cleanNumber.substring(1) : cleanNumber;

        // Create the pre-filled message text
        const messageVal = document.getElementById('message').value || "Best Wishes!";
        const text = `*RSVP for Wedding* 💍%0A%0A*Name:* ${name}%0A*Attending:* Yes, I will be there!%0A*Message:* ${messageVal}`;

        // WhatsApp direct link with specific phone number
        const whatsappLink = `https://wa.me/${waNumber}?text=${text}`;

        // Open WhatsApp in new tab/app
        window.open(whatsappLink, '_blank');

        // Show simulated success
        setTimeout(() => {
          alert(currentLang === 'mr' ? "तुमचा प्रतिसाद WhatsApp द्वारे पाठवण्यासाठी तयार आहे!" : "Your RSVP is ready to be sent via WhatsApp!");
          rsvpForm.reset();
          rsvpForm.classList.remove('was-validated');
          // clear active chips
          document.querySelectorAll('.msg-suggestion').forEach(el => el.classList.remove('active'));
        }, 500);
        return;
    }
    rsvpForm.classList.add('was-validated');
  }, false);
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar-custom');
  if(nav) {
    if (window.scrollY > 10) {
      nav.style.background = 'rgba(252, 251, 254, 0.9)';
      nav.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
      nav.style.background = 'rgba(252, 251, 254, 0.3)';
      nav.style.boxShadow = 'none';
      nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.6)';
    }
  }
});

// Scroll to Top Button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="bi bi-arrow-up-short"></i>';
scrollTopBtn.className = 'btn btn-gold rounded-circle shadow-lg position-fixed bottom-0 end-0 m-4 d-none';
scrollTopBtn.style.zIndex = '999';
scrollTopBtn.style.width = '50px';
scrollTopBtn.style.height = '50px';
scrollTopBtn.style.fontSize = '24px';
scrollTopBtn.style.display = 'flex';
scrollTopBtn.style.alignItems = 'center';
scrollTopBtn.style.justifyContent = 'center';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.remove('d-none');
    scrollTopBtn.style.opacity = '1';
  } else {
    scrollTopBtn.style.opacity = '0';
    setTimeout(() => {
      if(window.scrollY <= 300) scrollTopBtn.classList.add('d-none');
    }, 300);
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
