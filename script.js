/**
 * Mr. Pool Leak Repair - Plano, TX
 * Main JavaScript File
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }
    
    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form Validation
    const inspectionForm = document.getElementById('inspectionForm');
    if (inspectionForm) {
        inspectionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            let isValid = true;
            const requiredFields = inspectionForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            // Email validation
            const emailField = inspectionForm.querySelector('input[type="email"]');
            if (emailField && emailField.value) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value)) {
                    isValid = false;
                    emailField.classList.add('error');
                }
            }
            
            // Phone validation
            const phoneField = inspectionForm.querySelector('input[type="tel"]');
            if (phoneField && phoneField.value) {
                const phonePattern = /^[\d\s\-\(\)]+$/;
                if (!phonePattern.test(phoneField.value)) {
                    isValid = false;
                    phoneField.classList.add('error');
                }
            }
            
            if (isValid) {
                // In a real implementation, this would submit the form data
                // For now, show a success message
                const formContainer = inspectionForm.parentElement;
                formContainer.innerHTML = `
                    <div class="form-success">
                        <h3>Thank You!</h3>
                        <p>Your inspection request has been submitted. We'll contact you within 24 hours to schedule your free inspection.</p>
                        <p>If you need immediate assistance, please call us at <a href="tel:214-972-3330">(214) 972-3330</a>.</p>
                    </div>
                `;
                
                // Scroll to the success message
                window.scrollTo({
                    top: formContainer.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Add scroll animation for elements
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .feature, .testimonial-card, .stat-card, .gallery-item, .warranty-card, .reason-card, .team-member, .cert-card, .value-card, .commitment-item, .trust-reason, .faq-item, .benefit-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };
    
    // Run animation check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on page load
    animateOnScroll();
    
    // Add CSS class for animation
    const style = document.createElement('style');
    style.textContent = `
        .service-card, .feature, .testimonial-card, .stat-card, .gallery-item, .warranty-card, .reason-card, .team-member, .cert-card, .value-card, .commitment-item, .trust-reason, .faq-item, .benefit-card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .service-card.animate, .feature.animate, .testimonial-card.animate, .stat-card.animate, .gallery-item.animate, .warranty-card.animate, .reason-card.animate, .team-member.animate, .cert-card.animate, .value-card.animate, .commitment-item.animate, .trust-reason.animate, .faq-item.animate, .benefit-card.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .error {
            border-color: #dc3545 !important;
        }
        
        .form-success {
            text-align: center;
            padding: 2rem;
            background-color: #f8f9fa;
            border-radius: 8px;
        }
        
        .form-success h3 {
            color: #28a745;
            margin-bottom: 1rem;
        }
    `;
    document.head.appendChild(style);
});