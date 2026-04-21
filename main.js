const products = {
    prebuilt: {
        gaming: [
            {id: 1, name: "TITAN GAMING RTX 4090", desc: "Intel i9-14900K, RTX 4090 24GB, 64GB DDR5 6400, 4TB NVMe, AIO 360mm", price: 2499, icon: "fas fa-gamepad", specs: ["4K Gaming", "240Hz+", "Ray Tracing"], badge: "hot", image: ""},
            {id: 2, name: "DRAGON GAMING RTX 4080", desc: "AMD Ryzen 7 7800X3D, RTX 4080 Super 16GB, 32GB DDR5 6000, 2TB NVMe", price: 1899, icon: "fas fa-desktop", specs: ["1440p Ultra", "Esports Ready"], badge: "best", image: ""},
            {id: 3, name: "WOLF GAMING RTX 4070 Ti", desc: "Intel i5-14600K, RTX 4070 Ti Super 16GB, 32GB DDR5 6000, 2TB SSD", price: 1499, icon: "fas fa-laptop", specs: ["1440p Gaming", "Stream Ready"], image: ""},
            {id: 4, name: "PHOENIX RX 7900 XTX", desc: "AMD Ryzen 9 7900X, RX 7900 XTX 24GB, 32GB DDR5 6000, 2TB SSD", price: 1699, icon: "fas fa-gamepad", specs: ["4K Capable", "AMD Advantage"], image: ""}
        ],
        streaming: [
            {id: 5, name: "STREAMER PRO", desc: "Intel i7-14700K, RTX 4080 16GB, 64GB DDR5, 4TB SSD, Dual Monitor", price: 2199, icon: "fas fa-video", specs: ["4K Streaming", "Dual PC Setup"], badge: "new", image: ""},
            {id: 6, name: "CONTENT CREATOR", desc: "AMD Ryzen 9 7950X, RTX 4070 Ti, 64GB DDR5, 4TB SSD + 8TB HDD", price: 1799, icon: "fas fa-film", specs: ["Video Editing", "Multi-tasking"], image: ""}
        ],
        budget: [
            {id: 7, name: "STARTER GAMING RTX 4060", desc: "Intel i5-13400F, RTX 4060 Ti 16GB, 16GB DDR4 3200, 1TB NVMe", price: 849, icon: "fas fa-desktop", specs: ["1080p Gaming", "Great Value"], image: ""},
            {id: 8, name: "ENTRY LEVEL RX 7600", desc: "AMD Ryzen 5 7600, RX 7600 XT 8GB, 16GB DDR5 5600, 1TB SSD", price: 699, icon: "fas fa-gamepad", specs: ["1080p Ultra", "AMD FSR"], image: ""}
        ],
        extreme: [
            {id: 9, name: "ULTIMATE THREADRIPPER", desc: "AMD Threadripper 7995WX, RTX 4090 SLI, 128GB DDR5, 8TB NVMe RAID", price: 8999, icon: "fas fa-server", specs: ["Workstation", "4K Rendering"], badge: "extreme", image: ""},
            {id: 10, name: "SUPER COMPUTER", desc: "Dual Xeon Platinum, Quad RTX 6000 Ada, 256GB DDR5, 16TB Storage", price: 14999, icon: "fas fa-superpowers", specs: ["AI/ML", "Simulation"], image: ""}
        ]
    },
    components: {
        cpu: [
            {id: 11, name: "AMD Ryzen 9 7950X3D", desc: "16-core, 4.2-5.7GHz, 144MB Cache, AM5 Socket", price: 349, icon: "fas fa-microchip", specs: ["Gaming King", "X3D Cache"], badge: "hot", image: "______/ryzen9.jpg"},
            {id: 12, name: "Intel Core i9-14900K", desc: "24-core, 3.2-6.0GHz, 36MB Cache, LGA 1700", price: 379, icon: "fas fa-microchip", specs: ["Fastest CPU", "Hybrid Design"], image: "______/i9.jpg"},
            {id: 13, name: "AMD Ryzen 7 7800X3D", desc: "8-core, 4.2-5.0GHz, 104MB Cache, Best for Gaming", price: 249, icon: "fas fa-microchip", specs: ["Gaming Focus", "Efficient"], image: "______/ryzen7.jpg"},
            {id: 14, name: "Intel Core i7-14700K", desc: "20-core, 3.4-5.6GHz, 33MB Cache, Great Value", price: 219, icon: "fas fa-microchip", specs: ["All-rounder", "Overclockable"], image: "______/i7.jpg"}
        ],
        gpu: [
            {id: 15, name: "NVIDIA RTX 4090 24GB", desc: "ADA Lovelace, 16384 Core, DLSS 3, Ray Tracing", price: 949, icon: "fas fa-gamepad", specs: ["4K Gaming", "AI Powered"], badge: "hot", image: "______/4090.jpg"},
            {id: 16, name: "NVIDIA RTX 4080 Super 16GB", desc: "ADA Lovelace, 10240 Core, Perfect 1440p/4K", price: 649, icon: "fas fa-gamepad", specs: ["1440p King", "DLSS 3"], image: "______/rtx.jpg"},
            {id: 17, name: "AMD Radeon RX 7900 XTX", desc: "RDNA 3, 6144 Core, 24GB GDDR6, Ray Tracing", price: 529, icon: "fas fa-gamepad", specs: ["4K Ready", "AMD FSR"], image: "______/redon.png"},
            {id: 18, name: "NVIDIA RTX 4070 Ti Super", desc: "ADA Lovelace, 8448 Core, 16GB GDDR6X", price: 479, icon: "fas fa-gamepad", specs: ["1440p Ultra", "Great Value"], image: "______/GeForce-RTX-4070-Ti_47995.jpg"}
        ],
        ram: [
            {id: 19, name: "Corsair Dominator Platinum RGB", desc: "64GB (2x32GB) DDR5 6400MHz CL32, RGB", price: 239, icon: "fas fa-memory", specs: ["High Speed", "RGB Lighting"], badge: "premium", image: "______/crucial ram.jpg"},
            {id: 20, name: "G.Skill Trident Z5 RGB", desc: "32GB (2x16GB) DDR5 6000MHz CL30, RGB", price: 129, icon: "fas fa-memory", specs: ["Best Seller", "XMP 3.0"], image: "______/ram.jpg"},
            {id: 21, name: "Kingston Fury Beast RGB", desc: "32GB (2x16GB) DDR5 5600MHz CL36, RGB", price: 99, icon: "fas fa-memory", specs: ["Great Value", "Plug & Play"], image: "______/fury.jpg"}
        ],
        storage: [
            {id: 22, name: "Samsung 990 PRO 4TB", desc: "NVMe M.2 PCIe 4.0, Read 7450MB/s, Write 6900MB/s", price: 349, icon: "fas fa-hdd", specs: ["Fastest SSD", "Heatsink"], badge: "best", image: "______/samsung.jpg"},
            {id: 23, name: "WD Black SN850X 2TB", desc: "NVMe M.2 PCIe 4.0, Read 7300MB/s, Write 6600MB/s", price: 159, icon: "fas fa-hdd", specs: ["Gaming SSD", "Reliable"], image: "______/ram.jpg"},
            {id: 24, name: "Crucial T700 4TB", desc: "NVMe M.2 PCIe 5.0, Read 12400MB/s, Write 11800MB/s", price: 529, icon: "fas fa-hdd", specs: ["PCIe 5.0", "Future Proof"], image: "______/crical.png"}
        ],
        motherboard: [
            {id: 25, name: "ASUS ROG Maximus Z790", desc: "Intel Z790, DDR5, WiFi 7, PCIe 5.0, 20+1 Power", price: 319, icon: "fas fa-circuit-board", specs: ["Flagship", "Overclocking"], badge: "premium", image: "______/asus.jpg"},
            {id: 26, name: "MSI MEG X670E Godlike", desc: "AMD X670E, DDR5, WiFi 7, PCIe 5.0 x4", price: 379, icon: "fas fa-circuit-board", specs: ["Top Tier", "All Features"], image: "______/motherboard.png"}
        ],
        cooling: [
            {id: 27, name: "NZXT Kraken Elite 360 RGB", desc: "AIO 360mm Liquid Cooler, LCD Display, RGB Fans", price: 139, icon: "fas fa-fan", specs: ["LCD Screen", "High Performance"], badge: "new", image: "______/cold.webp"},
            {id: 28, name: "Noctua NH-D15 Chromax", desc: "Dual Tower Air Cooler, 6 Heatpipes, Chromax Black", price: 99, icon: "fas fa-fan", specs: ["Air Cooling King", "Quiet"], image: "______/cold2.png"}
        ]
    },
    accessories: [
        {id: 29, name: "Razer BlackWidow V4 Pro", desc: "لوحة مفاتيح ميكانيكية مع شاشة LCD", price: 139, icon: "fas fa-keyboard", specs: ["شاشة LCD", "ميكانيكية", "RGB"], badge: "hot", image: "صور 2/black.jpeg"},
        {id: 30, name: "Logitech G Pro X Superlight 2", desc: "ماوس لاسلكي 32K DPI", price: 94, icon: "fas fa-mouse", specs: ["لاسلكي", "32K DPI", "خفيف الوزن"], image: "صور 2/logitech.jpeg"},
        {id: 31, name: "SteelSeries Arctis Nova Pro", desc: "سماعات لاسلكية مع تبديل صوتي", price: 159, icon: "fas fa-headphones", specs: ["لاسلكي", "مزدوج البطارية", "جودة عالية"], badge: "new", image: "صور 2/steelseries.jpeg"},
        {id: 32, name: "Samsung Odyssey G9 Neo", desc: "شاشة منحنية 49 بوصة 240Hz", price: 949, icon: "fas fa-tv", specs: ["49 بوصة", "240Hz", "منحنية"], badge: "premium", image: ""},
        {id: 33, name: "LG UltraGear OLED 27\"", desc: "شاشة 27 بوصة OLED 240Hz", price: 529, icon: "fas fa-tv", specs: ["OLED", "240Hz", "27 بوصة"], image: "صور 2/lg.jpeg"},
        {id: 34, name: "Secretlab Titan Evo 2023", desc: "كرسي ألعاب قماشي", price: 199, icon: "fas fa-chair", specs: ["مريح", "قماشي", "قابل للتعديل"], image: "صور 2/chair.jpg"},
        {id: 35, name: "Elgato Stream Deck +", desc: "لوحة تحكم مخصصة للمحتوى", price: 89, icon: "fas fa-sliders-h", specs: ["مخصص", "شاشة لمس", "للبث"], image: ""},
        {id: 36, name: "Corsair iCUE Commander", desc: "وحدة تحكم بالمراوح والإضاءة", price: 59, icon: "fas fa-sliders-h", specs: ["تحكم RGB", "تحكم مراوح", "مجسات"], image: ""},
        {id: 37, name: "HyperX QuadCast S", desc: "ميكروفون RGB مع حامل", price: 89, icon: "fas fa-microphone", specs: ["RGB", "حامل مدمج", "4 أنماط"], image: ""},
        {id: 38, name: "Blue Yeti X", desc: "ميكروفون استوديو احترافي", price: 139, icon: "fas fa-microphone", specs: ["احترافي", "متعدد الأنماط", "جودة عالية"], image: ""},
        {id: 39, name: "Razer Kiyo Pro Ultra", desc: "كاميرا ويب 4K مع إضاءة مدمجة", price: 159, icon: "fas fa-video", specs: ["4K", "إضاءة مدمجة", "HDR"], image: ""},
        {id: 40, name: "SteelSeries QcK Heavy XXL", desc: "سجادة ماوس كبيرة الحجم", price: 39, icon: "fas fa-th-large", specs: ["XXL", "كبيرة", "سطح دقيق"], image: ""},
        {id: 41, name: "NZXT H9 Elite", desc: "حاوية كمبيوتر زجاجية", price: 169, icon: "fas fa-desktop", specs: ["زجاجية", "RGB", "تهوية"], badge: "new", image: ""},
        {id: 42, name: "Razer Viper V2 Pro", desc: "ماوس لاسلكي 58 جرام، مستشعر Focus Pro 30K", price: 109, icon: "fas fa-mouse", specs: ["58 جرام", "30K DPI", "لاسلكي"], badge: "hot", image: "صور 2/mouse razer.jpeg"},
        {id: 43, name: "Ducky One 3 Mini", desc: "لوحة مفاتيح ميكانيكية 60%، مفاتيح Hot-swap", price: 79, icon: "fas fa-keyboard", specs: ["60%", "Hot-swap", "ميكانيكي"], image: "صور 2/ducky.jpeg"},
        {id: 44, name: "BENQ ZOWIE XL2546K", desc: "شاشة ألعاب 24.5 بوصة 240Hz، DyAc+ تقنية", price: 329, icon: "fas fa-tv", specs: ["240Hz", "24.5 بوصة", "مخصص للألعاب"], image: "صور المشروع/benq.jpeg"},
        {id: 45, name: "Herman Miller Embody", desc: "كرسي مكتب فاخر، تصميم Backfit للظهر", price: 699, icon: "fas fa-chair", specs: ["فاخر", "صحي", "مريح"], badge: "premium", image: "صور 2/chair 2.jpg"},
        {id: 46, name: "GoXLR Mini", desc: "خلاط صوتي للبث المباشر، 4 قنوات صوت", price: 129, icon: "fas fa-sliders-h", specs: ["4 قنوات", "تأثيرات صوت", "احترافي"], image: ""},
        {id: 47, name: "Lian Li Strimer Plus V2", desc: "كابلات إضاءة RGB، تأثيرات متزامنة", price: 49, icon: "fas fa-lightbulb", specs: ["RGB", "كابلات مضيئة", "تزامن"], image: ""},
        {id: 48, name: "SteelSeries Apex Pro TKL", desc: "لوحة مفاتيح TKL، مفاتيح مغناطيسية", price: 149, icon: "fas fa-keyboard", specs: ["TKL", "مغناطيسي", "قابل للتعديل"], badge: "new", image: "صور المشروع/stelseries.jpeg"},
        {id: 49, name: "Logitech C920s Pro", desc: "كاميرا ويب 1080p، ميكروفون مزدوج", price: 69, icon: "fas fa-video", specs: ["1080p", "ميكروفون مزدوج", "جودة عالية"], image: ""},
        {id: 50, name: "Glorious Model O", desc: "ماوس ألعاب شبكي، إضاءة RGB، 67 جرام", price: 64, icon: "fas fa-mouse", specs: ["شبكي", "67 جرام", "RGB"], image: "صور المشروع/glorious.jpeg"},
        {id: 51, name: "Audio Technica AT2020", desc: "ميكروفون استوديو مكثف، XLR", price: 89, icon: "fas fa-microphone", specs: ["استوديو", "XLR", "جودة احترافية"], image: ""},
        {id: 52, name: "Corsair MM700 RGB", desc: "سجادة ماوس مضيئة، إضاءة RGB متزامنة", price: 54, icon: "fas fa-th-large", specs: ["RGB", "مضيئة", "متزامنة"], image: ""},
        {id: 53, name: "Fractal Design North", desc: "حاوية كمبيوتر خشبية فاخرة", price: 189, icon: "fas fa-desktop", specs: ["خشبية", "فاخرة", "تصميم كلاسيكي"], badge: "new", image: ""},
        {id: 54, name: "Noblechairs Hero", desc: "كرسي ألعاب فاخر، جلد اصطناعي", price: 249, icon: "fas fa-chair", specs: ["جلد", "فاخر", "مساند قابلة للتعديل"], image: "صور المشروع/images.jpeg"},
        {id: 55, name: "ASUS ROG Swift PG279QM", desc: "شاشة 27 بوصة 240Hz، G-Sync، HDR400", price: 419, icon: "fas fa-tv", specs: ["240Hz", "G-Sync", "HDR400", "27 بوصة"], image: "صور المشروع/asus.jpeg"},
        {id: 56, name: "Keychron Q6", desc: "لوحة مفاتيح ميكانيكية 100%، ألومنيوم", price: 119, icon: "fas fa-keyboard", specs: ["100%", "ألومنيوم", "ميكانيكي"], image: "صور المشروع/q6.jpeg"},
        {id: 57, name: "Finalmouse Starlight-12", desc: "ماوس ألعاب خفيف الوزن 42 جرام، ماغنيسيوم", price: 149, icon: "fas fa-mouse", specs: ["42 جرام", "ماغنيسيوم", "نادر"], badge: "hot", image: "صور المشروع/finalmouse.jpeg"},
        {id: 58, name: "Beyerdynamic DT 990 Pro", desc: "سماعات استوديو 250 أوم، مفتوحة الخلفية", price: 99, icon: "fas fa-headphones", specs: ["استوديو", "مفتوحة", "جودة صوت عالية"], image: "صور المشروع/dt990.png"},
        {id: 59, name: "Elgato Key Light Air", desc: "ضوء LED للبث المباشر، تحكم لاسلكي", price: 119, icon: "fas fa-lightbulb", specs: ["LED", "لاسلكي", "للبث المباشر"], image: ""},
        {id: 60, name: "ROG Scabbard II", desc: "سجادة ماوس كبيرة، سطح سرعة، مقاومة للماء", price: 44, icon: "fas fa-th-large", specs: ["كبيرة", "سطح سرعة", "مقاومة للماء"], image: ""}
    ]
};

