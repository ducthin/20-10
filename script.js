// ========================================
// SCROLL TO TOP BUTTON
// ========================================
function initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollToTopBtn.classList.remove('opacity-0', 'invisible');
            scrollToTopBtn.classList.add('opacity-100', 'visible');
        } else {
            scrollToTopBtn.classList.remove('opacity-100', 'visible');
            scrollToTopBtn.classList.add('opacity-0', 'invisible');
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// HERO SECTION - ENTRANCE ANIMATION
// ========================================
function initHeroAnimation() {
    const heroTitle = document.getElementById('heroTitle');
    const heroSubtitle = document.getElementById('heroSubtitle');
    const heroDate = document.getElementById('heroDate');

    // Trigger animations on page load
    setTimeout(() => {
        heroTitle.classList.remove('opacity-0', 'translate-y-8');
        heroTitle.classList.add('opacity-100');
    }, 200);

    setTimeout(() => {
        heroSubtitle.classList.remove('opacity-0', 'translate-y-8');
        heroSubtitle.classList.add('opacity-100');
    }, 500);

    setTimeout(() => {
        heroDate.classList.remove('opacity-0', 'translate-y-8');
        heroDate.classList.add('opacity-100');
    }, 800);
}

// ========================================
// PROGRESS BAR - SCROLL INDICATOR
// ========================================
function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    
    // Calculate scroll progress
    const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
    
    // Update progress bar width
    progressBar.style.width = scrollPercentage + '%';
}

// ========================================
// SCROLL REVEAL ANIMATION
// ========================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0', 'translate-y-8');
                entry.target.classList.add('opacity-100');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    revealElements.forEach(element => {
        observer.observe(element);
    });
}

// ========================================
// FLOATING ACTION BUTTON & SIDEBAR DRAWER
// ========================================
function initSidebarDrawer() {
    const fabButton = document.getElementById('fabButton');
    const sidebarDrawer = document.getElementById('sidebarDrawer');
    const closeDrawer = document.getElementById('closeDrawer');
    const overlay = document.getElementById('overlay');
    
    // Open drawer
    function openDrawer() {
        sidebarDrawer.classList.remove('translate-x-full');
        overlay.classList.remove('opacity-0', 'invisible');
        overlay.classList.add('opacity-100', 'visible');
        document.body.style.overflow = 'hidden';
    }
    
    // Close drawer
    function closeDrawerFunc() {
        sidebarDrawer.classList.add('translate-x-full');
        overlay.classList.remove('opacity-100', 'visible');
        overlay.classList.add('opacity-0', 'invisible');
        document.body.style.overflow = '';
    }
    
    // Event listeners
    fabButton.addEventListener('click', openDrawer);
    closeDrawer.addEventListener('click', closeDrawerFunc);
    overlay.addEventListener('click', closeDrawerFunc);
    
    // Close drawer on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeDrawerFunc();
        }
    });
}

// ========================================
// SMOOTH SCROLL BEHAVIOR
// ========================================
function initSmoothScroll() {
    // Add smooth scrolling to all links (if needed in the future)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========================================
// STORY SCROLL REVEAL ANIMATION
// ========================================
function initStoryScrollReveal() {
    const storyItems = document.querySelectorAll('.story-item');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay for smoother effect
                setTimeout(() => {
                    entry.target.classList.remove('opacity-0', 'translate-y-16');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                }, index * 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    storyItems.forEach(item => {
        observer.observe(item);
    });
}

// ========================================
// FAB BUTTON ANIMATION ON SCROLL
// ========================================
function initFABAnimation() {
    const fabContainer = document.getElementById('fabContainer');
    const fabButton = document.getElementById('fabButton');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercentage = (scrollPosition / documentHeight) * 100;
        
        // Show FAB when scrolled 85% or more (near the end)
        if (scrollPercentage >= 95) {
            fabContainer.classList.remove('opacity-0', 'invisible');
            fabContainer.classList.add('opacity-100', 'visible');
            fabButton.classList.add('fab-show');
        } else {
            fabContainer.classList.remove('opacity-100', 'visible');
            fabContainer.classList.add('opacity-0', 'invisible');
            fabButton.classList.remove('fab-show');
        }
    });
}

// ========================================
// HEADER SHADOW ON SCROLL
// ========================================
function initHeaderEffect() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shadow-sm');
        } else {
            header.classList.remove('shadow-sm');
        }
    });
}

// ========================================
// PARALLAX EFFECT (SUBTLE)
// ========================================
function initParallaxEffect() {
    const heroSection = document.querySelector('section');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (heroSection && scrolled < window.innerHeight) {
            heroSection.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroSection.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
        }
    });
}

// ========================================
// FLOATING HEARTS ANIMATION
// ========================================
function createFloatingHeart() {
    const heartsContainer = document.getElementById('heartsContainer');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    
    // Random horizontal position
    const randomX = Math.random() * window.innerWidth;
    heart.style.left = randomX + 'px';
    heart.style.bottom = '0px';
    
    // Random animation delay and duration
    const randomDelay = Math.random() * 3;
    const randomDuration = 5 + Math.random() * 3;
    heart.style.animationDelay = randomDelay + 's';
    heart.style.animationDuration = randomDuration + 's';
    
    // Random size
    const randomSize = 20 + Math.random() * 20;
    heart.style.fontSize = randomSize + 'px';
    
    heartsContainer.appendChild(heart);
    
    // Remove heart after animation completes
    setTimeout(() => {
        heart.remove();
    }, (randomDuration + randomDelay) * 1000);
}

function initFloatingHearts() {
    // Create hearts at intervals
    setInterval(() => {
        createFloatingHeart();
    }, 800);
    
    // Create initial burst of hearts
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createFloatingHeart();
        }, i * 200);
    }
}

// ========================================
// COVER PAGE - INTRO SCREEN
// ========================================
function initCoverPage() {
    const coverPage = document.getElementById('coverPage');
    const enterButton = document.getElementById('enterButton');
    const pageLoader = document.getElementById('pageLoader');
    
    enterButton.addEventListener('click', () => {
        // Hide cover page
        coverPage.classList.add('hidden');
        
        // Show page loader
        pageLoader.classList.remove('hidden');
        
        // Hide loader after delay
        setTimeout(() => {
            pageLoader.classList.add('hidden');
        }, 1500);
    });
}

// ========================================
// PAGE LOADER
// ========================================
function initPageLoader() {
    // Page loader is now controlled by cover page
    // No automatic hiding on window load
}

// ========================================
// INITIALIZE ALL FUNCTIONS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize cover page first
    initCoverPage();
    
    // Initialize page loader
    initPageLoader();
    
    // Initialize hero animation
    initHeroAnimation();
    
    // Initialize scroll reveal
    initScrollReveal();
    
    // Initialize story scroll reveal
    initStoryScrollReveal();
    
    // Initialize sidebar drawer
    initSidebarDrawer();
    
    // Initialize smooth scroll
    initSmoothScroll();
    
    // Initialize FAB animation
    initFABAnimation();
    
    // Initialize scroll to top
    initScrollToTop();
    
    // Initialize header effect
    initHeaderEffect();
    
    // Initialize parallax effect
    initParallaxEffect();
    
    // Initialize floating hearts
    initFloatingHearts();
    
    // Update progress bar on scroll
    window.addEventListener('scroll', updateProgressBar);
    
    // Initialize progress bar
    updateProgressBar();
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
const optimizedProgressUpdate = debounce(updateProgressBar, 10);
window.addEventListener('scroll', optimizedProgressUpdate);