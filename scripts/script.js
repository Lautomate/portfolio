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
        'project1': 'pages/leave_monitoring.html'
    };
    if (routes[args]) {
        location.href = routes[args];
    }
}
