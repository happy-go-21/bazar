// Application State
const APP_STATE = {
    currentLanguage: 'fa',
    currentTheme: 'dark',
    currentProvince: '',
    products: [],
    categories: [],
    provinces: [],
    filteredProducts: [],
    currentPage: 1,
    itemsPerPage: 20,
    searchQuery: '',
    filters: {
        minPrice: '',
        maxPrice: '',
        category: '',
        sort: 'newest'
    },
    supportedLanguages: ['fa', 'en']
};

// Language translations
const TRANSLATIONS = {
    fa: {
        title: 'بازار افغانستان - خرید و فروش آنلاین',
        home: 'خانه',
        categories: 'دسته‌بندی‌ها',
        about: 'درباره ما',
        contact: 'تماس',
        search: 'جستجو',
        searchPlaceholder: 'جستجوی محصولات...',
        provinceLabel: 'انتخاب ولایت:',
        allProvinces: 'همه ولایات',
        filters: 'فیلترها',
        priceRange: 'محدوده قیمت:',
        minPrice: 'حداقل قیمت',
        maxPrice: 'حداکثر قیمت',
        sortBy: 'مرتب‌سازی:',
        newest: 'جدیدترین',
        priceLowToHigh: 'قیمت: کم به زیاد',
        priceHighToLow: 'قیمت: زیاد به کم',
        popular: 'محبوب‌ترین',
        applyFilters: 'اعمال فیلتر',
        loadMore: 'نمایش محصولات بیشتر',
        loading: 'در حال بارگذاری محصولات...',
        currency: 'افغانی',
        new: 'جدید',
        featured: 'ویژه',
        noResults: 'محصولی یافت نشد',
        contactInfo: 'اطلاعات تماس',
        phone: 'تلفن',
        email: 'ایمیل',
        address: 'آدرس',
        heroTitle: 'بزرگترین بازار آنلاین افغانستان',
        heroSubtitle: 'خرید و فروش آسان و امن در سراسر کشور',
        products: 'محصول',
        contactSeller: 'تماس با فروشنده',
        save: 'ذخیره',
        aboutUs: 'درباره بازار افغان',
        aboutDescription: 'بازار افغان یک مارکت‌پلیس سبک و سریع برای خرید و فروش کالا در افغانستان است.',
        developer: 'توسعه‌دهنده: مرویس رحیمی',
        sendMessage: 'ارسال پیام',
        name: 'نام',
        message: 'پیام',
        messageSent: 'پیام شما ارسال شد',
        login: 'ورود',
        loginTitle: 'ورود به حساب کاربری',
        loginSubtitle: 'برای دسترسی به امکانات بیشتر وارد شوید',
        nameLabel: 'نام کامل',
        phoneLabel: 'شماره تلفن',
        loginBtnText: 'ورود / ثبت نام',
        twoFATitle: 'کد تایید را وارد کنید',
        twoFADesc: 'کد 6 رقمی به شماره تلفن شما ارسال شد',
        verifyBtnText: 'تایید',
        resendBtnText: 'ارسال مجدد',
        guestText: 'نمی‌خواهید ثبت نام کنید؟',
        guestLink: 'ادامه به عنوان مهمان'
    },
    en: {
        title: 'Afghanistan Bazaar - Online Marketplace',
        home: 'Home',
        categories: 'Categories',
        about: 'About Us',
        contact: 'Contact',
        search: 'Search',
        searchPlaceholder: 'Search products...',
        provinceLabel: 'Select Province:',
        allProvinces: 'All Provinces',
        filters: 'Filters',
        priceRange: 'Price Range:',
        minPrice: 'Min Price',
        maxPrice: 'Max Price',
        sortBy: 'Sort By:',
        newest: 'Newest',
        priceLowToHigh: 'Price: Low to High',
        priceHighToLow: 'Price: High to Low',
        popular: 'Most Popular',
        applyFilters: 'Apply Filters',
        loadMore: 'Load More Products',
        loading: 'Loading products...',
        currency: 'AFN',
        new: 'New',
        featured: 'Featured',
        noResults: 'No products found',
        contactInfo: 'Contact Information',
        phone: 'Phone',
        email: 'Email',
        address: 'Address',
        heroTitle: 'Afghanistan\'s Largest Online Marketplace',
        heroSubtitle: 'Easy and secure buying and selling across the country',
        products: 'Products',
        contactSeller: 'Contact Seller',
        save: 'Save',
        aboutUs: 'About Afghan Bazaar',
        aboutDescription: 'Afghan Bazaar is a lightweight and fast marketplace for buying and selling goods in Afghanistan.',
        developer: 'Developer: Merwis Rahimi',
        sendMessage: 'Send Message',
        name: 'Name',
        message: 'Message',
        messageSent: 'Your message has been sent',
        login: 'Login',
        loginTitle: 'Login to Your Account',
        loginSubtitle: 'Sign in for more features and personalized experience',
        nameLabel: 'Full Name',
        phoneLabel: 'Phone Number',
        loginBtnText: 'Login / Sign Up',
        twoFATitle: 'Enter Verification Code',
        twoFADesc: 'A 6-digit code was sent to your phone number',
        verifyBtnText: 'Verify',
        resendBtnText: 'Resend Code',
        guestText: 'Don\'t want to register?',
        guestLink: 'Continue as Guest'
    }
};

