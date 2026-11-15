/* Sarkin Wanka Fashion Design — script v4 (stories + infinite scroll + lightbox premium) */
document.addEventListener('DOMContentLoaded', () => {
    const WA_NUMBER = '22792622764';
    const PAGE_SIZE = 16;

    // === GALERIE COMPLÈTE — toutes les images présentes dans /img ===
    const GALLERY = [
        // ── TOP 1, 2, 3 — PRESTIGE SIGNATURE PDG ──
        ['PRESTIGE_PDG_1.jpg', 'prestige'],
        ['PRESTIGE_PDG_2.jpg', 'prestige'],
        ['PRESTIGE_PDG_3.jpg', 'prestige'],

        // ── HOMME ──
        ['HOM 1.jpg',   'homme'],
        ['HOM 2.jpg',   'homme'],
        ['HOM 3.jpg',   'homme'],
        ['HOM 4.jpg',   'homme'],
        ['HOM 5.jpg',   'homme'],
        ['HOM 6.jpg',   'homme'],
        ['HOM 7.jpg',   'homme'],
        ['HOM 8.jpg',   'homme'],
        ['HOM 9.jpg',   'homme'],
        ['HOM 10.jpg',  'homme'],
        ['HOM 11.jpg',  'homme'],
        ['HOM 12.jpg',  'homme'],
        ['HOM 13.jpg',  'homme'],
        ['HOM 14.jpg',  'homme'],
        ['HOM 15.jpg',  'homme'],
        ['HOM 16.jpg',  'homme'],
        ['HOM 17.jpg',  'homme'],
        ['HOM 18.jpg',  'homme'],
        ['HOM 19.jpg',  'homme'],
        ['HOM 20.jpg',  'homme'],
        ['HOM 21.jpg',  'homme'],
        ['HOM 22.jpg',  'homme'],
        ['HOM 23.jpg',  'homme'],
        ['HOM 24.jpg',  'homme'],
        ['HOM 24.1.jpg','homme'],
        ['HOM 24.2.jpg','homme'],
        ['HOM 25.jpg',  'homme'],
        ['HOM 26.jpg',  'homme'],
        ['HOM 27.jpg',  'homme'],
        ['HOM 28.jpg',  'homme'],
        ['HOM 29.jpg',  'homme'],
        ['HOMME 1.jpg', 'homme'],
        ['HOMME 2.jpg', 'homme'],
        ['HOMME 3.jpg', 'homme'],
        ['HOMME 4.jpg', 'homme'],
        ['HOMME 5.jpg', 'homme'],
        ['HOMME 6.jpg', 'homme'],
        ['HOMME 7.jpg', 'homme'],
        ['HOMME 8.jpg', 'homme'],
        ['HOMME 9.jpg', 'homme'],
        ['HOMME 10.jpg','homme'],
        ['HOMME 11.jpg','homme'],
        ['HOMME 12.jpg','homme'],
        ['HOMME 16.jpg','homme'],
        // Nouvelles images homme
        ['1097259896747166321.jpg', 'homme'],
        ['1125548131921958513.jpg', 'homme'],
        ['304767099809241552.jpg',  'homme'],
        ['362962051241280809.jpg',  'homme'],
        ['582160689388105498.jpg',  'homme'],
        ['738871882658625961.jpg',  'homme'],
        ['934285885218715083.jpg',  'homme'],
        ['958281626986217747.jpg',  'homme'],
        ['967429563945368524.jpg',  'homme'],
        ['1071575305113543216 (1).jpg', 'homme'],
        ['R.jpg', 'homme'],

        // ── FEMME ──
        ['F 1.jpg', 'femme'],
        ['F 2.jpg', 'femme'],
        ['1112318808002265329.jpg', 'femme'],

        // ── PRESTIGE ──
        ['MODEL 1.jpg', 'prestige'],
        ['MODEL 2.jpg', 'prestige'],
        ['MODEL 3.jpg', 'prestige'],
        ['MODEL 4.jpg', 'prestige'],
        ['MODEL 5.jpg', 'prestige'],
        ['099905e9788b85489f327aa0313cede3.jpg', 'prestige'],
        ['0bef6f23bc84b67adfc790f72fb5d6b5.jpg', 'prestige'],
        ['35cf38c5abb4b16bfc72e6beb7741191.jpg',  'prestige'],
        ['980f7c8323760eeab1fe07146a33a114.jpg',  'prestige'],
        ['e5ea3ecca08d11015fe6a4ec08e859e8.jpg',  'prestige'],

        // ── TISSUS ──
        ['1.04.jpg', 'tissus'],
        ['1.08.jpg', 'tissus'],
        ['1.09.jpg', 'tissus'],
        ['TISSU POUR HOMME 20.jpg', 'tissus'],
        ['TYPE 1.jpg',  'tissus'],
        ['TYPE 2.jpg',  'tissus'],
        ['TYPE 3.jpg',  'tissus'],
        ['TYPE 4.jpg',  'tissus'],
        ['TYPE 5.jpg',  'tissus'],
        ['TYPE 6.jpg',  'tissus'],
        ['TYPE 7.jpg',  'tissus'],
        ['TYPE 9.jpg',  'tissus'],
        ['TYPE8.jpg',   'tissus'],
        ['TYPE10.jpg',  'tissus'],
        ['TYPE 11.jpg', 'tissus'],
        ['IMG-20260204-WA0063.jpg', 'tissus'],
        ['IMG-20260204-WA0064.jpg', 'tissus'],
        ['IMG-20260204-WA0065.jpg', 'tissus'],
        ['IMG-20260204-WA0066.jpg', 'tissus'],
        ['IMG-20260204-WA0077.jpg', 'tissus'],
        ['IMG-20260204-WA0080.jpg', 'tissus'],
        ['IMG-20260204-WA0100.jpg', 'tissus'],
        ['OIP.webp',      'tissus'],
        ['OIP (1).webp',  'tissus'],
        ['OIP (2).webp',  'tissus'],
        ['OIP (3).webp',  'tissus'],
        ['OIP (4).webp',  'tissus'],
        ['OIP (5).webp',  'tissus'],
        ['OIP (6).webp',  'tissus'],
        ['OIP (7).webp',  'tissus'],
        ['OIP (8).webp',  'tissus'],
        ['OIP (9).webp',  'tissus'],
        ['OIP (10).webp', 'tissus'],
        ['OIP (11).webp', 'tissus'],

        // ── ATELIER ──
        ['ATTELIER.jpg', 'atelier'],
        ['image de l\'attelier.jpg', 'atelier'],
        ['Atelier de couture FAHAD-COUTURE.png', 'atelier'],
        ['télécharger.jpg', 'atelier'],
    ];

    const LABELS = { homme: 'Homme', femme: 'Femme', prestige: 'Prestige', tissus: 'Tissus', atelier: 'Atelier' };
    const NAMES  = { homme: 'Tenue homme', femme: 'Tenue femme', prestige: 'Modèle prestige', tissus: 'Tissu', atelier: 'Atelier' };

    // Numérotation par catégorie
    const counters = {};
    const items = GALLERY.map(([src, cat]) => {
        counters[cat] = (counters[cat] || 0) + 1;
        const n = String(counters[cat]).padStart(2, '0');
        return { src, cat, name: NAMES[cat] + ' ' + n };
    });

    // Compteur total dans le héro
    const statTotal = document.getElementById('statTotal');
    if (statTotal) statTotal.textContent = items.length;

    function waLink(it) {
        const base = location.origin + location.pathname.replace(/\/[^/]*$/, '/');
        const url = encodeURI(base + 'img/' + it.src);
        const msg = `Bonjour, je suis intéressé par le modèle *${it.name}* vu sur votre site.\n${url}`;
        return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
    }

    // Année du footer + header au scroll + lien actif
    const year = document.getElementById('year'); if (year) year.textContent = new Date().getFullYear();
    const header = document.querySelector('header');
    const onScroll = () => header.classList.toggle('scrolled', scrollY > 20);
    onScroll(); addEventListener('scroll', onScroll, { passive: true });
    const page = document.body.dataset.page;
    document.querySelectorAll('.nav-links a[data-n]').forEach(a => { if (a.dataset.n === page) a.classList.add('active'); });

    // Apparition au scroll
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('active'); io.unobserve(e.target); } }), { threshold: .12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // Menu mobile
    const burger = document.querySelector('.burger'), nav = document.getElementById('navLinks');
    const closeMenu = () => { nav.classList.remove('open'); burger.classList.remove('toggle'); burger.setAttribute('aria-expanded', 'false'); };
    burger.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        burger.classList.toggle('toggle', open);
        burger.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

    // Formulaire de contact -> WhatsApp
    const form = document.getElementById('orderForm');
    if (form) form.addEventListener('submit', e => {
        e.preventDefault();
        const d = new FormData(form);
        const msg = `Bonjour, je suis ${d.get('name')}.\nJe souhaite commander : ${d.get('type')}.\n${d.get('msg') || ''}`.trim();
        window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
    });

    // =========================================================
    //  GALERIE
    // =========================================================
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;

    const lb             = document.getElementById('lightbox');
    const lbImg          = document.getElementById('lightboxImg');
    const lbCount        = document.getElementById('lbCount');
    const lbName         = document.getElementById('lbName');
    const lbCat          = document.getElementById('lbCat');
    const lbWa           = document.getElementById('lbWa');
    const lbDownload     = document.getElementById('lbDownload');
    const lbSuggest      = document.getElementById('lbSuggest');
    const lbShare        = document.getElementById('lbShare');
    const lbToast        = document.getElementById('lbToast');
    const suggestionModal     = document.getElementById('suggestionModal');
    const suggestionThumb     = document.getElementById('suggestionThumb');
    const suggestionModelName = document.getElementById('suggestionModelName');
    const sendSuggestion      = document.getElementById('sendSuggestion');
    const sentinel       = document.getElementById('infiniteScrollSentinel');
    const galleryLoading = document.getElementById('galleryLoading');
    const galleryEnd     = document.getElementById('galleryEnd');

    let filter = 'tous', shown = 0, current = [], idx = 0;
    let isLoadingMore = false;

    // ---- Toast helper ----
    let toastTimer;
    function showToast(msg, icon = '✓') {
        if (!lbToast) return;
        lbToast.innerHTML = `<span style="color:var(--gold);font-size:1rem">${icon}</span> ${msg}`;
        lbToast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => lbToast.classList.remove('show'), 3200);
    }

    const WA_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.38A9.9 9.9 0 1 0 12.04 2Zm5.8 14.07c-.25.7-1.45 1.34-2 1.4-.52.06-1.17.09-1.88-.12a17 17 0 0 1-1.7-.63c-3-1.3-4.95-4.32-5.1-4.52-.15-.2-1.2-1.6-1.2-3.05s.76-2.16 1.03-2.46c.27-.3.6-.37.8-.37h.57c.18 0 .43-.07.67.51.25.6.85 2.06.92 2.2.08.15.13.33.03.52-.1.2-.15.32-.3.5-.15.17-.31.38-.45.51-.15.15-.3.31-.13.6.17.3.78 1.28 1.67 2.07 1.15 1.02 2.12 1.34 2.42 1.49.3.15.47.12.65-.07.17-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.73.82 2.03.97.3.15.5.22.57.35.08.12.08.72-.17 1.42Z"/></svg>';

    function card(it, i) {
        const el = document.createElement('div');
        el.className = 'gallery-item';
        const imgUrl = encodeURI('img/' + it.src);
        el.innerHTML = `
            <button class="img-container" aria-label="Agrandir : ${it.name}">
                <img src="${imgUrl}" alt="${it.name}" loading="lazy" decoding="async" class="img-lazy" onload="this.classList.add('img-loaded'); this.parentElement.classList.add('loaded')" onerror="this.classList.add('img-loaded'); this.parentElement.classList.add('loaded')">
                <span class="zoom-tag">Agrandir</span>
                <span class="premium-badge">
                    <svg viewBox="0 0 24 24"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>
                    Premium
                </span>
            </button>
            <div class="item-info">
                <div><h3>${it.name}</h3><p>${LABELS[it.cat]}</p></div>
                <a class="wa-btn" href="${waLink(it)}" target="_blank" rel="noopener" aria-label="Commander ${it.name} sur WhatsApp">${WA_SVG}</a>
            </div>`;
        el.querySelector('.img-container').addEventListener('click', () => openLb(i));
        return el;
    }

    // ---- Infinite scroll — renderMore ----
    function renderMore() {
        if (isLoadingMore || shown >= current.length) return;
        isLoadingMore = true;
        if (galleryLoading) galleryLoading.hidden = false;

        // Petit délai simulé pour effet fluide
        setTimeout(() => {
            const frag = document.createDocumentFragment();
            const slice = current.slice(shown, shown + PAGE_SIZE);
            slice.forEach((it, k) => {
                const c = card(it, shown + k);
                c.style.animationDelay = Math.min(k * 15, 150) + 'ms';
                frag.appendChild(c);
            });
            grid.appendChild(frag);
            shown += slice.length;

            if (galleryLoading) galleryLoading.hidden = true;
            isLoadingMore = false;

            if (shown >= current.length) {
                // Fin de collection
                if (sentinel) sentinel.style.display = 'none';
                if (galleryEnd) galleryEnd.hidden = false;
            } else {
                if (sentinel) sentinel.style.display = '';
                if (galleryEnd) galleryEnd.hidden = true;
            }
        }, 300);
    }

    // IntersectionObserver sur la sentinelle
    if (sentinel) {
        const scrollObserver = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) renderMore();
        }, { rootMargin: '200px' });
        scrollObserver.observe(sentinel);
    }

    function applyFilter(f) {
        filter = f; shown = 0; grid.innerHTML = '';
        current = f === 'tous' ? items : items.filter(i => i.cat === f);
        document.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c.dataset.filter === f));
        // Réinitialiser les indicateurs
        if (sentinel) sentinel.style.display = '';
        if (galleryEnd) galleryEnd.hidden = true;
        if (galleryLoading) galleryLoading.hidden = true;
        isLoadingMore = false;
        renderMore();
    }

    document.querySelectorAll('.chip').forEach(c => {
        const cat = c.dataset.filter;
        const count = cat === 'tous' ? items.length : items.filter(it => it.cat === cat).length;
        const small = c.querySelector('small');
        if (small) small.textContent = count;
        c.addEventListener('click', () => {
            history.replaceState(null, '', c.dataset.filter === 'tous' ? location.pathname : '#' + c.dataset.filter);
            applyFilter(c.dataset.filter);
        });
    });

    const hash = location.hash.slice(1);
    applyFilter(LABELS[hash] ? hash : 'tous');
    addEventListener('hashchange', () => { const h = location.hash.slice(1); if (LABELS[h]) applyFilter(h); });

    // =========================================================
    //  STORIES — Carrousel défilement auto
    // =========================================================
    const storiesTrack   = document.getElementById('storiesTrack');
    const storiesDots    = document.getElementById('storiesDots');
    const storiesFill    = document.getElementById('storiesProgressFill');
    const storiesPause   = document.getElementById('storiesPause');
    const storiesPrev    = document.getElementById('storiesPrev');
    const storiesNext    = document.getElementById('storiesNext');

    if (storiesTrack) {
        const STORY_DURATION = 3000; // ms par slide
        let storyIdx = 0;
        let storyPlaying = true;
        let storyTimer = null;
        let storyProgressStart = null;
        let storyProgressReq = null;
        const CARD_WIDTH = 150; // px (largeur approximative d'une story-card + gap)

        // --- Génération des story-cards ---
        function buildStories() {
            storiesTrack.innerHTML = '';
            items.forEach((it, i) => {
                const card = document.createElement('button');
                card.className = 'story-card';
                card.setAttribute('aria-label', 'Voir ' + it.name);
                card.innerHTML = `
                    <img src="${encodeURI('img/' + it.src)}" alt="${it.name}" loading="lazy" decoding="async">
                    <div class="story-card-overlay">
                        <span class="story-card-name">${it.name}</span>
                        <span class="story-card-cat">${LABELS[it.cat]}</span>
                    </div>
                    <span class="story-num">${String(i + 1).padStart(2,'0')}</span>`;
                card.addEventListener('click', () => openLb(i));
                storiesTrack.appendChild(card);
            });
        }

        // --- Dots de navigation ---
        function buildDots() {
            if (!storiesDots) return;
            storiesDots.innerHTML = '';
            const total = items.length;
            // Un dot tous les 10 items environ (max 15 dots)
            const step = Math.max(1, Math.ceil(total / 15));
            for (let i = 0; i < total; i += step) {
                const dot = document.createElement('button');
                dot.className = 'stories-dot';
                dot.setAttribute('aria-label', `Aller à la publication ${i + 1}`);
                dot.addEventListener('click', () => goToStory(i));
                storiesDots.appendChild(dot);
            }
            updateDots();
        }

        function updateDots() {
            if (!storiesDots) return;
            const dots = storiesDots.querySelectorAll('.stories-dot');
            const step = Math.max(1, Math.ceil(items.length / 15));
            dots.forEach((d, i) => d.classList.toggle('active', storyIdx >= i * step && storyIdx < (i + 1) * step));
        }

        // --- Défilement de la piste ---
        function getVisibleCount() {
            const wrap = storiesTrack.parentElement;
            if (!wrap) return 4;
            return Math.max(1, Math.floor(wrap.clientWidth / CARD_WIDTH));
        }

        function slideToStory(i) {
            storyIdx = Math.max(0, Math.min(i, items.length - 1));
            const offset = storyIdx * CARD_WIDTH;
            storiesTrack.style.transform = `translateX(-${offset}px)`;
            updateDots();
        }

        // --- Barre de progression ---
        function startProgress() {
            if (storiesFill) {
                cancelAnimationFrame(storyProgressReq);
                storyProgressStart = performance.now();
                function animProgress(now) {
                    const elapsed = now - storyProgressStart;
                    const pct = Math.min(elapsed / STORY_DURATION * 100, 100);
                    storiesFill.style.width = pct + '%';
                    if (pct < 100 && storyPlaying) {
                        storyProgressReq = requestAnimationFrame(animProgress);
                    }
                }
                storyProgressReq = requestAnimationFrame(animProgress);
            }
        }

        function stopProgress() {
            cancelAnimationFrame(storyProgressReq);
            if (storiesFill) storiesFill.style.width = '0%';
        }

        // --- Play / Pause ---
        function playStories() {
            storyPlaying = true;
            if (storiesPause) {
                storiesPause.innerHTML = `<svg viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16" fill="currentColor"/><rect x="14" y="4" width="4" height="16" fill="currentColor"/></svg>`;
                storiesPause.setAttribute('aria-label', 'Pause');
            }
            startProgress();
            storyTimer = setTimeout(() => goToStory(storyIdx + 1), STORY_DURATION);
        }

        function pauseStories() {
            storyPlaying = false;
            clearTimeout(storyTimer);
            cancelAnimationFrame(storyProgressReq);
            if (storiesPause) {
                storiesPause.innerHTML = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>`;
                storiesPause.setAttribute('aria-label', 'Lecture');
            }
        }

        function goToStory(i) {
            clearTimeout(storyTimer);
            cancelAnimationFrame(storyProgressReq);
            const next = ((i % items.length) + items.length) % items.length;
            slideToStory(next);
            if (storyPlaying) playStories();
            else stopProgress();
        }

        // --- Swipe tactile sur stories ---
        let sx0 = null;
        storiesTrack.addEventListener('touchstart', e => { sx0 = e.touches[0].clientX; pauseStories(); }, { passive: true });
        storiesTrack.addEventListener('touchend', e => {
            if (sx0 === null) return;
            const dx = e.changedTouches[0].clientX - sx0;
            if (Math.abs(dx) > 40) goToStory(storyIdx + (dx < 0 ? 1 : -1));
            sx0 = null;
            if (storyPlaying) playStories(); else stopProgress();
        });

        // --- Contrôles ---
        if (storiesPause) storiesPause.addEventListener('click', () => storyPlaying ? pauseStories() : playStories());
        if (storiesPrev)  storiesPrev.addEventListener('click', () => goToStory(storyIdx - 1));
        if (storiesNext)  storiesNext.addEventListener('click', () => goToStory(storyIdx + 1));

        // --- Pause automatique si l'utilisateur quitte la section ---
        const storiesSection = document.getElementById('stories');
        if (storiesSection) {
            const visObs = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting) { if (storyPlaying) playStories(); }
                else { clearTimeout(storyTimer); cancelAnimationFrame(storyProgressReq); }
            }, { threshold: 0.1 });
            visObs.observe(storiesSection);
        }

        // --- Init ---
        buildStories();
        buildDots();
        slideToStory(0);
        // Démarrage différé (après chargement)
        setTimeout(() => playStories(), 800);
    }

    // =========================================================
    //  Préchargement intelligent des images adjacentes
    // =========================================================
    function preloadNearby(cIdx) {
        const next = current[(cIdx + 1) % current.length];
        const prev = current[(cIdx - 1 + current.length) % current.length];
        if (next) { const i = new Image(); i.src = encodeURI('img/' + next.src); }
        if (prev) { const i = new Image(); i.src = encodeURI('img/' + prev.src); }
    }

    // =========================================================
    //  LIGHTBOX PREMIUM
    // =========================================================
    function openLb(i) {
        idx = i;
        const it = current[idx];
        lbImg.src = encodeURI('img/' + it.src);
        lbImg.alt = it.name;
        if (lbName) lbName.textContent = it.name;
        if (lbCat)  lbCat.textContent  = LABELS[it.cat];
        if (lbCount) lbCount.textContent = (idx + 1) + ' / ' + current.length;
        lbWa.href = waLink(it);
        lb.classList.add('open');
        document.body.style.overflow = 'hidden';
        preloadNearby(idx);
    }

    function closeLb() {
        lb.classList.remove('open');
        document.body.style.overflow = '';
    }

    const step = d => openLb((idx + d + current.length) % current.length);

    lb.querySelector('.lb-close').addEventListener('click', closeLb);
    lb.querySelector('.lb-prev').addEventListener('click', () => step(-1));
    lb.querySelector('.lb-next').addEventListener('click', () => step(1));
    lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });

    addEventListener('keydown', e => {
        if (!lb.classList.contains('open')) return;
        if (e.key === 'Escape') closeLb();
        if (e.key === 'ArrowLeft') step(-1);
        if (e.key === 'ArrowRight') step(1);
    });

    // Swipe mobile lightbox
    let x0 = null;
    lb.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend', e => {
        if (x0 === null) return;
        const dx = e.changedTouches[0].clientX - x0;
        if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
        x0 = null;
    });

    // =========================================================
    //  TÉLÉCHARGER l'image
    // =========================================================
    if (lbDownload) {
        lbDownload.addEventListener('click', async () => {
            const it = current[idx];
            try {
                const response = await fetch('img/' + it.src);
                const blob = await response.blob();
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = it.name.replace(/\s+/g, '_') + '.jpg';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
                showToast('Image téléchargée avec succès !', '📥');
            } catch {
                window.open('img/' + it.src, '_blank', 'noopener');
                showToast('Image ouverte — longue pression pour sauvegarder', '📱');
            }
        });
    }

    // =========================================================
    //  PARTAGER / METTRE EN LIGNE
    // =========================================================
    if (lbShare) {
        lbShare.addEventListener('click', async () => {
            const it = current[idx];
            const shareUrl = location.origin + location.pathname.replace(/\/[^/]*$/, '/') + 'img/' + it.src;
            const shareData = {
                title: it.name + ' — Sarkin Wanka Fashion Design',
                text: '✨ Découvrez ce magnifique modèle : ' + it.name + ' chez Sarkin Wanka Fashion Design. Commandez sur WhatsApp !',
                url: shareUrl
            };
            if (navigator.share) {
                try {
                    await navigator.share(shareData);
                    showToast('Partagé avec succès !', '🌐');
                } catch (e) {
                    if (e.name !== 'AbortError') fallbackShare(shareUrl, it.name);
                }
            } else {
                fallbackShare(shareUrl, it.name);
            }
        });
    }

    function fallbackShare(url, name) {
        try {
            navigator.clipboard.writeText(url);
            showToast('Lien copié dans le presse-papiers !', '🔗');
        } catch {
            const wa = `https://wa.me/?text=${encodeURIComponent('✨ ' + name + ' — Sarkin Wanka Fashion Design\n' + url)}`;
            window.open(wa, '_blank', 'noopener');
        }
    }

    // =========================================================
    //  MODAL SUGGESTION
    // =========================================================
    function buildSuggestionWa() {
        const it = current[idx];
        const prenom = document.getElementById('suggestName').value.trim() || 'un(e) client(e)';
        const type   = document.getElementById('suggestType').value;
        const msg    = document.getElementById('suggestMsg').value.trim();
        const imgUrl = location.origin + location.pathname.replace(/\/[^/]*$/, '/') + 'img/' + it.src;

        const typeLabels = {
            avis: 'Ce modèle m\'a beaucoup plu',
            commande: 'Je veux commander ce modèle',
            suggestion: 'J\'ai une suggestion de style',
            bravo: 'Félicitations pour votre travail'
        };

        let text = `✨ *Bonjour Monsieur le PDG,*\n\nJe suis *${prenom}*.\n\n*${typeLabels[type]}.*\n\nModèle : *${it.name}* (${LABELS[it.cat]})\n${imgUrl}`;
        if (msg) text += `\n\n💬 ${msg}`;
        text += '\n\n— Envoyé depuis le site Sarkin Wanka Fashion Design';

        return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    }

    if (lbSuggest) {
        lbSuggest.addEventListener('click', () => {
            const it = current[idx];
            if (suggestionThumb) { suggestionThumb.src = 'img/' + it.src; }
            if (suggestionModelName) suggestionModelName.textContent = it.name;
            if (sendSuggestion) sendSuggestion.href = buildSuggestionWa();
            if (suggestionModal) {
                suggestionModal.classList.add('open');
                document.body.style.overflow = 'hidden';
            }
        });
    }

    ['suggestName', 'suggestType', 'suggestMsg'].forEach(id => {
        const el = document.getElementById(id);
        if (el && sendSuggestion) el.addEventListener('input', () => { sendSuggestion.href = buildSuggestionWa(); });
    });

    function closeSuggestion() {
        if (suggestionModal) suggestionModal.classList.remove('open');
        document.body.style.overflow = lb.classList.contains('open') ? 'hidden' : '';
    }

    document.getElementById('closeSuggestion')?.addEventListener('click', closeSuggestion);
    document.getElementById('cancelSuggestion')?.addEventListener('click', closeSuggestion);
    suggestionModal?.addEventListener('click', e => { if (e.target === suggestionModal) closeSuggestion(); });

    if (sendSuggestion) {
        sendSuggestion.addEventListener('click', () => {
            setTimeout(() => {
                closeSuggestion();
                showToast('Votre message a été envoyé au PDG !', '💬');
            }, 400);
        });
    }
});
