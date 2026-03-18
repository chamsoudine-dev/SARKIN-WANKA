document.addEventListener('DOMContentLoaded', () => {
    // Configuration
    const whatsappNumber = "22792622764";

    // Liste complète des images
    // Générée automatiquement basée sur les fichiers présents
    const rawImages = [
        // Femmes / Robes
        { src: 'TYPE 4.jpg', cat: 'Mode' },{ src: 'TYPE10.jpg', cat: 'Mode' }, { src: 'TYPE 11.jpg', cat: 'Mode' },

        // Types / Modèles
        { src: 'TYPE 1.jpg', cat: 'Mode' }, { src: 'TYPE 2.jpg', cat: 'Mode' }, { src: 'TYPE 3.jpg', cat: 'Mode' },
        { src: 'TYPE 4.jpg', cat: 'Mode' }, { src: 'TYPE 5.jpg', cat: 'Mode' }, { src: 'TYPE 6.jpg', cat: 'Mode' },
        { src: 'TYPE 7.jpg', cat: 'Mode' }, { src: 'TYPE8.jpg', cat: 'Mode' }, { src: 'TYPE 9.jpg', cat: 'Mode' },
        { src: 'TYPE10.jpg', cat: 'Mode' }, { src: 'TYPE 11.jpg', cat: 'Mode' },

        { src: 'MODEL 1.jpg', cat: 'Luxe' }, { src: 'MODEL 2.jpg', cat: 'Luxe' }, { src: 'MODEL 3.jpg', cat: 'Luxe' },
        { src: 'MODEL 4.jpg', cat: 'Luxe' }, { src: 'MODEL 5.jpg', cat: 'Luxe' },

        // Hommes (HOM & HOMME)
        { src: 'HOM 1.jpg', cat: 'Homme' }, { src: 'HOM 2.jpg', cat: 'Homme' }, { src: 'HOM 3.jpg', cat: 'Homme' },
        { src: 'HOM 4.jpg', cat: 'Homme' }, { src: 'HOM 5.jpg', cat: 'Homme' }, { src: 'HOM 6.jpg', cat: 'Homme' },
        { src: 'HOM 7.jpg', cat: 'Homme' }, { src: 'HOM 8.jpg', cat: 'Homme' }, { src: 'HOM 9.jpg', cat: 'Homme' },
        { src: 'HOM 10.jpg', cat: 'Homme' }, { src: 'HOM 11.jpg', cat: 'Homme' }, { src: 'HOM 12.jpg', cat: 'Homme' },
        { src: 'HOM 13.jpg', cat: 'Homme' }, { src: 'HOM 24.jpg', cat: 'Homme' }, { src: 'HOM 15.jpg', cat: 'Homme' },
        { src: 'HOM 16.jpg', cat: 'Homme' }, { src: 'HOM 17.jpg', cat: 'Homme' }, { src: 'HOM 18.jpg', cat: 'Homme' },
        { src: 'HOM 19.jpg', cat: 'Homme' }, { src: 'HOM 24.2.jpg', cat: 'Homme' }, { src: 'HOM 21.jpg', cat: 'Homme' },
        { src: 'HOM 22.jpg', cat: 'Homme' }, { src: 'HOM 23.jpg', cat: 'Homme' }, { src: 'HOM 24.jpg', cat: 'Homme' },
        { src: 'HOM 24.1.jpg', cat: 'Homme' }, { src: 'HOM 20.jpg', cat: 'Homme' }, { src: 'HOM 25.jpg', cat: 'Homme' },
        { src: 'HOM 26.jpg', cat: 'Homme' }, { src: 'HOM 27.jpg', cat: 'Homme' }, { src: 'HOM 28.jpg', cat: 'Homme' },
        { src: 'HOM 29.jpg', cat: 'Homme' },

        { src: 'TISSU POUR HOMME 19.jpg', cat: 'Mode' }, { src: 'TISSU POUR HOMME 5.jpg', cat: 'Mode' }, { src: 'TISSU POUR HOMME 9.jpg', cat: 'Mode' },
        { src: 'TISSU POUR HOMME 2.jpg', cat: 'Mode' }, { src: 'TISSU POUR HOMME 6.jpg', cat: 'Mode' }, { src: 'TISSU POUR HOMME 10.jpg', cat: 'Mode' },
        { src: 'TISSU POUR HOMME 3.jpg', cat: 'Mode' }, { src: 'TISSU POUR HOMME 7.jpg', cat: 'Mode' }, { src: 'TISSU POUR HOMME 20.jpg', cat: 'Mode' },
        { src: 'TISSU POUR HOMME 4.jpg', cat: 'Mode' }, { src: 'TISSU POUR HOMME 8.jpg', cat: 'Mode' },


        { src: 'HOMME 1.jpg', cat: 'Homme' }, { src: 'HOMME 2.jpg', cat: 'Homme' }, { src: 'HOMME 3.jpg', cat: 'Homme' },
        { src: 'HOMME 4.jpg', cat: 'Homme' }, { src: 'HOMME 5.jpg', cat: 'Homme' }, { src: 'HOMME 6.jpg', cat: 'Homme' },
        { src: 'HOMME 7.jpg', cat: 'Homme' }, { src: 'HOMME 8.jpg', cat: 'Homme' }, { src: 'HOMME 9.jpg', cat: 'Homme' },
        { src: 'HOMME 10.jpg', cat: 'Homme' }, { src: 'HOMME 11.jpg', cat: 'Homme' }, { src: 'HOMME 12.jpg', cat: 'Homme' },
        { src: 'HOMME 16.jpg', cat: 'Homme' }, { src: 'HOMME 15.jpg', cat: 'Homme' }, { src: 'HOMME 13.jpg', cat: 'Homme' },

        // Divers / WhatsApp
        { src: '8.jpg', cat: 'Collection' }, { src: 'IMG-20260204-WA0064.jpg', cat: 'Collection' },
        { src: 'PENTALON POUR HOMME GN17.jpg', cat: 'Collection' }, 
        { src: 'PENTALON POUR HOMME GN11.jpg', cat: 'Collection' }, { src: 'PENTALON POUR HOMME GN2.jpg', cat: 'Collection' },
        { src: 'PENTALON POUR HOMME GN23.jpg', cat: 'Collection' }, { src: 'F 1.jpg', cat: 'Femme' }, { src: 'F 2.jpg', cat: 'Femme' },

        // Détails
        { src: '1.04.jpg', cat: 'Détail' }, { src: '1.08.jpg', cat: 'Détail' }, { src: '1.09.jpg', cat: 'Détail' }
    ];

    const galleryGrid = document.getElementById('galleryGrid');

    // Génération dynamique de la galerie
    if (galleryGrid) {
        rawImages.forEach(img => {
            const item = document.createElement('div');
            item.classList.add('gallery-item', 'reveal');

            // Nettoyage du nom pour l'affichage
            let displayName = img.src.replace(/\.(jpg|jpeg|png)$/i, '').replace(/[-_]/g, ' ');
            // Raccourcir si trop long (ex: noms WhatsApp)
            if (displayName.startsWith('IMG')) displayName = "Modèle Collection " + displayName.substr(-4);

            const detailText = "Sarkin Wanka Design - " + img.cat;

            // Construction du lien WhatsApp
            // On utilise l'URL absolue de l'image pour que le client puisse la voir
            const baseUrl = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '/');
            const imageUrl = baseUrl + "img/" + img.src;
            const waMessage = `Bonjour, je suis intéressé par le modèle *${displayName}* que j'ai vu sur votre site. Voici la photo : ${imageUrl}`;
            const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waMessage)}`;

            item.innerHTML = `
                <div class="img-container">
                    <img src="img/${img.src}" alt="${displayName}" loading="lazy">
                    <div class="gallery-overlay">
                        <span><i class="fas fa-search-plus"></i> Zoom</span>
                    </div>
                </div>
                <div class="item-info">
                    <h3>${displayName}</h3>
                    <p>${detailText}</p>
                    <a href="${waLink}" target="_blank" class="wa-btn">
                        Commander sur WhatsApp
                    </a>
                </div>
            `;

            // Event Listener pour la Lightbox
            item.querySelector('.img-container').addEventListener('click', () => {
                openLightbox(`img/${img.src}`, displayName, waLink);
            });

            galleryGrid.appendChild(item);
        });
    }

    // Lightbox Logic améliorée
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.querySelector('.close');

    // Création d'un bouton WhatsApp dans la lightbox s'il n'existe pas
    let lightboxWaBtn = document.getElementById('lightboxWaBtn');
    if (lightbox && !lightboxWaBtn) {
        lightboxWaBtn = document.createElement('a');
        lightboxWaBtn.id = 'lightboxWaBtn';
        lightboxWaBtn.className = 'wa-btn';
        lightboxWaBtn.style.cssText = "position: absolute; bottom: 20px; z-index: 2001; padding: 12px 25px; font-size: 1rem;";
        lightboxWaBtn.target = "_blank";
        lightboxWaBtn.innerText = "Commander ce modèle";
        lightbox.appendChild(lightboxWaBtn);
    }

    if (lightbox && lightboxImg && closeBtn) {
        function openLightbox(src, name, link) {
            lightbox.style.display = 'flex';
            lightboxImg.src = src;
            if (lightboxWaBtn) {
                lightboxWaBtn.href = link;
            }
            document.body.style.overflow = 'hidden';
        }

        closeBtn.addEventListener('click', () => {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Intersection Observer (Reste inchangé)
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Smooth Scroll (Reste inchangé)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith("#")) {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Mobile Menu (Reste inchangé)
    const burger = document.querySelector('.burger');
    const navLinksEl = document.querySelector('.nav-links');
    if (burger && navLinksEl) {
        burger.addEventListener('click', () => {
            const expanded = burger.getAttribute('aria-expanded') === 'true';
            burger.setAttribute('aria-expanded', String(!expanded));
            burger.classList.toggle('toggle');
            navLinksEl.classList.toggle('open');
        });
        navLinksEl.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                navLinksEl.classList.remove('open');
                burger.classList.remove('toggle');
                burger.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // FAQ (Reste inchangé)
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.faq-answer').style.maxHeight = null;
                    }
                });
                item.classList.toggle('active');
                answer.style.maxHeight = !isActive ? answer.scrollHeight + "px" : null;
            });
        });
    }
});