// Utility Functions
const utils = {
    formatPrice: (price, currency = 'افغانی') => {
        return `${price.toLocaleString()} ${currency}`;
    },
    
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    shuffleArray: (array) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    },
    
    getRandomElement: (array) => {
        return array[Math.floor(Math.random() * array.length)];
    }
};

// Language Management
const languageManager = {
    init() {
        // Load saved language preference
        const savedLang = localStorage.getItem('afghanMarketLang');
        if (savedLang && APP_STATE.supportedLanguages.includes(savedLang)) {
            APP_STATE.currentLanguage = savedLang;
        }
        
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', this.toggleLanguage.bind(this));
        }
        this.updateUI();
    },
    
    toggleLanguage() {
        const currentIndex = APP_STATE.supportedLanguages.indexOf(APP_STATE.currentLanguage);
        const nextIndex = (currentIndex + 1) % APP_STATE.supportedLanguages.length;
        APP_STATE.currentLanguage = APP_STATE.supportedLanguages[nextIndex];
        
        // Save language preference
        localStorage.setItem('afghanMarketLang', APP_STATE.currentLanguage);
        
        // Set text direction based on language
        document.documentElement.dir = APP_STATE.currentLanguage === 'en' ? 'ltr' : 'rtl';
        document.documentElement.lang = APP_STATE.currentLanguage;
        
        // Add language class to body for styling
        document.body.className = document.body.className.replace(/\blang-\w+\b/g, '');
        document.body.classList.add(`lang-${APP_STATE.currentLanguage}`);
        
        this.updateUI();
        
        // Re-render dynamic content
        if (typeof renderer !== 'undefined') {
            renderer.renderCategories();
            renderer.renderProvinceSelector();
        }
        
        // Trigger page-specific updates if available
        if (typeof updatePageContent === 'function') updatePageContent();
        if (typeof updateCategoriesContent === 'function') updateCategoriesContent();
        if (typeof updateContactContent === 'function') updateContactContent();
    },
    
    updateUI() {
        const t = TRANSLATIONS[APP_STATE.currentLanguage];
        
        // Update static texts
        document.title = t.title;
        
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            const langLabels = {
                'fa': 'EN',
                'en': 'فارسی'
            };
            langToggle.querySelector('.lang-text').textContent = langLabels[APP_STATE.currentLanguage];
        }
        
        // Update placeholders and labels
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.placeholder = t.searchPlaceholder;
        }
        
        // Update navigation
        const navLinks = document.querySelectorAll('.nav-link');
        const navTexts = [t.home, t.categories, t.about, t.contact, t.login];
        navLinks.forEach((link, index) => {
            if (navTexts[index]) {
                link.textContent = navTexts[index];
            }
        });
        
        // Update section titles and filter labels
        const sectionTitle = document.querySelector('.section-title');
        if (sectionTitle && sectionTitle.textContent.includes('دسته')) {
            sectionTitle.textContent = t.categories;
        }
        
        // Update filter section texts
        const filterLabelElements = document.querySelectorAll('.filter-group label');
        filterLabelElements.forEach(label => {
            if (label.textContent.includes('محدوده قیمت') || label.textContent.includes('د بیې حد')) {
                label.textContent = t.priceRange;
            } else if (label.textContent.includes('مرتب‌سازی') || label.textContent.includes('ترتیب')) {
                label.textContent = t.sortBy;
            }
        });
        
        // Update input placeholders
        const minPriceInput = document.getElementById('minPrice');
        const maxPriceInput = document.getElementById('maxPrice');
        if (minPriceInput) minPriceInput.placeholder = t.minPrice;
        if (maxPriceInput) maxPriceInput.placeholder = t.maxPrice;
        
        // Update sort options
        const sortSelect = document.getElementById('sortSelect');
        if (sortSelect) {
            const options = sortSelect.querySelectorAll('option');
            if (options.length >= 4) {
                options[0].textContent = t.newest;
                options[1].textContent = t.priceLowToHigh;
                options[2].textContent = t.priceHighToLow;
                options[3].textContent = t.popular;
            }
        }
        
        // Update province selector label
        const provinceLabel = document.querySelector('.province-selector label');
        if (provinceLabel) {
            provinceLabel.textContent = t.provinceLabel;
        }
        
        // Update loading text
        const loadingText = document.querySelector('.loading p');
        if (loadingText) {
            loadingText.textContent = t.loading;
        }
        
        // Update hero section
        const heroTitle = document.getElementById('heroTitle');
        const heroSubtitle = document.getElementById('heroSubtitle');
        if (heroTitle) heroTitle.textContent = t.heroTitle;
        if (heroSubtitle) heroSubtitle.textContent = t.heroSubtitle;
        
        // Update buttons and labels
        const searchBtn = document.querySelector('.search-btn');
        if (searchBtn) {
            searchBtn.innerHTML = `<i class="fas fa-search"></i> ${t.search}`;
        }
        
        const applyFiltersBtn = document.getElementById('applyFilters');
        if (applyFiltersBtn) {
            applyFiltersBtn.textContent = t.applyFilters;
        }
        
        const loadMoreBtn = document.getElementById('loadMore');
        if (loadMoreBtn) {
            loadMoreBtn.textContent = t.loadMore;
        }
        
        // Update filter labels
        const filterLabelMappings = {
            'filters': t.filters,
            'priceRange': t.priceRange,
            'sortBy': t.sortBy
        };
        
        Object.entries(filterLabelMappings).forEach(([className, text]) => {
            const elements = document.querySelectorAll(`.filter-group label`);
            elements.forEach(el => {
                if (el.textContent.includes('فیلتر') || el.textContent.includes('قیمت') || el.textContent.includes('مرتب')) {
                    const key = el.textContent.includes('قیمت') ? 'priceRange' : 
                               el.textContent.includes('مرتب') ? 'sortBy' : 'filters';
                    if (filterLabelMappings[key]) el.textContent = filterLabelMappings[key];
                }
            });
        });
    },
    
    t(key) {
        return TRANSLATIONS[APP_STATE.currentLanguage][key] || key;
    }
};

