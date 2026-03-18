// DARK MODE
const darkToggle = document.getElementById('dark-toggle');
const body = document.body;
const icon = darkToggle.querySelector('i');

darkToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// COUNTER
const counters = document.querySelectorAll('.counter');
const runCounter = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / 100;
        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    });
};

// Intersection Observer untuk memicu counter saat scroll
const section = document.querySelector('#statistik');
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        counters.forEach(c => {
            const target = +c.getAttribute('data-target');
            let now = 0;
            const timer = setInterval(() => {
                now += Math.ceil(target / 50);
                if (now >= target) {
                    c.innerText = target;
                    clearInterval(timer);
                } else {
                    c.innerText = now;
                }
            }, 30);
        });
        observer.unobserve(section);
    }
}, { threshold: 0.5 });

observer.observe(section);