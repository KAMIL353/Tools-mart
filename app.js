/* App.js - Tools Mart Interactive Digital Showroom Logic */

// ==========================================================================
// 1. PRODUCT DATABASE
// ==========================================================================
const initialCatalogData = [
    {
        id: "prod-makita-hp1630",
        brand: "Makita",
        name: "Hammer Drill",
        modelNumber: "HP1630",
        power: "710W",
        size: "13mm",
        weight: "2.1 kg",
        function: "High-speed percussion drilling in masonry, concrete, wood, and steel.",
        category: "drilling",
        image: null,
        inStock: true
    },
    {
        id: "prod-dongcheng-dzj08",
        brand: "Dongcheng",
        name: "Impact Drill",
        modelNumber: "DZJ08-13",
        power: "720W",
        size: "13mm",
        weight: "2.0 kg",
        function: "Robust impact drilling for brick wall surface mounting and general repairs.",
        category: "drilling",
        image: null,
        inStock: true
    },
    {
        id: "prod-bosch-gbh226",
        brand: "Bosch",
        name: "Rotary Hammer (SDS-Plus)",
        modelNumber: "GBH 2-26 DRE",
        power: "800W",
        size: "26mm",
        weight: "2.7 kg",
        function: "High-impact concrete drilling and light chipping for building plumbing/electrical work.",
        category: "drilling",
        image: null,
        inStock: true
    },
    {
        id: "prod-dongcheng-z1g15",
        brand: "Dongcheng",
        name: "Demolition Hammer",
        modelNumber: "Z1G-FF-15",
        power: "1500W",
        size: "30mm Hex",
        weight: "15.0 kg",
        function: "Heavy-duty concrete breaking, slab fracturing, and building structural demolition.",
        category: "concrete",
        image: null,
        inStock: true
    },
    {
        id: "prod-dongcheng-dmy02",
        brand: "Dongcheng",
        name: "Circular Saw",
        modelNumber: "DMY02-185",
        power: "1100W",
        size: "185mm",
        weight: "3.6 kg",
        function: "Straight cuts and bevel cutting in solid wood boards and laminates.",
        category: "cutting",
        image: null,
        inStock: true
    },
    {
        id: "prod-makita-5704r",
        brand: "Makita",
        name: "Circular Saw",
        modelNumber: "5704R",
        power: "1200W",
        size: "190mm",
        weight: "4.6 kg",
        function: "Professional high-precision rip cutting and transverse crosscuts in timber.",
        category: "cutting",
        image: null,
        inStock: true
    },
    {
        id: "prod-dongcheng-dsm02",
        brand: "Dongcheng",
        name: "Angle Grinder",
        modelNumber: "DSM02-100",
        power: "570W",
        size: "100mm",
        weight: "1.6 kg",
        function: "Cutting structural steel pipe, weld grinding, and stone grinding.",
        category: "cutting",
        image: null,
        inStock: true
    },
    {
        id: "prod-makita-m0900b",
        brand: "Makita",
        name: "MT Series Angle Grinder",
        modelNumber: "M0900B",
        power: "540W",
        size: "100mm",
        weight: "1.6 kg",
        function: "Reliable semi-professional grinding and cutting for light steel fabricating.",
        category: "kits",
        image: null,
        inStock: true
    },
    {
        id: "prod-makita-m1901b",
        brand: "Makita",
        name: "Planing Machine",
        modelNumber: "M1901B",
        power: "580W",
        size: "82mm",
        weight: "2.7 kg",
        function: "Shaving and leveling timber surfaces for doors, windows, and tables.",
        category: "surface",
        image: null,
        inStock: true
    },
    {
        id: "prod-dongcheng-dsp02",
        brand: "Dongcheng",
        name: "Sanding & Polisher",
        modelNumber: "DSP02-180",
        power: "1200W",
        size: "180mm",
        weight: "3.4 kg",
        function: "Premium vertical car waxing, paint polishing, and wood surface sanding.",
        category: "surface",
        image: null,
        inStock: true
    },
    {
        id: "prod-dongcheng-wqx130",
        brand: "Dongcheng",
        name: "Pressure Washer",
        modelNumber: "WQX-130",
        power: "1600W",
        size: "130 Bar",
        weight: "11.2 kg",
        function: "High-pressure wash for car grooming, wall moss removal, and job site cleanup.",
        category: "outdoor",
        image: null,
        inStock: true
    },
    {
        id: "prod-cummins-silent15",
        brand: "Cummins",
        name: "Silent Diesel Generator",
        modelNumber: "C15D5",
        power: "15 KVA",
        size: "Three Phase",
        weight: "680 kg",
        function: "Emergency power backup for offices, small hotels, and retail shops during blackouts.",
        category: "infrastructure",
        image: null,
        inStock: true
    },
    {
        id: "prod-honda-ep3000",
        brand: "Honda",
        name: "Portable Petrol Generator",
        modelNumber: "EP3000",
        power: "3.0 KVA",
        size: "Single Phase",
        weight: "45.0 kg",
        function: "Portable standby electricity for household lights, fans, fridge, and laptops.",
        category: "infrastructure",
        image: null,
        inStock: true
    },
    {
        id: "prod-makita-combo18",
        brand: "Makita",
        name: "Cordless Combo Kit",
        modelNumber: "DK18000",
        power: "18V Lithium",
        size: "2-Tool Set",
        weight: "4.5 kg",
        function: "Mobile wood/metal drilling and angle grinding kit with two 3.0Ah battery packs.",
        category: "kits",
        image: null,
        inStock: true
    }
];

