/**
 * Astha (আস্থা) - Modern Android Blood Donation App Landing Page
 * Vanilla JavaScript interactions: Screenshot switcher, blood matrix, FAQ, mobile nav, contact toast
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScreenshotShowcase();
  initBloodMatrix();
  initFaqAccordion();
  initContactForm();
  initSmoothScroll();
});

/* ==========================================================================
   1. Navbar Scroll Effect & Mobile Drawer
   ========================================================================== */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  // Sticky background on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggle.classList.toggle('active');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close mobile menu on link click
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
}

/* ==========================================================================
   2. Interactive Screenshot Showcase
   ========================================================================== */
const screenshotData = {
  home: {
    title: 'স্মার্ট হোম ড্যাশবোর্ড (Smart Dashboard)',
    badge: 'হোম স্ক্রিন • 01',
    image: './assets/images/screen-home.jpg',
    alt: 'Astha App Home Screen Dashboard',
    desc: 'অ্যাপ খুললেই ব্যবহারকারী দেখতে পান জরুরি রক্তের আবেদন, রক্তের গ্রুপ অনুসারে তাত্ক্ষণিক ফিল্টারিং এবং আশেপাশের রক্তদাতাদের তালিকা।',
    bullets: [
      { title: 'জরুরি রক্তের নোটিশ', text: 'ক্রিটিক্যাল রোগীদের জন্য এক ট্যাপেই জরুরি রক্তের আবেদন কার্ড দেখা যায়।' },
      { title: 'রক্তের গ্রুপভিত্তিক দ্রুত সন্ধান', text: 'A+, B+, AB+, O+ সহ সকল গ্রুপের রক্তদাতাদের তাৎক্ষণিক তালিকা।' },
      { title: 'নিকটস্থ সক্রিয় রক্তদাতা', text: 'আপনার এলাকার আশেপাশে কোন রক্তদাতা প্রস্তুত আছেন তা সরাসরি দেখানো হয়।' }
    ]
  },
  find: {
    title: 'এলাকা ও রক্তের গ্রুপ নির্বাচন (Find Donors)',
    badge: 'রক্তদাতা অনুসন্ধান • 02',
    image: './assets/images/screen-find.jpg',
    alt: 'Astha Find Blood Donors Screen',
    desc: 'বিভাগ, জেলা এবং থানা/উপজেলা ভিত্তিক নিখুঁত ফিল্টার সিস্টেমের মাধ্যমে সেকেন্ডের মধ্যে আপনার এলাকার সক্রিয় রক্তদাতাকে খুঁজে বের করুন।',
    bullets: [
      { title: 'মাল্টি-লেয়ার ফিল্টারিং', text: 'বিভাগ > জেলা > উপজেলা/থানা অনুযায়ী সুনির্দিষ্ট ফিল্টারিং সুবিধা।' },
      { title: 'উপলব্ধতার স্ট্যাটাস', text: '"Available to Donate" স্ট্যাটাস নিশ্চিত করে দাতা বর্তমানে রক্ত দিতে সক্ষম কি না।' },
      { title: 'সরাসরি যোগাযোগ', text: 'অনাবশ্যক বিলম্ব এড়াতে সরাসরি যাচাইকৃত রক্তদাতার সাথে যোগাযোগের সুযোগ।' }
    ]
  },
  request: {
    title: 'জরুরি রক্তের আবেদন (Create Blood Request)',
    badge: 'জরুরি আবেদন • 03',
    image: './assets/images/screen-request.jpg',
    alt: 'Astha Create Blood Request Screen',
    desc: 'যেকোনো রোগীর জন্য জরুরি রক্তের প্রয়োজন হলে মুহূর্তের মধ্যে বিস্তারিত তথ্য দিয়ে রিকোয়েস্ট তৈরি করুন এবং নিকটস্থ রক্তদাতাদের অ্যালার্ট পাঠান।',
    bullets: [
      { title: 'জরুরিতার মাত্রা নির্ধারণ', text: 'Normal, Urgent ও Critical — জরুরিতা অনুযায়ী আলাদা অগ্রাধিকার।' },
      { title: 'ব্যাগের সংখ্যা ও হাসপাতাল তথ্য', text: 'রোগীর নাম, হাসপাতালের ঠিকানা ও প্রয়োজনীয় ব্যাগের সুনির্দিষ্ট বিবরণ।' },
      { title: 'তাত্ক্ষণিক পুশ ব্রডকাস্ট', text: 'এক ক্লিকে আশেপাশের রক্তের গ্রুপ ম্যাচ হওয়া সকল ডোনারদের সতর্কবার্তা পৌঁছে যায়।' }
    ]
  },
  alerts: {
    title: 'জরুরি নোটিফিকেশন (Real-time Alerts)',
    badge: 'নোটিফিকেশন ফিড • 04',
    image: './assets/images/screen-alerts.jpg',
    alt: 'Astha Real-time Emergency Alerts Screen',
    desc: 'আপনার রক্তের গ্রুপের সাথে মিলে যায় এমন কোনো জরুরি আবেদন পোস্ট হওয়া মাত্রই ইনস্ট্যান্ট নোটিফিকেশন ও অ্যালার্ট ফিডে আপডেট পাবেন।',
    bullets: [
      { title: 'জরুরি রক্তের লাল সংকেত', text: 'রোগীর বিস্তারিত এবং হাসপাতালের সরাসরি ঠিকানা সম্বলিত লাল রঙের জরুরি অ্যালার্ট।' },
      { title: 'টাইমস্ট্যাম্প ও লোকেশন', text: 'কত সময় আগে আবেদনটি তৈরি হয়েছে এবং রোগীর অবস্থান সুনির্দিষ্টভাবে উল্লেখিত।' },
      { title: 'মেডিকেল গাইডলাইন নোট', text: 'রক্তদান ও নিরাপত্তা সংক্রান্ত বিশেষজ্ঞ পরামর্শ ও স্বাস্থ্য সতর্কতা প্রদর্শন।' }
    ]
  }
};

