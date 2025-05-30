
        // Language Toggle Functionality
        const langToggle = document.getElementById('langToggle');
        const langText = langToggle.querySelector('span');
        const elements = document.querySelectorAll('[data-en], [data-kn]');
        let currentLang = 'en';

        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'kn' : 'en';
            
            // Update button text
            if(currentLang === 'en') {
                langText.textContent = 'ಕನ್ನಡ';
                document.body.classList.remove('kannada');
            } else {
                langText.textContent = 'English';
                document.body.classList.add('kannada');
            }
            
            // Update all translatable elements
            elements.forEach(element => {
                if(element.dataset.en && element.dataset.kn) {
                    element.textContent = currentLang === 'en' ? element.dataset.en : element.dataset.kn;
                }
            });
        });

        

        // Header scroll effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });

        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');
        
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.innerHTML = navMenu.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Scroll to top button
        const scrollTopBtn = document.getElementById('scrollTop');
        
        window.addEventListener('scroll', () => {
            if(window.scrollY > 300) {
                scrollTopBtn.classList.add('active');
            } else {
                scrollTopBtn.classList.remove('active');
            }
        });
        
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Scroll animation for elements
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in, .destination-card').forEach(el => {
            observer.observe(el);
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                if(target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if(navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                }
            });
        });
    

        // contact form 

       const contactForm = document.querySelector('.contact-form form');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Optional: show success message
        alert(currentLang === 'en' 
            ? 'Thank you for your message! We will contact you soon.' 
            : 'ನಿಮ್ಮ ಸಂದೇಶಕ್ಕೆ ಧನ್ಯವಾದಗಳು! ನಾವು ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.');

        // Open Gmail with pre-filled content
        const subject = encodeURIComponent("Contact Form Submission");
        const body = encodeURIComponent("Hello,\n\nI have submitted my message through your contact form.\n\nThank you.");
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=praveenhallur2003@gmail.com&su=${subject}&body=${body}`;

        window.open(gmailUrl, '_blank');

        this.reset();
    });
}


        
        