// ==========================================================================
// SUPABASE DATABASE CONFIGURATION (Optional - Fallbacks to localStorage)
// ==========================================================================
// Fill in your Supabase project details to save changes to the cloud database
const SUPABASE_URL = "https://hpwxuczayychwgiqdjow.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhwd3h1Y3pheXljaHdnaXFkam93Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MzYxODI5MywiZXhwIjoyMDk5MTk0MjkzfQ.reO2OuIzdS8s5wUX5CmdNiApiXzYnxx96YyYiKuHdQo";

let supabaseClient = null;
if (typeof supabase !== 'undefined' && SUPABASE_URL && SUPABASE_URL !== 'YOUR_SUPABASE_URL' && SUPABASE_ANON_KEY && SUPABASE_ANON_KEY !== 'YOUR_SUPABASE_ANON_KEY') {
    try {
        supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log('Supabase client initialized successfully.');
    } catch (e) {
        console.error('Failed to initialize Supabase client:', e);
    }
}

// Load catalog data from localStorage if exists, else fallback to initial defaults
let catalogData = [];
try {
    const storedData = localStorage.getItem('tools_mart_catalog');
    const isInitialized = localStorage.getItem('tools_mart_catalog_initialized');
    
    if (storedData && isInitialized === 'true') {
        catalogData = JSON.parse(storedData);
    } else {
        catalogData = [...initialCatalogData];
    }
} catch (e) {
    catalogData = [...initialCatalogData];
}

// WhatsApp Target phone configuration
const storeWhatsAppNumber = "94764714343";

// ==========================================================================
// 2. STATE MANAGEMENT
// ==========================================================================
const appState = {
    // Catalog State
    activeCategoryFilter: 'all',
    searchQuery: '',
    
    // Generator Load Calculator State
    appliances: {
        lights: 0,
        fans: 0,
        fridge: 0,
        ac: 0,
        pump: 0,
        tools: 0,
        machinery: 0
    },
    isAdminLoggedIn: false
};

