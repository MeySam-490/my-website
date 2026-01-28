// ============================================
// NAVBAR & HAMBURGER MENU
// ============================================

document.getElementById("hamburger").addEventListener("click", function () {
  const navLinks = document.getElementById("nav-links");
  const hamburger = document.getElementById("hamburger");

  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");

  const homeButton = document.querySelector(".logo a");
  homeButton.classList.toggle("disabled");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function () {
    document.getElementById("nav-links").classList.remove("active");
    document.getElementById("hamburger").classList.remove("active");
  });
});

window.addEventListener("scroll", function () {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 400) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});


// ============================================
// SERVICES – DATA DRIVEN EXPANDABLE SECTIONS
// ============================================

const servicesDescriptions = {
  "Projekt im Bau – Virtuelle Besichtigung":
    "Dieses Projekt befindet sich derzeit in der Bauphase und kann bereits mit modernster 3D- und Virtual-Reality-Technologie erkundet werden. Erleben Sie die innovative Architektur, die durchdachten Raumkonzepte und die nachhaltigen Energielösungen schon jetzt in einer immersiven virtuellen Umgebung. Starten Sie Ihre virtuelle Besichtigung und entdecken Sie die Zukunft des Wohnens.<br><br><a href=\"https://cloud.chaos.com/collaboration/virtual-tour/SCRvkE4ZwXown8TvapKBTm/present?n=SWQDudCP3hLWFa5VJhAvgh\" target=\"_blank\" class=\"virtual-tour-btn\">Virtuelle Tour starten</a>",

  "Intelligentes Solar- & Energiemanagement":
    "Maßgeschneiderte Solarlösungen mit intelligenter Steuerung zur maximalen Nutzung erneuerbarer Energien, Optimierung des Eigenverbrauchs und nachhaltigen Senkung der Betriebskosten.",

  "Energieeffiziente Heiz- und Kühlsysteme (HVAC)":
    "Moderne Heiz-, Kühl- und Lüftungslösungen für maximalen Wohnkomfort bei minimalem Energieverbrauch.",

  "Gedämmte Bauweise & nachhaltige Architektur":
    "Nachhaltige Architektur mit hochwirksamer Dämmung, natürlichen Materialien und zukunftsorientierten Baukonzepten.",

  "Intelligente Energieverbrauchssteuerung":
    "Smarte Systeme zur Analyse, Steuerung und Optimierung des Energieverbrauchs in Echtzeit."
};

document.querySelectorAll(".grp .arrow").forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    e.stopPropagation();

    const grp = arrow.closest(".grp");
    const title = grp.querySelector(".text").textContent.trim();
    const isExpanded = grp.classList.contains("expanded");

    // Close all
    document.querySelectorAll(".grp.expanded").forEach((openGrp) => {
      openGrp.classList.remove("expanded");
      const rm = openGrp.nextElementSibling;
      if (rm && rm.classList.contains("read-more")) {
        rm.style.maxHeight = "0";
        setTimeout(() => {
          if (rm.parentNode) {
            rm.remove();
          }
        }, 500);
      }
    });

    if (!isExpanded) {
      grp.classList.add("expanded");

      let readMore = grp.nextElementSibling;
      if (!readMore || !readMore.classList.contains("read-more")) {
        readMore = document.createElement("div");
        readMore.className = "read-more";
        readMore.innerHTML = `<p>${servicesDescriptions[title] || ""}</p>`;
        grp.parentNode.insertBefore(readMore, grp.nextElementSibling);
      }

      setTimeout(() => {
        readMore.style.maxHeight = readMore.scrollHeight + "px";
      }, 10);
    }
  });
});


// ============================================
// PROJECTS / GALLERY DATA
// ============================================

