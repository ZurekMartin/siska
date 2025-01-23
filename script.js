document.addEventListener('DOMContentLoaded', function() {
    const services = [
        {
            icon: "🏠",
            title: "Complete Renovation",
            description: "From design to implementation, we transform your space into a modern home",
            features: ["Total renovation", "Construction modifications", "Project documentation", "Design consulting"],
            type: "residential"
        },
        {
            icon: "🛁",
            title: "Bathrooms and Kitchens",
            description: "Luxury solutions for your bathrooms and kitchens",
            features: ["Modern equipment", "Waterproof insulation", "Underfloor heating", "Smart appliances"],
            type: "residential"
        },
        {
            icon: "🎨",
            title: "Interior Design",
            description: "Professional custom interior designs",
            features: ["3D visualization", "Material selection", "Color concepts", "Custom furniture"],
            type: "residential"
        },
        {
            icon: "🏢",
            title: "Commercial Spaces",
            description: "Renovation of shops, offices, and restaurants",
            features: ["Space optimization", "Corporate identity", "Technical background", "Time management"],
            type: "commercial"
        },
        {
            icon: "🌿",
            title: "Exteriors",
            description: "Complete solutions for outdoor spaces",
            features: ["Terraces", "Facades", "Garden modifications", "Outdoor lighting"],
            type: "residential"
        },
        {
            icon: "⚡",
            title: "Technical Installations",
            description: "Modern technical equipment for your home",
            features: ["Electrical installations", "Heating", "Air conditioning", "Smart home"],
            type: "residential"
        },
        {
            icon: "🏗️",
            title: "Construction Work",
            description: "Comprehensive construction services",
            features: ["Extensions", "Additions", "Demolition", "Structural modifications"],
            type: "residential"
        }
    ];

    // Aktualizace roku v patičce
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    const servicesGrid = document.getElementById('services-grid');
    const tabBtns = document.querySelectorAll('.tab-btn');

    function renderServices(type) {
        servicesGrid.innerHTML = services
            .filter(service => service.type === type)
            .map(service => `
                <div class="service-card">
                    <div class="service-icon">${service.icon}</div>
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                    <ul>
                        ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
            `).join('');
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderServices(btn.dataset.tab);
        });
    });

    // Inicializace s residenčními službami
    renderServices('residential');

    // Animace pro scroll reveal
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .project-card, .team-member').forEach(el => {
        observer.observe(el);
    });
}); 