// Data Management
const dataManager = {
    async loadData() {
        try {
            // Load all data in parallel
            const [productsData, categoriesData, provincesData] = await Promise.all([
                this.loadProducts(),
                this.loadCategories(),
                this.loadProvinces()
            ]);
            
            APP_STATE.products = productsData;
            APP_STATE.categories = categoriesData;
            APP_STATE.provinces = provincesData;
            
            // Initialize filtered products with all products
            APP_STATE.filteredProducts = [...APP_STATE.products];
            
            return true;
        } catch (error) {
            console.error('Error loading data:', error);
            return false;
        }
    },
    
    async loadProducts() {
        try {
            const response = await fetch('./data/products.json');
            if (!response.ok) throw new Error('Failed to load products');
            return await response.json();
        } catch (error) {
            console.error('Error loading products:', error);
            // Return empty array if file doesn't exist
            return [];
        }
    },
    
    async loadCategories() {
        try {
            const response = await fetch('./data/categories.json');
            if (!response.ok) throw new Error('Failed to load categories');
            return await response.json();
        } catch (error) {
            console.error('Error loading categories:', error);
            return [];
        }
    },
    
    async loadProvinces() {
        try {
            const response = await fetch('./data/provinces.json');
            if (!response.ok) throw new Error('Failed to load provinces');
            return await response.json();
        } catch (error) {
            console.error('Error loading provinces:', error);
            return [];
        }
    }
};

