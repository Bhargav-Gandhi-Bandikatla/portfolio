document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Counter Logic ---
    const counters = document.querySelectorAll('.counter');
    const animateCounters = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                let count = 0;
                const speed = 200;
                const increment = target / speed;

                const update = () => {
                    count += increment;
                    if (count < target) {
                        counter.innerText = Math.ceil(count);
                        setTimeout(update, 10);
                    } else {
                        counter.innerText = target.toLocaleString();
                    }
                };
                update();
                observer.unobserve(counter);
            }
        });
    };

    const counterObserver = new IntersectionObserver(animateCounters, { threshold: 0.5 });
    counters.forEach(c => counterObserver.observe(c));

    // --- 2. Typing Logic ---
    if (document.getElementById('typing-text')) {
        new Typed('#typing-text', {
            strings: ['SAP Developer.'],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 2000,
            loop: true,
            cursorChar: '|'
        });
    }
});