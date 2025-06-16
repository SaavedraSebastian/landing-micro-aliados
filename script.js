 tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#2563EB',
                        secondary: '#10B981',
                        dark: '#1E293B',
                        light: '#F9FAFB',
                        gray: '#64748B',
                        lightgray: '#E2E8F0'
                    },
                    fontFamily: {
                        heading: ['Montserrat', 'sans-serif'],
                        body: ['Open Sans', 'sans-serif']
                    }
                }
            }
        }
   
        document.addEventListener('DOMContentLoaded', function() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in');
                    }
                });
            }, {
                threshold: 0.1
            });
            
            document.querySelectorAll('section').forEach(section => {
                observer.observe(section);
            });
            
     
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 100,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
          
        document.getElementById('mobile-menu-btn').addEventListener('click', function() {
            document.getElementById('mobile-menu').classList.toggle('active');
        });
        
      
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('mobile-menu').classList.remove('active');
            });
        });
        
 
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
         tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#2563EB',
                        secondary: '#10B981',
                        dark: '#1E293B',
                        light: '#F9FAFB',
                        gray: '#64748B',
                        lightgray: '#E2E8F0'
                    },
                    fontFamily: {
                        heading: ['Montserrat', 'sans-serif'],
                        body: ['Open Sans', 'sans-serif']
                    }
                }
            }
        }
    
        document.addEventListener('DOMContentLoaded', function() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in');
                    }
                });
            }, {
                threshold: 0.1
            });
            
            document.querySelectorAll('section').forEach(section => {
                observer.observe(section);
            });
            
     
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 100,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
         const animateCounters = () => {
            const counters = document.querySelectorAll('.metric-item .text-2xl');
            
            counters.forEach(counter => {
                const target = parseInt(counter.textContent);
                const increment = target / 50;
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.textContent = target + (counter.textContent.includes('%') ? '%' : '+');
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(current) + (counter.textContent.includes('%') ? '%' : '+');
                    }
                }, 40);
            });
        };
        

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    if (entry.target.classList.contains('metric-item')) {
                        animateCounters();
                    }
                }
            });
        });
        
      
        document.querySelectorAll('.animate-fade-in-up, .animate-fade-in-right, .metric-item').forEach(el => {
            observer.observe(el);
        });
        
 
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px) scale(1.02)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
         document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const to = "saavedraarroyosebastianalonso@gmail.com"; // Cambia esto por tu correo
        const body = `Hola,%0D%0A%0D%0AMi nombre es ${name} y mi correo es ${email}.%0D%0A%0D%0A${message}%0D%0A%0D%0ASaludos.`;

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${body}`;

        window.open(gmailUrl, '_blank');
    });
     document.getElementById("video-container").addEventListener("click", function () {
    const thumbnail = document.getElementById("video-thumbnail");
    const playButton = document.getElementById("video-play-button");
    const iframe = document.getElementById("video-iframe");

    // Oculta el thumbnail y botón
    thumbnail.style.display = "none";
    playButton.style.display = "none";

    // Muestra el iframe y asigna el src con autoplay
    iframe.src = "https://www.youtube.com/embed/jb9iHFyk9nk?autoplay=1";
    iframe.classList.remove("hidden");
  });