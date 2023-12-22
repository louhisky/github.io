(function () {
    const controls = document.querySelectorAll(".control");

    controls.forEach(button => {
        button.addEventListener("click", function() {
            // Supprimer la classe "active-btn" de tous les boutons
            document.querySelectorAll(".active-btn").forEach(btn => btn.classList.remove("active-btn"));

            // Supprimer la classe "active-page" de tous les textes de boutons
            document.querySelectorAll(".btn-text").forEach(text => text.classList.remove("active-page"));

            // Ajouter la classe "active-btn" au bouton actuellement cliqué
            this.classList.add("active-btn");

            // Ajouter la classe "active-page" au texte du bouton actuellement cliqué
            this.querySelector('.btn-text').classList.add("active-page");

            // Retirer la classe "active" de tous les éléments associés aux boutons
            document.querySelectorAll(".active").forEach(active => active.classList.remove("active"));

            // Ajouter la classe "active" à l'élément associé au bouton cliqué
            document.getElementById(button.dataset.id).classList.add("active");
        });

        // Vérifier si le bouton est déjà actif au chargement de la page
        if (button.classList.contains("active-btn")) {
            const associatedContent = document.getElementById(button.dataset.id);
            if (associatedContent) {
                associatedContent.classList.add("active");
                button.querySelector('.btn-text').classList.add("active-page");
            }
        }
    });

    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
})();