// ==========================================================================
// 3. DOM ELEMENTS SELECTION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // Header & Mobile Nav Elements
    const mainHeader = document.getElementById('main-header');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const drawerClose = document.getElementById('drawer-close');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const drawerLinks = document.querySelectorAll('.drawer-link');
    const navLinks = document.querySelectorAll('.nav-link');
    const headerSearch = document.getElementById('header-search');
    
    // Mobile Search DOM Elements
    const mobileSearchBtn = document.getElementById('mobile-search-btn');
    const mobileSearchBar = document.getElementById('mobile-search-bar');
    const mobileSearchInputHeader = document.getElementById('mobile-search-input-header');
    

    
    // Catalog DOM Elements
    const catalogSearchInput = document.getElementById('catalog-search-input');
    const catalogTabs = document.querySelectorAll('.filter-tab');
    const catalogGrid = document.getElementById('catalog-grid');
    const catalogEmptyState = document.getElementById('catalog-empty-state');
    const btnResetCatalog = document.getElementById('btn-reset-catalog');
    
    // Calculator DOM Elements
    const calcContainer = document.getElementById('calc-panel');
    const calcTotalWatts = document.getElementById('calc-total-watts');
    const calcRecommendedKva = document.getElementById('calc-recommended-kva');
    const calcGaugeFill = document.getElementById('calc-gauge-fill');
    const calcClassTitle = document.getElementById('calc-class-title');
    const calcClassDesc = document.getElementById('calc-class-desc');
    const btnCalcWhatsapp = document.getElementById('btn-calc-whatsapp');
    
    // Contact Form Elements
    const contactForm = document.getElementById('contact-form');
    const formSuccessBanner = document.getElementById('form-success-banner');

    // Admin Portal Selectors
    const navAdminBtn = document.getElementById('nav-admin-btn');
    const drawerAdminBtn = document.getElementById('drawer-admin-btn');
    const footerAdminBtn = document.getElementById('footer-admin-btn');
    const adminLoginModal = document.getElementById('admin-login-modal');
    const adminLoginClose = document.getElementById('admin-login-close');
    const adminLoginCancel = document.getElementById('admin-login-cancel');
    const adminLoginForm = document.getElementById('admin-login-form');
    const adminPasswordInput = document.getElementById('admin-password');
    const adminDashboard = document.getElementById('admin-dashboard');
    const adminLogoutBtn = document.getElementById('admin-logout-btn');
    const adminAddProductForm = document.getElementById('admin-add-product-form');
    const prodImageInput = document.getElementById('prod-image');
    const imageDropzone = document.getElementById('image-dropzone');
    const imagePreviewContainer = document.getElementById('image-preview-container');
    const imagePreview = document.getElementById('image-preview');
    const removeImageBtn = document.getElementById('remove-image-btn');

    // Delete Confirmation Modal Selectors
    const deleteConfirmModal = document.getElementById('delete-confirm-modal');
    const deleteConfirmClose = document.getElementById('delete-confirm-close');
    const deleteConfirmCancel = document.getElementById('delete-confirm-cancel');
    const deleteConfirmSubmit = document.getElementById('delete-confirm-submit');
    const deleteProductDetails = document.getElementById('delete-product-details');
    let productIdToDelete = null;

    // ==========================================================================
    // 4. STICKY HEADER & NAV CONTROLLER
    // ==========================================================================
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
        
        // Dynamic active section indicator
        const scrollPosition = window.scrollY + 120;
        const sections = ['hero', 'products-section', 'generator-section', 'contact-section'];
        
        sections.forEach(secId => {
            const sectionEl = document.getElementById(secId);
            if (sectionEl) {
                const top = sectionEl.offsetTop;
                const height = sectionEl.offsetHeight;
                if (scrollPosition >= top && scrollPosition < top + height) {
                    // Update desktop nav
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${secId}`) {
                            link.classList.add('active');
                        }
                    });
                    // Update mobile drawer nav
                    drawerLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${secId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            }
        });
    });

    // Toggle Mobile Navigation Drawer
    function toggleDrawer(isOpen) {
        if (isOpen) {
            mobileDrawer.classList.add('open');
            drawerOverlay.classList.add('open');
            document.body.style.overflow = 'hidden'; // Stop body scrolling
        } else {
            mobileDrawer.classList.remove('open');
            drawerOverlay.classList.remove('open');
            document.body.style.overflow = ''; // Release body scroll
        }
    }

    mobileMenuBtn.addEventListener('click', () => toggleDrawer(true));
    drawerClose.addEventListener('click', () => toggleDrawer(false));
    drawerOverlay.addEventListener('click', () => toggleDrawer(false));
    
    drawerLinks.forEach(link => {
        link.addEventListener('click', () => toggleDrawer(false));
    });

    // Toggle Mobile Search Bar
    if (mobileSearchBtn) {
        mobileSearchBtn.addEventListener('click', () => {
            const isSearchOpen = mobileSearchBar.style.display === 'block';
            if (isSearchOpen) {
                mobileSearchBar.style.display = 'none';
                mobileSearchBtn.querySelector('.icon-mobile-search').style.display = 'block';
                mobileSearchBtn.querySelector('.icon-mobile-close').style.display = 'none';
            } else {
                mobileSearchBar.style.display = 'block';
                mobileSearchBtn.querySelector('.icon-mobile-search').style.display = 'none';
                mobileSearchBtn.querySelector('.icon-mobile-close').style.display = 'block';
                setTimeout(() => mobileSearchInputHeader.focus(), 100);
            }
        });
    }

    if (mobileSearchInputHeader) {
        mobileSearchInputHeader.addEventListener('input', (e) => {
            const query = e.target.value;
            catalogSearchInput.value = query;
            headerSearch.value = query;
            appState.searchQuery = query.toLowerCase();
            
            // Scroll catalog to view if user searches from header
            if (query.trim() !== '') {
                const catalogSection = document.getElementById('products-section');
                if (catalogSection) {
                    catalogSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
            renderCatalog();
        });
    }

    // Synchronize Header Quick Search with Catalog Search
    headerSearch.addEventListener('input', (e) => {
        const query = e.target.value;
        catalogSearchInput.value = query;
        if (mobileSearchInputHeader) mobileSearchInputHeader.value = query;
        appState.searchQuery = query.toLowerCase();
        
        // Scroll catalog to view if user searches from header
        if (query.trim() !== '') {
            const catalogSection = document.getElementById('products-section');
            if (catalogSection) {
                catalogSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
        renderCatalog();
    });



    // ==========================================================================
    // 6. DYNAMIC SHOWROOM PRODUCT CATALOG
    // ==========================================================================
    function deleteProduct(id) {
        productIdToDelete = id;
        const prod = catalogData.find(item => String(item.id) === String(id));
        if (prod) {
            deleteProductDetails.textContent = `${prod.brand || ''} ${prod.name || ''} (Model: ${prod.modelNumber || ''})`;
        } else {
            deleteProductDetails.textContent = "Selected Product";
        }
        toggleDeleteConfirmModal(true);
    }

    function renderCatalog() {
        catalogGrid.innerHTML = '';
        const filter = appState.activeCategoryFilter;
        const query = appState.searchQuery;

        // Apply filters & search logic
        const filteredCatalog = catalogData.filter(item => {
            const matchesFilter = filter === 'all' || item.category === filter;
            
            // Search inside brand, name, modelNumber, function or category
            const matchesSearch = query === '' || 
                (item.brand && item.brand.toLowerCase().includes(query)) ||
                (item.name && item.name.toLowerCase().includes(query)) || 
                (item.modelNumber && item.modelNumber.toLowerCase().includes(query)) ||
                (item.function && item.function.toLowerCase().includes(query));
                
            return matchesFilter && matchesSearch;
        });

        // Toggle Empty state visual frame
        if (filteredCatalog.length === 0) {
            catalogGrid.style.display = 'none';
            catalogEmptyState.style.display = 'flex';
            return;
        } else {
            catalogGrid.style.display = 'grid';
            catalogEmptyState.style.display = 'none';
        }

        // Render card items
        filteredCatalog.forEach(item => {
            const card = document.createElement('article');
            card.className = 'catalog-card';
            card.style.position = 'relative';
            
            const stockStatus = item.inStock ? '✅ In Stock' : '🔄 Order Only';
            const whatsappText = encodeURIComponent(
`🔧 *Product Inquiry — RIMZAN MOTORS & TOOLSMART*

Hello! I would like to get details and pricing for the following product:

━━━━━━━━━━━━━━━━━━━━
🏷️ *Brand:* ${item.brand || 'N/A'}
🔩 *Product:* ${item.name || 'N/A'}
📋 *Model No:* ${item.modelNumber || 'N/A'}
⚡ *Power:* ${item.power || 'N/A'}
📐 *Size:* ${item.size || 'N/A'}
⚖️ *Weight:* ${item.weight || 'N/A'}
📦 *Availability:* ${stockStatus}
━━━━━━━━━━━━━━━━━━━━

Could you please share:
• 💰 Best price / offer
• 🚚 Delivery options
• 🛡️ Warranty details

Thank you! 🙏`);
            
            // Render custom image if present
            const imageMarkup = item.image ? `
                <div class="catalog-card-image-box">
                    <img src="${item.image}" class="catalog-card-image" alt="${item.brand} ${item.name}">
                </div>
            ` : `
                <div class="catalog-card-image-box fallback-image-box">
                    <div class="fallback-icon">${getCategoryEmoji(item.category)}</div>
                </div>
            `;

            // Render admin controls if logged in
            const adminActionsMarkup = appState.isAdminLoggedIn ? `
                <div class="admin-card-actions">
                    <button type="button" class="btn-delete-prod" data-id="${item.id}">Delete</button>
                </div>
            ` : '';
            
            card.innerHTML = `
                ${adminActionsMarkup}
                <div class="card-top">
                    ${imageMarkup}
                    <div class="card-header-row" style="margin-top: 10px;">
                        ${item.brand ? `<span class="brand-badge">${item.brand}</span>` : ''}
                        <span class="stock-badge ${item.inStock ? 'instock' : 'order'}">${item.inStock ? 'In Stock' : 'Order Only'}</span>
                    </div>
                    <h3 class="catalog-card-title">${item.name}</h3>
                    
                    <div class="product-details-grid">
                        ${item.modelNumber ? `<div class="detail-item"><span class="detail-label">Model:</span><span class="detail-value">${item.modelNumber}</span></div>` : ''}
                        ${item.power ? `<div class="detail-item"><span class="detail-label">Power:</span><span class="detail-value">${item.power}</span></div>` : ''}
                        ${item.size ? `<div class="detail-item"><span class="detail-label">Size:</span><span class="detail-value">${item.size}</span></div>` : ''}
                        ${item.weight ? `<div class="detail-item"><span class="detail-label">Weight:</span><span class="detail-value">${item.weight}</span></div>` : ''}
                    </div>
                    
                    ${item.function ? `<p class="catalog-card-desc"><strong>Function:</strong> ${item.function}</p>` : ''}
                </div>
                <div class="card-bottom">
                    <a href="https://wa.me/${storeWhatsAppNumber}?text=${whatsappText}" target="_blank" rel="noopener" class="btn btn-outline btn-full btn-sm">
                        <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.59 2.015 14.113.99 11.516.99c-5.44 0-9.866 4.372-9.87 9.802 0 1.714.47 3.393 1.358 4.881l-.997 3.641 3.75-.98c1.378.75 2.924 1.14 4.5 1.143h.001zm10.435-7.14c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.174.2-.298.3-.497.099-.198.05-.371-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/></svg>
                        <span>Request Details</span>
                    </a>
                </div>
            `;
            catalogGrid.appendChild(card);
        });

        // Hook up delete buttons dynamically
        if (appState.isAdminLoggedIn) {
            const deleteButtons = catalogGrid.querySelectorAll('.btn-delete-prod');
            deleteButtons.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const prodId = e.currentTarget.dataset.id;
                    deleteProduct(prodId);
                });
            });
        }
    }

    function getCategoryEmoji(category) {
        const emojiMap = {
            drilling: "🔌",
            concrete: "💥",
            cutting: "🪚",
            surface: "✨",
            outdoor: "💦",
            infrastructure: "🔋",
            kits: "🧳",
            lifestyle: "👕"
        };
        return emojiMap[category] || "🛠️";
    }

    // Filter Tabs Click Logic
    catalogTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            catalogTabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            
            const currentTab = e.currentTarget;
            currentTab.classList.add('active');
            currentTab.setAttribute('aria-selected', 'true');
            
            appState.activeCategoryFilter = currentTab.dataset.filter;
            renderCatalog();
        });
    });

    // Realtime Catalog search filter input
    catalogSearchInput.addEventListener('input', (e) => {
        appState.searchQuery = e.target.value.toLowerCase();
        headerSearch.value = e.target.value; // Sync small header search
        if (mobileSearchInputHeader) mobileSearchInputHeader.value = e.target.value; // Sync mobile search
        renderCatalog();
    });

    // Reset Catalog Search button
    btnResetCatalog.addEventListener('click', () => {
        catalogSearchInput.value = '';
        headerSearch.value = '';
        if (mobileSearchInputHeader) mobileSearchInputHeader.value = '';
        appState.searchQuery = '';
        appState.activeCategoryFilter = 'all';
        
        catalogTabs.forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
        });
        document.getElementById('tab-all').classList.add('active');
        document.getElementById('tab-all').setAttribute('aria-selected', 'true');
        
        renderCatalog();
    });

    // Load products database from Supabase/API (fallback to localStorage/defaults)
    async function loadCatalogDatabase() {
        // --- 1. Supabase Cloud Database Flow ---
        if (supabaseClient) {
            try {
                console.log('Loading catalog from Supabase Database...');
                const { data, error } = await supabaseClient
                    .from('products')
                    .select('*')
                    .order('created_at', { ascending: True });

                if (error) throw error;

                if (!data || data.length === 0) {
                    console.log('Supabase table empty. Seeding initial defaults...');
                    const seedData = initialCatalogData.map(item => ({
                        id: item.id,
                        brand: item.brand || '',
                        name: item.name,
                        modelNumber: item.modelNumber || '',
                        modelnumber: item.modelNumber || '',
                        power: item.power || '',
                        size: item.size || '',
                        weight: item.weight || '',
                        function: item.function || '',
                        category: item.category,
                        inStock: item.inStock,
                        instock: item.inStock,
                        image: item.image
                    }));
                    
                    const { error: seedError } = await supabaseClient
                        .from('products')
                        .insert(seedData);

                    if (seedError) throw seedError;
                    catalogData = [...initialCatalogData];
                    showToast('Database initialized and seeded to Supabase Cloud.', 'success');
                } else {
                    // Map data robustly to support both lowercase (Postgres default) and camelCase properties
                    catalogData = data.map(item => ({
                        id: item.id,
                        brand: item.brand || '',
                        name: item.name,
                        modelNumber: item.modelNumber || item.modelnumber || '',
                        power: item.power || '',
                        size: item.size || '',
                        weight: item.weight || '',
                        function: item.function || '',
                        category: item.category,
                        inStock: item.inStock !== undefined ? item.inStock : (item.instock !== undefined ? item.instock : true),
                        image: item.image
                    }));
                    console.log('Catalog loaded from Supabase database successfully.');
                    showToast('Showroom synchronized with Supabase Cloud.', 'success');
                }
                
                // Cache locally
                try {
                    localStorage.setItem('tools_mart_catalog', JSON.stringify(catalogData));
                    localStorage.setItem('tools_mart_catalog_initialized', 'true');
                } catch (e) {}
                renderCatalog();
                return;
            } catch (err) {
                console.error('Supabase query failed, falling back to local storage:', err);
                showToast('Cloud database sync offline. Using local backup.', 'warning');
            }
        }

        // --- 2. Local Python Server database flow ---
        try {
            const response = await fetch('/api/products');
            if (response.ok) {
                const data = await response.json();
                if (data.initialized === false) {
                    console.log('API database not initialized. Seeding default products...');
                    await fetch('/api/products/initialize', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(initialCatalogData)
                    });
                    catalogData = [...initialCatalogData];
                } else {
                    catalogData = data;
                }
                // Sync back to local storage
                try {
                    localStorage.setItem('tools_mart_catalog', JSON.stringify(catalogData));
                    localStorage.setItem('tools_mart_catalog_initialized', 'true');
                } catch (e) {}
                renderCatalog();
                return;
            }
        } catch (err) {
            console.warn('Backend API database unavailable, using localStorage database:', err);
        }

        // --- 3. Browser Local Storage database flow ---
        try {
            const storedData = localStorage.getItem('tools_mart_catalog');
            const isInitialized = localStorage.getItem('tools_mart_catalog_initialized');
            if (storedData && isInitialized === 'true') {
                catalogData = JSON.parse(storedData);
            } else {
                catalogData = [...initialCatalogData];
                localStorage.setItem('tools_mart_catalog', JSON.stringify(catalogData));
                localStorage.setItem('tools_mart_catalog_initialized', 'true');
            }
        } catch (e) {
            catalogData = [...initialCatalogData];
        }
        renderCatalog();
    }

    // Initial render
    loadCatalogDatabase();

    // ==========================================================================
    // 7. GENERATOR LOAD CALCULATOR
    // ==========================================================================
    const calcRows = calcContainer ? calcContainer.querySelectorAll('.appliance-row') : [];

    const surgeMultipliers = {
        lights: 1.0,
        fans: 1.5,
        fridge: 3.0,
        ac: 2.5,
        pump: 3.0,
        tools: 2.0,
        machinery: 2.5
    };

    if (calcContainer && calcRows.length > 0) {
        calcRows.forEach(row => {
            const minusBtn = row.querySelector('.qty-minus');
            const plusBtn = row.querySelector('.qty-plus');
            const input = row.querySelector('.qty-input');
            const applianceId = row.dataset.applianceId;
            
            if (minusBtn && plusBtn && input && applianceId) {
                minusBtn.addEventListener('click', () => {
                    let currentVal = parseInt(input.value, 10);
                    if (currentVal > 0) {
                        currentVal--;
                        input.value = currentVal;
                        appState.appliances[applianceId] = currentVal;
                        calculateGeneratorLoad();
                    }
                });

                plusBtn.addEventListener('click', () => {
                    let currentVal = parseInt(input.value, 10);
                    const maxVal = parseInt(input.getAttribute('max'), 10);
                    if (currentVal < maxVal) {
                        currentVal++;
                        input.value = currentVal;
                        appState.appliances[applianceId] = currentVal;
                        calculateGeneratorLoad();
                    }
                });
            }
        });
    }

    function calculateGeneratorLoad() {
        if (!calcContainer || calcRows.length === 0) return;

        let totalWatts = 0;
        let totalSurgeWatts = 0;
        let selectedAppliancesList = [];

        // Sum up watts across row elements
        calcRows.forEach(row => {
            const watts = parseInt(row.dataset.watts, 10);
            const qty = parseInt(row.querySelector('.qty-input').value, 10);
            const name = row.querySelector('.appliance-name').textContent;
            const applianceId = row.dataset.applianceId;
            
            if (qty > 0) {
                const running = watts * qty;
                const multiplier = surgeMultipliers[applianceId] || 1.0;
                const surge = running * multiplier;
                
                totalWatts += running;
                totalSurgeWatts += surge;
                selectedAppliancesList.push(`${name}: Qty ${qty} (${running}W, Surge: ${surge}W)`);
            }
        });

        if (calcTotalWatts) {
            calcTotalWatts.textContent = `${totalWatts.toLocaleString()} W`;
        }
        
        const calcSurgeWattsEl = document.getElementById('calc-surge-watts');
        if (calcSurgeWattsEl) {
            calcSurgeWattsEl.textContent = `${totalSurgeWatts.toLocaleString()} W`;
        }
        
        // Calculations: Safety factor multiplier 1.25, Power Factor 0.8 to find KVA
        // Formula: KVA = (PeakSurgeWatts * 1.25) / 1000 / 0.8 = PeakSurgeWatts * 1.5625 / 1000
        let kva = 0;
        if (totalSurgeWatts > 0) {
            kva = (totalSurgeWatts * 1.25) / 1000 / 0.8;
            if (calcRecommendedKva) {
                calcRecommendedKva.textContent = `${kva.toFixed(1)} KVA`;
            }
        } else {
            if (calcRecommendedKva) {
                calcRecommendedKva.textContent = `0.0 KVA`;
            }
        }

        // Update Gauge visualization bar
        // Scale bar between 0W and 12,000W based on surge load
        if (calcGaugeFill) {
            const maxGaugeWatts = 12000;
            const fillPercentage = Math.min((totalSurgeWatts / maxGaugeWatts) * 100, 100);
            calcGaugeFill.style.width = `${fillPercentage}%`;
        }

        // Determine generator scale profiles
        let classTitle = "No Load Selected";
        let classDesc = "Select appliances above to calculate power ratings.";
        
        if (totalSurgeWatts > 0) {
            if (kva <= 3.0) {
                classTitle = "Portable Petrol Generator (1 - 3 KVA)";
                classDesc = "Ideal for home standby, running lights, ceiling fans, LED TV, refrigerator, and small tools. Lightweight and fuel-efficient.";
            } else if (kva <= 10.0) {
                classTitle = "Medium Standby Generator (5 - 10 KVA)";
                classDesc = "Suitable for large homes or retail shops in Kalmunai. Powers multiple fans, lights, a refrigerator, water pump, and a 1.5 HP AC.";
            } else {
                classTitle = "Industrial Heavy Duty Diesel (15 KVA - 30+ KVA)";
                classDesc = "Perfect for offices, wedding halls, hotels, and industrial sites with high load machinery or central heavy air conditioners.";
            }
        }

        if (calcClassTitle) calcClassTitle.textContent = classTitle;
        if (calcClassDesc) calcClassDesc.textContent = classDesc;

        // WhatsApp message builder link update
        if (btnCalcWhatsapp) {
            if (totalSurgeWatts > 0) {
                const listText = selectedAppliancesList.join('\n- ');
                const message = `Hello RIMZAN MOTORS & TOOLSMART,\n\nI calculated my backup generator requirements using your website calculator:\n\n*Appliances Selected*:\n- ${listText}\n\n*Total Running Load*: ${totalWatts} W\n*Peak Surge Load*: ${totalSurgeWatts} W\n*Estimated Required Rating*: ${kva.toFixed(1)} KVA\n*Recommended Class*: ${classTitle}\n\nPlease send details and price quote.`;
                btnCalcWhatsapp.setAttribute('href', `https://wa.me/${storeWhatsAppNumber}?text=${encodeURIComponent(message)}`);
                btnCalcWhatsapp.style.pointerEvents = 'auto';
                btnCalcWhatsapp.classList.remove('btn-outline');
                btnCalcWhatsapp.classList.add('btn-primary');
            } else {
                btnCalcWhatsapp.setAttribute('href', '#');
                btnCalcWhatsapp.style.pointerEvents = 'none';
                btnCalcWhatsapp.classList.add('btn-outline');
                btnCalcWhatsapp.classList.remove('btn-primary');
            }
        }
    }

    // Initialize Calculator state
    calculateGeneratorLoad();

    // ==========================================================================
    // 8. TOAST NOTIFICATION SYSTEM
    // ==========================================================================
    function showToast(message, type = 'success') {
        const toastContainer = document.getElementById('toast-container');
        if (!toastContainer) return;
        
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <span class="toast-icon">${type === 'success' ? '✓' : '⚠️'}</span>
            <span class="toast-message">${message}</span>
        `;
        
        toastContainer.appendChild(toast);
        
        // Trigger transition
        setTimeout(() => toast.classList.add('show'), 10);
        
        // Auto remove
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    }

    // ==========================================================================
    // 9. CONTACT FORM SUBMISSION
    // ==========================================================================
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Extract values
            const name = document.getElementById('contact-name').value;
            const phone = document.getElementById('contact-phone').value;
            const profile = document.getElementById('contact-profile').value;
            const message = document.getElementById('contact-message').value;

            // Form validation checks
            if (name.trim() === '' || phone.trim() === '' || message.trim() === '') {
                showToast('Please fill out all required fields.', 'error');
                return;
            }

            // Save inquiry into local storage (Simulating server records)
            const submissions = JSON.parse(localStorage.getItem('tools_mart_inquiries') || '[]');
            submissions.push({
                name,
                phone,
                profile,
                message,
                timestamp: new Date().toISOString()
            });
            localStorage.setItem('tools_mart_inquiries', JSON.stringify(submissions));

            // Visual feedback transition
            formSuccessBanner.classList.add('visible');
            showToast('Form submitted successfully! We will contact you soon.', 'success');
            contactForm.reset();
            
            // Clear success banner after 8 seconds
            setTimeout(() => {
                formSuccessBanner.classList.remove('visible');
            }, 8000);
        });
    }

    // ==========================================================================
    // 10. LEAFLET MAP INITIALIZATION
    // ==========================================================================
    const mapElement = document.getElementById('map');
    if (mapElement) {
        // Tools Mart location in Kalmunai, Sri Lanka (Approx coordinates)
        const toolsMartLatLng = [7.4168, 81.8236]; 
        
        // Initialize map
        const map = L.map('map', {
            center: toolsMartLatLng,
            zoom: 15,
            zoomControl: true,
            scrollWheelZoom: false // disable zoom on scroll for page navigation
        });
        
        // Dark mode tile layers (using CartoDB Dark Matter tiles)
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 20
        }).addTo(map);
        
        // Custom marker icon using simple CSS styled dot
        const customIcon = L.divIcon({
            className: 'map-custom-marker',
            html: `<div class="marker-pin"></div><div class="marker-pulse"></div>`,
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });
        
        // Add marker
        L.marker(toolsMartLatLng, { icon: customIcon }).addTo(map)
            .bindPopup(`
                <div class="map-popup-content" style="color: #ffffff; background-color: #121216; border-radius: 8px; font-family: 'Outfit', sans-serif;">
                    <strong style="color: var(--primary, #ff6f00); font-size: 1.1rem; display: block; margin-bottom: 4px;">RIMZAN MOTORS & TOOLSMART</strong>
                    <span style="font-size: 0.85rem; color: #a0aec0;">No: 996, Main Street Kalmunai- 14</span><br>
                    <a href="https://maps.google.com/?q=Kalmunai+Sri+Lanka" target="_blank" style="display:inline-block; margin-top:8px; font-weight:bold; color: #ff6f00; font-size: 0.85rem; text-decoration: none;">Get Directions</a>
                </div>
            `)
            .openPopup();
    }

    // ==========================================================================
    // 11. ADMIN PORTAL LOGIC
    // ==========================================================================
    
    // Toggle Delete Confirmation Modal
    function toggleDeleteConfirmModal(isOpen) {
        if (isOpen) {
            deleteConfirmModal.classList.add('open');
            deleteConfirmModal.style.display = 'flex';
        } else {
            deleteConfirmModal.classList.remove('open');
            setTimeout(() => {
                deleteConfirmModal.style.display = 'none';
            }, 300);
        }
    }

    // Delete Confirmation Modal Event Listeners
    if (deleteConfirmClose) deleteConfirmClose.addEventListener('click', () => toggleDeleteConfirmModal(false));
    if (deleteConfirmCancel) deleteConfirmCancel.addEventListener('click', () => toggleDeleteConfirmModal(false));
    if (deleteConfirmModal) {
        deleteConfirmModal.addEventListener('click', (e) => {
            if (e.target === deleteConfirmModal) {
                toggleDeleteConfirmModal(false);
            }
        });
    }

    if (deleteConfirmSubmit) {
        deleteConfirmSubmit.addEventListener('click', async () => {
            if (productIdToDelete) {
                // 1. Delete from Supabase
                if (supabaseClient) {
                    try {
                        const { error } = await supabaseClient
                            .from('products')
                            .delete()
                            .eq('id', productIdToDelete);
                        if (error) throw error;
                        console.log('Product deleted from Supabase successfully.');
                    } catch (err) {
                        console.error('Failed to delete product from Supabase:', err);
                    }
                }

                // 2. Delete from backend local Python API
                try {
                    await fetch('/api/products/delete', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ id: productIdToDelete })
                    });
                } catch (err) {
                    console.warn('API delete request failed, proceeding client-side:', err);
                }

                catalogData = catalogData.filter(item => String(item.id) !== String(productIdToDelete));
                try {
                    localStorage.setItem('tools_mart_catalog', JSON.stringify(catalogData));
                } catch (e) {
                    console.error('Failed to save updated catalog to localStorage after deletion:', e);
                }
                toggleDeleteConfirmModal(false);
                renderCatalog();
                showToast('Product successfully deleted from the showroom.', 'success');
                productIdToDelete = null;
            }
        });
    }

    // Toggle Admin Login Modal
    function toggleAdminModal(isOpen) {
        if (isOpen) {
            adminPasswordInput.value = '';
            adminLoginModal.classList.add('open');
            adminLoginModal.style.display = 'flex';
            setTimeout(() => adminPasswordInput.focus(), 100);
        } else {
            adminLoginModal.classList.remove('open');
            setTimeout(() => {
                adminLoginModal.style.display = 'none';
            }, 300); // match CSS transition duration
        }
    }

    // Modal triggers
    if (navAdminBtn) navAdminBtn.addEventListener('click', () => toggleAdminModal(true));
    if (drawerAdminBtn) drawerAdminBtn.addEventListener('click', () => toggleAdminModal(true));
    if (footerAdminBtn) footerAdminBtn.addEventListener('click', () => toggleAdminModal(true));

    if (adminLoginClose) adminLoginClose.addEventListener('click', () => toggleAdminModal(false));
    if (adminLoginCancel) adminLoginCancel.addEventListener('click', () => toggleAdminModal(false));
    if (adminLoginModal) {
        adminLoginModal.addEventListener('click', (e) => {
            if (e.target === adminLoginModal) {
                toggleAdminModal(false);
            }
        });
    }

    // Admin Authentication Handler
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const password = adminPasswordInput.value;

            // Simple demo admin credentials check (password: "toolsmart" or "admin123" or "admin")
            if (password === 'toolsmart' || password === 'admin123' || password.toLowerCase() === 'admin') {
                appState.isAdminLoggedIn = true;
                
                // Show dashboard & update UI
                if (adminDashboard) {
                    adminDashboard.style.display = 'block';
                    adminDashboard.scrollIntoView({ behavior: 'smooth' });
                }
                
                toggleAdminModal(false);
                renderCatalog();
                showToast('Successfully authenticated as Administrator.', 'success');
            } else {
                showToast('Invalid administrator password. Access denied.', 'error');
                adminPasswordInput.value = '';
                adminPasswordInput.focus();
            }
        });
    }

    // Admin Logout Handler
    if (adminLogoutBtn) {
        adminLogoutBtn.addEventListener('click', () => {
            appState.isAdminLoggedIn = false;
            
            // Hide dashboard
            if (adminDashboard) {
                adminDashboard.style.display = 'none';
            }
            
            renderCatalog();
            showToast('Administrator session ended.', 'success');
        });
    }

    // New Product Image Preview & Dropzone Logic
    let currentBase64Image = null;

    function handleImageFile(file) {
        if (!file) return;

        // Size check: limit to 2MB to keep localStorage friendly
        const maxSizeBytes = 2 * 1024 * 1024;
        if (file.size > maxSizeBytes) {
            showToast('Image size exceeds 2MB limit. Please select a smaller image.', 'error');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            currentBase64Image = e.target.result;
            
            if (imagePreview) {
                imagePreview.src = currentBase64Image;
            }
            if (imagePreviewContainer) {
                imagePreviewContainer.style.display = 'flex';
            }
            if (imageDropzone) {
                imageDropzone.style.display = 'none';
            }
        };
        reader.readAsDataURL(file);
    }

    if (prodImageInput) {
        prodImageInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            handleImageFile(file);
        });
    }

    // Drag and Drop functionality for upload dropzone
    if (imageDropzone) {
        imageDropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            imageDropzone.style.borderColor = 'var(--primary)';
            imageDropzone.style.backgroundColor = 'rgba(255, 111, 0, 0.05)';
        });

        imageDropzone.addEventListener('dragleave', () => {
            imageDropzone.style.borderColor = 'var(--border-color)';
            imageDropzone.style.backgroundColor = 'var(--bg-base)';
        });

        imageDropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            imageDropzone.style.borderColor = 'var(--border-color)';
            imageDropzone.style.backgroundColor = 'var(--bg-base)';
            
            const files = e.dataTransfer.files;
            if (files && files.length > 0) {
                if (prodImageInput) {
                    prodImageInput.files = files;
                }
                handleImageFile(files[0]);
            }
        });
    }

    // Remove selected image helper
    if (removeImageBtn) {
        removeImageBtn.addEventListener('click', () => {
            currentBase64Image = null;
            if (prodImageInput) {
                prodImageInput.value = '';
            }
            if (imagePreview) {
                imagePreview.src = '';
            }
            if (imagePreviewContainer) {
                imagePreviewContainer.style.display = 'none';
            }
            if (imageDropzone) {
                imageDropzone.style.display = 'flex';
            }
        });
    }

    if (adminAddProductForm) {
        adminAddProductForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const brand = document.getElementById('prod-brand').value.trim();
            const name = document.getElementById('prod-name').value.trim();
            const model = document.getElementById('prod-model').value.trim();
            const power = document.getElementById('prod-power').value.trim();
            const size = document.getElementById('prod-size').value.trim();
            const weight = document.getElementById('prod-weight').value.trim();
            const coreFunction = document.getElementById('prod-function').value.trim();
            const category = document.getElementById('prod-category').value;
            const stockStatus = document.getElementById('prod-stock').value;

            // Form Validation — only name and category are required
            if (!name || !category) {
                showToast('Please fill in at least the Product Name and Category.', 'error');
                return;
            }

            // Assemble new product item matching details schema
            const newProduct = {
                id: `prod-${Date.now()}`,
                brand: brand || '',
                name: name,
                modelNumber: model || '',
                modelnumber: model || '',
                power: power || '',
                size: size || '',
                weight: weight || '',
                function: coreFunction || '',
                category: category,
                inStock: stockStatus === 'true',
                instock: stockStatus === 'true',
                image: currentBase64Image || null
            };

            // 1. Add to Supabase
            if (supabaseClient) {
                try {
                    const { error } = await supabaseClient
                        .from('products')
                        .insert([newProduct]);
                    if (error) throw error;
                    console.log('Product saved to Supabase successfully.');
                } catch (err) {
                    console.error('Failed to save product to Supabase:', err);
                }
            }

            // 2. Add to backend local Python API
            try {
                await fetch('/api/products', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newProduct)
                });
            } catch (err) {
                console.warn('API add product request failed, proceeding client-side:', err);
            }

            // Insert into active database catalogData
            catalogData.push(newProduct);
            
            // Save to localStorage
            try {
                localStorage.setItem('tools_mart_catalog', JSON.stringify(catalogData));
            } catch (e) {
                console.error('Failed to save updated catalog to localStorage after adding product:', e);
            }

            // Re-render views
            renderCatalog();

            showToast('New product added to showroom successfully.', 'success');

            // Reset form fields
            adminAddProductForm.reset();
            
            // Reset image uploaded previews
            if (removeImageBtn) {
                removeImageBtn.click();
            }

            // Scroll to the newly added product in the grid
            const productsSection = document.getElementById('products-section');
            if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }


});