function initScreenshotShowcase() {
  const tabs = document.querySelectorAll('.screenshot-tab');
  const thumbs = document.querySelectorAll('.gallery-thumbnail');
  const showcaseImg = document.getElementById('showcaseImg');
  const showcaseBadge = document.getElementById('showcaseBadge');
  const showcaseTitle = document.getElementById('showcaseTitle');
  const showcaseDesc = document.getElementById('showcaseDesc');
  const showcaseBullets = document.getElementById('showcaseBullets');

  if (!showcaseImg) return;

  function setScreen(screenKey) {
    const data = screenshotData[screenKey];
    if (!data) return;

    // Update tabs
    tabs.forEach(t => t.classList.toggle('active', t.dataset.screen === screenKey));
    thumbs.forEach(th => th.classList.toggle('active', th.dataset.screen === screenKey));

    // Smooth image cross-fade
    showcaseImg.style.opacity = '0.3';
    showcaseImg.style.transform = 'scale(0.98)';
    
    setTimeout(() => {
      showcaseImg.src = data.image;
      showcaseImg.alt = data.alt;
      showcaseImg.style.opacity = '1';
      showcaseImg.style.transform = 'scale(1)';
    }, 150);

    // Update text content
    if (showcaseBadge) showcaseBadge.textContent = data.badge;
    if (showcaseTitle) showcaseTitle.textContent = data.title;
    if (showcaseDesc) showcaseDesc.textContent = data.desc;

    if (showcaseBullets) {
      showcaseBullets.innerHTML = data.bullets.map(b => `
        <li class="showcase-bullet">
          <div class="bullet-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <div class="bullet-text">
            <strong>${b.title}</strong>
            <span>${b.text}</span>
          </div>
        </li>
      `).join('');
    }
  }

  // Click on top tabs
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      setScreen(tab.dataset.screen);
    });
  });

  // Click on bottom thumbnails
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      setScreen(thumb.dataset.screen);
    });
  });
}

/* ==========================================================================
   3. Interactive Blood Compatibility Matrix
   ========================================================================== */