const projectsData = [
  {
    id: 1,
    name: "Luxusvilla",
    image: "Assets/Luxusvilla01.jpg",
    year: "2025",
    area: "1000 m²",
    location: "Sasel, Hamburg, Deutschland",
    features: ["Geborgenheit", "Minimalistisch", "Energieeffizient", "Solarenergie"]
  },
  {
    id: 2,
    name: "Mehrfamilienhaus",
    image: "Assets/Mehrfamilienhaus01.jpg",
    year: "2026",
    area: "996 m²",
    location: "Niendorf, Hamburg, Deutschland",
    features: ["Zeitloses Design", "Moderne Architektur", "Solarenergie"]
  },
  {
    id: 3,
    name: "Doppelhaus",
    image: "Assets/Doppelhaus01.jpg",
    year: "2025",
    area: "300 m²",
    location: "Poppenbüttel, Hamburg, Deutschland",
    features: ["Zeitloses Design", "Moderne Architektur", "Solarenergie"]
  },
  {
    id: 4,
    name: "Einzelhaus",
    image: "Assets/Einzelhaus01.jpg",
    year: "2025",
    area: "400 m²",
    location: "Poppenbüttel, Hamburg, Deutschland",
    features: ["Zeitloses Design", "Moderne Architektur", "Solarenergie"]
  },
  {
    id: 5,
    name: "Luxusvilla",
    image: "Assets/Luxusvilla02.jpg",
    year: "2025",
    area: "1000 m²",
    location: "Sasel, Hamburg, Deutschland",
    features: ["Geborgenheit", "Minimalistisch", "Energieeffizient", "Solarenergie"]
  },
  {
    id: 6,
    name: "Mehrfamilienhaus",
    image: "Assets/Mehrfamilienhaus02.jpg",
    year: "2026",
    area: "996 m²",
    location: "Niendorf, Hamburg, Deutschland",
    features: ["Zeitloses Design", "Moderne Architektur", "Solarenergie"]
  },
  {
    id: 7,
    name: "Mehrfamilienhaus",
    image: "Assets/Mehrfamilienhaus03.jpg",
    year: "2026",
    area: "996 m²",
    location: "Niendorf, Hamburg, Deutschland",
    features: ["Zeitloses Design", "Moderne Architektur", "Solarenergie"]
  },
  {
    id: 8,
    name: "Einzelhaus",
    image: "Assets/Einzelhaus02.jpg",
    year: "2025",
    area: "400 m²",
    location: "Poppenbüttel, Hamburg, Deutschland",
    features: ["Zeitloses Design", "Moderne Architektur", "Solarenergie"]
  },
  {
    id: 9,
    name: "Luxusvilla",
    image: "Assets/Luxusvilla03.jpg",
    year: "2025",
    area: "1000 m²",
    location: "Sasel, Hamburg, Deutschland",
    features: ["Geborgenheit", "Minimalistisch", "Energieeffizient", "Solarenergie"]
  },
  {
    id: 10,
    name: "Luxusvilla",
    image: "Assets/Luxusvilla04.jpg",
    year: "2025",
    area: "1000 m²",
    location: "Sasel, Hamburg, Deutschland",
    features: ["Geborgenheit", "Minimalistisch", "Energieeffizient", "Solarenergie"]
  },
  {
    id: 11,
    name: "Mehrfamilienhaus",
    image: "Assets/Mehrfamilienhaus04.jpg",
    year: "2026",
    area: "996 m²",
    location: "Niendorf, Hamburg, Deutschland",
    features: ["Zeitloses Design", "Moderne Architektur", "Solarenergie"]
  },
  {
    id: 12,
    name: "Einzelhaus und Doppelhaus",
    image: "Assets/Einzelhaus und Doppelhaus01.jpg",
    year: "2025",
    area: "110–130 m²",
    location: "Poppenbüttel, Hamburg, Deutschland",
    features: ["Zeitloses Design", "Moderne Architektur", "Solarenergie"]
  },
  {
    id: 13,
    name: "Einzelhaus und Doppelhaus",
    image: "Assets/Einzelhaus und Doppelhaus02.jpg",
    year: "2025",
    area: "110–130 m²",
    location: "Poppenbüttel, Hamburg, Deutschland",
    features: ["Zeitloses Design", "Moderne Architektur", "Solarenergie"]
  },
  {
    id: 14,
    name: "Luxusvilla",
    image: "Assets/Luxusvilla05.jpg",
    year: "2025",
    area: "1000 m²",
    location: "Sasel, Hamburg, Deutschland",
    features: ["Geborgenheit", "Minimalistisch", "Energieeffizient", "Solarenergie"]
  },
  {
    id: 15,
    name: "Mehrfamilienhaus",
    image: "Assets/Mehrfamilienhaus05.jpg",
    year: "2026",
    area: "1000 m²",
    location: "Niendorf, Hamburg, Deutschland",
    features: ["Zeitloses Design", "Moderne Architektur", "Solarenergie"]
  },
  {
    id: 16,
    name: "Luxusvilla",
    image: "Assets/Luxusvilla06.jpg",
    year: "2025",
    area: "1000 m²",
    location: "Sasel, Hamburg, Deutschland",
    features: ["Geborgenheit", "Minimalistisch", "Energieeffizient", "Solarenergie"]
  },
  {
    id: 17,
    name: "Luxusvilla",
    image: "Assets/Luxusvilla07.jpg",
    year: "2025",
    area: "1000 m²",
    location: "Sasel, Hamburg, Deutschland",
    features: ["Geborgenheit", "Minimalistisch", "Energieeffizient", "Solarenergie"]
  },
  {
    id: 18,
    name: "Luxusvilla",
    image: "Assets/Luxusvilla08.jpg",
    year: "2025",
    area: "1000 m²",
    location: "Sasel, Hamburg, Deutschland",
    features: ["Geborgenheit", "Minimalistisch", "Energieeffizient", "Solarenergie"]
  },
  {
    id: 19,
    name: "Luxusvilla",
    image: "Assets/Luxusvilla09.jpg",
    year: "2025",
    area: "1000 m²",
    location: "Sasel, Hamburg, Deutschland",
    features: ["Geborgenheit", "Minimalistisch", "Energieeffizient", "Solarenergie"]
  },
  {
    id: 20,
    name: "Luxusvilla",
    image: "Assets/Luxusvilla10.jpg",
    year: "2025",
    area: "1000 m²",
    location: "Sasel, Hamburg, Deutschland",
    features: ["Geborgenheit", "Minimalistisch", "Energieeffizient", "Solarenergie"]
  },
  {
    id: 21,
    name: "Luxusvilla",
    image: "Assets/Luxusvilla11.jpeg",
    year: "2025",
    area: "1000 m²",
    location: "Sasel, Hamburg, Deutschland",
    features: ["Geborgenheit", "Minimalistisch", "Energieeffizient", "Solarenergie"]
  }
];


