const toggleMenu = () => {
    const menuContent = document.querySelector('.menu-content');
    menuContent.classList.toggle('show');
};

const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
};

const updateThemeIcon = (theme) => {
    const themeIcon = document.getElementById('theme-icon');
    themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
};

document.addEventListener('DOMContentLoaded', () => {
    // Theme initialization
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        const menuContent = document.querySelector('.menu-content');
        const menuToggle = document.querySelector('.menu-toggle');
        
        if (menuContent.classList.contains('show') && 
            !menuToggle.contains(e.target) && 
            !menuContent.contains(e.target)) {
            menuContent.classList.remove('show');
        }
    });

    // Close menu when clicking nav links
    const navLinks = document.querySelectorAll('.menu-content a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.menu-content').classList.remove('show');
        });
    });

    // Stop event propagation on menu content
    const menuContent = document.querySelector('.menu-content');
    menuContent.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message!');
        contactForm.reset();
    });
});

// Loading screen
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const progress = document.getElementById('progress');
    const progressPercentage = document.getElementById('progress-percentage');
    let percentage = 0;

    const interval = setInterval(() => {
        if (percentage < 100) {
            percentage += 1;
            progress.style.width = `${percentage}%`;
            progressPercentage.textContent = `${percentage}%`;
        } else {
            clearInterval(interval);
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 300);
            }, 300);
        }
    }, 10); // Adjust the interval duration as needed
});