const compatibilityData = {
  'O-': {
    give: ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'],
    receive: ['O-'],
    fact: 'O- হলো সার্বজনীন রক্তদাতা (Universal Donor)। যেকোনো গ্রুপের মানুষ ও নেগেটিভ রক্ত গ্রহণ করতে পারেন।'
  },
  'O+': {
    give: ['O+', 'A+', 'B+', 'AB+'],
    receive: ['O+', 'O-'],
    fact: 'O+ হলো সবচেয়ে সাধারণ এবং ব্যাপকভাবে প্রয়োজনীয় রক্তের গ্রুপগুলোর একটি।'
  },
  'A-': {
    give: ['A-', 'A+', 'AB-', 'AB+'],
    receive: ['A-', 'O-'],
    fact: 'A- গ্রুপের ব্যক্তিরা A এবং AB উভয় গ্রুপেরই নেগেটিভ ও পজিটিভ রোগীদের রক্ত দিতে পারেন।'
  },
  'A+': {
    give: ['A+', 'AB+'],
    receive: ['A+', 'A-', 'O+', 'O-'],
    fact: 'A+ রক্তদানকারীরা A+ এবং AB+ রোগীদের জীবন বাঁচাতে কার্যকর ভূমিকা পালন করেন।'
  },
  'B-': {
    give: ['B-', 'B+', 'AB-', 'AB+'],
    receive: ['B-', 'O-'],
    fact: 'B- রক্ত একটি দুর্লভ গ্রুপ। আপনার এক ফোঁটা রক্ত বিপদে থাকা রোগীর একমাত্র ভরসা হতে পারে।'
  },
  'B+': {
    give: ['B+', 'AB+'],
    receive: ['B+', 'B-', 'O+', 'O-'],
    fact: 'বাংলাদেশে B+ রক্তগ্রুপের বহুসংখ্যক মানুষ রয়েছেন এবং হাসপাতালে এর চাহিদা সর্বদা সর্বাধিক।'
  },
  'AB-': {
    give: ['AB-', 'AB+'],
    receive: ['AB-', 'A-', 'B-', 'O-'],
    fact: 'AB- অত্যন্ত বিরল রক্তের গ্রুপ। যেকোনো নেগেটিভ গ্রুপ থেকে এই গ্রুপের ব্যক্তিরা রক্ত নিতে পারেন।'
  },
  'AB+': {
    give: ['AB+'],
    receive: ['AB+', 'AB-', 'A+', 'A-', 'B+', 'B-', 'O+', 'O-'],
    fact: 'AB+ হলো সার্বজনীন রক্তগ্রহীতা (Universal Recipient)। এই গ্রুপের রোগীরা যেকোনো রক্তের গ্রুপ গ্রহণ করতে পারেন।'
  }
};

const allGroups = ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'];

function initBloodMatrix() {
  const bloodButtons = document.querySelectorAll('.blood-btn');
  const givePillsContainer = document.getElementById('compatGiveList');
  const receivePillsContainer = document.getElementById('compatReceiveList');
  const factContainer = document.getElementById('bloodFactText');

  if (!givePillsContainer || !receivePillsContainer) return;

  function renderCompatibility(selectedGroup) {
    const data = compatibilityData[selectedGroup];
    if (!data) return;

    // Render "Can Give To"
    givePillsContainer.innerHTML = allGroups.map(grp => {
      const isMatch = data.give.includes(grp);
      return `<div class="compat-pill ${isMatch ? 'match-give' : ''}">${grp}</div>`;
    }).join('');

    // Render "Can Receive From"
    receivePillsContainer.innerHTML = allGroups.map(grp => {
      const isMatch = data.receive.includes(grp);
      return `<div class="compat-pill ${isMatch ? 'match-receive' : ''}">${grp}</div>`;
    }).join('');

    // Render Medical Fact
    if (factContainer) {
      factContainer.textContent = data.fact;
    }
  }

  bloodButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      bloodButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCompatibility(btn.dataset.group);
    });
  });

  // Initialize with B+ as default (active in app screenshot!)
  renderCompatibility('B+');
}

/* ==========================================================================
   4. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close all other accordions
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove('active');
      });

      // Toggle current
      item.classList.toggle('active', !isOpen);
    });
  });
}

/* ==========================================================================
   5. Contact Form Submission
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const toast = document.getElementById('toastMsg');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName')?.value.trim();
    const email = document.getElementById('contactEmail')?.value.trim();
    const message = document.getElementById('contactMessage')?.value.trim();

    if (!name || !email || !message) {
      alert('দয়া করে সব প্রয়োজনীয় তথ্য পূরণ করুন। (Please fill in all required fields.)');
      return;
    }

    // Show simulated toast notification
    if (toast) {
      toast.classList.add('show');
      form.reset();
      setTimeout(() => {
        toast.classList.remove('show');
      }, 4500);
    }
  });
}

/* ==========================================================================
   6. Smooth Scrolling for Anchor Links
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