// ============================================
// GALLERY LOGIC (UNCHANGED)
// ============================================

let currentProjectIndex = 0;
let displayedProjectsCount = 0;

const INITIAL_PROJECTS_DESKTOP = 6;
const INITIAL_PROJECTS_MOBILE = 4;
const PROJECTS_PER_LOAD = 6;

const galleryGrid = document.getElementById("galleryGrid");
const thumbnailGallery = document.getElementById("thumbnailGallery");
const lightboxModal = document.getElementById("lightboxModal");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxDetails = document.getElementById("lightboxDetails");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");
const loadMoreBtn = document.getElementById("loadMoreBtn");

function getInitialProjectsCount() {
  return window.innerWidth <= 768
    ? INITIAL_PROJECTS_MOBILE
    : INITIAL_PROJECTS_DESKTOP;
}

function renderThumbnailGallery() {
  thumbnailGallery.innerHTML = "";
  projectsData.forEach((project, index) => {
    const div = document.createElement("div");
    div.className = "thumbnail-item";
    div.innerHTML = `<img src="${project.image}" alt="${project.name}">`;
    div.addEventListener("click", () => openLightbox(index));
    thumbnailGallery.appendChild(div);
  });
}

function renderGallery(showAll = false) {
  galleryGrid.innerHTML = "";

  const initial = getInitialProjectsCount();
  displayedProjectsCount = showAll
    ? displayedProjectsCount
    : initial;

  projectsData.slice(0, displayedProjectsCount).forEach((project, index) => {
    const item = document.createElement("div");
    item.className = "project-item";
    item.innerHTML = `
      <p class="top">${project.name}</p>
      <img src="${project.image}" alt="${project.name}">
    `;
    item.addEventListener("click", () => openLightbox(index));
    galleryGrid.appendChild(item);
  });

  updateLoadMoreButton();
}

function updateLoadMoreButton() {
  if (displayedProjectsCount >= projectsData.length) {
    loadMoreBtn.style.display = "none";
  } else {
    loadMoreBtn.style.display = "flex";
  }
}

function loadMoreProjects() {
  displayedProjectsCount = Math.min(
    displayedProjectsCount + PROJECTS_PER_LOAD,
    projectsData.length
  );
  renderGallery(true);
}

function formatProjectDetails(project) {
  const features = project.features
    .map((f) => `<span class="feature-tag">${f}</span>`)
    .join("");

  return `
    <div class="detail-row"><span class="detail-label">Jahr:</span><span class="detail-value">${project.year}</span></div>
    <div class="detail-row"><span class="detail-label">Fläche:</span><span class="detail-value">${project.area}</span></div>
    <div class="detail-row"><span class="detail-label">Standort:</span><span class="detail-value">${project.location}</span></div>
    <div class="detail-row features-row"><div class="features-list">${features}</div></div>
  `;
}

function openLightbox(index) {
  currentProjectIndex = index;
  const project = projectsData[index];

  lightboxImage.src = project.image;
  lightboxTitle.textContent = project.name;
  lightboxDetails.innerHTML = formatProjectDetails(project);

  lightboxModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightboxModal.classList.remove("active");
  document.body.style.overflow = "";
}

lightboxClose.addEventListener("click", closeLightbox);
lightboxPrev.addEventListener("click", () => navigate(-1));
lightboxNext.addEventListener("click", () => navigate(1));

function navigate(dir) {
  currentProjectIndex =
    (currentProjectIndex + dir + projectsData.length) %
    projectsData.length;
  openLightbox(currentProjectIndex);
}

// Keyboard Navigation for Lightbox
document.addEventListener("keydown", (e) => {
  if (!lightboxModal.classList.contains("active")) return;
  
  if (e.key === "ArrowLeft") {
    navigate(-1);
  } else if (e.key === "ArrowRight") {
    navigate(1);
  } else if (e.key === "Escape") {
    closeLightbox();
  }
});

loadMoreBtn.addEventListener("click", loadMoreProjects);

renderThumbnailGallery();
renderGallery();
