// Fonction pour afficher le contenu spécifique et souligner le lien actif
function showContent(sectionId) {
    // Masquer tous les contenus
    const sections = document.querySelectorAll('.container');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Afficher le contenu spécifique correspondant au bouton cliqué
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    // Définir le lien actif et le souligner
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    const activeLink = document.getElementById(sectionId + '-link');
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Affichage de la page d'accueil au chargement initial
window.addEventListener('load', function() {
    showContent('accueil');
});



// Écouteurs d'événements pour les liens de navigation
document.getElementById('accueil-link').addEventListener('click', function(event) {
    event.preventDefault();
    showContent('accueil');
});

document.getElementById('a-propos-link').addEventListener('click', function(event) {
    event.preventDefault();
    showContent('a-propos');
});

document.getElementById('experience-link').addEventListener('click', function(event) {
    event.preventDefault();
    showContent('experience');
});

document.getElementById('mobilite-link').addEventListener('click', function(event) {
    event.preventDefault();
    showContent('mobilite');
});

document.getElementById('CV-link').addEventListener('click', function(event) {
    event.preventDefault();
    showContent('cv');
});