let cart = [];

document.addEventListener('DOMContentLoaded', function() {
    showCategory('gaming', 'prebuilt');
    showCategory('cpu', 'components');
    showAccessories();
    
    setupTabEvents();
    setupCartEvents();
    updateCart();
    setupNewsletter();
    
    document.getElementById('cartIcon').addEventListener('click', openCart);
    document.querySelector('.floating-btn.cart').addEventListener('click', openCart);
});

function showCategory(category, type) {
    const containerId = type + 'Container';
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const tabs = container.parentElement.querySelectorAll('.category-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    } else if (tabs.length > 0) {
        tabs[0].classList.add('active');
    }
    
    const productList = products[type][category];
    if (!productList) return;
    
    container.innerHTML = productList.map(product => `
        <div class="product-card">
            ${product.badge ? `<div class="product-badge ${product.badge}">${getBadgeText(product.badge)}</div>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <i class="${product.icon}"></i>
            </div>
            <div class="product-info">
                <h3 class="product-title">
                    <i class="${product.icon}"></i> ${product.name}
                </h3>
                <p class="product-description">${product.desc}</p>
                <div class="product-specs">
                    ${product.specs ? product.specs.map(spec => `<span class="spec-tag">${spec}</span>`).join('') : ''}
                </div>
                <div class="product-price">
                    <div class="price">$${product.price.toLocaleString()}</div>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> أضف إلى العربة
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterAccessories(category) {
    const container = document.getElementById('accessoriesContainer');
    const tabs = document.querySelectorAll('#accessoriesTabs .category-tab');
    
    if (!container) return;
    
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    
    let filteredProducts = products.accessories;
    
    if (category !== 'all') {
        const categoryMap = {
            'keyboard': 'fa-keyboard',
            'mouse': 'fa-mouse',
            'headset': 'fa-headphones',
            'monitor': 'fa-tv',
            'chair': 'fa-chair'
        };
        
        const iconClass = categoryMap[category] || '';
        filteredProducts = products.accessories.filter(product => 
            product.icon.includes(iconClass)
        );
    }
    
    displayFilteredAccessories(filteredProducts);
}

function displayFilteredAccessories(productList) {
    const container = document.getElementById('accessoriesContainer');
    if (!container) return;
    
    if (productList.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>لا توجد نتائج</h3>
                <p>جرب استخدام تبويب آخر</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = productList.map(product => `
        <div class="product-card">
            ${product.badge ? `<div class="product-badge ${product.badge}">${getBadgeText(product.badge)}</div>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <i class="${product.icon}"></i>
            </div>
            <div class="product-info">
                <h3 class="product-title">
                    <i class="${product.icon}"></i> ${product.name}
                </h3>
                <p class="product-description">${product.desc}</p>
                <div class="product-specs">
                    ${product.specs ? product.specs.map(spec => `<span class="spec-tag">${spec}</span>`).join('') : ''}
                </div>
                <div class="product-price">
                    <div class="price">$${product.price.toLocaleString()}</div>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> أضف إلى العربة
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function getBadgeText(badge) {
    const badges = {
        'hot': '🔥 الأكثر مبيعاً',
        'best': '⭐ الأفضل',
        'new': '🆕 جديد',
        'extreme': '⚡ قصوى',
        'premium': '👑 بريميوم'
    };
    return badges[badge] || badge;
}

function setupTabEvents() {
    document.querySelectorAll('#pre-built .category-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const onclickAttr = this.getAttribute('onclick');
            if (onclickAttr) {
                const category = onclickAttr.match(/'([^']+)'/)[1];
                showCategory(category, 'prebuilt');
            }
        });
    });
    
    document.querySelectorAll('#components .category-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const onclickAttr = this.getAttribute('onclick');
            if (onclickAttr) {
                const category = onclickAttr.match(/'([^']+)'/)[1];
                showCategory(category, 'components');
            }
        });
    });
}

