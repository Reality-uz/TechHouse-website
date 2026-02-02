        const products = [
            {
                id: 1,
                name: "Smart Coffee Maker",
                price: 129.99,
                originalPrice: 179.99,
                category: "kitchen",
                image: "https://www.coffeeness.de/wp-content/uploads/2024/04/atomi-smart-wifi-coffee-maker-main.jpg",
                images: [
                    "https://i.pcmag.com/imagery/reviews/02LWlunJExwaYZMkJGX0HZn-5..v1569475985.jpg",
                    "https://hamiltonbeach.com/media/products/49350-VPA-007.jpg",
                    "https://smarter.am/cdn/shop/products/Shopify-Product-Coffee-FC-3DCoffee-3-copyAA_600x600_crop_center.png?v=1647597918",
                    "https://static0.pocketlintimages.com/wordpress/wp-content/uploads/wm/2023/10/miele-cm6360-lifestyle-2.jpg?w=1600&h=1200&fit=crop"
                ],
                sale: true,
                rating: 4.5,
                inStock: true,
                description: "Wake up to the perfect cup of coffee every morning with our Smart Coffee Maker. Features programmable brewing, temperature control and smartphone connectivity for ultimate convenience.",
                features: [
                    "Programmable 24-hour timer",
                    "Built-in grinder for fresh coffee",
                    "WiFi connectivity with mobile app",
                    "Auto shut-off safety feature",
                    "Large 12-cup capacity",
                    "Keep warm function up to 2 hours"
                ],
                specs: {
                    "Brand": "Tech House",
                    "Capacity": "12 cups (1.8L)",
                    "Power": "1000W",
                    "Dimensions": "14 x 8 x 12 inches",
                    "Weight": "5.5 lbs",
                    "Warranty": "2 years"
                },
                reviews: [
                    { name: "Sarah M.", rating: 5, text: "Best coffee maker I've ever owned! The app control is so convenient." },
                    { name: "John D.", rating: 4, text: "Great quality and makes excellent coffee. Slightly pricey but worth it." }
                ]
            },
            {
                id: 2,
                name: "Robot Vacuum Cleaner",
                price: 299.99,
                originalPrice: 399.99,
                category: "cleaning",
                image: "https://media.kasperskydaily.com/wp-content/uploads/sites/37/2022/12/26161755/robot-vacuum-privacy-featured.jpg",
                images: [
                    "https://media.kasperskydaily.com/wp-content/uploads/sites/37/2022/12/26161755/robot-vacuum-privacy-featured.jpg",
                    "https://pimcdn.sharafdg.com/cdn-cgi/image/width=600,height=600,fit=pad,format=webp,quality=70/images/S400894906_1?1758709599",
                    "https://i.pcmag.com/imagery/reviews/01nw4pcVXuQciEOJ5R4btgO-2..v1726688415.jpg",
                    "https://us.narwal.com/cdn/shop/articles/all-about-robot-vacuums-with-camera-684427-4105839_36df874c-7269-4e7e-b0b2-0b4992085b37-8298515_1200x1200.jpg?v=1764093433"
                ],
                sale: true,
                rating: 4.8,
                inStock: true,
                description: "Let our intelligent robot vacuum do the work for you. With advanced mapping technology and powerful suction, it keeps your floors spotless while you relax.",
                features: [
                    "Smart navigation with obstacle avoidance",
                    "Multiple cleaning modes",
                    "Voice control compatible",
                    "HEPA filtration system",
                    "Auto-charging dock",
                    "Scheduled cleaning"
                ],
                specs: {
                    "Brand": "Tech House",
                    "Battery Life": "120 minutes",
                    "Suction Power": "2000Pa",
                    "Dustbin Capacity": "600ml",
                    "Noise Level": "55dB",
                    "Warranty": "1 year"
                },
                reviews: [
                    { name: "Emily R.", rating: 5, text: "Amazing! It cleans my entire house without any issues." },
                    { name: "Mike T.", rating: 4, text: "Very effective, but occasionally gets stuck under furniture." }
                ]
            },
            {
                id: 3,
                name: "Air Purifier Pro",
                price: 249.99,
                category: "climate",
                image: "https://i01.appmifile.com/webfile/globalimg/products/m/xiaomi-smart-air-purifier-4-pro/section11Img.png",
                images: [
                    "https://i01.appmifile.com/webfile/globalimg/products/m/xiaomi-smart-air-purifier-4-pro/section11Img.png",
                    "https://assets.asaxiy.uz/product/items/desktop/eccbc87e4b5ce2fe28308fd9f2a7baf32023111116291593271ufEHYXiA9I.jpg.webp",
                    "https://ashgabatmarket.com/wp-content/uploads/2023/06/Xiaomi-Smart-Air-Purifier-4-Pro-10.webp"
                ],
                sale: false,
                rating: 4.6,
                inStock: true,
                description: "Breathe cleaner, healthier air with our advanced air purifier featuring True HEPA filtration and smart air quality monitoring.",
                features: [
                    "True HEPA H13 filter",
                    "Real-time air quality display",
                    "Auto mode adjustment",
                    "Ultra-quiet operation",
                    "Covers up to 500 sq ft"
                ],
                specs: {
                    "Coverage Area": "500 sq ft",
                    "CADR": "230 CFM",
                    "Filter Life": "6-8 months",
                    "Noise Level": "24-52 dB",
                    "Warranty": "2 years"
                },
                reviews: [
                    { name: "Lisa K.", rating: 5, text: "My allergies have improved significantly!" },
                    { name: "Tom B.", rating: 4, text: "Works great, wish it was a bit quieter on high speed." }
                ]
            },
            {
                id: 4,
                name: "Electric Hair Dryer",
                price: 89.99,
                category: "personal",
                image: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=500&h=300&fit=crop",
                images: ["https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=500&h=300&fit=crop", "https://4.imimg.com/data4/VG/LI/MY-30726636/electric-hair-dryer.png", "https://smartbuy-me.com/cdn/shop/files/FSU0637ST0002-1_26719694-be44-4017-8dc3-5b69e144cd0a.jpg?v=1722500564", "https://www.arizon.az/storage/photos/elnare123/EVV1/9796/2.jpg"],
                sale: false,
                rating: 4.3,
                inStock: true,
                description: "Professional-grade hair dryer with ionic technology for faster drying and healthier-looking hair.",
                features: ["Ionic technology", "3 heat settings", "Cool shot button", "Lightweight design"],
                specs: { "Power": "1875W", "Weight": "1.2 lbs", "Warranty": "1 year" },
                reviews: [{ name: "Anna S.", rating: 4, text: "Dries hair quickly without damage." }]
            },
            {
                id: 5,
                name: "Smart Blender",
                price: 159.99,
                originalPrice: 199.99,
                category: "kitchen",
                image: "https://i02.appmifile.com/mi-com-product/fly-birds/m/xiaomi-smart-blender/3ebf1f61f0ba2e06ddf0f41cf574186a.png",
                images: ["https://i02.appmifile.com/mi-com-product/fly-birds/m/xiaomi-smart-blender/3ebf1f61f0ba2e06ddf0f41cf574186a.png", "https://mionline.uz/image/cache/catalog/image/cache/catalog/0-2024/0-1/06.08/Xiaomi%20Smart%20Blender-1-1300x1300.webp", "https://cdn.mediapark.uz/imgs/ef0267cc-6a1d-490f-acac-4ce34b9fcb75_Artboard-13.webp"],
                sale: true,
                rating: 4.7,
                inStock: true,
                description: "High-performance blender with smart presets for smoothies, soups, and more.",
                features: ["10 speed settings", "Self-cleaning", "BPA-free pitcher", "1200W motor"],
                specs: { "Capacity": "64 oz", "Power": "1200W", "Warranty": "3 years" },
                reviews: [{ name: "David L.", rating: 5, text: "Makes the smoothest smoothies ever!" }]
            },
            {
                id: 6,
                name: "Steam Mop",
                price: 119.99,
                category: "cleaning",
                image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1727136267-61ubGWvXmCL.jpg?crop=1xw:1.00xh;center,top&resize=980:*",
                images: ["https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1727136267-61ubGWvXmCL.jpg?crop=1xw:1.00xh;center,top&resize=980:*" , "https://cdn.shopify.com/s/files/1/2781/4384/products/Home-lifestyle-image3_619d612d-1bb8-49d4-9c1e-24c1c6dbb353.jpg?v=1654716006&width=696"],
                sale: false,
                rating: 4.4,
                inStock: true,
                description: "Chemical-free cleaning with powerful steam technology.",
                features: ["Ready in 30 seconds", "Swivel steering", "Reusable pads", "Multi-surface"],
                specs: { "Water Tank": "350ml", "Steam Time": "20 minutes", "Warranty": "1 year" },
                reviews: [{ name: "Rachel P.", rating: 4, text: "Works well on tile floors." }]
            },
            {
                id: 7,
                name: "Smart Thermostat",
                price: 199.99,
                category: "climate",
                image: "https://smartenergy.com/wp-content/uploads/2020/04/CAN-A-SMART-THERMOSTAT-HELP-YOU-SAVE_.jpg",
                images: ["https://smartenergy.com/wp-content/uploads/2020/04/CAN-A-SMART-THERMOSTAT-HELP-YOU-SAVE_.jpg","https://www.techhive.com/wp-content/uploads/2024/11/Nest-Learning-Thermostat-4th-generation-bangle.jpg?quality=50&strip=all","https://www.energync.org/wp-content/uploads/2024/07/Smart_Therm_small.jpg"],
                sale: false,
                rating: 4.9,
                inStock: true,
                description: "Save energy and money with intelligent climate control.",
                features: ["Learning algorithm", "Remote control", "Energy reports", "Voice compatible"],
                specs: { "Display": "Color touchscreen", "Compatibility": "Most HVAC systems", "Warranty": "2 years" },
                reviews: [{ name: "Chris W.", rating: 5, text: "Reduced my energy bill by 20%!" }]
            },
            {
                id: 8,
                name: "Electric Toothbrush",
                price: 79.99,
                category: "personal",
                image: "https://www.kaylaan.com/cdn/shop/files/Toothbrush.Main.png?v=1749729301",
                images: ["https://www.kaylaan.com/cdn/shop/files/Toothbrush.Main.png?v=1749729301","https://www.123dental.com.au/wp-content/uploads/2021/08/changing-toothbrush-head.jpg","https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/Rechargeable-Electric-Toothbrush-(RTB1)-1.jpg"],
                sale: false,
                rating: 4.5,
                inStock: true,
                description: "Achieve a dentist-clean feeling every day with sonic technology.",
                features: ["5 cleaning modes", "2-minute timer", "Long battery life", "Pressure sensor"],
                specs: { "Battery Life": "2 weeks", "Vibrations": "31,000/min", "Warranty": "2 years" },
                reviews: [{ name: "Jennifer H.", rating: 5, text: "My teeth have never felt cleaner!" }]
            },
            {
                id: 9,
                name: "Food Processor",
                price: 189.99,
                category: "kitchen",
                image: "https://i5.walmartimages.com/seo/Ninja-Professional-Food-Processor-850-Watts-9-Cup-Capacity-Auto-iQ-Preset-Programs-Silver_c77c7d0f-e9a5-48cd-a853-a61d638823fa.d9147eb1465163afa83e2fcfb61616de.jpeg",
                images: ["https://i5.walmartimages.com/seo/Ninja-Professional-Food-Processor-850-Watts-9-Cup-Capacity-Auto-iQ-Preset-Programs-Silver_c77c7d0f-e9a5-48cd-a853-a61d638823fa.d9147eb1465163afa83e2fcfb61616de.jpeg","https://www.culinaris.de/media/9b/dd/92/1717155400/16444_-_Food_Processor_31L_Serie_1319-6.jpg?ts=1717155400","https://www.cuisinart.com/dw/image/v2/ABAF_PRD/on/demandware.static/-/Sites-master-us/default/dw8f618c26/images/large/3_FP9CF_Lifestyle02.jpg"],
                sale: false,
                rating: 4.6,
                inStock: true,
                description: "Versatile food processor for all your cooking needs.",
                features: ["Multiple blade options", "Large capacity", "Dishwasher safe", "Pulse function"],
                specs: { "Capacity": "12 cups", "Power": "720W", "Warranty": "3 years" },
                reviews: [{ name: "Mark R.", rating: 4, text: "Great for meal prep!" }]
            },
            {
                id: 10,
                name: "Cordless Vacuum",
                price: 349.99,
                originalPrice: 449.99,
                category: "cleaning",
                image: "https://store.tineco.com/cdn/shop/files/tineco-pure-one-a50s-cordless-stick-vacuum-cleaner-499230.jpg?v=1762272610&width=1214",
                images: ["https://store.tineco.com/cdn/shop/files/tineco-pure-one-a50s-cordless-stick-vacuum-cleaner-499230.jpg?v=1762272610&width=1214","https://www.realsimple.com/thmb/wguKdcHbVWSMnddbwK7Im76bo9k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rsp-kenmore-ds4030-cordless-stick-vacuum-with-easyreach-wand-emerson-latham-08-114ae46c3bfe4e98a4d25dfd0c243fca.jpeg","https://imoosoo.com/cdn/shop/files/MOOSOO-XL-618A-4-in-1-Cordless-Vacuum-High-Performance_-Easy-Maneuverability_-and-Long-lasting-Battery-Life-MOOSOOr-308792023.png"],
                sale: true,
                rating: 4.8,
                inStock: true,
                description: "Powerful cordless vacuum with versatile attachments.",
                features: ["60-minute runtime", "HEPA filtration", "LED display", "Wall mount"],
                specs: { "Battery": "Lithium-ion", "Suction": "150AW", "Warranty": "2 years" },
                reviews: [{ name: "Susan K.", rating: 5, text: "So convenient and powerful!" }]
            },
            {
                id: 11,
                name: "Espresso Machine",
                price: 399.99,
                category: "kitchen",
                image: "https://www.foodandwine.com/thmb/90fxyGuGDQeZ_TdgvhS5Hqejqbs=/fit-in/1500x2668/filters:no_upscale():max_bytes(150000):strip_icc()/faw-delonghi-rivelia-fully-automatic-espresso-machine-nsimpson-27-c1cd9246cc514046b1b980c10c2d5c13.jpeg",
                images: ["https://www.foodandwine.com/thmb/90fxyGuGDQeZ_TdgvhS5Hqejqbs=/fit-in/1500x2668/filters:no_upscale():max_bytes(150000):strip_icc()/faw-delonghi-rivelia-fully-automatic-espresso-machine-nsimpson-27-c1cd9246cc514046b1b980c10c2d5c13.jpeg","https://kismile.com/cdn/shop/files/20-bar-espresso-machines-with-grinde-cm8031-509568.jpg?v=1733117304&width=1080","https://www.morphyrichards.co.uk/cdn/shop/files/MorphyRichards_SignatureCompactEspressoMakerStainlessSteel_172022_Lifestyle_1.jpg?v=1762261372&width=1080"],
                sale: false,
                rating: 4.7,
                inStock: true,
                description: "Barista-quality espresso at home.",
                features: ["15-bar pressure", "Milk frother", "Programmable", "Stainless steel"],
                specs: { "Water Tank": "1.8L", "Power": "1350W", "Warranty": "1 year" },
                reviews: [{ name: "Paul M.", rating: 5, text: "Makes perfect espresso every time!" }]
            },
            {
                id: 12,
                name: "Air Fryer",
                price: 149.99,
                originalPrice: 199.99,
                category: "kitchen",
                image: "https://www.reliant.co.uk/blog/wp-content/uploads/2023/09/Airfryer.jpg",
                images: ["https://www.reliant.co.uk/blog/wp-content/uploads/2023/09/Airfryer.jpg","https://img.drz.lazcdn.com/static/pk/p/9f72bf7f4d8587e9d281aeda57424cbf.jpg_720x720q80.jpg","https://www.foodandwine.com/thmb/ojX3UZNYIxpUzxNjU7j795wLQow=/fit-in/1500x2668/filters:no_upscale():max_bytes(150000):strip_icc()/faw-air-fryers-afto-oct-24-test-instant-vortex-plus-6qt-xl-nsimpson-712-aecf119171b34aa68b17269b6d0c9a26.jpeg"],
                sale: true,
                rating: 4.9,
                inStock: true,
                description: "Healthy cooking with rapid air technology.",
                features: ["Digital touchscreen", "8 presets", "Dishwasher safe", "Non-stick basket"],
                specs: { "Capacity": "5.8 qt", "Temperature": "180-400°F", "Warranty": "1 year" },
                reviews: [{ name: "Nancy G.", rating: 5, text: "Crispy food with less oil!" }]
            },
            {
                id: 13,
                name: "Humidifier",
                price: 89.99,
                category: "climate",
                image: "https://www.realsimple.com/thmb/27HdwgUAxdDJmQ42nXUSqXaLx5I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rsp-miko-myst-ultrasonic-humidifier-ashley-craiger-12-0ad911f6b1cb47afbc5f5d99de6b2ac6.jpeg",
                images: ["https://www.realsimple.com/thmb/27HdwgUAxdDJmQ42nXUSqXaLx5I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rsp-miko-myst-ultrasonic-humidifier-ashley-craiger-12-0ad911f6b1cb47afbc5f5d99de6b2ac6.jpeg","https://article.images.consumerreports.org/image/upload/t_article_tout/v1741808987/prod/content/dam/CRO-Images-2025/Appliances/CR-Appliances-Inlinehero-humidifiers-under-50-0325","https://mini-io-api.texnomart.uz/catalog/product/3559/355913/190336/924115da-9014-4f25-8e6d-61b08cabc126.webp"],
                sale: false,
                rating: 4.4,
                inStock: true,
                description: "Maintain optimal humidity for comfort and health.",
                features: ["Ultrasonic technology", "Auto shut-off", "Night light", "Whisper quiet"],
                specs: { "Tank Size": "4L", "Runtime": "30 hours", "Warranty": "1 year" },
                reviews: [{ name: "Karen F.", rating: 4, text: "Helps with dry winter air." }]
            },
            {
                id: 14,
                name: "Electric Shaver",
                price: 129.99,
                category: "personal",
                image: "https://i5.walmartimages.com/seo/Electric-Shaver-Razor-Men-3-1-Men-s-Cordless-LED-Display-IPX7-Waterproof-Facial-Nose-Hair-Beard-Trimmer-Grooming-Haircut-Kit-Wet-Dry-Rechargeable-Use_0e30c318-0d7f-4b75-b976-c50adb5899d5.c730536cbcc3d9e8b62f522798c6e9ea.jpeg",
                images: ["https://i5.walmartimages.com/seo/Electric-Shaver-Razor-Men-3-1-Men-s-Cordless-LED-Display-IPX7-Waterproof-Facial-Nose-Hair-Beard-Trimmer-Grooming-Haircut-Kit-Wet-Dry-Rechargeable-Use_0e30c318-0d7f-4b75-b976-c50adb5899d5.c730536cbcc3d9e8b62f522798c6e9ea.jpeg","https://ozhairandbeauty.nz/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1588%2F9573%2Ffiles%2Fshopping.webp%3Fv%3D1715731833&w=3840&q=75","https://m.media-amazon.com/images/I/61ZmVg1DWVL._AC_UF1000,1000_QL80_.jpg"],
                sale: false,
                rating: 4.5,
                inStock: true,
                description: "Close, comfortable shave with rotary blades.",
                features: ["Wet & dry use", "Pop-up trimmer", "Quick charge", "Washable"],
                specs: { "Battery Life": "60 minutes", "Charge Time": "1 hour", "Warranty": "2 years" },
                reviews: [{ name: "Robert J.", rating: 4, text: "Very smooth shave." }]
            },
            {
                id: 15,
                name: "Pressure Washer",
                price: 279.99,
                category: "cleaning",
                image: "https://www.briggsandstratton.com/content/dam/briggsandstratton/au/en_au/images/products/pressure-washers/BS_AUNZ_PW_Mobile-banner.jpg",
                images: ["https://www.briggsandstratton.com/content/dam/briggsandstratton/au/en_au/images/products/pressure-washers/BS_AUNZ_PW_Mobile-banner.jpg","https://hips.hearstapps.com/hmg-prod/images/ghi-testing-03172023-412-lowres-64247624235dd.jpg?crop=1.00xw:0.844xh;0,0","https://media.diy.com/is/image/Kingfisher/ryobi-corded-pressure-washer-1-8kw-ry140pwa~4892210202963_02i_bq?$MOB_PREV$&$width=600&$height=600"],
                sale: false,
                rating: 4.6,
                inStock: true,
                description: "Professional cleaning power for outdoor surfaces.",
                features: ["2000 PSI", "Multiple nozzles", "Detergent tank", "Hose reel"],
                specs: { "Pressure": "2000 PSI", "Flow Rate": "1.76 GPM", "Warranty": "1 year" },
                reviews: [{ name: "Steve N.", rating: 5, text: "Cleaned my driveway perfectly!" }]
            }
        ];

        let cart = [];
        let currentUser = null;
        let currentCategory = 'all';
        let selectedMembershipPlan = null;

        function renderProducts() {
            const hotDealsContainer = document.getElementById('hotDeals');
            const allProductsContainer = document.getElementById('allProductsScroll');
            const allProductsGrid = document.getElementById('allProductsGrid');

            hotDealsContainer.innerHTML = '';
            allProductsContainer.innerHTML = '';
            allProductsGrid.innerHTML = '';

            const saleProducts = products.filter(p => p.sale);
            
            saleProducts.forEach(product => {
                hotDealsContainer.innerHTML += createProductCard(product);
            });

            products.forEach(product => {
                allProductsContainer.innerHTML += createProductCard(product);
                allProductsGrid.innerHTML += createProductCard(product);
            });
        }

        function updateMenuPreview(productId) {
            const product = products.find(p => p.id === productId);
            if (product) {
                const imgElement = document.getElementById('menuPreviewImg');
                const titleElement = document.getElementById('menuPreviewTitle');
                
                // Fade effect
                imgElement.style.opacity = '0';
                setTimeout(() => {
                    imgElement.src = product.image;
                    titleElement.textContent = product.name;
                    imgElement.style.opacity = '1';
                }, 150);
            }
        }

