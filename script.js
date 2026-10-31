/* Sarkin Wanka Fashion Design — script v2 */
document.addEventListener('DOMContentLoaded', () => {
    const WA_NUMBER = '22792622764';
    const PAGE_SIZE = 24;

    // === GALERIE : une ligne par image  ['fichier.jpg', 'categorie'] ===
    // Catégories : homme, femme, prestige, tissus, jeans
    const GALLERY = [
        ['HOM 1.jpg', 'homme'],
        ['MODEL 1.jpg', 'prestige'],
        ['F 1.jpg', 'femme'],
        ['3.jpg', 'jeans'],
        ['1.04.jpg', 'tissus'],
        ['HOM 2.jpg', 'homme'],
        ['MODEL 2.jpg', 'prestige'],
        ['F 2.jpg', 'femme'],
        ['4.4.jpg', 'jeans'],
        ['1.08.jpg', 'tissus'],
        ['HOM 3.jpg', 'homme'],
        ['MODEL 3.jpg', 'prestige'],
        ['12.jpg', 'jeans'],
        ['1.09.jpg', 'tissus'],
        ['HOM 4.jpg', 'homme'],
        ['MODEL 4.jpg', 'prestige'],
        ['13.jpg', 'jeans'],
        ['5c2ef90c2dd642f29b1e4513b8bf38ab.jpg', 'tissus'],
        ['HOM 5.jpg', 'homme'],
        ['MODEL 5.jpg', 'prestige'],
        ['16.jpg', 'jeans'],
        ['14.jpg', 'tissus'],
        ['HOM 6.jpg', 'homme'],
        ['18.jpg', 'jeans'],
        ['0228846087b84604b6dc88d46bc94543.jpg', 'tissus'],
        ['HOM 7.jpg', 'homme'],
        ['19.jpg', 'jeans'],
        ['IMG-20260204-WA0064.jpg', 'tissus'],
        ['HOM 8.jpg', 'homme'],
        ['20.jpg', 'jeans'],
        ['IMG-20260204-WA0065.jpg', 'tissus'],
        ['HOM 9.jpg', 'homme'],
        ['21.jpg', 'jeans'],
        ['IMG-20260204-WA0100.jpg', 'tissus'],
        ['HOM 10.jpg', 'homme'],
        ['22.jpg', 'jeans'],
        ['TISSU POUR HOMME 2.jpg', 'tissus'],
        ['HOM 11.jpg', 'homme'],
        ['PENTALON POUR HOMME GN2.jpg', 'jeans'],
        ['TISSU POUR HOMME 3.jpg', 'tissus'],
        ['HOM 12.jpg', 'homme'],
        ['PENTALON POUR HOMME GN11.jpg', 'jeans'],
        ['TISSU POUR HOMME 4.jpg', 'tissus'],
        ['HOM 13.jpg', 'homme'],
        ['PENTALON POUR HOMME GN17.jpg', 'jeans'],
        ['TISSU POUR HOMME 5.jpg', 'tissus'],
        ['HOM 14.jpg', 'homme'],
        ['PENTALON POUR HOMME GN20.jpg', 'jeans'],
        ['TISSU POUR HOMME 6.jpg', 'tissus'],
        ['HOM 15.jpg', 'homme'],
        ['PENTALON POUR HOMME GN23.jpg', 'jeans'],
        ['TISSU POUR HOMME 7.jpg', 'tissus'],
        ['HOM 16.jpg', 'homme'],
        ['TISSU POUR HOMME 8.jpg', 'tissus'],
        ['HOM 17.jpg', 'homme'],
        ['TISSU POUR HOMME 9.jpg', 'tissus'],
        ['HOM 18.jpg', 'homme'],
        ['TISSU POUR HOMME 10.jpg', 'tissus'],
        ['HOM 19.jpg', 'homme'],
        ['TISSU POUR HOMME 12.jpg', 'tissus'],
        ['HOM 20.jpg', 'homme'],
        ['TISSU POUR HOMME 13.jpg', 'tissus'],
        ['HOM 21.jpg', 'homme'],
        ['TISSU POUR HOMME 14.jpg', 'tissus'],
        ['HOM 22.jpg', 'homme'],
        ['TISSU POUR HOMME 15.jpg', 'tissus'],
        ['HOM 23.jpg', 'homme'],
        ['TISSU POUR HOMME 16.jpg', 'tissus'],
        ['HOM 24.1.jpg', 'homme'],
        ['TISSU POUR HOMME 17.jpg', 'tissus'],
        ['HOM 24.2.jpg', 'homme'],
        ['TISSU POUR HOMME 18.jpg', 'tissus'],
        ['HOM 24.jpg', 'homme'],
        ['TISSU POUR HOMME 19.jpg', 'tissus'],
        ['HOM 25.jpg', 'homme'],
        ['TISSU POUR HOMME 20.jpg', 'tissus'],
        ['HOM 26.jpg', 'homme'],
        ['TYPE8.jpg', 'tissus'],
        ['HOM 27.jpg', 'homme'],
        ['TYPE10.jpg', 'tissus'],
        ['HOM 28.jpg', 'homme'],
        ['TYPE 1.jpg', 'tissus'],
        ['HOM 29.jpg', 'homme'],
        ['TYPE 2.jpg', 'tissus'],
        ['HOMME 1.jpg', 'homme'],
        ['TYPE 3.jpg', 'tissus'],
        ['HOMME 2.jpg', 'homme'],
        ['TYPE 4.jpg', 'tissus'],
        ['HOMME 3.jpg', 'homme'],
        ['TYPE 5.jpg', 'tissus'],
        ['HOMME 4.jpg', 'homme'],
        ['TYPE 6.jpg', 'tissus'],
        ['HOMME 5.jpg', 'homme'],
        ['TYPE 7.jpg', 'tissus'],
        ['HOMME 6.jpg', 'homme'],
        ['TYPE 9.jpg', 'tissus'],
        ['HOMME 7.jpg', 'homme'],
        ['TYPE 11.jpg', 'tissus'],
        ['HOMME 8.jpg', 'homme'],
        ['c8833675b20f420abed8015c92201fd5.jpg', 'tissus'],
        ['HOMME 9.jpg', 'homme'],
        ['HOMME 10.jpg', 'homme'],
        ['HOMME 11.jpg', 'homme'],
        ['HOMME 12.jpg', 'homme'],
        ['HOMME 13.jpg', 'homme'],
        ['HOMME 15.jpg', 'homme'],
        ['HOMME 16.jpg', 'homme']
    ];
    const LABELS = { homme: 'Homme', femme: 'Femme', prestige: 'Prestige', tissus: 'Tissus', jeans: 'Jeans & pantalons' };
    const NAMES = { homme: 'Tenue homme', femme: 'Tenue femme', prestige: 'Modèle prestige', tissus: 'Tissu', jeans: 'Jean / pantalon' };

    // Numérotation par catégorie
    const counters = {};
    const items = GALLERY.map(([src, cat]) => {
        counters[cat] = (counters[cat] || 0) + 1;
        const n = String(counters[cat]).padStart(2, '0');
        return { src, cat, name: NAMES[cat] + ' ' + n };
    });

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

    // ===== Galerie =====
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;
    const moreBtn = document.getElementById('loadMore');
    const lb = document.getElementById('lightbox'), lbImg = document.getElementById('lightboxImg');
    const lbCount = document.getElementById('lbCount'), lbWa = document.getElementById('lbWa');
    let filter = 'tous', shown = 0, current = [], idx = 0;

    const WA_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.38A9.9 9.9 0 1 0 12.04 2Zm5.8 14.07c-.25.7-1.45 1.34-2 1.4-.52.06-1.17.09-1.88-.12a17 17 0 0 1-1.7-.63c-3-1.3-4.95-4.32-5.1-4.52-.15-.2-1.2-1.6-1.2-3.05s.76-2.16 1.03-2.46c.27-.3.6-.37.8-.37h.57c.18 0 .43-.07.67.51.25.6.85 2.06.92 2.2.08.15.13.33.03.52-.1.2-.15.32-.3.5-.15.17-.31.38-.45.51-.15.15-.3.31-.13.6.17.3.78 1.28 1.67 2.07 1.15 1.02 2.12 1.34 2.42 1.49.3.15.47.12.65-.07.17-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.73.82 2.03.97.3.15.5.22.57.35.08.12.08.72-.17 1.42Z"/></svg>';

    function card(it, i) {
        const el = document.createElement('div');
        el.className = 'gallery-item';
        el.innerHTML = `
            <button class="img-container" aria-label="Agrandir : ${it.name}">
                <img src="img/${it.src}" alt="${it.name}" loading="lazy">
                <span class="zoom-tag">Agrandir</span>
            </button>
            <div class="item-info">
                <div><h3>${it.name}</h3><p>${LABELS[it.cat]}</p></div>
                <a class="wa-btn" href="${waLink(it)}" target="_blank" rel="noopener" aria-label="Commander ${it.name} sur WhatsApp">${WA_SVG}</a>
            </div>`;
        el.querySelector('.img-container').addEventListener('click', () => openLb(i));
        return el;
    }

    function renderMore() {
        const slice = current.slice(shown, shown + PAGE_SIZE);
        slice.forEach((it, k) => { const c = card(it, shown + k); c.style.animationDelay = (k * 30) + 'ms'; grid.appendChild(c); });
        shown += slice.length;
        moreBtn.hidden = shown >= current.length;
    }

    function applyFilter(f) {
        filter = f; shown = 0; grid.innerHTML = '';
        current = f === 'tous' ? items : items.filter(i => i.cat === f);
        document.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c.dataset.filter === f));
        renderMore();
    }
    document.querySelectorAll('.chip').forEach(c => c.addEventListener('click', () => { history.replaceState(null, '', c.dataset.filter === 'tous' ? location.pathname : '#' + c.dataset.filter); applyFilter(c.dataset.filter); }));
    moreBtn.addEventListener('click', renderMore);

    const hash = location.hash.slice(1);
    applyFilter(LABELS[hash] ? hash : 'tous');
    addEventListener('hashchange', () => { const h = location.hash.slice(1); if (LABELS[h]) applyFilter(h); });

    // ===== Lightbox =====
    function openLb(i) {
        idx = i; const it = current[idx];
        lbImg.src = 'img/' + it.src; lbImg.alt = it.name;
        lbCount.textContent = it.name + '  ·  ' + (idx + 1) + ' / ' + current.length;
        lbWa.href = waLink(it);
        lb.classList.add('open'); document.body.style.overflow = 'hidden';
    }
    function closeLb() { lb.classList.remove('open'); document.body.style.overflow = ''; }
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
    let x0 = null;
    lb.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend', e => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1); x0 = null; });
});