// UI Rendering
const renderer = {
    renderCategories() {
        const categoriesGrid = document.getElementById('categoriesGrid');
        if (!categoriesGrid) return;
        
        categoriesGrid.innerHTML = '';
        
        APP_STATE.categories.forEach(category => {
            const categoryCard = document.createElement('a');
            categoryCard.href = '#';
            categoryCard.className = 'category-card fade-in-up';
            categoryCard.onclick = (e) => {
                e.preventDefault();
                this.filterByCategory(category.id);
            };
            
            categoryCard.innerHTML = `
                <div class="category-icon">
                    <i class="${category.icon}"></i>
                </div>
                <div class="category-name">${category.name[APP_STATE.currentLanguage]}</div>
                <div class="category-count">${category.count} ${languageManager.t('products')}</div>
            `;
            
            categoriesGrid.appendChild(categoryCard);
        });
    },
    
    renderProducts(products = null) {
        const productsGrid = document.getElementById('productsGrid');
        const loading = document.getElementById('loading');
        
        if (!productsGrid) return;
        
        // Show loading
        if (loading) loading.style.display = 'block';
        
        // Use provided products or current filtered products
        const productsToRender = products || APP_STATE.filteredProducts;
        
        // Calculate pagination
        const startIndex = (APP_STATE.currentPage - 1) * APP_STATE.itemsPerPage;
        const endIndex = startIndex + APP_STATE.itemsPerPage;
        const currentPageProducts = productsToRender.slice(startIndex, endIndex);
        
        // Clear grid if it's the first page
        if (APP_STATE.currentPage === 1) {
            productsGrid.innerHTML = '';
        }
        
        // Hide loading
        setTimeout(() => {
            if (loading) loading.style.display = 'none';
            
            if (currentPageProducts.length === 0 && APP_STATE.currentPage === 1) {
                productsGrid.innerHTML = `
                    <div class="no-results">
                        <i class="fas fa-search fa-3x"></i>
                        <h3>${languageManager.t('noResults')}</h3>
                    </div>
                `;
                return;
            }
            
            currentPageProducts.forEach(product => {
                const productCard = this.createProductCard(product);
                productsGrid.appendChild(productCard);
            });
            
            // Update load more button
            this.updateLoadMoreButton(productsToRender);
        }, 500);
    },
    
    createProductCard(product) {
        const productCard = document.createElement('div');
        productCard.className = 'product-card fade-in-up';
        productCard.onclick = () => this.showProductModal(product);
        
        const badges = [];
        if (product.isNew) badges.push(`<span class="badge badge-new">${languageManager.t('new')}</span>`);
        if (product.isFeatured) badges.push(`<span class="badge badge-featured">${languageManager.t('featured')}</span>`);
        
        productCard.innerHTML = `
            <div class="product-image">
                <i class="${product.icon || 'fas fa-box'}"></i>
            </div>
            <div class="product-info">
                <h4 class="product-title">${product.title[APP_STATE.currentLanguage]}</h4>
                <p class="product-description">${product.description[APP_STATE.currentLanguage]}</p>
                <div class="product-badges">
                    ${badges.join('')}
                </div>
                <div class="product-meta">
                    <span class="product-price">${utils.formatPrice(product.price)}</span>
                    <span class="product-location">
                        <i class="fas fa-map-marker-alt"></i>
                        ${product.location.province[APP_STATE.currentLanguage]}
                    </span>
                </div>
            </div>
        `;
        
        return productCard;
    },
    
    updateLoadMoreButton(products) {
        const loadMoreBtn = document.getElementById('loadMore');
        if (!loadMoreBtn) return;
        
        const totalProducts = products.length;
        const currentlyShown = APP_STATE.currentPage * APP_STATE.itemsPerPage;
        
        if (currentlyShown >= totalProducts) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    },
    
    renderProvinceSelector() {
        const provinceSelect = document.getElementById('provinceSelect');
        if (!provinceSelect) return;
        
        provinceSelect.innerHTML = `<option value="">${languageManager.t('allProvinces')}</option>`;
        
        APP_STATE.provinces.forEach(province => {
            const option = document.createElement('option');
            option.value = province.id;
            option.textContent = province.name[APP_STATE.currentLanguage];
            provinceSelect.appendChild(option);
        });
    },
    
    showProductModal(product) {
        const modal = document.getElementById('productModal');
        const modalBody = document.getElementById('modalBody');
        
        if (!modal || !modalBody) return;
        
        modalBody.innerHTML = `
            <div class="product-detail">
                <div class="product-detail-image">
                    <i class="${product.icon || 'fas fa-box'}"></i>
                </div>
                <div class="product-detail-info">
                    <h2>${product.title[APP_STATE.currentLanguage]}</h2>
                    <p class="product-detail-description">${product.description[APP_STATE.currentLanguage]}</p>
                    <div class="product-detail-price">${utils.formatPrice(product.price)}</div>
                    <div class="product-detail-location">
                        <i class="fas fa-map-marker-alt"></i>
                        ${product.location.province[APP_STATE.currentLanguage]}, ${product.location.city[APP_STATE.currentLanguage]}
                    </div>
                    <div class="product-detail-contact">
                        <h4>${languageManager.t('contactInfo')}</h4>
                        <p><i class="fas fa-phone"></i> ${product.seller.phone}</p>
                        <p><i class="fas fa-user"></i> ${product.seller.name}</p>
                    </div>
                    <div class="product-detail-actions">
                        <button class="btn-neon">
                            <i class="fas fa-phone"></i>
                            ${languageManager.t('contactSeller')}
                        </button>
                        <button class="btn-neon">
                            <i class="fas fa-heart"></i>
                            ${languageManager.t('save')}
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        modal.style.display = 'block';
    },
    
    filterByCategory(categoryId) {
        APP_STATE.filters.category = categoryId;
        filterManager.applyFilters();
    }
};

// Search and Filter Management
const filterManager = {
    init() {
        // Search input
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', utils.debounce((e) => {
                APP_STATE.searchQuery = e.target.value;
                this.applyFilters();
            }, 300));
        }
        
        // Province selector
        const provinceSelect = document.getElementById('provinceSelect');
        if (provinceSelect) {
            provinceSelect.addEventListener('change', (e) => {
                APP_STATE.currentProvince = e.target.value;
                this.applyFilters();
            });
        }
        
        // Filter controls
        const applyFiltersBtn = document.getElementById('applyFilters');
        if (applyFiltersBtn) {
            applyFiltersBtn.addEventListener('click', () => this.applyFilters());
        }
        
        // Price filters
        const minPrice = document.getElementById('minPrice');
        const maxPrice = document.getElementById('maxPrice');
        const sortSelect = document.getElementById('sortSelect');
        
        if (minPrice) minPrice.addEventListener('change', () => this.updateFilters());
        if (maxPrice) maxPrice.addEventListener('change', () => this.updateFilters());
        if (sortSelect) sortSelect.addEventListener('change', () => this.updateFilters());
    },
    
    updateFilters() {
        const minPrice = document.getElementById('minPrice');
        const maxPrice = document.getElementById('maxPrice');
        const sortSelect = document.getElementById('sortSelect');
        
        if (minPrice) APP_STATE.filters.minPrice = minPrice.value;
        if (maxPrice) APP_STATE.filters.maxPrice = maxPrice.value;
        if (sortSelect) APP_STATE.filters.sort = sortSelect.value;
    },
    
    applyFilters() {
        let filtered = [...APP_STATE.products];
        
        // Search filter
        if (APP_STATE.searchQuery) {
            const query = APP_STATE.searchQuery.toLowerCase();
            filtered = filtered.filter(product => 
                product.title[APP_STATE.currentLanguage].toLowerCase().includes(query) ||
                product.description[APP_STATE.currentLanguage].toLowerCase().includes(query)
            );
        }
        
        // Province filter
        if (APP_STATE.currentProvince) {
            filtered = filtered.filter(product => 
                product.location.provinceId === APP_STATE.currentProvince
            );
        }
        
        // Category filter
        if (APP_STATE.filters.category) {
            filtered = filtered.filter(product => 
                product.categoryId === APP_STATE.filters.category
            );
        }
        
        // Price filter
        if (APP_STATE.filters.minPrice) {
            filtered = filtered.filter(product => 
                product.price >= parseInt(APP_STATE.filters.minPrice)
            );
        }
        
        if (APP_STATE.filters.maxPrice) {
            filtered = filtered.filter(product => 
                product.price <= parseInt(APP_STATE.filters.maxPrice)
            );
        }
        
        // Sort
        this.sortProducts(filtered);
        
        APP_STATE.filteredProducts = filtered;
        APP_STATE.currentPage = 1;
        renderer.renderProducts();
    },
    
    sortProducts(products) {
        switch (APP_STATE.filters.sort) {
            case 'price-low':
                products.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                products.sort((a, b) => b.price - a.price);
                break;
            case 'popular':
                products.sort((a, b) => (b.views || 0) - (a.views || 0));
                break;
            case 'newest':
            default:
                products.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
                break;
        }
    }
};

// Event Handlers
const eventHandlers = {
    init() {
        // Mobile menu toggle
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const nav = document.querySelector('.nav');
        
        if (mobileMenuToggle && nav) {
            mobileMenuToggle.addEventListener('click', () => {
                nav.classList.toggle('active');
            });
        }
        
        // Load more button
        const loadMoreBtn = document.getElementById('loadMore');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                APP_STATE.currentPage++;
                renderer.renderProducts();
            });
        }
        
        // Modal close
        const modalClose = document.getElementById('modalClose');
        const modal = document.getElementById('productModal');
        
        if (modalClose && modal) {
            modalClose.addEventListener('click', () => {
                modal.style.display = 'none';
            });
            
            window.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }
        
        // Search form submit
        const searchForm = document.querySelector('.search-form');
        if (searchForm) {
            searchForm.addEventListener('submit', (e) => {
                e.preventDefault();
                filterManager.applyFilters();
            });
        }
        
        // Add neon animation to buttons
        this.addNeonAnimations();
    },
    
    addNeonAnimations() {
        const neonButtons = document.querySelectorAll('.btn-neon');
        neonButtons.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.classList.add('animate');
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.classList.remove('animate');
            });
        });
    }
};

// Geolocation Management
const geolocation = {
    init() {
        this.detectUserLocation();
    },
    
    async detectUserLocation() {
        try {
            // Try to get user's location
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => this.handleLocationSuccess(position),
                    (error) => this.handleLocationError(error)
                );
            } else {
                console.log('Geolocation is not supported by this browser.');
            }
        } catch (error) {
            console.error('Error detecting location:', error);
        }
    },
    
    handleLocationSuccess(position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        
        // Find nearest province based on coordinates
        const nearestProvince = this.findNearestProvince(lat, lng);
        if (nearestProvince) {
            APP_STATE.currentProvince = nearestProvince.id;
            const provinceSelect = document.getElementById('provinceSelect');
            if (provinceSelect) {
                provinceSelect.value = nearestProvince.id;
                filterManager.applyFilters();
            }
        }
    },
    
    handleLocationError(error) {
        console.log('Location error:', error.message);
        // Fallback: show all provinces
    },
    
    findNearestProvince(lat, lng) {
        // Simple distance calculation to find nearest province
        let nearestProvince = null;
        let minDistance = Infinity;
        
        APP_STATE.provinces.forEach(province => {
            if (province.coordinates) {
                const distance = this.calculateDistance(
                    lat, lng,
                    province.coordinates.lat,
                    province.coordinates.lng
                );
                
                if (distance < minDistance) {
                    minDistance = distance;
                    nearestProvince = province;
                }
            }
        });
        
        return nearestProvince;
    },
    
    calculateDistance(lat1, lng1, lat2, lng2) {
        const R = 6371; // Earth's radius in kilometers
        const dLat = this.toRad(lat2 - lat1);
        const dLng = this.toRad(lng2 - lng1);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
                  Math.sin(dLng / 2) * Math.sin(dLng / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    },
    
    toRad(value) {
        return value * Math.PI / 180;
    }
};

// Application Initialization
class AfghanMarketApp {
    async init() {
        console.log('Initializing Afghan Market App...');
        
        // Initialize language manager first
        languageManager.init();
        
        // Load data
        const dataLoaded = await dataManager.loadData();
        if (!dataLoaded) {
            console.error('Failed to load application data');
            return;
        }
        
        // Initialize components
        filterManager.init();
        eventHandlers.init();
        geolocation.init();
        themeManager.init();
        
        // Render UI components
        renderer.renderCategories();
        renderer.renderProvinceSelector();
        renderer.renderProducts();
        
        console.log('Afghan Market App initialized successfully!');
    }
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new AfghanMarketApp();
    app.init();
});

// Theme Manager
const themeManager = {
    init() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        APP_STATE.currentTheme = savedTheme;
        this.applyTheme(savedTheme);
        
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    },
    
    toggleTheme() {
        const newTheme = APP_STATE.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
        APP_STATE.currentTheme = newTheme;
        localStorage.setItem('theme', newTheme);
    },
    
    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const themeIcon = document.getElementById('themeIcon');
        if (themeIcon) {
            themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
};

// Export for testing purposes
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        APP_STATE,
        languageManager,
        dataManager,
        renderer,
        filterManager,
        themeManager,
        utils
    };
}
