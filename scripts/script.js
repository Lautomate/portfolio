// ============================================
// Theme toggle (light / dark), persisted via localStorage
// ============================================
(function () {
    const toggleBtn = document.getElementById('theme_toggle');
    const root = document.documentElement;

    toggleBtn.addEventListener('click', function () {
        const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
        const next = current === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });
})();

// ============================================
// Scroll reveal animation
// ============================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));

// ============================================
// Project navigation
// ============================================
function viewVid(args) {
    const routes = {
        'project1': 'pages/leave_monitoring.html',
        'project2': 'pages/personal_relevance_digest.html',
        'project3': 'pages/meridian_lpms.html',
        'project4': 'pages/lead_intake_triage.html'
    };
    if (routes[args]) {
        location.href = routes[args];
    }
}

// ============================================
// Project media gallery (tabs for multi-item media)
// No-op on pages that only have a single media item,
// since those pages have no .media_tab elements.
// ============================================
(function initMediaGallery() {
    document.querySelectorAll('.project_media_wrap').forEach((wrap) => {
        const tabs = wrap.querySelectorAll('.media_tab');
        if (!tabs.length) return;

        const items = wrap.querySelectorAll('.media_item');

        tabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                const index = tab.dataset.index;

                tabs.forEach((t) => t.classList.toggle('active', t === tab));
                items.forEach((item, i) => {
                    const isActive = String(i) === index;
                    item.classList.toggle('active', isActive);

                    // Lazy-load: iframes other than the initially active one
                    // carry data-src instead of src until their tab is opened.
                    const iframe = item.querySelector('iframe[data-src]');
                    if (isActive && iframe) {
                        iframe.src = iframe.dataset.src;
                        iframe.removeAttribute('data-src');
                    }
                });
            });
        });
    });
})();
