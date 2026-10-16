document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger) hamburger.classList.remove('active');
            if (navLinks) navLinks.classList.remove('active');
        });
    });

    // 2. Sticky Navbar Background on Scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Product Catalog Logic
    const productsGrid = document.getElementById('productsGrid');
    const searchInput = document.getElementById('productSearchInput');
    const categoryPills = document.querySelectorAll('.cat-pill');
    const sortSelect = document.getElementById('sortProducts');
    const productsCountText = document.getElementById('productsCountText');

    // Modal elements
    const imageModal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const modalWhatsAppBtn = document.getElementById('modalWhatsAppBtn');
    const modalCloseBtn = document.getElementById('modalCloseBtn');

    let currentCategory = 'all';
    let searchQuery = '';
    let currentSort = 'default';

    // Verify PRODUCTS_DATABASE exists
    const allProducts = (typeof PRODUCTS_DATABASE !== 'undefined' && Array.isArray(PRODUCTS_DATABASE)) 
        ? PRODUCTS_DATABASE 
        : [];

    function formatCurrency(num) {
        return '₹' + Number(num).toLocaleString('en-IN');
    }

    function renderProducts() {
        if (!productsGrid) return;

        // Filter by category
        let filtered = allProducts.filter(p => {
            if (currentCategory === 'all') return true;
            return p.category.toLowerCase() === currentCategory.toLowerCase();
        });

        // Filter by search query
        if (searchQuery.trim() !== '') {
            const q = searchQuery.toLowerCase().trim();
            filtered = filtered.filter(p => {
                return (
                    p.name.toLowerCase().includes(q) ||
                    p.brand.toLowerCase().includes(q) ||
                    p.category.toLowerCase().includes(q) ||
                    (p.specs && p.specs.some(s => s.toLowerCase().includes(q))) ||
                    (p.desc && p.desc.toLowerCase().includes(q))
                );
            });
        }

        // Sort products
        if (currentSort === 'price-asc') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (currentSort === 'price-desc') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (currentSort === 'name-asc') {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        }

        // Update count text
        if (productsCountText) {
            if (filtered.length === allProducts.length) {
                productsCountText.textContent = `Showing all ${filtered.length} products`;
            } else {
                productsCountText.textContent = `Showing ${filtered.length} of ${allProducts.length} products`;
            }
        }

        // Handle empty state
        if (filtered.length === 0) {
            productsGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1.5rem; background: rgba(26, 14, 46, 0.4); border-radius: 20px; border: 1px dashed var(--glass-border);">
                    <i class="fa-solid fa-box-open" style="font-size: 3rem; color: var(--accent-magenta-light); margin-bottom: 1rem;"></i>
                    <h3 style="font-size: 1.4rem; color: #fff; margin-bottom: 0.5rem;">No products match your search</h3>
                    <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Try different keywords or clear your search filter.</p>
                    <button id="clearFiltersBtn" class="btn btn-primary" style="padding: 0.6rem 1.5rem; font-size: 0.9rem;">Reset Filters</button>
                </div>
            `;
            const clearBtn = document.getElementById('clearFiltersBtn');
            if (clearBtn) {
                clearBtn.addEventListener('click', () => {
                    searchQuery = '';
                    if (searchInput) searchInput.value = '';
                    currentCategory = 'all';
                    categoryPills.forEach(p => p.classList.remove('active'));
                    const allPill = document.querySelector('.cat-pill[data-category="all"]');
                    if (allPill) allPill.classList.add('active');
                    renderProducts();
                });
            }
            return;
        }

        // Generate product HTML
        productsGrid.innerHTML = filtered.map(p => {
            const discount = (p.mrp && p.mrp > p.price) 
                ? Math.round(((p.mrp - p.price) / p.mrp) * 100) 
                : 0;

            const waText = encodeURIComponent(`Hello Shri Computech, I am interested in buying "${p.name}" (Price: ${formatCurrency(p.price)}). Is this available in stock?`);
            const waUrl = `https://wa.me/917000340148?text=${waText}`;

            const specsHtml = (p.specs && p.specs.length > 0)
                ? p.specs.slice(0, 3).map(s => `<span class="spec-badge">${s}</span>`).join('')
                : '';

            return `
                <div class="product-card" data-id="${p.id}">
                    <div class="product-card-top" onclick="window.openProductModal(${p.id})">
                        ${p.badge ? `<span class="product-badge-tag">${p.badge}</span>` : ''}
                        <span class="product-brand-tag">${p.brand}</span>
                        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=500&q=80';">
                        <div class="product-zoom-hint" title="Click to enlarge">
                            <i class="fa-solid fa-expand"></i>
                        </div>
                    </div>
                    
                    <div class="product-card-body">
                        <div class="product-cat-name">${p.category}</div>
                        <h3 class="product-item-title" title="${p.name}">${p.name}</h3>
                        
                        <div class="product-specs-list">
                            ${specsHtml}
                        </div>
                        
                        <div class="product-price-section">
                            <div class="price-main-box">
                                <span class="price-val">${formatCurrency(p.price)}</span>
                                ${p.mrp ? `<span class="price-mrp-val">${formatCurrency(p.mrp)}</span>` : ''}
                            </div>
                            ${discount > 0 ? `<span class="discount-badge">${discount}% OFF</span>` : ''}
                        </div>
                        
                        <div class="product-btn-group">
                            <a href="${waUrl}" target="_blank" class="btn-order-wa" aria-label="Order ${p.name} on WhatsApp">
                                <i class="fa-brands fa-whatsapp"></i> Buy on WhatsApp
                            </a>
                            <a href="tel:7000340148" class="btn-call-item" title="Call to inquire" aria-label="Call Shri Computech">
                                <i class="fa-solid fa-phone"></i>
                            </a>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Modal view function
    window.openProductModal = function(productId) {
        const prod = allProducts.find(p => p.id === productId);
        if (!prod || !imageModal) return;

        modalImg.src = prod.image;
        modalImg.alt = prod.name;
        modalTitle.textContent = prod.name;
        modalPrice.textContent = formatCurrency(prod.price);

        const waText = encodeURIComponent(`Hello Shri Computech, I want to inquire about "${prod.name}" (Price: ${formatCurrency(prod.price)}).`);
        modalWhatsAppBtn.href = `https://wa.me/917000340148?text=${waText}`;

        imageModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    function closeModal() {
        if (!imageModal) return;
        imageModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    if (imageModal) {
        imageModal.addEventListener('click', (e) => {
            if (e.target === imageModal) closeModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && imageModal && imageModal.classList.contains('active')) {
            closeModal();
        }
    });

    // Event Listeners for Filters
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            renderProducts();
        });
    }

    if (categoryPills) {
        categoryPills.forEach(pill => {
            pill.addEventListener('click', () => {
                categoryPills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                currentCategory = pill.getAttribute('data-category') || 'all';
                renderProducts();
            });
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderProducts();
        });
    }

    // Initial render
    renderProducts();

    // 4. Scroll-triggered Animations using IntersectionObserver
    const animationSelectors = [
        '.animate-fade-in-up',
        '.animate-fade-in-left'
    ];

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animationSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => observer.observe(el));
    });
});