function createProductCard(product) {
    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    return `
        <div class="product-card" data-category="${product.category}" onclick="openProductDetail(${product.id})">
            ${product.sale ? '<div class="sale-badge">SALE</div>' : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-title">${product.name}</div>
            <div class="product-rating">${stars} (${product.rating})</div>
            <div class="product-price">
                ${product.originalPrice ? `<span class="original-price">$${product.originalPrice}</span>` : ''}
                $${product.price}
            </div>
            <label class="filter-option" onclick="event.stopPropagation()" style="margin-bottom: 10px; display: block;">
                <input type="checkbox" class="compare-checkbox" data-id="${product.id}" onchange="toggleCompare(${product.id})"> Compare
            </label>
            <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
                <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
        </div>
    `;
}

// Open Product Detail Page
function openProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    
    const detailContent = `
        <div class="product-detail-grid">
            <div class="product-gallery">
                <div class="main-product-image" id="mainImage">
                    <img src="${product.images[0]}" alt="${product.name}">
                </div>
                <div class="product-thumbnails">
                    ${product.images.map((img, index) => `
                        <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${img}', ${index})">
                            <img src="${img}" alt="${product.name}">
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="product-detail-info">
                <h1>${product.name}</h1>
                
                <div class="product-detail-rating">
                    <span class="stars">${stars}</span>
                    <span class="review-count">(${product.reviews.length} reviews)</span>
                </div>
                
                <div class="product-detail-price">
                    ${product.originalPrice ? `<span class="original-price">$${product.originalPrice}</span>` : ''}
                    $${product.price}
                </div>
                
                <div class="stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}">
                    ${product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                </div>
                
                <p class="product-description">${product.description}</p>
                
                <div class="product-features">
                    <h3>Key Features</h3>
                    <ul>
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="product-specs">
                    <h3>Technical Specifications</h3>
                    ${Object.entries(product.specs).map(([key, value]) => `
                        <div class="spec-item">
                            <span class="spec-label">${key}</span>
                            <span class="spec-value">${value}</span>
                        </div>
                    `).join('')}
                </div>
                
                <button class="btn-primary" style="width: 100%; margin-top: 2rem;" onclick="addToCart(${product.id}); showNotification('${product.name} added to cart!')">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        </div>
        
        <div class="reviews-section">
            <h2>Customer Reviews</h2>
            ${product.reviews.map(review => `
                <div class="review-card">
                    <div class="review-header">
                        <span class="reviewer-name">${review.name}</span>
                        <span class="review-stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</span>
                    </div>
                    <p class="review-text">${review.text}</p>
                </div>
            `).join('')}
        </div>
    `;
    
    document.getElementById('productDetailContent').innerHTML = detailContent;
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('allProductsPage').classList.remove('active');
    document.getElementById('productDetailPage').classList.add('active');
    
    window.scrollTo(0, 0);
}

// Change Main Image in Product Detail
function changeMainImage(imageSrc, index) {
    document.querySelector('#mainImage img').src = imageSrc;
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

// Close Product Detail
function closeProductDetail() {
    document.getElementById('productDetailPage').classList.remove('active');
    
    // Check which page was active before
    if (document.getElementById('allProductsPage').classList.contains('active')) {
        document.getElementById('allProductsPage').classList.add('active');
    } else {
        document.getElementById('homePage').style.display = 'block';
    }
    window.scrollTo(0, 0);
}

document.getElementById('paymentMethod').addEventListener('change', function() {
    const cardForm = document.getElementById('cardDetailsForm');
    cardForm.style.display = (this.value === 'credit' || this.value === 'debit') ? 'block' : 'none';
});

        function scrollProducts(type, direction) {
            const container = type === 'deals' ? 
                document.getElementById('hotDeals') : 
                document.getElementById('allProductsScroll');
            const scrollAmount = 320;
            container.scrollBy({
                left: direction * scrollAmount,
                behavior: 'smooth'
            });
        }

        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            
            updateCartCount();
            showNotification(`${product.name} added to cart!`);
        }

        function showNotification(message) {
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 3000);
        }
        function updateCartCount() {
            const count = cart.reduce((total, item) => total + item.quantity, 0);
            document.getElementById('cartCount').textContent = count;
        }

        function openCart() {
            const modal = document.getElementById('cartModal');
            const cartItems = document.getElementById('cartItems');
            
            if (cart.length === 0) {
                cartItems.innerHTML = '<p style="color: white; text-align: center;">Your cart is empty</p>';
            } else {
                cartItems.innerHTML = cart.map(item => `
                    <div class="cart-item">
                        <div>
                            <div style="font-weight: 600; margin-bottom: 0.5rem;">${item.name}</div>
                            <div style="color: rgba(255, 255, 255, 0.7);">${item.price}</div>
                            <div class="quantity-control">
                                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                                <span>${item.quantity}</span>
                                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                            </div>
                        </div>
                        <button class="quantity-btn" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
                    </div>
                `).join('');
            }
            
            updateCartTotal();
            modal.style.display = 'block';
        }

        function updateQuantity(productId, change) {
            const item = cart.find(i => i.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                } else {
                    openCart();
                }
            }
        }

        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartCount();
            openCart();
        }
        function updateCartTotal() {
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            document.getElementById('cartTotal').textContent = total.toFixed(2);
        }
        function closeCart() {
            document.getElementById('cartModal').style.display = 'none';
        }

        function checkout() {
            const payment = document.getElementById('paymentMethod').value;
            const delivery = document.getElementById('deliveryOption').value;
            const cartTotal = document.getElementById('cartTotal').textContent;

            if (!currentUser) {
                showNotification("Please Login or Register to complete your purchase.");
                openProfile();
                return;
            }
            if (cart.length === 0) {
                showNotification('Your cart is empty');
                return;
            }
            if (!payment || !delivery) {
                showNotification('Please select both payment and delivery options');
                return;
            }
            const newOrder = {
                id: Math.floor(Math.random() * 9000) + 1000,
                date: new Date().toLocaleDateString(),
                total: cartTotal,
                itemCount: cart.length
            };
            if (!currentUser.orders) {
                currentUser.orders = [];
            }
            currentUser.orders.unshift(newOrder);
            localStorage.setItem('techHouseUser', JSON.stringify(currentUser));
            showNotification('Order placed successfully! Thank you for shopping.');
            cart = [];
            updateCartCount();
            closeCart();
            renderOrderHistory();
        }
        function saveOrderToHistory(){
            const order = {
                id: Math.floor(Math.random() * 10000),
                date: new Date().toLocaleDateString(),
                total: document.getElementById('cartTotal').textContent,
                items: [...cart]
            };
            currentUser.orders.push(order);
            localStorage.setItem('techHouseUser', JSON.stringify(currentUser));
            renderOrderHistory();
        }
        function renderOrderHistory() {
            const container = document.getElementById('orderHistoryContainer');
            if (!currentUser.orders || currentUser.orders.length === 0) {
                container.innerHTML = '<p style="color: gray; text-align: center;">No orders yet.</p>';
                return;
            }

            container.innerHTML = currentUser.orders.map(order => `
                <div style="border-bottom: 1px solid #444; padding: 12px 0; display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <div style="font-weight: bold;">Order #${order.id}</div>
                        <div style="font-size: 0.8rem; color: #aaa;">${order.date} • ${order.itemCount} items</div>
                    </div>
                    <div style="text-align: right;">
                        <div style="color: #ff9a00; font-weight: bold;">$${order.total}</div>
                        <button onclick="returnItem(${order.id})" style="background: none; border: 1px solid #ff4444; color: #ff4444; border-radius: 5px; font-size: 0.7rem; cursor: pointer; padding: 2px 5px; margin-top: 5px;">Return</button>
                    </div>
                </div>
            `).join('');
        }
        function editField(field) {
            let newValue = prompt(`Enter new ${field}:`, field === 'password' ? "" : currentUser[field]);
            if (newValue && newValue.trim() !== "") {
                currentUser[field] = newValue;
                localStorage.setItem('techHouseUser', JSON.stringify(currentUser));
                showNotification(`${field.charAt(0).toUpperCase() + field.slice(1)} updated!`);
                openProfile(); // Refresh the UI
            }
        }
        function returnItem(orderId) {
            showNotification("Return request for Order #" + orderId + " has been sent to the store.");
        }

        function openProfile() {
            const modal = document.getElementById('profileModal');
            if (currentUser) {
                document.getElementById('authSelection').style.display = 'none';
                document.getElementById('loginForm').style.display = 'none';
                document.getElementById('registerForm').style.display = 'none';
                document.getElementById('profileInfo').style.display = 'block';
                
                document.getElementById('profileNameDisplay').textContent = currentUser.name;
                document.getElementById('profileEmailDisplay').textContent = currentUser.email;
                document.getElementById('profileDateDisplay').textContent = currentUser.date || "2026";
                
                renderOrderHistory();
            } else {
                document.getElementById('authSelection').style.display = 'flex';
                document.getElementById('profileInfo').style.display = 'none';
                switchAuth('login');
            }
            modal.style.display = 'block';
        }

        function switchAuth(type) {
            const loginBtn = document.querySelector('.auth-option-btn:first-child');
            const registerBtn = document.querySelector('.auth-option-btn:last-child');
            const loginForm = document.getElementById('loginForm');
            const registerForm = document.getElementById('registerForm');
            
            if (type === 'login') {
                loginBtn.classList.add('active');
                registerBtn.classList.remove('active');
                loginForm.style.display = 'block';
                registerForm.style.display = 'none';
            } else {
                registerBtn.classList.add('active');
                loginBtn.classList.remove('active');
                registerForm.style.display = 'block';
                loginForm.style.display = 'none';
            }
        }

        function login() {
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            if (!email || !password) {
                showNotification('Please fill in all fields');
                return;
            }
            const savedUser = localStorage.getItem('techHouseUser');
            
            if (savedUser) {
                const user = JSON.parse(savedUser);
                if (user.email === email && user.password === password) {
                    currentUser = user;
                    showNotification('Login successful!');
                    closeProfile();
                } else {
                    showNotification('Invalid credentials');
                }
            } else {
                showNotification('No account found. Please register first.');
            }
        }

        function register() {
            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const location = document.getElementById('registerLocation').value;
            
            if (!name || !email || !password) {
                showNotification('Please fill in all fields');
                return;
            }
            const user = {
                name: name,
                email: email,
                password: password,
                location: location,
                orders: [],
                date: new Date().toLocaleDateString()
            };
            
            localStorage.setItem('techHouseUser', JSON.stringify(user));
            currentUser = user;
            showNotification('Registration successful!');
            closeProfile();
        }

        function updateLocation() {
            const newLoc = document.getElementById('newLocation').value;
            if (newLoc) {
                currentUser.location = newLoc;
                localStorage.setItem('techHouseUser', JSON.stringify(currentUser));
                document.getElementById('profileLocationDisplay').textContent = newLoc;
                showNotification("Location updated!");
            }
        }
        function logout() {
            currentUser = null;
            showNotification('Logged out successfully!');
            closeProfile();
        }
        function closeProfile() {
            document.getElementById('profileModal').style.display = 'none';
        }
        function openContact() {
            document.getElementById('contactModal').style.display = 'block';
        }
        function closeContact() {
            document.getElementById('contactModal').style.display = 'none';
        }
        function sendMessage() {
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const subject = document.getElementById('contactSubject').value;
            const message = document.getElementById('contactMessage').value;
            
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields');
                return;
            }
            
            showNotification('Thank you for your message! We will get back to you soon.');
            closeContact();
            
            document.getElementById('contactName').value = '';
            document.getElementById('contactEmail').value = '';
            document.getElementById('contactSubject').value = '';
            document.getElementById('contactMessage').value = '';
        }
        function openMembership() {
            document.getElementById('membershipModal').style.display = 'block';
        }
        function closeMembership() {
            document.getElementById('membershipModal').style.display = 'none';
        }
        function selectMembershipPlan(planName, price) {
            selectedMembershipPlan = { name: planName, price: price };
            
            if (price === 'custom') {
                showNotification('Our sales team will contact you shortly!');
                closeMembership();
                return;
            }
            
            document.getElementById('selectedPlanName').textContent = planName;
            document.getElementById('selectedPlanPrice').textContent = price;
            
            closeMembership();
            document.getElementById('membershipPaymentModal').style.display = 'block';
        }
        function closeMembershipPayment() {
            document.getElementById('membershipPaymentModal').style.display = 'none';
        }
        function completeMembership() {
            const name = document.getElementById('membershipName').value;
            const email = document.getElementById('membershipEmail').value;
            const phone = document.getElementById('membershipPhone').value;
            const card = document.getElementById('membershipCard').value;
            const expiry = document.getElementById('membershipExpiry').value;
            const cvv = document.getElementById('membershipCVV').value;
            const address = document.getElementById('membershipAddress').value;
            
            if (!name || !email || !phone || !card || !expiry || !cvv || !address) {
                showNotification('Please fill in all fields');
                return;
            }
            
            showNotification(`Welcome to ${selectedMembershipPlan.name} Membership! Your account has been activated.`);
            closeMembershipPayment();
        
            document.getElementById('membershipName').value = '';
            document.getElementById('membershipEmail').value = '';
            document.getElementById('membershipPhone').value = '';
            document.getElementById('membershipCard').value = '';
            document.getElementById('membershipExpiry').value = '';
            document.getElementById('membershipCVV').value = '';
            document.getElementById('membershipAddress').value = '';
        }
        function showAllProducts() {
            document.getElementById('contactPage').classList.remove('active');
            document.getElementById('homePage').style.display = 'none';
            document.getElementById('allProductsPage').classList.add('active');
            window.scrollTo(0, 0);
        }
        function showHomePage() {
            document.getElementById('contactPage').classList.remove('active');
            document.getElementById('productDetailPage').classList.remove('active');
            document.getElementById('homePage').style.display = 'block';
            document.getElementById('allProductsPage').classList.remove('active');
            window.scrollTo(0, 0);
        }
        function filterCategory(category) {
            currentCategory = category;
            showAllProducts(); 

            const checkboxes = document.querySelectorAll('.filter-section input[type="checkbox"]');
            checkboxes.forEach(cb => {
                if (category === 'all') {
                    cb.checked = (cb.dataset.filter === 'all');
                } else {
                    cb.checked = (cb.dataset.filter === category);
                }
            });
            applyFilters();
            const dropdown = document.getElementById('categoryDropdown');
            if (dropdown) {
                dropdown.classList.remove('active');
            }
            window.scrollTo(0, 0);
        }

        function sendFooterMessage() {
            const name = document.getElementById('footerContactName').value;
            const email = document.getElementById('footerContactEmail').value;
            const phone = document.getElementById('footerContactPhone').value;
            const subject = document.getElementById('footerContactSubject').value;
            const message = document.getElementById('footerContactMessage').value;
            
            if (!name || !email || !phone || !subject || !message) {
                showNotification('Please fill in all fields');
                return;
            }
            
            showNotification('Thank you for your message! We will get back to you soon.');
            
            document.getElementById('footerContactName').value = '';
            document.getElementById('footerContactEmail').value = '';
            document.getElementById('footerContactPhone').value = '';
            document.getElementById('footerContactSubject').value = '';
            document.getElementById('footerContactMessage').value = '';
        }

        function applyFilters() {
            const checkedCategories = [];
            document.querySelectorAll('.filter-section input[type="checkbox"]:checked').forEach(cb => {
                checkedCategories.push(cb.dataset.filter);
            });
            const selectedPriceRange = document.querySelector('input[name="priceRange"]:checked')?.value || 'all';
            const cards = document.querySelectorAll('#allProductsGrid .product-card');
            cards.forEach(card => {
                const category = card.dataset.category;
                const priceText = card.querySelector('.product-price').textContent;
                const price = parseFloat(priceText.replace('$', ''));
                
                let showCard = true;

                if (checkedCategories.length > 0 && !checkedCategories.includes('all')) {
                    if (!checkedCategories.includes(category)) {
                        showCard = false;
                    }
                }
                if (selectedPriceRange !== 'all') {
                    if (selectedPriceRange === '0-100' && price > 100) showCard = false;
                    else if (selectedPriceRange === '100-200' && (price < 100 || price > 200)) showCard = false;
                    else if (selectedPriceRange === '200-300' && (price < 200 || price > 300)) showCard = false;
                    else if (selectedPriceRange === '300+' && price < 300) showCard = false;
                }
                
                card.style.display = showCard ? 'block' : 'none';
            });
        }

        function searchProducts() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            
            if (searchTerm === '') {
                document.querySelectorAll('.product-card').forEach(card => {
                    card.style.display = 'block';
                });
                return;
            }
            
            const cards = document.querySelectorAll('.product-card');
            
            cards.forEach(card => {
                const title = card.querySelector('.product-title').textContent.toLowerCase();
                if (title.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        function scrollToProducts() {
            const allProductsSection = document.querySelectorAll('.container')[1];
            if (allProductsSection) {
                allProductsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
        function scrollToDetails() {
            const productDetailsSection = document.getElementById('productDetailContent');
            if (productDetailsSection) {
                productDetailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
        function toggleFAQ(element) {
            const faqItem = element.parentElement;
            faqItem.classList.toggle('active');
        }

        // Category dropdown - click to open/close
        document.addEventListener('DOMContentLoaded', function() {
            const categoryDropdown = document.getElementById('categoryDropdown');
            const dropdownLink = categoryDropdown.querySelector('a');
            const dropdownContent = categoryDropdown.querySelector('.dropdown-content');
            
            // Toggle dropdown on click
            dropdownLink.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                categoryDropdown.classList.toggle('active');
            });
            
            // Prevent dropdown from closing when clicking inside dropdown content
            dropdownContent.addEventListener('click', function(e) {
                e.stopPropagation();
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', function(e) {
                if (!categoryDropdown.contains(e.target)) {
                    categoryDropdown.classList.remove('active');
                }
            });
        });

        window.onclick = function(event) {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }

function showContactPage() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('allProductsPage').classList.remove('active');
    document.getElementById('productDetailPage').classList.remove('active');
    
    const contactPage = document.getElementById('contactPage');
    contactPage.classList.add('active');
    const dropdown = document.getElementById('categoryDropdown');
    if (dropdown) dropdown.classList.remove('active');
    
    window.scrollTo(0, 0);
}

let compareList = [];
function toggleCompare(productId) {
    const index = compareList.indexOf(productId);
    if (index === -1) {
        if (compareList.length >= 3) {
            showNotification("You can only compare up to 3 products.");
            // Uncheck the checkbox manually
            event.target.checked = false;
            return;
        }
        compareList.push(productId);
    } else {
        compareList.splice(index, 1);
    }
    
    // Update floating button
    const btn = document.getElementById('compareFloatingBtn');
    document.getElementById('compareCount').textContent = compareList.length;
    btn.style.display = compareList.length > 0 ? 'block' : 'none';
}

function openComparison() {
    if (compareList.length < 2) {
        showNotification("Select at least 2 products to compare.");
        return;
    }

    const selectedProducts = compareList.map(id => products.find(p => p.id === id));
    const modal = document.getElementById('comparisonModal');
    const container = document.getElementById('comparisonTableContainer');

    // Create Table Header with Images and Names
    let tableHTML = `<table class="comparison-table">
        <thead>
            <tr>
                <th style="width: 20%;">Product</th>
                ${selectedProducts.map(p => `
                    <th>
                        <img src="${p.image}" class="compare-img"><br>
                        ${p.name}
                    </th>
                `).join('')}
            </tr>
        </thead>
        <tbody>
            <tr class="compare-row-header"><td colspan="${selectedProducts.length + 1}">Pricing & Rating</td></tr>
            <tr>
                <td><strong>Price</strong></td>
                ${selectedProducts.map(p => `<td><span style="color:#ff9a00; font-weight:700;">$${p.price}</span></td>`).join('')}
            </tr>
            <tr>
                <td><strong>Rating</strong></td>
                ${selectedProducts.map(p => `<td>★ ${p.rating} / 5</td>`).join('')}
            </tr>

            <tr class="compare-row-header"><td colspan="${selectedProducts.length + 1}">Key Highlights</td></tr>
            <tr>
                <td><strong>Top Features</strong></td>
                ${selectedProducts.map(p => `
                    <td>
                        <ul class="compare-feature-list">
                            ${p.features.slice(0, 4).map(f => `<li>• ${f}</li>`).join('')}
                        </ul>
                    </td>
                `).join('')}
            </tr>

            <tr class="compare-row-header"><td colspan="${selectedProducts.length + 1}">Technical Details</td></tr>
            <tr>
                <td><strong>Category</strong></td>
                ${selectedProducts.map(p => `<td style="text-transform:capitalize;">${p.category}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>Stock Status</strong></td>
                ${selectedProducts.map(p => `<td>${p.inStock ? 'In Stock' : '<span style="color:red;">Out of Stock</span>'}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>Actions</strong></td>
                ${selectedProducts.map(p => `
                    <td>
                        <button class="btn-primary" style="padding: 5px 10px; font-size: 0.7rem;" onclick="addToCart(${p.id})">
                            Add to Cart
                        </button>
                    </td>
                `).join('')}
            </tr>
        </tbody>
    </table>`;

    container.innerHTML = tableHTML;
    modal.style.display = 'block';
}

function closeComparison() {
    document.getElementById('comparisonModal').style.display = 'none';
}
       renderProducts();