function showAccessories() {
    filterAccessories('all');
}

function addToCart(productId) {
    let product = null;
    
    for (const category in products) {
        if (category === 'prebuilt' || category === 'components') {
            for (const subCategory in products[category]) {
                const found = products[category][subCategory].find(p => p.id === productId);
                if (found) {
                    product = found;
                    break;
                }
            }
        } else if (category === 'accessories') {
            const found = products[category].find(p => p.id === productId);
            if (found) product = found;
        }
        if (product) break;
    }
    
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            icon: product.icon,
            image: product.image,
            quantity: 1
        });
    }
    
    updateCart();
    showNotification(`✅ تم إضافة ${product.name} إلى العربة`);
    openCart();
}

function setupCartEvents() {
    const cartIcon = document.getElementById('cartIcon');
    const cartBtn = document.querySelector('.floating-btn.cart');
    
    if (cartIcon) {
        cartIcon.addEventListener('click', openCart);
    }
    
    if (cartBtn) {
        cartBtn.addEventListener('click', openCart);
    }
}

function openCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
        cartSidebar.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

function closeCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
        cartSidebar.classList.remove('open');
        document.body.style.overflow = 'auto';
    }
}

function updateCart() {
    const cartCount = document.querySelector('.cart-count');
    const cartTotal = document.getElementById('cartTotal');
    const cartItems = document.getElementById('cartItems');
    const cartBadge = document.querySelector('.cart-badge');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems;
    if (cartBadge) cartBadge.textContent = totalItems;
    
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotal) cartTotal.textContent = '$' + totalPrice.toLocaleString();
    
    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-bag"></i>
                    <p>عربة التسوق فارغة</p>
                    <small>أضف بعض المنتجات لتظهر هنا</small>
                </div>
            `;
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-details">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">$${item.price.toLocaleString()}</div>
                        <div class="cart-item-controls">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCart();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    showNotification('🗑️ تم إزالة المنتج من العربة');
}

function checkout() {
    if (cart.length === 0) {
        showNotification('❌ العربة فارغة');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (confirm(`🎮 لديك ${itemsCount} منتج في العربة\n💰 الإجمالي: $${total.toLocaleString()}\n✅ هل تريد إتمام عملية الشراء؟`)) {
        showNotification('🎉 شكراً لشرائك! سيتم التواصل معك خلال 24 ساعة لتأكيد الطلب.');
        cart = [];
        updateCart();
        closeCart();
    }
}

function setupNewsletter() {
    const subscribeBtn = document.querySelector('.subscribe-btn');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', function() {
            const emailInput = this.parentElement.querySelector('input[type="email"]');
            const email = emailInput ? emailInput.value.trim() : '';
            
            if (!email || !isValidEmail(email)) {
                showNotification('❌ الرجاء إدخال بريد إلكتروني صحيح');
                if (emailInput) emailInput.focus();
                return;
            }
            
            showNotification('✅ شكراً لاشتراكك! سنرسل لك آخر العروض قريباً.');
            if (emailInput) emailInput.value = '';
        });
    }
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            ${message}
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--secondary);
        color: var(--text);
        padding: 15px 25px;
        border-radius: var(--radius);
        border-left: 4px solid var(--accent);
        box-shadow: var(--shadow);
        z-index: 2000;
        animation: slideInRight 0.3s ease;
        max-width: 350px;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.addEventListener('click', function(event) {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartIcon = document.getElementById('cartIcon');
    const cartBtn = document.querySelector('.floating-btn.cart');
    
    if (cartSidebar && cartSidebar.classList.contains('open') &&
        !cartSidebar.contains(event.target) &&
        event.target !== cartIcon &&
        event.target !== cartBtn &&
        !cartIcon.contains(event.target) &&
        !cartBtn.contains(event.target)) {
        closeCart();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeCart();
    }
});

const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
.product-image {
    position: relative;
}

.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
}

.product-image i {
    position: relative;
    z-index: 1;
    color: white;
    text-shadow: 0 2px 10px rgba(0,0,0,0.5);
}

.cart-item-image {
    position: relative;
}

.cart-item-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
}

.no-results {
    text-align: center;
    padding: 3rem;
    color: var(--text-secondary);
}

.no-results i {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--border);
}

.no-results h3 {
    margin-bottom: 0.5rem;
    color: var(--text);
}

.no-results p {
    color: var(--text-secondary);
}

@keyframes slideInRight {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

@keyframes slideOutRight {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
}
`;
document.head.appendChild(additionalStyles);