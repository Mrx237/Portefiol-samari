// Menu mobile
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  if (navbar.style.display === "flex") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "flex";
    navbar.style.flexDirection = "column";
    navbar.style.position = "absolute";
    navbar.style.top = "60px";
    navbar.style.right = "20px";
    navbar.style.background = "#fff";
    navbar.style.padding = "15px";
    navbar.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
  }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Charger les projets depuis catalogue.json
fetch("catalogue.json")
  .then(response => response.json())
  .then(data => {
    const projectsContainer = document.getElementById("projects");
    
    data.forEach(project => {
      const card = document.createElement("div");
      card.classList.add("project-card");
      
      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      `;
      
      projectsContainer.appendChild(card);
    });
  })
  .catch(error => console.error("Erreur de chargement du catalogue :", error));