class SegundaSexta {
  constructor() {
    this.name = "Segunda a sexta-feira das 07:30 às 13:30";
  }

  getName() {
    return this.name;
  }
}

document.addEventListener('DOMContentLoaded', function() {
    const segundaSexta = new SegundaSexta();
    console.log(segundaSexta.getName());

    function init() {
        // Botão de menu mobile
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mobileMenu = document.querySelector('.mobile-menu');
        const closeMenu = document.querySelector('.close-menu');
        const overlay = document.querySelector('.overlay');
    
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.add('open');
            overlay.classList.add('visible');
            document.body.style.overflow = 'hidden';
        });
    
        closeMenu.addEventListener('click', function() {
            mobileMenu.classList.remove('open');
            overlay.classList.remove('visible');
            document.body.style.overflow = '';
        });
    
        overlay.addEventListener('click', function() {
            mobileMenu.classList.remove('open');
            overlay.classList.remove('visible');
            document.body.style.overflow = '';
        });
    
        // Navegação por tabs
        const navTabs = document.querySelectorAll('.nav-tab, .mobile-nav-btn');
    
        navTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const target = this.getAttribute('data-target');
            
                // Remover classe ativa de todos os tabs
                navTabs.forEach(t => t.classList.remove('active'));
            
                // Adicionar classe ativa ao tab clicado
                this.classList.add('active');
            
                // Fechar menu mobile após seleção
                if (this.classList.contains('mobile-nav-btn')) {
                    mobileMenu.classList.remove('open');
                    overlay.classList.remove('visible');
                    document.body.style.overflow = '';
                }
            
                // Rolar para a seção correspondente
                const section = document.getElementById(target);
                if (section) {
                    const headerHeight = document.querySelector('.department-nav').offsetHeight;
                    const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                    window.scrollTo({
                        top: sectionPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        const footerTextColorInput = document.getElementById('footerTextColor');
        const footerBottom = document.querySelector('.footer-bottom');

        footerTextColorInput.addEventListener('input', function() {
            footerBottom.style.color = this.value;
        });
    }

    // Botão de voltar ao topo
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Efeito hover nos cards de contato
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        contactCards.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Animação de scroll para as seções
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Adicionar animação aos cards
    const departmentCards = document.querySelectorAll('.department-card');
    departmentCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    init();
});
