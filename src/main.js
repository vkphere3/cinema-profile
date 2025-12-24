import './style.css'

// Data for Selected Works
const works = [
  {
    title: "The Passenger",
    role: "Screenwriter/Director",
    image: "/assets/the-passenger.jpg",
    tags: ["Film", "Fiction", "2023"],
    award: "Award Winner",
    link: "https://youtu.be/z920EHT4b60?si=28EeudXuT4WfGKGW"
  },
  {
    title: "The Khalbali Records",
    role: "Director's Assistant",
    image: "/assets/khalbali-records.jpg",
    tags: ["OTT Series", "JioCinema"], // Added JioCinema for context
    award: "Now Streaming",
    link: "https://www.sonyliv.com"
  },
  {
    title: "Saved by the bell",
    role: "Screenwriter/Director",
    image: "/assets/saved-by-the-bell.jpg",
    tags: ["Film", "IFP 50h Challenge"],
    award: "Award Winner",
    link: "https://youtu.be/CGNMDnrNrJU?si=k_jFlK3gVn7xZh6m"
  },
  {
    title: "Prachchhann",
    role: "Screenwriter/Director",
    image: "/assets/prachchhann.jpg",
    tags: ["Film"],
    award: null,
    link: "https://youtu.be/QyYJ2eQmFCk?si=9JpumR2bxtwzATDa"
  }
];

// Inject Works
const worksGrid = document.getElementById('works-grid');

works.forEach(work => {
  const card = document.createElement('a'); // Changed div to a for link
  card.href = work.link;
  card.target = "_blank"; // Open in new tab
  card.rel = "noopener noreferrer";
  card.className = 'work-card';

  card.innerHTML = `
    <div class="card-image-container">
      <img src="${work.image}" alt="${work.title} Poster">
      <div class="card-overlay">
        <div class="card-text">
            <h3>${work.title}</h3>
            <p class="role">${work.role}</p>
        </div>
        <div class="card-meta">
            <div class="tags">
                ${work.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            ${work.award ? `<span class="award-badge">🏆 ${work.award}</span>` : ''}
        </div>
      </div>
    </div>
  `;
  worksGrid.appendChild(card);
});

// Set Backgrounds
document.getElementById('hero-bg-target').style.backgroundImage = "url('/assets/hero-bg.png')";
const aboutImgTarget = document.getElementById('about-img-target');
const img = document.createElement('img');
img.src = '/assets/profile.png';
img.alt = 'Vikash Kumar';
aboutImgTarget.appendChild(img);


// Intersection Observer for Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in, .fade-in-delay, .fade-in-delay-2, .fade-in-scroll').forEach(el => {
  observer.observe(el);
});
