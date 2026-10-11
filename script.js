    /* ============================================================
       1. STORE LOGOS
       ============================================================ */
    const STORE_LOGO = {
      Flipkart: `<svg viewBox="0 0 40 40"><rect width="40" height="40" fill="#2874f0"/><text x="20" y="27" text-anchor="middle" font-family="Georgia,serif" font-size="20" font-weight="700" fill="#fff" font-style="italic">F</text><circle cx="30" cy="27" r="3" fill="#ffe11b"/></svg>`,
      Amazon: `<svg viewBox="0 0 40 40"><rect width="40" height="40" fill="#fff"/><text x="20" y="21" text-anchor="middle" font-family="Arial,sans-serif" font-size="12" font-weight="700" fill="#131921">amzn</text><path d="M10 26 Q20 32 30 26" stroke="#ff9900" stroke-width="2.4" fill="none" stroke-linecap="round"/></svg>`,
      Myntra: `<svg viewBox="0 0 40 40"><rect width="40" height="40" fill="#ff3f6c"/><text x="20" y="27" text-anchor="middle" font-family="Georgia,serif" font-size="20" font-weight="700" fill="#fff">M</text></svg>`,
      Meesho: `<svg viewBox="0 0 40 40"><rect width="40" height="40" fill="#f43397"/><text x="20" y="27" text-anchor="middle" font-family="Georgia,serif" font-size="20" font-weight="700" fill="#fff">m</text></svg>`,
      ShopClues: `<svg viewBox="0 0 40 40"><rect width="40" height="40" fill="#e02020"/><text x="20" y="27" text-anchor="middle" font-family="Arial,sans-serif" font-size="19" font-weight="700" fill="#fff">S</text><path d="M8 30 L32 30" stroke="#ffd200" stroke-width="2"/></svg>`,
      Ajio: `<svg viewBox="0 0 40 40"><rect width="40" height="40" fill="#111"/><text x="20" y="27" text-anchor="middle" font-family="Georgia,serif" font-size="20" font-weight="700" fill="#fff">A</text><circle cx="30" cy="12" r="2.4" fill="#d4af37"/></svg>`,
      Croma: `<svg viewBox="0 0 40 40"><rect width="40" height="40" fill="#3cb043"/><text x="20" y="27" text-anchor="middle" font-family="Arial,sans-serif" font-size="19" font-weight="700" fill="#fff">C</text></svg>`
    };
    const storeLogo = name => `<span class="s-logo">${STORE_LOGO[name] || STORE_LOGO.Amazon}</span>`;

    /* ============================================================
       2. PRODUCTS
       ============================================================ */
    const lst = a => ({ platform: a[0], price: a[1], mrp: a[2], delivery: a[3], days: a[4], rating: a[5], extraOff: a[6], offer: a[7] });

    const PRODUCTS = [
      {
        id: 'm1', name: 'Apple iPhone 15 Pro (256GB, Natural Titanium)', brand: 'Apple', category: 'Mobiles', rating: 4.7, reviews: 84210, image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=600&q=70', desc: 'A17 Pro chip, titanium build, 48MP main camera, USB-C and Action button.', listings: [
          lst(['Flipkart', 132499, 149900, 0, 2, 4.6, 2500, '₹2500 instant discount on ICICI credit cards']),
          lst(['Amazon', 131999, 149900, 0, 1, 4.7, 3000, '₹3000 off with HDFC Bank credit cards']),
          lst(['Croma', 133900, 149900, 0, 3, 4.5, 1500, 'Free AppleCare+ for 3 months']),
          lst(['Meesho', 129990, 149900, 199, 7, 3.9, 500, 'Extra ₹500 off on first order'])]
      },
      {
        id: 'm2', name: 'Samsung Galaxy S24 5G (8GB / 256GB, Onyx Black)', brand: 'Samsung', category: 'Mobiles', rating: 4.5, reviews: 42310, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=70', desc: 'Snapdragon 8 Gen 3, Galaxy AI features, 120Hz Dynamic AMOLED 2X display.', listings: [
          lst(['Flipkart', 74999, 89999, 0, 3, 4.5, 2500, '₹2500 off on Axis Bank cards']),
          lst(['Amazon', 73999, 89999, 0, 2, 4.5, 3000, '₹3000 instant discount on SBI cards']),
          lst(['Croma', 75990, 89999, 0, 3, 4.4, 1500, 'Free Galaxy Buds FE worth ₹8999']),
          lst(['Meesho', 72499, 89999, 149, 8, 3.8, 500, 'New user extra ₹500 off'])]
      },
      {
        id: 'm3', name: 'OnePlus 12R (16GB / 256GB, Cool Blue)', brand: 'OnePlus', category: 'Mobiles', rating: 4.4, reviews: 28940, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=70', desc: 'Snapdragon 8 Gen 2, 5500mAh with 100W SUPERVOOC charging and 120Hz display.', listings: [
          lst(['Flipkart', 39999, 45999, 0, 3, 4.4, 1500, '₹1500 off on Kotak credit cards']),
          lst(['Amazon', 39499, 45999, 0, 2, 4.4, 2000, '₹2000 off with ICICI Bank cards']),
          lst(['Meesho', 38999, 45999, 99, 7, 3.8, 300, 'Extra ₹300 off on prepaid']),
          lst(['ShopClues', 39500, 45999, 0, 9, 3.5, 800, 'Free OnePlus Buds worth ₹1999'])]
      },
      {
        id: 'm4', name: 'Redmi Note 13 Pro 5G (12GB / 256GB, Coral Purple)', brand: 'Xiaomi', category: 'Mobiles', rating: 4.3, reviews: 61230, image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=70', desc: '200MP OIS camera, 67W turbo charging, 120Hz AMOLED display and IP54 rating.', listings: [
          lst(['Flipkart', 23999, 27999, 0, 4, 4.3, 1000, '₹1000 off on ICICI cards']),
          lst(['Amazon', 23499, 27999, 0, 3, 4.3, 1500, '₹1500 off with SBI credit cards']),
          lst(['Meesho', 22999, 27999, 79, 8, 3.7, 500, 'Extra ₹500 off on first order']),
          lst(['ShopClues', 23650, 27999, 0, 9, 3.4, 500, 'Free Redmi Buds 4 Lite'])]
      },
      {
        id: 'l1', name: 'Apple MacBook Air M3 (13", 8GB / 256GB, Midnight)', brand: 'Apple', category: 'Laptops', rating: 4.8, reviews: 15320, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=70', desc: 'Apple M3 chip, 18-hour battery, Liquid Retina display, MagSafe charging.', listings: [
          lst(['Flipkart', 104990, 114900, 0, 3, 4.7, 3000, '₹3000 off on ICICI credit cards']),
          lst(['Amazon', 103990, 114900, 0, 2, 4.8, 4000, '₹4000 instant discount on HDFC cards']),
          lst(['Croma', 105900, 114900, 0, 3, 4.6, 2000, 'Free 3-year AppleCare (worth ₹19900)']),
          lst(['Meesho', 101499, 114900, 249, 9, 3.8, 0, 'No-cost EMI available'])]
      },
      {
        id: 'l2', name: 'HP Pavilion 15 (Intel i5 13th Gen / 16GB / 512GB)', brand: 'HP', category: 'Laptops', rating: 4.3, reviews: 6720, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=70', desc: '13th Gen Intel Core i5, 16GB DDR4, 512GB NVMe SSD, backlit keyboard.', listings: [
          lst(['Flipkart', 62990, 78999, 0, 4, 4.3, 2000, '₹2000 off + free laptop bag']),
          lst(['Amazon', 61999, 78999, 0, 3, 4.4, 2500, '₹2500 instant discount on ICICI cards']),
          lst(['Croma', 63500, 78999, 0, 4, 4.2, 1500, 'Free HP wireless mouse']),
          lst(['Meesho', 60999, 78999, 199, 9, 3.5, 0, 'Bulk order discount available'])]
      },
      {
        id: 'l3', name: 'Dell XPS 13 (Intel i7 12th Gen / 16GB / 1TB)', brand: 'Dell', category: 'Laptops', rating: 4.4, reviews: 3240, image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=600&q=70', desc: 'InfinityEdge display, premium aluminium build, 12th Gen i7, Thunderbolt 4.', listings: [
          lst(['Flipkart', 118990, 139900, 0, 5, 4.4, 4000, '₹4000 off on Kotak credit cards']),
          lst(['Amazon', 117499, 139900, 0, 3, 4.5, 5000, '₹5000 instant discount on HDFC cards']),
          lst(['Croma', 119900, 139900, 0, 4, 4.3, 2000, 'Free Dell Premier backpack']),
          lst(['Meesho', 115999, 139900, 299, 10, 3.4, 0, 'Extended warranty at ₹1999'])]
      },
      {
        id: 'a1', name: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones', brand: 'Sony', category: 'Audio', rating: 4.7, reviews: 24110, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=70', desc: 'Industry-leading noise cancellation, 30-hour battery, multipoint connection.', listings: [
          lst(['Flipkart', 26990, 34990, 0, 3, 4.7, 2000, '₹2000 off on Axis Bank cards']),
          lst(['Amazon', 26499, 34990, 0, 2, 4.7, 2500, '₹2500 instant discount on ICICI cards']),
          lst(['Croma', 27500, 34990, 0, 3, 4.6, 1500, 'Free hard carry case worth ₹1999']),
          lst(['Meesho', 25990, 34990, 149, 8, 3.8, 0, 'New user extra ₹500 off'])]
      },
      {
        id: 'a2', name: 'boAt Rockerz 450 Bluetooth On-Ear Headphones', brand: 'boAt', category: 'Audio', rating: 4.1, reviews: 68210, image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=600&q=70', desc: '15-hour playback, 40mm drivers, padded ear cushions, lightweight design.', listings: [
          lst(['Flipkart', 1299, 3990, 0, 3, 4.1, 200, 'Extra 10% off with Axis Bank cards']),
          lst(['Amazon', 1349, 3990, 0, 2, 4.2, 150, 'Flat ₹150 off on SBI credit cards']),
          lst(['Meesho', 1099, 3990, 49, 5, 3.7, 0, 'Buy 2 get extra 10% off']),
          lst(['ShopClues', 1249, 3990, 79, 6, 3.4, 0, '₹50 cashback to wallet'])]
      },
      {
        id: 'a3', name: 'Apple AirPods Pro (2nd Gen, USB-C)', brand: 'Apple', category: 'Audio', rating: 4.7, reviews: 41200, image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=600&q=70', desc: '2x more Active Noise Cancellation, Adaptive Audio, Personalised Spatial Audio.', listings: [
          lst(['Flipkart', 22990, 26900, 0, 2, 4.7, 1500, '₹1500 off on ICICI credit cards']),
          lst(['Amazon', 22499, 26900, 0, 1, 4.7, 2000, '₹2000 instant discount on HDFC cards']),
          lst(['Croma', 23900, 26900, 0, 3, 4.6, 1000, 'Free silicone case']),
          lst(['Meesho', 21990, 26900, 99, 7, 3.9, 0, 'Extra ₹300 off on prepaid'])]
      },
      {
        id: 'a4', name: 'JBL Flip 6 Portable Bluetooth Speaker', brand: 'JBL', category: 'Audio', rating: 4.5, reviews: 18920, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=70', desc: 'Bold JBL Pro Sound, IP67 waterproof, 12-hour playtime, PartyBoost support.', listings: [
          lst(['Flipkart', 8999, 11999, 0, 3, 4.5, 800, '₹800 off on prepaid orders']),
          lst(['Amazon', 8499, 11999, 0, 2, 4.5, 1000, '₹1000 instant discount on SBI cards']),
          lst(['Croma', 9499, 11999, 0, 3, 4.4, 500, 'Free JBL carry pouch']),
          lst(['Meesho', 7999, 11999, 99, 7, 3.7, 0, 'Extra 10% off for new users'])]
      },
      {
        id: 'f1', name: 'Nike Revolution 6 Running Shoes (Men, Black/White)', brand: 'Nike', category: 'Fashion', rating: 4.2, reviews: 9830, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=70', desc: 'Breathable mesh upper, soft foam midsole, durable rubber outsole.', listings: [
          lst(['Flipkart', 2799, 4995, 0, 4, 4.2, 300, 'Extra ₹300 off on footwear']),
          lst(['Amazon', 2899, 4995, 0, 3, 4.3, 250, '₹250 coupon on checkout']),
          lst(['Myntra', 2699, 4995, 0, 3, 4.4, 400, 'Buy 2 get 15% off on footwear']),
          lst(['Ajio', 2649, 4995, 0, 4, 4.3, 350, 'Extra 10% off on first order']),
          lst(['Meesho', 2299, 4995, 59, 7, 3.8, 100, 'New user extra ₹100 off'])]
      },
      {
        id: 'f2', name: "Levi's Men's 511 Slim Fit Jeans (Indigo Blue)", brand: "Levi's", category: 'Fashion', rating: 4.2, reviews: 16420, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=70', desc: 'Slim fit through the thigh, mid-rise, stretch denim, classic 5-pocket styling.', listings: [
          lst(['Flipkart', 1899, 2999, 0, 4, 4.1, 200, 'Buy 2 get 10% off on apparel']),
          lst(['Amazon', 1799, 2999, 0, 3, 4.2, 150, '₹150 off on apparel orders']),
          lst(['Myntra', 1750, 2999, 0, 4, 4.3, 250, 'Extra ₹250 off on Myntra Insider']),
          lst(['Ajio', 1799, 2999, 0, 4, 4.2, 200, 'Extra 15% off on first purchase']),
          lst(['Meesho', 1450, 2999, 69, 8, 3.6, 0, 'Extra 10% off on 3+ items'])]
      },
      {
        id: 'f3', name: 'Allen Solly Polo T-Shirt (Men, Navy, Regular Fit)', brand: 'Allen Solly', category: 'Fashion', rating: 4.1, reviews: 6120, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=70', desc: 'Premium cotton pique, ribbed collar and cuffs, regular fit.', listings: [
          lst(['Flipkart', 999, 1799, 0, 4, 4.1, 150, '₹150 off on fashion']),
          lst(['Amazon', 949, 1799, 0, 3, 4.1, 100, '₹100 coupon at checkout']),
          lst(['Myntra', 899, 1799, 0, 4, 4.2, 200, 'Buy 3 get 20% off']),
          lst(['Ajio', 949, 1799, 0, 4, 4.0, 150, 'Extra 10% off on your order']),
          lst(['Meesho', 699, 1799, 49, 7, 3.6, 0, 'New user extra ₹100 off'])]
      },
      {
        id: 'f4', name: 'Titan Neo Splash Analog Watch (Blue Dial, Metal Strap)', brand: 'Titan', category: 'Fashion', rating: 4.4, reviews: 4210, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=70', desc: 'Blue sunray dial, stainless steel case, water resistant up to 50m, 24-month warranty.', listings: [
          lst(['Flipkart', 3495, 4995, 0, 4, 4.4, 300, '₹300 off on watches above ₹2999']),
          lst(['Amazon', 3599, 4995, 0, 3, 4.5, 400, '₹400 coupon at checkout']),
          lst(['Myntra', 3699, 4995, 0, 4, 4.3, 250, 'Extra ₹250 off on Titan styles']),
          lst(['Ajio', 3550, 4995, 0, 5, 4.2, 300, 'Extra 10% off on watches']),
          lst(['Meesho', 3299, 4995, 89, 9, 3.8, 0, 'Lowest price guarantee'])]
      },
      {
        id: 'h1', name: 'Prestige Iris 750W Mixer Grinder (3 Stainless Steel Jars)', brand: 'Prestige', category: 'Home & Kitchen', rating: 4.3, reviews: 24110, image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&q=70', desc: '750W motor, 3 stainless steel jars, break-resistant lids, 2-year warranty.', listings: [
          lst(['Flipkart', 2749, 4295, 0, 5, 4.3, 250, '₹250 off on kitchen appliances']),
          lst(['Amazon', 2649, 4295, 0, 4, 4.4, 200, '₹200 coupon + free delivery with Prime']),
          lst(['Croma', 2799, 4295, 0, 5, 4.3, 150, 'Free extended warranty for 1 year']),
          lst(['Meesho', 2599, 4295, 149, 8, 3.9, 0, 'Extra 5% off on prepaid orders'])]
      },
      {
        id: 'h2', name: 'Milton Thermosteel Flip Lid Flask 1000ml (Silver)', brand: 'Milton', category: 'Home & Kitchen', rating: 4.3, reviews: 8640, image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=70', desc: 'Double-walled vacuum insulation keeps liquids hot or cold for up to 24 hours.', listings: [
          lst(['Flipkart', 1049, 1450, 0, 5, 4.3, 100, '₹100 off on home essentials']),
          lst(['Amazon', 999, 1450, 0, 4, 4.4, 0, 'Free delivery with Prime']),
          lst(['Croma', 1099, 1450, 0, 5, 4.2, 50, 'Free gift wrapping']),
          lst(['Meesho', 875, 1450, 79, 7, 3.8, 0, 'Extra 10% off on first order'])]
      },
      {
        id: 'h3', name: 'Philips HD9200 Air Fryer (4.1L, Rapid Air Technology)', brand: 'Philips', category: 'Home & Kitchen', rating: 4.5, reviews: 12310, image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=600&q=70', desc: 'Fry with up to 90% less oil, Rapid Air technology, 4.1L capacity.', listings: [
          lst(['Flipkart', 7999, 11995, 0, 5, 4.5, 800, '₹800 off on prepaid orders']),
          lst(['Amazon', 7799, 11995, 0, 4, 4.5, 1000, '₹1000 coupon at checkout']),
          lst(['Croma', 8299, 11995, 0, 5, 4.4, 500, 'Free Philips recipe book']),
          lst(['Meesho', 7499, 11995, 149, 9, 3.9, 0, 'No-cost EMI available'])]
      },
      {
        id: 'b1', name: 'Mamaearth Vitamin C Face Wash (100ml, Pack of 2)', brand: 'Mamaearth', category: 'Beauty', rating: 4.2, reviews: 38210, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=70', desc: 'With Vitamin C and Turmeric, gently cleanses, brightens and adds a natural glow.', listings: [
          lst(['Flipkart', 349, 499, 40, 4, 4.2, 30, '₹30 off on beauty']),
          lst(['Amazon', 329, 499, 0, 3, 4.3, 20, '₹20 coupon on Subscribe & Save']),
          lst(['Myntra', 339, 499, 0, 4, 4.2, 25, 'Extra 5% off on beauty']),
          lst(['Meesho', 279, 499, 49, 6, 3.7, 0, 'Buy 3 at ₹249 each'])]
      },
      {
        id: 'b2', name: 'Lakmé Sun Expert Ultra Matte SPF 50 PA+++ Sunscreen', brand: 'Lakmé', category: 'Beauty', rating: 4.1, reviews: 20140, image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=70', desc: 'Broad-spectrum SPF 50 PA+++, matte finish, lightweight and non-greasy.', listings: [
          lst(['Flipkart', 399, 550, 40, 4, 4.1, 30, '₹30 off on skincare']),
          lst(['Amazon', 379, 550, 0, 3, 4.1, 25, '₹25 coupon at checkout']),
          lst(['Myntra', 389, 550, 0, 4, 4.0, 20, 'Extra 5% off on beauty']),
          lst(['Meesho', 325, 550, 49, 6, 3.6, 0, 'New user extra ₹50 off'])]
      },
      {
        id: 'ap1', name: 'Dyson V8 Absolute Cordless Vacuum Cleaner', brand: 'Dyson', category: 'Appliances', rating: 4.6, reviews: 5410, image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=70', desc: 'Up to 40 minutes of fade-free suction, whole-machine filtration.', listings: [
          lst(['Flipkart', 34900, 42900, 0, 4, 4.6, 3000, '₹3000 off on premium appliances']),
          lst(['Amazon', 33990, 42900, 0, 3, 4.6, 4000, '₹4000 instant discount on ICICI cards']),
          lst(['Croma', 35500, 42900, 0, 5, 4.5, 2000, 'Free Dyson tool kit worth ₹4999']),
          lst(['Meesho', 32999, 42900, 249, 9, 3.8, 0, 'Bulk order discount available'])]
      },
      {
        id: 'ap2', name: 'Philips EasySpeed Plus Steam Iron (2200W)', brand: 'Philips', category: 'Appliances', rating: 4.3, reviews: 8910, image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=70', desc: '2200W, continuous steam output of 35g/min, ceramic soleplate, 270ml tank.', listings: [
          lst(['Flipkart', 1899, 2995, 0, 4, 4.3, 200, '₹200 off on appliances']),
          lst(['Amazon', 1799, 2995, 0, 3, 4.3, 150, '₹150 coupon at checkout']),
          lst(['Croma', 1999, 2995, 0, 4, 4.2, 100, 'Free 2-year extended warranty']),
          lst(['Meesho', 1599, 2995, 99, 7, 3.7, 0, 'Extra 5% off on prepaid'])]
      },
      {
        id: 't1', name: 'Samsung 55" Crystal 4K UHD Smart TV (Vision 3)', brand: 'Samsung', category: 'TVs', rating: 4.4, reviews: 12420, image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=70', desc: 'Crystal Processor 4K, PurColor, Q-Symphony audio, Tizen OS with streaming apps.', listings: [
          lst(['Flipkart', 44990, 59900, 0, 4, 4.4, 3000, '₹3000 off on premium TVs']),
          lst(['Amazon', 43990, 59900, 0, 3, 4.4, 4000, '₹4000 instant discount on ICICI cards']),
          lst(['Croma', 45900, 59900, 0, 5, 4.3, 2500, 'Free wall mount + installation']),
          lst(['Meesho', 42999, 59900, 299, 9, 3.7, 0, 'Extended warranty at ₹1499'])]
      },
      {
        id: 't2', name: 'LG 43" 4K Ultra HD Smart LED TV (UR7500)', brand: 'LG', category: 'TVs', rating: 4.3, reviews: 9310, image: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=70', desc: 'α5 Gen6 AI Processor 4K, webOS 23, Filmmaker Mode, HDR10 Pro.', listings: [
          lst(['Flipkart', 27999, 39990, 0, 4, 4.3, 2000, '₹2000 off on LG TVs']),
          lst(['Amazon', 27499, 39990, 0, 3, 4.3, 2500, '₹2500 instant discount on HDFC cards']),
          lst(['Croma', 28500, 39990, 0, 5, 4.2, 1500, 'Free LG soundbar at ₹1999']),
          lst(['Meesho', 26999, 39990, 249, 9, 3.6, 0, 'No-cost EMI available'])]
      }
    ];

    const COUPONS = {
      SAVE10: { type: 'pct', value: 10, cap: 1500, min: 1999, label: '10% off up to ₹1500' },
      NEW500: { type: 'flat', value: 500, min: 4999, label: 'Flat ₹500 off' },
      FESTIVE15: { type: 'pct', value: 15, cap: 2500, min: 9999, label: '15% off up to ₹2500' },
      FREESHIP: { type: 'ship', value: 0, min: 499, label: 'Free delivery' },
      TECH2000: { type: 'flat', value: 2000, min: 39999, label: 'Flat ₹2000 off on tech' },
      WELCOME100: { type: 'flat', value: 100, min: 499, label: 'Flat ₹100 off for new users' }
    };

    const BANK_OFFERS = {
      'Flipkart': [
        { card: 'ICICI Credit', type: 'flat', value: 2500, min: 50000, note: '₹2500 instant discount' },
        { card: 'Axis Credit', type: 'pct', value: 10, cap: 1500, min: 20000, note: '10% up to ₹1500' },
        { card: 'HDFC Credit', type: 'flat', value: 1000, min: 15000, note: '₹1000 off' },
        { card: 'Kotak Debit', type: 'pct', value: 5, cap: 750, min: 10000, note: '5% up to ₹750' }],
      'Amazon': [
        { card: 'HDFC Credit', type: 'flat', value: 3000, min: 50000, note: '₹3000 instant discount' },
        { card: 'ICICI Credit', type: 'pct', value: 10, cap: 2000, min: 25000, note: '10% up to ₹2000' },
        { card: 'SBI Credit', type: 'flat', value: 1500, min: 20000, note: '₹1500 off' },
        { card: 'Amazon Pay ICICI', type: 'pct', value: 5, cap: 500, min: 5000, note: '5% cashback' }],
      'Myntra': [
        { card: 'HDFC Credit', type: 'pct', value: 10, cap: 500, min: 1999, note: '10% up to ₹500' },
        { card: 'Axis Credit', type: 'flat', value: 300, min: 2499, note: '₹300 off' },
        { card: 'ICICI Credit', type: 'pct', value: 15, cap: 750, min: 4999, note: '15% up to ₹750' }],
      'Meesho': [
        { card: 'Any UPI', type: 'flat', value: 100, min: 999, note: '₹100 off on UPI' },
        { card: 'ICICI Credit', type: 'pct', value: 5, cap: 300, min: 1999, note: '5% up to ₹300' }],
      'ShopClues': [
        { card: 'HDFC Credit', type: 'flat', value: 200, min: 1499, note: '₹200 off' },
        { card: 'Any Debit', type: 'pct', value: 5, cap: 250, min: 999, note: '5% up to ₹250' }],
      'Croma': [
        { card: 'ICICI Credit', type: 'pct', value: 10, cap: 2000, min: 30000, note: '10% up to ₹2000' },
        { card: 'HDFC Credit', type: 'flat', value: 1500, min: 25000, note: '₹1500 off' }],
      'Ajio': [
        { card: 'ICICI Credit', type: 'pct', value: 15, cap: 600, min: 2999, note: '15% up to ₹600' },
        { card: 'HDFC Credit', type: 'flat', value: 400, min: 1999, note: '₹400 off' }]
    };

    /* ============================================================
       3. PINCODE + AUTO-LOCATION
       ============================================================ */
    const PINCODE_DB = {
      '600001': 'Chennai, TN', '600042': 'Chennai, TN', '560001': 'Bengaluru, KA', '560034': 'Bengaluru, KA',
      '400001': 'Mumbai, MH', '400051': 'Mumbai, MH', '110001': 'New Delhi, DL', '110016': 'New Delhi, DL',
      '500001': 'Hyderabad, TS', '500081': 'Hyderabad, TS', '700001': 'Kolkata, WB', '641001': 'Coimbatore, TN',
      '682001': 'Kochi, KL', '411001': 'Pune, MH'
    };

    /* City coords for auto-location */
    const CITY_COORDS = [
      { city: 'Chennai', pin: '600001', lat: 13.0827, lng: 80.2707 },
      { city: 'Bengaluru', pin: '560001', lat: 12.9716, lng: 77.5946 },
      { city: 'Mumbai', pin: '400001', lat: 19.0760, lng: 72.8777 },
      { city: 'New Delhi', pin: '110001', lat: 28.6139, lng: 77.2090 },
      { city: 'Hyderabad', pin: '500001', lat: 17.3850, lng: 78.4867 },
      { city: 'Kolkata', pin: '700001', lat: 22.5726, lng: 88.3639 },
      { city: 'Coimbatore', pin: '641001', lat: 11.0168, lng: 76.9558 },
      { city: 'Kochi', pin: '682001', lat: 9.9312, lng: 76.2673 },
      { city: 'Pune', pin: '411001', lat: 18.5204, lng: 73.8567 }
    ];

    function haversine(lat1, lng1, lat2, lng2) {
      const R = 6371;
      const dLat = (lat2 - lat1) * Math.PI / 180;
      const dLng = (lng2 - lng1) * Math.PI / 180;
      const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
      return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    }

    function nearestCity(lat, lng) {
      let best = null, bestDist = Infinity;
      CITY_COORDS.forEach(c => {
        const d = haversine(lat, lng, c.lat, c.lng);
        if (d < bestDist) { bestDist = d; best = c; }
      });
      return best;
    }

    /* Try timezone-based fallback */
    function detectFromTimezone() {
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
        if (/Kolkata|Calcutta/i.test(tz)) {
          // Try to narrow by checking navigator language or fallback to Chennai
          return CITY_COORDS[0]; // Default to Chennai for India
        }
      } catch (e) { }
      return CITY_COORDS[0];
    }

    let autoLocInProgress = false;
    function autoDetectLocation(silent = false) {
      if (autoLocInProgress) return;
      autoLocInProgress = true;
      const btn = document.getElementById('pincodeRefreshBtn');
      if (btn) btn.classList.add('loading');

      const finish = (city, source) => {
        autoLocInProgress = false;
        if (btn) btn.classList.remove('loading');
        localStorage.setItem('ss_pincode', city.pin);
        localStorage.setItem('ss_autoLoc', source);
        document.getElementById('pincodeInput').value = city.pin;
        updatePincodeUI(city.pin);
        renderProducts();
        if (!silent) showToast(`📍 Location set to ${city.city} (${city.pin})`);
      };

      if (!navigator.geolocation) {
        finish(detectFromTimezone(), 'fallback');
        return;
      }

      navigator.geolocation.getCurrentPosition(
        pos => {
          const city = nearestCity(pos.coords.latitude, pos.coords.longitude);
          finish(city, 'gps');
        },
        err => {
          finish(detectFromTimezone(), 'fallback');
        },
        { timeout: 5000, maximumAge: 300000, enableHighAccuracy: false }
      );
    }

    function renderAutoLocBadge() {
      const wrap = document.getElementById('autoLocBadgeWrap');
      if (!wrap) return;
      const src = localStorage.getItem('ss_autoLoc');
      if (src) {
        wrap.innerHTML = `<span class="pincode-auto">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>
      Auto-detected
    </span>`;
      } else {
        wrap.innerHTML = '';
      }
    }

    const STORE_COVERAGE = {
      'Flipkart': () => true, 'Amazon': () => true,
      'Myntra': p => ['600', '560', '400', '110', '500', '700', '641', '682', '411'].some(x => p.startsWith(x)),
      'Meesho': p => ['600', '560', '400', '110', '500', '700'].some(x => p.startsWith(x)),
      'ShopClues': p => ['600', '560', '400', '110'].some(x => p.startsWith(x)),
      'Croma': p => ['600', '560', '400', '110', '500', '411'].some(x => p.startsWith(x)),
      'Ajio': p => ['600', '560', '400', '110', '500', '700', '641', '411'].some(x => p.startsWith(x))
    };
    function deliveryDaysFor(store, baseDays, pincode) {
      if (!pincode) return baseDays;
      const region = pincode.charAt(0);
      const tier = { '6': 0, '5': 0, '4': 1, '1': 1, '7': 2, '3': 3, '8': 3, '2': 3 }[region] ?? 2;
      return baseDays + tier;
    }
    function codAvailable(store, pincode) {
      if (!pincode) return true;
      if (store === 'ShopClues') return pincode.startsWith('6');
      return true;
    }

    /* ============================================================
       4. HELPERS
       ============================================================ */
    const fmt = n => '₹' + Math.round(n).toLocaleString('en-IN');
    const eff = l => l.price - l.extraOff + l.delivery;
    const base = l => l.price - l.extraOff;
    const getProduct = id => PRODUCTS.find(p => p.id === id);
    const getListing = (id, platform) => {
      const p = getProduct(id);
      return p ? p.listings.find(l => l.platform === platform) : null;
    };
    const bestListing = p => [...p.listings].sort((a, b) => eff(a) - eff(b))[0];
    const worstListing = p => [...p.listings].sort((a, b) => eff(b) - eff(a))[0];
    const discountPct = p => {
      const b = bestListing(p);
      return Math.round(((b.mrp - eff(b)) / b.mrp) * 100);
    };
    function showToast(msg) {
      const t = document.getElementById('toast');
      t.textContent = msg;
      t.classList.add('show');
      clearTimeout(showToast._t);
      showToast._t = setTimeout(() => t.classList.remove('show'), 2400);
    }
    function esc(s) {
      return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    }
    function offerValue(offer, price) {
      if (!offer) return 0;
      if (price < offer.min) return 0;
      if (offer.type === 'flat') return Math.min(offer.value, price * 0.5);
      if (offer.type === 'pct') return Math.min(price * offer.value / 100, offer.cap);
      return 0;
    }
    function seedRandom(seed) {
      let s = seed % 2147483647;
      if (s <= 0) s += 2147483646;
      return function () { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
    }
    function hashString(str) {
      let h = 0;
      for (let i = 0; i < str.length; i++) h = ((h << 5) - h + str.charCodeAt(i)) | 0;
      return Math.abs(h);
    }
    function genPriceHistory(basePrice, seed) {
      const rnd = seedRandom(seed);
      const pts = [];
      for (let i = 180; i >= 0; i -= 6) {
        const wave = Math.sin(i / 22) * 0.035;
        const festival = (i > 30 && i < 75) || (i > 130 && i < 165) ? -0.055 : 0;
        const drift = (i / 180) * 0.14;
        const noise = (rnd() - 0.5) * 0.018;
        const p = basePrice * (1 + drift + wave + festival + noise);
        pts.push({ d: -i, p: Math.max(Math.round(p), Math.round(basePrice * 0.7)) });
      }
      return pts;
    }

    /* ============================================================
       5. STATE
       ============================================================ */
    const ALL_PLATFORMS = [...new Set(PRODUCTS.flatMap(p => p.listings.map(l => l.platform)))].sort((a, b) => a.localeCompare(b));
    const ALL_CATEGORIES = [...new Set(PRODUCTS.map(p => p.category))];
    const ALL_BRANDS = [...new Set(PRODUCTS.map(p => p.brand))].sort();

    const state = {
      query: '', categories: new Set(), brands: new Set(), platforms: new Set(),
      minRating: 0, minDiscount: 0, maxDelivery: Infinity, maxPrice: 150000,
      sort: 'relevance', cart: [], wishlist: [], compare: [], recent: [], coupon: null
    };

    const LS = {
      save() {
        try { localStorage.setItem('ss_state', JSON.stringify({ cart: state.cart, wishlist: state.wishlist, recent: state.recent, coupon: state.coupon })); } catch (e) { }
      },
      load() {
        try {
          const d = JSON.parse(localStorage.getItem('ss_state') || '{}');
          if (Array.isArray(d.cart)) state.cart = d.cart.filter(it => getProduct(it.pid) && getListing(it.pid, it.platform));
          if (Array.isArray(d.wishlist)) state.wishlist = d.wishlist.filter(id => getProduct(id));
          if (Array.isArray(d.recent)) state.recent = d.recent.filter(id => getProduct(id)).slice(0, 12);
          if (d.coupon && COUPONS[d.coupon]) state.coupon = d.coupon;
        } catch (e) { }
      }
    };

    /* ============================================================
       6. AUTH / LOGIN
       ============================================================ */
    const AUTH_KEY = 'ss_auth';
    let authUser = null;
    let tempMobile = '';
    let tempOtp = '';

    function loadAuth() {
      try {
        const d = JSON.parse(localStorage.getItem(AUTH_KEY) || 'null');
        if (d && d.mobile) authUser = d;
      } catch (e) { }
      updateUserUI();
    }

    function saveAuth() {
      if (authUser) localStorage.setItem(AUTH_KEY, JSON.stringify(authUser));
      else localStorage.removeItem(AUTH_KEY);
    }

    function updateUserUI() {
      const avatar = document.getElementById('userAvatar');
      const name = document.getElementById('userName');
      const menuName = document.getElementById('userMenuName');
      const menuMobile = document.getElementById('userMenuMobile');
      if (authUser) {
        const display = authUser.name || 'User';
        avatar.textContent = display.charAt(0).toUpperCase();
        name.textContent = display;
        menuName.textContent = display;
        menuMobile.textContent = '+91 ' + authUser.mobile;
      } else {
        avatar.textContent = 'G';
        name.textContent = 'Guest';
        menuName.textContent = 'Guest User';
        menuMobile.textContent = 'Not signed in';
      }
    }

    function showLoginScreen() {
      document.getElementById('loginScreen').classList.remove('hidden');
      setTimeout(() => document.getElementById('loginMobile')?.focus(), 100);
    }

    function hideLoginScreen() {
      document.getElementById('loginScreen').classList.add('hidden');
    }

    function completeLogin(user) {
      authUser = user;
      saveAuth();
      updateUserUI();
      hideLoginScreen();
      showToast(`Welcome${user.name ? ', ' + user.name : ''}!`);
      // First-time auto-location
      if (!localStorage.getItem('ss_pincode')) {
        setTimeout(() => autoDetectLocation(true), 400);
      }
    }

    function logoutUser() {
      if (!confirm('Logout from ShopRadar?')) return;
      authUser = null;
      saveAuth();
      updateUserUI();
      showLoginScreen();
      showToast('Logged out');
    }

    function wireLogin() {
      const mobileInput = document.getElementById('loginMobile');
      const otpInput = document.getElementById('loginOtp');
      const stepMobile = document.getElementById('loginStepMobile');
      const stepOtp = document.getElementById('loginStepOtp');

      mobileInput.addEventListener('input', () => {
        mobileInput.value = mobileInput.value.replace(/\D/g, '').slice(0, 10);
      });
      mobileInput.addEventListener('keydown', e => { if (e.key === 'Enter') document.getElementById('loginSendBtn').click(); });

      document.getElementById('loginSendBtn').addEventListener('click', () => {
        const m = mobileInput.value.replace(/\D/g, '');
        const terms = document.getElementById('loginTerms').checked;
        document.getElementById('loginMobileErr').classList.remove('show');
        mobileInput.classList.remove('err');
        if (m.length !== 10) {
          document.getElementById('loginMobileErr').classList.add('show');
          mobileInput.classList.add('err');
          return;
        }
        if (!terms) { showToast('Please accept the terms to continue'); return; }
        tempMobile = m;
        tempOtp = String(Math.floor(100000 + Math.random() * 900000));
        document.getElementById('loginDemoOtp').textContent = tempOtp;
        stepMobile.hidden = true;
        stepOtp.hidden = false;
        setTimeout(() => otpInput.focus(), 100);
        showToast(`OTP sent to +91 ${m} · Demo: ${tempOtp}`);
      });

      otpInput.addEventListener('input', () => {
        otpInput.value = otpInput.value.replace(/\D/g, '').slice(0, 6);
      });
      otpInput.addEventListener('keydown', e => { if (e.key === 'Enter') document.getElementById('loginVerifyBtn').click(); });

      document.getElementById('loginVerifyBtn').addEventListener('click', () => {
        const otp = otpInput.value.replace(/\D/g, '');
        document.getElementById('loginOtpErr').classList.remove('show');
        otpInput.classList.remove('err');
        if (otp !== tempOtp) {
          document.getElementById('loginOtpErr').classList.add('show');
          otpInput.classList.add('err');
          return;
        }
        completeLogin({ mobile: tempMobile, name: 'User' });
      });

      document.getElementById('loginBackBtn').addEventListener('click', () => {
        stepOtp.hidden = true;
        stepMobile.hidden = false;
        otpInput.value = '';
        document.getElementById('loginOtpErr').classList.remove('show');
        otpInput.classList.remove('err');
        mobileInput.focus();
      });

      document.getElementById('loginResendBtn').addEventListener('click', () => {
        tempOtp = String(Math.floor(100000 + Math.random() * 900000));
        document.getElementById('loginDemoOtp').textContent = tempOtp;
        showToast(`New OTP sent · Demo: ${tempOtp}`);
      });

      document.getElementById('loginGuestBtn').addEventListener('click', () => {
        completeLogin({ mobile: '0000000000', name: 'Guest', guest: true });
      });
    }

    function wireUserMenu() {
      const pill = document.getElementById('userPill');
      const menu = document.getElementById('userMenu');
      pill.addEventListener('click', e => {
        e.stopPropagation();
        menu.hidden = !menu.hidden;
      });
      document.addEventListener('click', e => {
        if (!e.target.closest('.user-wrap')) menu.hidden = true;
      });
      document.getElementById('userMenuWish').addEventListener('click', () => { menu.hidden = true; openWish(); });
      document.getElementById('userMenuLocation').addEventListener('click', () => {
        menu.hidden = true;
        localStorage.removeItem('ss_autoLoc');
        autoDetectLocation(false);
      });
      document.getElementById('userMenuLogout').addEventListener('click', () => { menu.hidden = true; logoutUser(); });
    }

    /* ============================================================
       7. CATEGORY NAV
       ============================================================ */
    const CAT_ICONS = {
      'Mobiles': '<rect x="7" y="2.5" width="10" height="19" rx="2.2"/><line x1="10.5" y1="18.6" x2="13.5" y2="18.6"/>',
      'Laptops': '<rect x="4" y="5" width="16" height="10.5" rx="1.6"/><line x1="2" y1="18.5" x2="22" y2="18.5"/>',
      'Audio': '<path d="M4 14.5v-2.5a8 8 0 0 1 16 0v2.5"/><rect x="3" y="14" width="4" height="6" rx="1.6"/><rect x="17" y="14" width="4" height="6" rx="1.6"/>',
      'Fashion': '<path d="M9 3 5 5.5 6.5 9 9 8v12h6V8l2.5 1L19 5.5 15 3a3 3 0 0 1-6 0Z"/>',
      'Home & Kitchen': '<path d="M6 8h12l-1 12H7L6 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
      'Beauty': '<path d="M12 3s5.2 5.8 5.2 9.2A5.2 5.2 0 0 1 12 17.4a5.2 5.2 0 0 1-5.2-5.2C6.8 8.8 12 3 12 3Z"/>',
      'Appliances': '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/>',
      'TVs': '<rect x="3" y="5" width="18" height="12" rx="1.6"/><line x1="8" y1="20" x2="16" y2="20"/>'
    };
    const catIcon = c => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${CAT_ICONS[c] || ''}</svg>`;

    function buildCatNav() {
      const nav = document.getElementById('catnav');
      const allActive = state.categories.size === 0;
      let html = `<div class="catnav-item ${allActive ? 'active' : ''}" data-cat="__all__">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>All</div>`;
      html += ALL_CATEGORIES.map(c => `<div class="catnav-item ${state.categories.has(c) ? 'active' : ''}" data-cat="${esc(c)}">${catIcon(c)}${esc(c)}</div>`).join('');
      nav.innerHTML = html;
      nav.querySelectorAll('[data-cat]').forEach(el => {
        el.addEventListener('click', () => {
          const c = el.dataset.cat;
          if (c === '__all__') state.categories.clear();
          else { if (state.categories.has(c)) state.categories.delete(c); else state.categories.add(c); }
          buildCatNav(); buildFilterUI(); renderProducts();
        });
      });
    }

    /* ============================================================
       8. FILTERS
       ============================================================ */
    const RATINGS = [{ label: 'Any', value: 0 }, { label: '4.0★+', value: 4.0 }, { label: '4.3★+', value: 4.3 }, { label: '4.5★+', value: 4.5 }];
    const DISCOUNTS = [{ label: 'Any', value: 0 }, { label: '20%+', value: 20 }, { label: '40%+', value: 40 }, { label: '60%+', value: 60 }];
    const DELIVERIES = [{ label: 'Any', value: Infinity }, { label: '≤ 2 days', value: 2 }, { label: '≤ 4 days', value: 4 }, { label: '≤ 7 days', value: 7 }];
    const PRICE_QUICK = [
      { label: 'Under ₹1,000', min: 0, max: 1000 }, { label: '₹1k–5k', min: 1000, max: 5000 },
      { label: '₹5k–20k', min: 5000, max: 20000 }, { label: '₹20k–60k', min: 20000, max: 60000 }, { label: '₹60k+', min: 60000, max: 150000 }
    ];

    function buildFilterUI() {
      document.getElementById('catBody').innerHTML = ALL_CATEGORIES.map(c =>
        `<button class="chip ${state.categories.has(c) ? 'active' : ''}" data-cat="${esc(c)}">${esc(c)}</button>`).join('');
      const visibleBrands = state.categories.size ? [...new Set(PRODUCTS.filter(p => state.categories.has(p.category)).map(p => p.brand))].sort() : ALL_BRANDS;
      document.getElementById('brandBody').innerHTML = visibleBrands.map(b => {
        const count = PRODUCTS.filter(p => p.brand === b && (!state.categories.size || state.categories.has(p.category))).length;
        return `<label class="check"><input type="checkbox" data-brand="${esc(b)}" ${state.brands.has(b) ? 'checked' : ''}><span>${esc(b)}</span><span class="count">${count}</span></label>`;
      }).join('');
      document.getElementById('storeBody').innerHTML = ALL_PLATFORMS.map(s => {
        const count = PRODUCTS.filter(p => p.listings.some(l => l.platform === s)).length;
        return `<label class="check"><input type="checkbox" data-store="${esc(s)}" ${state.platforms.has(s) ? 'checked' : ''}>${storeLogo(s)}<span>${esc(s)}</span><span class="count">${count}</span></label>`;
      }).join('');
      document.getElementById('ratingBody').innerHTML = RATINGS.map(r => `<button class="chip ${state.minRating === r.value ? 'active' : ''}" data-rating="${r.value}">${r.label}</button>`).join('');
      document.getElementById('discBody').innerHTML = DISCOUNTS.map(d => `<button class="chip ${state.minDiscount === d.value ? 'active' : ''}" data-disc="${d.value}">${d.label}</button>`).join('');
      document.getElementById('delBody').innerHTML = DELIVERIES.map(d => `<button class="chip ${state.maxDelivery === d.value ? 'active' : ''}" data-del="${d.value}">${d.label}</button>`).join('');
      document.getElementById('priceQuick').innerHTML = PRICE_QUICK.map(q => `<button class="chip" data-pmin="${q.min}" data-pmax="${q.max}">${q.label}</button>`).join('');
    }

    function wireFilters() {
      document.querySelectorAll('[data-collapse]').forEach(t => {
        t.addEventListener('click', () => {
          t.classList.toggle('collapsed');
          document.getElementById(t.dataset.collapse).classList.toggle('hidden');
        });
      });
      document.getElementById('catBody').addEventListener('click', e => {
        const b = e.target.closest('[data-cat]'); if (!b) return;
        const c = b.dataset.cat;
        if (state.categories.has(c)) state.categories.delete(c); else state.categories.add(c);
        buildCatNav(); buildFilterUI(); renderProducts();
      });
      document.getElementById('brandBody').addEventListener('change', e => {
        const cb = e.target.closest('[data-brand]'); if (!cb) return;
        if (cb.checked) state.brands.add(cb.dataset.brand); else state.brands.delete(cb.dataset.brand);
        renderProducts();
      });
      document.getElementById('storeBody').addEventListener('change', e => {
        const cb = e.target.closest('[data-store]'); if (!cb) return;
        if (cb.checked) state.platforms.add(cb.dataset.store); else state.platforms.delete(cb.dataset.store);
        renderProducts();
      });
      document.getElementById('ratingBody').addEventListener('click', e => {
        const b = e.target.closest('[data-rating]'); if (!b) return;
        state.minRating = parseFloat(b.dataset.rating); buildFilterUI(); renderProducts();
      });
      document.getElementById('discBody').addEventListener('click', e => {
        const b = e.target.closest('[data-disc]'); if (!b) return;
        state.minDiscount = parseFloat(b.dataset.disc); buildFilterUI(); renderProducts();
      });
      document.getElementById('delBody').addEventListener('click', e => {
        const b = e.target.closest('[data-del]'); if (!b) return;
        state.maxDelivery = parseFloat(b.dataset.del); buildFilterUI(); renderProducts();
      });
      document.getElementById('priceQuick').addEventListener('click', e => {
        const b = e.target.closest('[data-pmin]'); if (!b) return;
        state.maxPrice = parseFloat(b.dataset.pmax);
        document.getElementById('priceRange').value = state.maxPrice;
        document.getElementById('priceLabel').textContent = fmt(state.maxPrice);
        renderProducts();
      });
      const range = document.getElementById('priceRange');
      range.addEventListener('input', () => {
        state.maxPrice = parseInt(range.value, 10);
        document.getElementById('priceLabel').textContent = state.maxPrice >= 150000 ? 'Any' : '≤ ' + fmt(state.maxPrice);
        renderProducts();
      });
      document.getElementById('resetFilters').addEventListener('click', resetAll);
      document.getElementById('sortSelect').addEventListener('change', e => { state.sort = e.target.value; renderProducts(); });
      document.getElementById('openFilters').addEventListener('click', () => {
        document.getElementById('filtersPanel').classList.add('open');
        document.getElementById('overlay').classList.add('show');
      });
    }

    /* ============================================================
       9. PRODUCT RENDER
       ============================================================ */
    function visibleProducts() {
      const q = state.query.trim().toLowerCase();
      let list = PRODUCTS.filter(p => {
        if (state.categories.size && !state.categories.has(p.category)) return false;
        if (state.brands.size && !state.brands.has(p.brand)) return false;
        const best = bestListing(p);
        if (eff(best) > state.maxPrice) return false;
        if (state.minRating && p.rating < state.minRating) return false;
        if (state.minDiscount && discountPct(p) < state.minDiscount) return false;
        if (state.maxDelivery !== Infinity && best.days > state.maxDelivery) return false;
        if (state.platforms.size && !p.listings.some(l => state.platforms.has(l.platform))) return false;
        if (q) {
          const hay = (p.name + ' ' + p.brand + ' ' + p.category + ' ' + p.desc).toLowerCase();
          if (!hay.includes(q)) return false;
        }
        return true;
      });
      switch (state.sort) {
        case 'price-asc': list.sort((a, b) => eff(bestListing(a)) - eff(bestListing(b))); break;
        case 'price-desc': list.sort((a, b) => eff(bestListing(b)) - eff(bestListing(a))); break;
        case 'rating': list.sort((a, b) => b.rating - a.rating); break;
        case 'discount': list.sort((a, b) => discountPct(b) - discountPct(a)); break;
        case 'spread': list.sort((a, b) => (eff(worstListing(b)) - eff(bestListing(b))) - (eff(worstListing(a)) - eff(bestListing(a)))); break;
      }
      return list;
    }

    function renderProducts() {
      const grid = document.getElementById('productGrid');
      const list = visibleProducts();
      document.getElementById('resultsTitle').textContent =
        state.categories.size === 1 ? [...state.categories][0] :
          state.categories.size > 1 ? 'Multiple categories' : 'All products';
      document.getElementById('resultsCount').textContent = `· ${list.length} result${list.length === 1 ? '' : 's'}`;
      renderActiveFilters();
      if (!list.length) {
        grid.innerHTML = `<div class="empty">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.7" y2="16.7"/></svg>
      <h3>No products matched</h3><p>Try a shorter keyword or clear a few filters.</p>
      <button class="btn btn-primary" onclick="document.getElementById('resetFilters').click()">Reset filters</button></div>`;
        return;
      }
      const pin = getCurrentPincode();
      grid.innerHTML = list.map(p => {
        const best = bestListing(p);
        const worst = worstListing(p);
        const save = eff(worst) - eff(best);
        const off = discountPct(p);
        const inWish = state.wishlist.includes(p.id);
        const inCmp = state.compare.includes(p.id);
        const isNew = p.reviews < 6000;
        const badges = [];
        if (off >= 50) badges.push('<span class="badge-tag deal">' + off + '% off</span>');
        if (isNew) badges.push('<span class="badge-tag new">New</span>');
        let deliveryLine = '';
        if (pin) {
          const delivers = STORE_COVERAGE[best.platform] ? STORE_COVERAGE[best.platform](pin) : true;
          const days = deliveryDaysFor(best.platform, best.days, pin);
          if (!delivers) deliveryLine = `<div class="delivery-line warn">⚠ Not deliverable to ${pin}</div>`;
          else {
            const cod = codAvailable(best.platform, pin);
            deliveryLine = `<div class="delivery-line"><span style="color:var(--green);">✓</span> Delivers in ${days} day${days > 1 ? 's' : ''}${cod ? ' · COD' : ''}</div>`;
          }
        }
        return `<article class="card" data-pid="${p.id}">
      <div class="card-media">
        <img src="${p.image}" alt="${esc(p.name)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid';">
        <div class="fallback" style="display:none">${catIcon(p.category)}</div>
        <div class="badges">${badges.join('')}</div>
        <button class="wish-btn ${inWish ? 'active' : ''}" data-wish="${p.id}" aria-label="Wishlist">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
        </button>
        <button class="quick-btn" data-quick="${p.id}">Quick view</button>
      </div>
      <div class="card-body">
        <div class="card-brand">${esc(p.brand)}</div>
        <h3 class="card-name">${esc(p.name)}</h3>
        <div class="card-rating">
          <span class="rate-pill ${p.rating < 4.2 ? 'warn' : ''}">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3 6.9 7.5.6-5.7 5 1.7 7.4L12 18l-6.5 3.9L7.2 14.5 1.5 9.5l7.5-.6L12 2Z"/></svg>
            ${p.rating.toFixed(1)}</span>
          <span>${p.reviews.toLocaleString('en-IN')} ratings</span>
        </div>
        <div class="price-row">
          <span class="price-now">${fmt(eff(best))}</span>
          <s class="price-mrp">${fmt(best.mrp)}</s>
          ${off > 0 ? `<span class="price-off">${off}% off</span>` : ''}
        </div>
        <div class="store-line">${storeLogo(best.platform)}<span>Lowest on <b>${esc(best.platform)}</b></span><span class="s-tag">${p.listings.length} stores</span></div>
        ${deliveryLine}
        ${save > 0 ? `<div class="save-line"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Save ${fmt(save)} vs costliest store</div>` : `<div class="save-line" style="color:var(--text-3)">Already the best price everywhere</div>`}
        <div class="card-actions">
          <button class="btn btn-primary" data-addbest="${p.id}">Add to cart</button>
          <button class="cmp-check ${inCmp ? 'on' : ''}" data-cmp="${p.id}" aria-label="Compare">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 11 21 7 17 3"/><line x1="21" y1="7" x2="3" y2="7"/><polyline points="7 21 3 17 7 13"/><line x1="3" y1="17" x2="21" y2="17"/></svg>
          </button>
        </div>
      </div>
    </article>`;
      }).join('');
    }

    function renderActiveFilters() {
      const wrap = document.getElementById('activeFilters');
      const pills = [];
      state.categories.forEach(c => pills.push(`<span class="af-pill">${esc(c)}<button data-rm="cat:${esc(c)}">&times;</button></span>`));
      state.brands.forEach(b => pills.push(`<span class="af-pill">${esc(b)}<button data-rm="brand:${esc(b)}">&times;</button></span>`));
      state.platforms.forEach(s => pills.push(`<span class="af-pill">${esc(s)}<button data-rm="store:${esc(s)}">&times;</button></span>`));
      if (state.minRating) pills.push(`<span class="af-pill">${state.minRating}★+<button data-rm="rating">&times;</button></span>`);
      if (state.minDiscount) pills.push(`<span class="af-pill">${state.minDiscount}%+ off<button data-rm="disc">&times;</button></span>`);
      if (state.maxDelivery !== Infinity) pills.push(`<span class="af-pill">≤ ${state.maxDelivery} days<button data-rm="del">&times;</button></span>`);
      if (state.maxPrice < 150000) pills.push(`<span class="af-pill">≤ ${fmt(state.maxPrice)}<button data-rm="price">&times;</button></span>`);
      wrap.innerHTML = pills.join('');
      const n = state.categories.size + state.brands.size + state.platforms.size +
        (state.minRating ? 1 : 0) + (state.minDiscount ? 1 : 0) + (state.maxDelivery !== Infinity ? 1 : 0) + (state.maxPrice < 150000 ? 1 : 0);
      document.getElementById('filterCount').textContent = n ? `(${n})` : '';
    }

    document.addEventListener('click', e => {
      const b = e.target.closest('[data-rm]'); if (!b) return;
      const [key, val] = b.dataset.rm.split(':');
      if (key === 'cat') state.categories.delete(val);
      if (key === 'brand') state.brands.delete(val);
      if (key === 'store') state.platforms.delete(val);
      if (key === 'rating') state.minRating = 0;
      if (key === 'disc') state.minDiscount = 0;
      if (key === 'del') state.maxDelivery = Infinity;
      if (key === 'price') { state.maxPrice = 150000; document.getElementById('priceRange').value = 150000; document.getElementById('priceLabel').textContent = 'Any'; }
      buildCatNav(); buildFilterUI(); renderProducts();
    });

    /* ============================================================
       10. SEARCH
       ============================================================ */
    function wireSearch() {
      const input = document.getElementById('searchInput');
      const clear = document.getElementById('searchClear');
      const box = document.getElementById('suggestBox');
      input.addEventListener('input', () => {
        state.query = input.value; clear.hidden = !input.value;
        renderProducts(); renderSuggest(input.value);
      });
      input.addEventListener('focus', () => { if (input.value) renderSuggest(input.value); });
      input.addEventListener('blur', () => setTimeout(() => box.hidden = true, 180));
      clear.addEventListener('click', () => {
        input.value = ''; state.query = ''; clear.hidden = true; box.hidden = true;
        renderProducts(); input.focus();
      });
      function renderSuggest(q) {
        q = q.trim().toLowerCase();
        if (!q) { box.hidden = true; return; }
        const matches = PRODUCTS.filter(p => (p.name + ' ' + p.brand + ' ' + p.category).toLowerCase().includes(q)).slice(0, 7);
        if (!matches.length) { box.innerHTML = `<div class="suggest-empty">No matches for "${esc(q)}"</div>`; box.hidden = false; return; }
        box.innerHTML = matches.map(p => {
          const best = bestListing(p);
          return `<div class="suggest-item" data-goto="${p.id}">
        <img src="${p.image}" alt="" onerror="this.style.visibility='hidden'">
        <div class="si-body"><div class="si-name">${esc(p.name)}</div><div class="si-meta">${esc(p.brand)} · ${esc(p.category)}</div></div>
        <div class="si-price">${fmt(eff(best))}</div></div>`;
        }).join('');
        box.hidden = false;
      }
      box.addEventListener('mousedown', e => {
        const item = e.target.closest('[data-goto]'); if (!item) return;
        e.preventDefault(); box.hidden = true; openQuickView(item.dataset.goto);
      });
    }

    /* ============================================================
       11. PRICE HISTORY + BANK CALC
       ============================================================ */
    function renderPriceHistory(pid, containerId) {
      const p = getProduct(pid); if (!p) return;
      const best = bestListing(p);
      const pts = genPriceHistory(best.price, hashString(p.id) + 7);
      const W = 620, H = 180, PAD = { t: 24, r: 16, b: 30, l: 56 };
      const iw = W - PAD.l - PAD.r, ih = H - PAD.t - PAD.b;
      const prices = pts.map(x => x.p);
      const minP = Math.min(...prices), maxP = Math.max(...prices);
      const rangeP = maxP - minP || 1;
      const x = i => PAD.l + (i / (pts.length - 1)) * iw;
      const y = v => PAD.t + ih - ((v - minP) / rangeP) * ih;
      let path = '';
      pts.forEach((pt, i) => {
        const px = x(i), py = y(pt.p);
        if (i === 0) path += `M${px.toFixed(1)},${py.toFixed(1)}`;
        else {
          const prev = pts[i - 1];
          const cx = (x(i - 1) + px) / 2;
          path += ` C${cx.toFixed(1)},${y(prev.p).toFixed(1)} ${cx.toFixed(1)},${py.toFixed(1)} ${px.toFixed(1)},${py.toFixed(1)}`;
        }
      });
      const areaPath = path + ` L${x(pts.length - 1).toFixed(1)},${(PAD.t + ih).toFixed(1)} L${x(0).toFixed(1)},${(PAD.t + ih).toFixed(1)} Z`;
      const current = prices[prices.length - 1];
      const lowest = Math.min(...prices), highest = Math.max(...prices);
      const isLow = current <= lowest * 1.03, isHigh = current >= highest * 0.97;
      let verdictClass, verdictText, verdictIcon;
      if (isLow) { verdictClass = 'low'; verdictText = 'Buy now — lowest in 6 months'; verdictIcon = '↓'; }
      else if (isHigh) { verdictClass = 'high'; verdictText = 'Wait — near 6-month high'; verdictIcon = '↑'; }
      else { verdictClass = 'mid'; verdictText = 'Fair price — good time to buy'; verdictIcon = '→'; }
      const monthLbls = [];
      const step = Math.ceil(pts.length / 6);
      for (let i = 0; i < pts.length; i += step) {
        const d = new Date(); d.setDate(d.getDate() + pts[i].d);
        monthLbls.push({ x: x(i), lbl: d.toLocaleString('en', { month: 'short' }) });
      }
      const svg = `<svg viewBox="0 0 ${W} ${H}" style="width:100%;height:auto;display:block;" preserveAspectRatio="xMidYMid meet">
    <defs><linearGradient id="phGrad_${pid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0e5b52" stop-opacity="0.18"/><stop offset="100%" stop-color="#0e5b52" stop-opacity="0"/></linearGradient></defs>
    ${[0, 0.25, 0.5, 0.75, 1].map(t => {
        const gy = PAD.t + ih * t, gv = maxP - t * rangeP;
        return `<line x1="${PAD.l}" y1="${gy}" x2="${W - PAD.r}" y2="${gy}" stroke="#e4e7e2" stroke-width="1" stroke-dasharray="2 4"/>
              <text x="${PAD.l - 8}" y="${gy + 3}" text-anchor="end" font-size="9.5" fill="#8a918b" font-family="sans-serif">₹${Math.round(gv / 1000)}k</text>`;
      }).join('')}
    <path d="${areaPath}" fill="url(#phGrad_${pid})"/>
    <path d="${path}" fill="none" stroke="#0e5b52" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
    ${(() => {
          const li = prices.indexOf(lowest);
          return `<circle cx="${x(li)}" cy="${y(lowest)}" r="3.5" fill="#047857" stroke="#fff" stroke-width="2"/>
              <text x="${x(li)}" y="${y(lowest) + 18}" text-anchor="middle" font-size="9" fill="#047857" font-weight="700" font-family="sans-serif">₹${lowest.toLocaleString('en-IN')}</text>`;
        })()}
    <circle cx="${x(pts.length - 1)}" cy="${y(current)}" r="5" fill="#0e5b52" stroke="#fff" stroke-width="2.5"/>
    <circle cx="${x(pts.length - 1)}" cy="${y(current)}" r="9" fill="#0e5b52" opacity="0.15"/>
    ${monthLbls.map(m => `<text x="${m.x}" y="${H - 8}" text-anchor="middle" font-size="10" fill="#8a918b" font-family="sans-serif">${m.lbl}</text>`).join('')}
  </svg>`;
      const html = `<div class="ph-card">
    <div class="ph-head">
      <div><div class="ph-eyebrow">Price history · last 6 months</div><div class="ph-title">Tracked across ${p.listings.length} stores</div></div>
      <div class="ph-verdict ${verdictClass}"><span style="font-size:14px;">${verdictIcon}</span>${verdictText}</div>
    </div>
    <div style="padding:12px 10px 4px;">${svg}</div>
    <div class="ph-stats">
      <div class="ph-stat"><div class="lbl">Current</div><div class="val">₹${current.toLocaleString('en-IN')}</div></div>
      <div class="ph-stat"><div class="lbl">6-month low</div><div class="val green">₹${lowest.toLocaleString('en-IN')}</div></div>
      <div class="ph-stat"><div class="lbl">6-month high</div><div class="val">₹${highest.toLocaleString('en-IN')}</div></div>
    </div>
    <div class="ph-alert-bar">
      <button class="btn btn-sm" data-setalert="${pid}" style="width:100%;">🔔 Notify me when price drops below ₹${Math.round(lowest * 0.95).toLocaleString('en-IN')}</button>
    </div>
  </div>`;
      const el = document.getElementById(containerId);
      if (el) el.innerHTML = html;
    }

    const USER_CARD_KEY = 'ss_usercard';
    let userCard = localStorage.getItem(USER_CARD_KEY) || '';

    function renderBankCalculator(pid, containerId) {
      const p = getProduct(pid); if (!p) return;
      const allCards = [...new Set(Object.values(BANK_OFFERS).flat().map(o => o.card))];
      const rows = p.listings.map(l => {
        const offers = BANK_OFFERS[l.platform] || [];
        const yourOffer = userCard ? offers.find(o => o.card === userCard) : null;
        const saving = yourOffer ? offerValue(yourOffer, l.price) : 0;
        return { listing: l, offers, yourOffer, saving };
      });
      const bestRow = userCard ? [...rows].sort((a, b) => (eff(a.listing) - a.saving) - (eff(b.listing) - b.saving))[0] : null;
      const html = `<div class="bc-card">
    <div class="bc-head">
      <div><div class="bc-eyebrow">Bank offer calculator</div><div class="bc-title">Which card saves you the most?</div></div>
      <select class="bc-picker" id="cardPicker_${pid}">
        <option value="">— Select your card —</option>
        ${allCards.map(c => `<option value="${c}" ${userCard === c ? 'selected' : ''}>${c}</option>`).join('')}
      </select>
    </div>
    ${userCard && bestRow ? `<div class="bc-suggest">
      <span style="font-size:16px;">💡</span>
      Use <b>${userCard}</b> on <b>${bestRow.listing.platform}</b> and pay only <b>₹${Math.round(eff(bestRow.listing) - bestRow.saving).toLocaleString('en-IN')}</b>
      (saves an extra ₹${Math.round(bestRow.saving).toLocaleString('en-IN')})</div>` : ''}
    ${rows.map(r => {
        const bestOffer = [...r.offers].sort((a, b) => offerValue(b, r.listing.price) - offerValue(a, r.listing.price))[0];
        const bestVal = bestOffer ? offerValue(bestOffer, r.listing.price) : 0;
        const youVal = r.yourOffer ? offerValue(r.yourOffer, r.listing.price) : 0;
        const finalPrice = eff(r.listing) - (userCard ? youVal : bestVal);
        const isBestFinal = bestRow && bestRow.listing.platform === r.listing.platform;
        return `<div class="bc-row ${isBestFinal ? 'best' : ''}">
        <div style="min-width:0;">
          <div class="bc-store-name">${storeLogo(r.listing.platform)}${r.listing.platform}
            ${isBestFinal ? '<span class="s-tag" style="background:var(--primary);color:#fff;font-size:9.5px;padding:2px 6px;border-radius:4px;letter-spacing:.06em;text-transform:uppercase;font-weight:700;">Best with your card</span>' : ''}</div>
          ${r.offers.length ? r.offers.map(o => {
          const v = offerValue(o, r.listing.price);
          const isMine = userCard && o.card === userCard;
          return `<div class="bc-offer ${isMine ? 'mine' : ''}"><span class="dot"></span><b style="font-weight:600;">${o.card}</b> · ${o.note} ${v > 0 ? `<span style="color:var(--green);">(−₹${Math.round(v).toLocaleString('en-IN')})</span>` : ''}</div>`;
        }).join('') : `<div class="bc-offer" style="color:var(--text-3)">No bank offers currently</div>`}
        </div>
        <div class="bc-final"><div class="lbl">Final price</div>
          <div class="val" style="${isBestFinal ? 'color:var(--primary);' : ''}">₹${Math.round(finalPrice).toLocaleString('en-IN')}</div>
          ${(userCard ? youVal : bestVal) > 0 ? `<div class="save">Save ₹${Math.round(userCard ? youVal : bestVal).toLocaleString('en-IN')}</div>` : ''}
        </div></div>`;
      }).join('')}
  </div>`;
      const el = document.getElementById(containerId);
      if (el) {
        el.innerHTML = html;
        const picker = document.getElementById(`cardPicker_${pid}`);
        if (picker) picker.addEventListener('change', () => {
          userCard = picker.value;
          localStorage.setItem(USER_CARD_KEY, userCard);
          renderBankCalculator(pid, containerId);
        });
      }
    }

    /* ============================================================
       12. QUICK VIEW
       ============================================================ */
    function openQuickView(pid) {
      const p = getProduct(pid); if (!p) return;
      const rows = [...p.listings].sort((a, b) => eff(a) - eff(b));
      const best = rows[0], worst = rows[rows.length - 1];
      const off = discountPct(p), save = eff(worst) - eff(best);
      const pin = getCurrentPincode();
      document.getElementById('qvBody').innerHTML = `
    <div class="qv-media"><img src="${p.image}" alt="${esc(p.name)}" onerror="this.style.display='none';this.parentElement.insertAdjacentHTML('beforeend','<div style=&quot;position:absolute;inset:0;display:grid;place-items:center;color:var(--text-3)&quot;>${catIcon(p.category).replace(/"/g, '&quot;')}</div>')"></div>
    <div class="qv-body">
      <div><div class="qv-brand">${esc(p.brand)} · ${esc(p.category)}</div><h2 class="qv-name">${esc(p.name)}</h2></div>
      <div class="qv-meta"><span class="rate-pill ${p.rating < 4.2 ? 'warn' : ''}">
        <svg viewBox="0 0 24 24" fill="currentColor" width="10" height="10"><path d="m12 2 3 6.9 7.5.6-5.7 5 1.7 7.4L12 18l-6.5 3.9L7.2 14.5 1.5 9.5l7.5-.6L12 2Z"/></svg>${p.rating.toFixed(1)}</span>
        <span>${p.reviews.toLocaleString('en-IN')} ratings</span><span>· ${p.listings.length} stores</span></div>
      <p class="qv-desc">${esc(p.desc)}</p>
      <div class="qv-price"><span class="now">${fmt(eff(best))}</span><span class="mrp">${fmt(best.mrp)}</span>${off > 0 ? `<span class="off">${off}% off</span>` : ''}</div>
      ${save > 0 ? `<div class="save-line" style="font-size:13px"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Save ${fmt(save)} compared to the costliest store</div>` : ''}
      <div class="qv-stores">
        <div class="head"><span>Price at every store</span><span>Effective = price − offer + delivery</span></div>
        ${rows.map((l, i) => {
        const delivers = pin ? (STORE_COVERAGE[l.platform] ? STORE_COVERAGE[l.platform](pin) : true) : true;
        const days = deliveryDaysFor(l.platform, l.days, pin);
        return `<div class="qv-store ${i === 0 ? 'best' : ''}">
            <div class="s-name">${storeLogo(l.platform)}${esc(l.platform)}${i === 0 ? '<span class="s-tag">Best</span>' : ''}</div>
            <div class="s-price"><b>${fmt(l.price)}</b><s>${fmt(l.mrp)}</s></div>
            <div class="s-offer">${l.extraOff > 0 ? `<b>− ${fmt(l.extraOff)}</b> · ` : ''}${esc(l.offer)}</div>
            <div class="s-eff">${fmt(eff(l))}<div style="font-size:11px;color:${delivers ? 'var(--text-3)' : 'var(--red)'};font-family:var(--font);font-weight:500">${delivers ? (l.delivery === 0 ? 'Free delivery' : fmt(l.delivery) + ' delivery') + ` · ${days}d` : `Not deliverable to ${pin}`}</div></div>
            <div class="s-act"><button class="btn btn-sm ${i === 0 ? 'btn-primary' : ''}" data-qadd="${p.id}" data-qplat="${esc(l.platform)}">Add</button></div>
          </div>`;
      }).join('')}
      </div>
      <div id="qvHistory"></div>
      <div id="qvBank"></div>
      <div style="display:flex;gap:9px;flex-wrap:wrap;margin-top:4px;">
        <button class="btn ${state.wishlist.includes(p.id) ? '' : 'btn-primary'}" data-qwish="${p.id}">${state.wishlist.includes(p.id) ? '♥ In wishlist' : '♡ Add to wishlist'}</button>
        <button class="btn" data-qcmp="${p.id}">${state.compare.includes(p.id) ? '✓ In compare' : '⇄ Compare'}</button>
      </div>
    </div>`;
      state.recent = [p.id, ...state.recent.filter(x => x !== p.id)].slice(0, 12);
      LS.save(); renderRecent(); openModal('qvWrap');
      setTimeout(() => { renderPriceHistory(p.id, 'qvHistory'); renderBankCalculator(p.id, 'qvBank'); }, 30);
    }

    /* ============================================================
       13. COMPARE
       ============================================================ */
    function toggleCompare(pid) {
      const i = state.compare.indexOf(pid);
      if (i >= 0) state.compare.splice(i, 1);
      else {
        if (state.compare.length >= 4) { showToast('You can compare up to 4 products'); return; }
        state.compare.push(pid);
      }
      renderCompareTray(); renderProducts();
    }
    function renderCompareTray() {
      const tray = document.getElementById('cmpTray');
      const items = document.getElementById('cmpItems');
      if (!state.compare.length) { tray.classList.remove('show'); items.innerHTML = ''; return; }
      tray.classList.add('show');
      items.innerHTML = state.compare.map(id => {
        const p = getProduct(id);
        return `<div class="cmp-thumb"><img src="${p.image}" alt="" onerror="this.style.visibility='hidden'"><button data-cmp-rm="${id}">&times;</button></div>`;
      }).join('');
    }
    function openCompareModal() {
      if (state.compare.length < 2) { showToast('Add at least 2 products to compare'); return; }
      const products = state.compare.map(getProduct).filter(Boolean);
      document.getElementById('cmpSubtitle').textContent = `Comparing ${products.length} products across every store`;
      document.getElementById('cmpBody').innerHTML = products.map(p => {
        const rows = [...p.listings].sort((a, b) => eff(a) - eff(b));
        const best = rows[0], worst = rows[rows.length - 1];
        const off = discountPct(p);
        return `<div class="cmp-col">
      <div class="col-media"><img src="${p.image}" alt="" onerror="this.style.visibility='hidden'"></div>
      <div><div class="col-brand">${esc(p.brand)} · ${esc(p.category)}</div><div class="col-name">${esc(p.name)}</div></div>
      <div class="col-best"><div class="lbl">Lowest effective price</div><div class="price">${fmt(eff(best))}</div><div class="store">on ${esc(best.platform)} · ${off}% off MRP</div></div>
      <div class="col-list">
        <div class="col-row"><span>Rating</span><b>${p.rating.toFixed(1)} ★</b></div>
        <div class="col-row"><span>Ratings</span><b>${p.reviews.toLocaleString('en-IN')}</b></div>
        <div class="col-row hl"><span>Highest store price</span><b>${fmt(eff(worst))}</b></div>
        <div class="col-row"><span>You save</span><b style="color:var(--green)">${fmt(eff(worst) - eff(best))}</b></div>
        <div class="col-row"><span>Fastest delivery</span><b>${Math.min(...p.listings.map(l => l.days))} days</b></div>
        <div class="col-row"><span>Free delivery at</span><b>${p.listings.filter(l => l.delivery === 0).length} of ${p.listings.length} stores</b></div>
      </div>
      <div style="margin-top:auto;display:flex;gap:8px;">
        <button class="btn btn-primary btn-sm" style="flex:1" data-cadd="${p.id}" data-cplat="${esc(best.platform)}">Add best to cart</button>
        <button class="btn btn-sm" data-quick="${p.id}">View</button>
      </div></div>`;
      }).join('');
      openModal('cmpWrap');
    }

    /* ============================================================
       14. MODAL CONTROLS
       ============================================================ */
    function openModal(id) {
      document.getElementById(id).classList.add('show');
      document.getElementById('overlay').classList.add('show');
      document.body.style.overflow = 'hidden';
    }
    function closeModal(id) {
      document.getElementById(id).classList.remove('show');
      if (!document.querySelector('.modal-wrap.show') && !document.querySelector('.drawer.open') && !document.getElementById('checkoutScreen').classList.contains('open'))
        document.getElementById('overlay').classList.remove('show');
      document.body.style.overflow = '';
    }
    document.querySelectorAll('[data-close-modal]').forEach(b => b.addEventListener('click', () => closeModal(b.dataset.closeModal + 'Wrap')));
    document.getElementById('overlay').addEventListener('click', () => {
      document.querySelectorAll('.modal-wrap.show').forEach(m => m.classList.remove('show'));
      closeCart(); closeWish();
      document.getElementById('filtersPanel').classList.remove('open');
      document.getElementById('overlay').classList.remove('show');
      document.body.style.overflow = '';
    });

    /* ============================================================
       15. PRICE ALERTS
       ============================================================ */
    let alertPid = null;
    function openAlertModal(pid) {
      alertPid = pid;
      const p = getProduct(pid); if (!p) return;
      const best = bestListing(p);
      const lowest = Math.min(...genPriceHistory(best.price, hashString(p.id) + 7).map(x => x.p));
      document.getElementById('alertProduct').innerHTML = `
    <img src="${p.image}" style="width:52px;height:52px;border-radius:8px;object-fit:cover;" onerror="this.style.visibility='hidden'">
    <div style="flex:1;min-width:0;"><div style="font-size:13px;font-weight:600;line-height:1.35;">${esc(p.name)}</div>
    <div style="font-size:11.5px;color:var(--text-3);margin-top:2px;">Lowest: ${fmt(lowest)} on ${esc(best.platform)}</div></div>`;
      document.getElementById('alertPrice').value = Math.round(lowest * 0.95);
      document.getElementById('alertHint').textContent = `Current lowest: ${fmt(lowest)} · Suggested: below ${fmt(lowest * 0.95)}`;
      openModal('alertWrap');
    }
    document.getElementById('alertSave').addEventListener('click', () => {
      const target = parseInt(document.getElementById('alertPrice').value, 10);
      if (!target || target <= 0) { showToast('Enter a valid price'); return; }
      const alerts = JSON.parse(localStorage.getItem('ss_alerts') || '[]');
      alerts.push({ pid: alertPid, target, createdAt: Date.now() });
      localStorage.setItem('ss_alerts', JSON.stringify(alerts));
      closeModal('alertWrap');
      showToast(`Alert set! We'll ping you below ₹${target.toLocaleString('en-IN')}`);
    });

    /* ============================================================
       16. PINCODE
       ============================================================ */
    function wirePincode() {
      const input = document.getElementById('pincodeInput');
      const result = document.getElementById('pincodeResult');
      const saved = localStorage.getItem('ss_pincode');
      if (saved) { input.value = saved; updatePincodeUI(saved); }
      input.addEventListener('input', () => {
        input.value = input.value.replace(/\D/g, '').slice(0, 6);
        if (input.value.length === 6) {
          localStorage.setItem('ss_pincode', input.value);
          localStorage.removeItem('ss_autoLoc'); // manual entry = not auto
          renderAutoLocBadge();
          updatePincodeUI(input.value);
          renderProducts();
        } else { result.textContent = ''; result.style.color = 'var(--text-3)'; }
      });
      document.getElementById('pincodeRefreshBtn').addEventListener('click', () => autoDetectLocation(false));
      renderAutoLocBadge();
    }
    function updatePincodeUI(pin) {
      const result = document.getElementById('pincodeResult');
      const loc = PINCODE_DB[pin];
      if (loc) { result.textContent = `✓ ${loc}`; result.style.color = 'var(--green)'; }
      else { result.textContent = `⚠ Unknown pincode — default estimates`; result.style.color = 'var(--amber)'; }
    }
    function getCurrentPincode() { return localStorage.getItem('ss_pincode') || ''; }

    /* ============================================================
       17. CART
       ============================================================ */
    function addToCart(pid, platform, qty = 1) {
      const existing = state.cart.find(it => it.pid === pid && it.platform === platform);
      if (existing) existing.qty += qty;
      else state.cart.push({ pid, platform, qty });
      LS.save(); renderCart();
      const p = getProduct(pid);
      showToast(`Added to cart · ${p.name.slice(0, 34)}${p.name.length > 34 ? '…' : ''}`);
      const b = document.getElementById('cartBadge');
      b.style.transform = 'scale(1.4)';
      setTimeout(() => b.style.transform = '', 220);
    }
    function updateQty(i, d) {
      const it = state.cart[i]; if (!it) return;
      it.qty += d;
      if (it.qty <= 0) state.cart.splice(i, 1);
      LS.save(); renderCart();
    }
    function removeFromCart(i) {
      state.cart.splice(i, 1); LS.save(); renderCart(); showToast('Removed from cart');
    }
    function cartTotals() {
      let mrpTotal = 0, itemTotal = 0, delivery = 0;
      state.cart.forEach(it => {
        const l = getListing(it.pid, it.platform); if (!l) return;
        mrpTotal += l.mrp * it.qty;
        itemTotal += base(l) * it.qty;
        delivery += l.delivery;
      });
      const storeDiscount = mrpTotal - itemTotal;
      let couponDiscount = 0, couponActive = false, couponError = '';
      const c = state.coupon ? COUPONS[state.coupon] : null;
      if (c && state.cart.length) {
        if (itemTotal < c.min) couponError = `Add ${fmt(c.min - itemTotal)} more to use ${state.coupon}`;
        else {
          couponActive = true;
          if (c.type === 'pct') couponDiscount = Math.min(itemTotal * c.value / 100, c.cap);
          if (c.type === 'flat') couponDiscount = c.value;
          if (c.type === 'ship') delivery = 0;
        }
      }
      if (itemTotal >= 999) delivery = 0;
      const taxable = Math.max(itemTotal - couponDiscount, 0);
      const tax = taxable * 0.18;
      const total = taxable + tax + delivery;
      return { mrpTotal, itemTotal, storeDiscount, couponDiscount, delivery, tax, total, couponActive, couponError, savings: mrpTotal - total };
    }
    function renderCart() {
      const body = document.getElementById('cartBody');
      const foot = document.getElementById('cartFoot');
      const count = state.cart.reduce((s, it) => s + it.qty, 0);
      const badge = document.getElementById('cartBadge');
      badge.textContent = count;
      badge.classList.toggle('hidden', count === 0);
      document.getElementById('cartSub').textContent = count ? `${count} item${count === 1 ? '' : 's'}` : 'empty';
      if (!state.cart.length) {
        body.innerHTML = `<div class="empty" style="padding:56px 20px">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6 5 3H2"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></svg>
      <h3>Your cart is empty</h3><p>Search a product, compare stores, then add the cheapest one.</p>
      <button class="btn btn-primary" onclick="closeCart();scrollToProducts()">Browse products</button></div>`;
        foot.innerHTML = `<div class="coupon-row"><input id="couponInput" placeholder="Coupon code"><button class="btn btn-sm" id="applyCoupon">Apply</button></div>
      <p class="coupon-msg hint" id="couponMsg">Try SAVE10, NEW500, FESTIVE15, FREESHIP, TECH2000 or WELCOME100</p>
      <button class="checkout-btn" disabled>Proceed to checkout</button>`;
        wireCartFooter(); return;
      }
      const groups = {};
      state.cart.forEach((it, idx) => {
        if (!groups[it.platform]) groups[it.platform] = [];
        groups[it.platform].push({ ...it, _idx: idx });
      });
      const pin = getCurrentPincode();
      body.innerHTML = Object.entries(groups).map(([store, items]) => {
        const storeTotal = items.reduce((s, it) => {
          const l = getListing(it.pid, it.platform);
          return s + (l ? base(l) * it.qty : 0);
        }, 0);
        const fastest = Math.min(...items.map(it => {
          const l = getListing(it.pid, it.platform);
          return deliveryDaysFor(store, l.days, pin);
        }));
        const delivers = STORE_COVERAGE[store] ? STORE_COVERAGE[store](pin || '600001') : true;
        return `<div class="store-group">
      <div class="store-group-head">${storeLogo(store)}
        <div class="sg-info"><div class="sg-name">${store}</div>
          <div class="sg-meta ${delivers ? '' : 'warn'}">${delivers ? `Arrives in ${fastest} day${fastest > 1 ? 's' : ''}${pin ? ' to ' + pin : ''}` : `⚠ Not deliverable to ${pin}`}</div></div>
        <div class="sg-total">${fmt(storeTotal)}</div></div>
      ${items.map(it => {
          const p = getProduct(it.pid);
          const l = getListing(it.pid, it.platform);
          const unit = base(l);
          return `<div class="cart-line" style="padding:12px 14px;">
          <div class="cart-thumb" style="width:54px;height:54px;"><img src="${p.image}" alt="" onerror="this.style.visibility='hidden'"></div>
          <div class="cart-main"><div class="cart-name" style="font-size:13px;">${esc(p.name)}</div>
            <div class="cart-meta">${fmt(unit)} each${l.extraOff ? ` · offer −${fmt(l.extraOff)}` : ''}</div>
            <div style="margin-top:7px;">
              <div class="qty" style="display:inline-flex"><button data-act="dec" data-i="${it._idx}">−</button><span>${it.qty}</span><button data-act="inc" data-i="${it._idx}">+</button></div>
              <button class="cart-remove" data-act="rm" data-i="${it._idx}">Remove</button>
            </div></div>
          <div class="cart-line-price">${fmt(unit * it.qty)}</div></div>`;
        }).join('')}</div>`;
      }).join('');
      const t = cartTotals();
      foot.innerHTML = `
    <div class="coupon-row"><input id="couponInput" placeholder="Coupon code" value="${state.coupon || ''}"><button class="btn btn-sm" id="applyCoupon">Apply</button></div>
    <p class="coupon-msg ${t.couponActive ? 'ok' : (t.couponError ? 'err' : 'hint')}" id="couponMsg">
      ${t.couponActive ? `✓ ${COUPONS[state.coupon].label} applied` : (t.couponError || 'Try SAVE10, NEW500, FESTIVE15, FREESHIP, TECH2000 or WELCOME100')}</p>
    <div class="sum-row"><span>MRP total</span><span>${fmt(t.mrpTotal)}</span></div>
    <div class="sum-row green"><span>Store discounts</span><span>− ${fmt(t.storeDiscount)}</span></div>
    ${t.couponDiscount > 0 ? `<div class="sum-row green"><span>Coupon ${state.coupon}</span><span>− ${fmt(t.couponDiscount)}</span></div>` : ''}
    <div class="sum-row"><span>Delivery</span><span>${t.delivery === 0 ? 'Free' : fmt(t.delivery)}</span></div>
    <div class="sum-row"><span>GST (18%)</span><span>${fmt(t.tax)}</span></div>
    <div class="sum-row total"><span>Total payable</span><span>${fmt(t.total)}</span></div>
    ${t.savings > 0 ? `<div class="save-note">You're saving ${fmt(t.savings)} on this order</div>` : ''}
    <button class="checkout-btn" id="checkoutBtn">Place Order · ${fmt(t.total)}</button>`;
      wireCartFooter();
      const chk = document.getElementById('checkoutBtn');
      if (chk) chk.addEventListener('click', startCheckout);
    }
    function wireCartFooter() {
      const apply = document.getElementById('applyCoupon');
      const input = document.getElementById('couponInput');
      if (apply && input) {
        apply.addEventListener('click', () => {
          const code = input.value.trim().toUpperCase();
          if (!code) { state.coupon = null; LS.save(); renderCart(); return; }
          if (!COUPONS[code]) { showToast('Invalid coupon code'); return; }
          state.coupon = code; LS.save(); renderCart();
          const t = cartTotals();
          if (t.couponActive) showToast(`Coupon ${code} applied`);
          else if (t.couponError) showToast(t.couponError);
        });
        input.addEventListener('keydown', e => { if (e.key === 'Enter') apply.click(); });
      }
    }
    function openCart() {
      document.getElementById('cartDrawer').classList.add('open');
      document.getElementById('cartDrawer').setAttribute('aria-hidden', 'false');
      document.getElementById('overlay').classList.add('show');
      document.body.style.overflow = 'hidden';
    }
    function closeCart() {
      document.getElementById('cartDrawer').classList.remove('open');
      document.getElementById('cartDrawer').setAttribute('aria-hidden', 'true');
      if (!document.querySelector('.modal-wrap.show') && !document.querySelector('.drawer.open') && !document.getElementById('checkoutScreen').classList.contains('open'))
        document.getElementById('overlay').classList.remove('show');
      document.body.style.overflow = '';
    }

    /* ============================================================
       18. WISHLIST
       ============================================================ */
    function toggleWish(pid) {
      const i = state.wishlist.indexOf(pid);
      if (i >= 0) { state.wishlist.splice(i, 1); showToast('Removed from wishlist'); }
      else { state.wishlist.unshift(pid); showToast('Added to wishlist'); }
      LS.save(); renderWish(); renderProducts();
    }
    function renderWish() {
      const badge = document.getElementById('wishBadge');
      badge.textContent = state.wishlist.length;
      badge.classList.toggle('hidden', state.wishlist.length === 0);
      document.getElementById('wishSub').textContent = state.wishlist.length ? `${state.wishlist.length} item${state.wishlist.length === 1 ? '' : 's'}` : 'empty';
      const body = document.getElementById('wishBody');
      if (!state.wishlist.length) {
        body.innerHTML = `<div class="empty" style="padding:56px 20px">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
      <h3>Nothing saved yet</h3><p>Tap the heart on any product to save it for later.</p></div>`;
        return;
      }
      body.innerHTML = state.wishlist.map(id => {
        const p = getProduct(id); if (!p) return '';
        const best = bestListing(p);
        return `<div class="wish-line">
      <div class="wish-thumb"><img src="${p.image}" alt="" onerror="this.style.visibility='hidden'"></div>
      <div class="wish-body"><div class="wish-name">${esc(p.name)}</div>
        <div class="wish-price">${fmt(eff(best))} <span style="font-size:11.5px;color:var(--text-3);font-family:var(--font);font-weight:500">on ${esc(best.platform)}</span></div>
        <div class="wish-actions"><button class="btn btn-primary btn-xs" data-wadd="${p.id}">Add to cart</button>
          <button class="btn btn-xs" data-quick="${p.id}">View</button>
          <button class="btn btn-xs" data-wrm="${p.id}">Remove</button></div></div></div>`;
      }).join('');
    }
    function openWish() {
      document.getElementById('wishDrawer').classList.add('open');
      document.getElementById('wishDrawer').setAttribute('aria-hidden', 'false');
      document.getElementById('overlay').classList.add('show');
      document.body.style.overflow = 'hidden';
    }
    function closeWish() {
      document.getElementById('wishDrawer').classList.remove('open');
      document.getElementById('wishDrawer').setAttribute('aria-hidden', 'true');
      if (!document.querySelector('.modal-wrap.show') && !document.querySelector('.drawer.open') && !document.getElementById('checkoutScreen').classList.contains('open'))
        document.getElementById('overlay').classList.remove('show');
      document.body.style.overflow = '';
    }

    /* ============================================================
       19. RECENT
       ============================================================ */
    function renderRecent() {
      const wrap = document.getElementById('recentWrap');
      const strip = document.getElementById('recentStrip');
      if (!state.recent.length) { wrap.hidden = true; return; }
      wrap.hidden = false;
      strip.innerHTML = state.recent.map(id => {
        const p = getProduct(id); if (!p) return '';
        return `<div class="recent-item" data-quick="${p.id}">
      <div class="rimg"><img src="${p.image}" alt="" onerror="this.style.visibility='hidden'"></div>
      <div class="rbody"><div class="rname">${esc(p.name)}</div><div class="rprice">${fmt(eff(bestListing(p)))}</div></div></div>`;
      }).join('');
    }

    /* ============================================================
       20. CHECKOUT
       ============================================================ */
    const CO_STEPS = [
      { id: 1, label: 'Login' },
      { id: 2, label: 'Delivery Address' },
      { id: 3, label: 'Order Summary' },
      { id: 4, label: 'Payment' }
    ];

    const checkoutState = {
      step: 1, user: null, addresses: [], selectedAddrId: null,
      editingAddrId: null, showAddrForm: false, addrType: 'Home',
      paymentMethod: null, upiApp: null, placedOrder: null
    };

    const CO_LS = {
      save() { try { localStorage.setItem('ss_checkout', JSON.stringify({ user: checkoutState.user, addresses: checkoutState.addresses, selectedAddrId: checkoutState.selectedAddrId })); } catch (e) { } },
      load() {
        try {
          const d = JSON.parse(localStorage.getItem('ss_checkout') || '{}');
          if (d.user && d.user.mobile) checkoutState.user = d.user;
          if (Array.isArray(d.addresses)) checkoutState.addresses = d.addresses;
          if (d.selectedAddrId) checkoutState.selectedAddrId = d.selectedAddrId;
        } catch (e) { }
      }
    };

    function startCheckout() {
      if (!state.cart.length) { showToast('Cart is empty'); return; }
      closeCart();
      if (authUser && !authUser.guest) {
        checkoutState.user = { mobile: authUser.mobile };
        checkoutState.step = 2;
        if (!checkoutState.addresses.length && getCurrentPincode()) {
          checkoutState.showAddrForm = true;
        }
      } else {
        checkoutState.step = 1;
        checkoutState.loginStep = 'mobile';
      }
      renderCheckout();
      document.getElementById('checkoutScreen').classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeCheckout() {
      document.getElementById('checkoutScreen').classList.remove('open');
      document.body.style.overflow = '';
    }

    function renderCheckout() { renderCoSteps(); renderCoContent(); renderCoFooter(); }

    function renderCoSteps() {
      const wrap = document.getElementById('coSteps');
      wrap.innerHTML = CO_STEPS.map((s, i) => {
        const done = checkoutState.step > s.id;
        const active = checkoutState.step === s.id;
        return `${i > 0 ? '<div class="co-line"></div>' : ''}
      <div class="co-step ${done ? 'done' : ''} ${active ? 'active' : ''}">
        <span class="co-num"><span>${s.id}</span></span>${s.label}
      </div>`;
      }).join('');
    }

    function renderCoContent() {
      const el = document.getElementById('coContent');
      switch (checkoutState.step) {
        case 1: el.innerHTML = coLoginHTML(); break;
        case 2: el.innerHTML = coAddressHTML(); break;
        case 3: el.innerHTML = coSummaryHTML(); break;
        case 4: el.innerHTML = coPaymentHTML(); break;
        case 5: el.innerHTML = coSuccessHTML(); break;
      }
      wireCoContent();
    }

    function renderCoFooter() {
      const el = document.getElementById('coFooter');
      const t = cartTotals();
      if (checkoutState.step === 1) {
        el.innerHTML = `<div class="co-footer-inner" style="justify-content:space-between;">
      <span style="font-size:12.5px;color:var(--text-3);">By continuing, you agree to ShopRadar's Terms of Use and Privacy Policy.</span>
      <button class="co-primary-btn" id="coLoginBtn">Request OTP</button>
    </div>`;
      } else if (checkoutState.step === 2) {
        el.innerHTML = `<div class="co-footer-inner">
      <button class="co-footer-back" id="coBack">← Back</button>
      <div class="co-footer-total"><span class="lbl">Total payable</span><span class="val">${fmt(t.total)}</span></div>
      <button class="co-primary-btn" id="coDeliverHere">Deliver Here</button>
    </div>`;
      } else if (checkoutState.step === 3) {
        el.innerHTML = `<div class="co-footer-inner">
      <button class="co-footer-back" id="coBack">← Back</button>
      <div class="co-footer-total"><span class="lbl">Total payable</span><span class="val">${fmt(t.total)}</span></div>
      <button class="co-primary-btn" id="coContinue">Continue</button>
    </div>`;
      } else if (checkoutState.step === 4) {
        el.innerHTML = `<div class="co-footer-inner">
      <button class="co-footer-back" id="coBack">← Back</button>
      <div class="co-footer-total"><span class="lbl">Total payable</span><span class="val">${fmt(t.total)}</span></div>
      <button class="co-primary-btn" id="coPay">Pay Now</button>
    </div>`;
      } else {
        el.innerHTML = `<div class="co-footer-inner" style="justify-content:center;">
      <button class="co-primary-btn" id="coDone" style="min-width:220px;">Continue Shopping</button>
    </div>`;
      }
      wireCoFooter();
    }

    function coLoginHTML() {
      const step = checkoutState.loginStep || 'mobile';
      return `<div class="co-card">
    <div class="co-login-grid">
      <div class="co-login-left">
        <h2>${step === 'mobile' ? 'Login to continue' : 'Verify OTP'}</h2>
        <p>${step === 'mobile' ? "Enter your mobile number to place the order. We'll send a one-time password." : `We've sent a 6-digit OTP to <b>+91 ${checkoutState.user?.mobile || ''}</b>`}</p>
        ${step === 'mobile' ? `
          <div class="co-field">
            <label class="co-label">Mobile Number</label>
            <div style="display:flex;gap:8px;">
              <div style="display:flex;align-items:center;padding:0 14px;border:1.5px solid var(--border-2);border-radius:9px;background:#fff;font-size:14px;font-weight:600;color:var(--text-2);">+91</div>
              <input class="co-input" id="coMobile" type="tel" inputmode="numeric" maxlength="10" placeholder="10-digit mobile number" value="${checkoutState.user?.mobile || ''}">
            </div>
            <p class="co-error" id="coMobileErr">Please enter a valid 10-digit mobile number</p>
          </div>
          <div class="co-terms">
            <input type="checkbox" id="coTerms" ${checkoutState.termsAccepted ? 'checked' : ''}>
            <label for="coTerms">I agree to ShopRadar's <b>Terms of Use</b> and <b>Privacy Policy</b>.</label>
          </div>
        ` : `
          <div class="co-otp-info">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z"/><polyline points="22,6 12,13 2,6"/></svg>
            Demo OTP: <b>${checkoutState.otp || '123456'}</b>
          </div>
          <div class="co-field">
            <label class="co-label">Enter OTP</label>
            <input class="co-input" id="coOtp" type="tel" inputmode="numeric" maxlength="6" placeholder="6-digit OTP">
            <p class="co-error" id="coOtpErr">Incorrect OTP. Please try again.</p>
          </div>
          <button class="btn btn-sm" id="coResend" style="margin-bottom:8px;">Resend OTP</button>
        `}
      </div>
      <div>
        <div class="co-help">
          <h4>Why do we need this?</h4>
          <ul>
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Delivery updates on SMS & WhatsApp</li>
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Faster checkout for next time</li>
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Order history across stores</li>
          </ul>
        </div>
      </div>
    </div>
  </div>`;
    }

    function coAddressHTML() {
      const pin = getCurrentPincode();
      return `<div class="co-card">
    <div class="co-card-head">
      <h3>Delivery Address</h3>
      ${checkoutState.addresses.length && !checkoutState.showAddrForm
          ? `<button class="co-edit" id="coShowAddrForm">+ Add new address</button>` : ''}
    </div>
    ${checkoutState.showAddrForm || !checkoutState.addresses.length ? coAddrFormHTML() : ''}
    ${checkoutState.addresses.length && !checkoutState.showAddrForm ? `
      <div class="co-addr-list">
        ${checkoutState.addresses.map((a, i) => `
          <div class="co-addr-item ${checkoutState.selectedAddrId === a.id ? 'selected' : ''}" data-addr-id="${a.id}">
            <div class="co-addr-head">
              <span class="co-addr-name">${esc(a.name)}</span>
              <span class="co-addr-tag ${a.type.toLowerCase()}">${esc(a.type)}</span>
              ${i === 0 ? '<span class="co-addr-tag" style="background:var(--amber-soft);color:var(--amber);">Default</span>' : ''}
            </div>
            <div class="co-addr-line">${esc(a.line1)}${a.line2 ? ', ' + esc(a.line2) : ''}<br>${esc(a.city)}, ${esc(a.state)} — <b>${esc(a.pincode)}</b></div>
            <div class="co-addr-phone">📱 ${esc(a.mobile)}</div>
            <div class="co-addr-actions">
              <button data-addr-edit="${a.id}">Edit</button>
              <button class="remove" data-addr-remove="${a.id}">Remove</button>
            </div>
          </div>
        `).join('')}
      </div>
    ` : ''}
  </div>`;
    }

    function coAddrFormHTML() {
      const editing = checkoutState.editingAddrId
        ? checkoutState.addresses.find(a => a.id === checkoutState.editingAddrId) : null;
      const a = editing || {};
      const pin = getCurrentPincode();
      return `<div class="co-addr-form">
    <h4>${editing ? 'Edit address' : 'Add a new address'}</h4>
    <div class="co-field-row">
      <div class="co-field">
        <label class="co-label">Full name</label>
        <input class="co-input" id="addrName" placeholder="Enter full name" value="${esc(a.name || '')}">
        <p class="co-error" id="addrNameErr">Please enter your name</p>
      </div>
      <div class="co-field">
        <label class="co-label">Mobile number</label>
        <input class="co-input" id="addrMobile" type="tel" inputmode="numeric" maxlength="10" placeholder="10-digit mobile number" value="${esc(a.mobile || (checkoutState.user?.mobile || ''))}">
        <p class="co-error" id="addrMobileErr">Enter a valid 10-digit number</p>
      </div>
    </div>
    <div class="co-field-row two-one">
      <div class="co-field">
        <label class="co-label">Pincode</label>
        <input class="co-input" id="addrPincode" type="tel" inputmode="numeric" maxlength="6" placeholder="6-digit pincode" value="${esc(a.pincode || pin || '')}">
        <p class="co-error" id="addrPincodeErr">Enter a valid 6-digit pincode</p>
      </div>
      <div class="co-field">
        <label class="co-label">Locality / Area</label>
        <input class="co-input" id="addrLine2" placeholder="Locality" value="${esc(a.line2 || '')}">
      </div>
    </div>
    <div class="co-field">
      <label class="co-label">Address (House No, Building, Street, Area)</label>
      <input class="co-input" id="addrLine1" placeholder="Enter full address" value="${esc(a.line1 || '')}">
      <p class="co-error" id="addrLine1Err">Please enter the full address</p>
    </div>
    <div class="co-field-row">
      <div class="co-field">
        <label class="co-label">City / District</label>
        <input class="co-input" id="addrCity" placeholder="City" value="${esc(a.city || '')}">
        <p class="co-error" id="addrCityErr">Enter city</p>
      </div>
      <div class="co-field">
        <label class="co-label">State</label>
        <input class="co-input" id="addrState" placeholder="State" value="${esc(a.state || '')}">
        <p class="co-error" id="addrStateErr">Enter state</p>
      </div>
    </div>
    <div class="co-field">
      <label class="co-label">Address type</label>
      <div class="co-addr-type-row">
        <div class="co-addr-type ${checkoutState.addrType === 'Home' ? 'selected' : ''}" data-addr-type="Home">🏠 Home</div>
        <div class="co-addr-type ${checkoutState.addrType === 'Work' ? 'selected' : ''}" data-addr-type="Work">💼 Work</div>
        <div class="co-addr-type ${checkoutState.addrType === 'Other' ? 'selected' : ''}" data-addr-type="Other">📍 Other</div>
      </div>
    </div>
    <div style="display:flex;gap:10px;">
      <button class="btn btn-primary" id="addrSave" style="flex:1;">${editing ? 'Update Address' : 'Save & Deliver Here'}</button>
      ${checkoutState.addresses.length ? `<button class="btn" id="addrCancel">Cancel</button>` : ''}
    </div>
  </div>`;
    }

    function coSummaryHTML() {
      const pin = getCurrentPincode();
      const addr = checkoutState.addresses.find(a => a.id === checkoutState.selectedAddrId) || checkoutState.addresses[0];
      const t = cartTotals();
      const groups = {};
      state.cart.forEach((it, idx) => {
        if (!groups[it.platform]) groups[it.platform] = [];
        groups[it.platform].push({ ...it, _idx: idx });
      });
      const maxDays = Math.max(...state.cart.map(it => {
        const l = getListing(it.pid, it.platform);
        return deliveryDaysFor(it.platform, l.days, addr ? addr.pincode : pin);
      }));
      const arrival = new Date(Date.now() + maxDays * 864e5);
      const arrivalStr = arrival.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });

      return `<div class="co-sum-grid">
    <div>
      <div class="co-card" style="margin-bottom:16px;">
        <div class="co-card-head">
          <h3>Delivery Address</h3>
          <button class="co-edit" data-co-goto="2">Change</button>
        </div>
        ${addr ? `
          <div class="co-addr-head" style="margin-bottom:6px;">
            <span class="co-addr-name">${esc(addr.name)}</span>
            <span class="co-addr-tag ${addr.type.toLowerCase()}">${esc(addr.type)}</span>
          </div>
          <div class="co-addr-line">${esc(addr.line1)}${addr.line2 ? ', ' + esc(addr.line2) : ''}<br>${esc(addr.city)}, ${esc(addr.state)} — <b>${esc(addr.pincode)}</b></div>
          <div class="co-addr-phone">📱 ${esc(addr.mobile)}</div>
        ` : '<div style="color:var(--red);">No address selected</div>'}
      </div>

      <div class="co-deliv-est">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
        <div>
          <div class="co-de-title">Delivery by ${arrivalStr}</div>
          <div class="co-de-sub">Estimated arrival within ${maxDays} day${maxDays > 1 ? 's' : ''} · Free above ₹999</div>
        </div>
      </div>

      <div class="co-sum-items">
        ${Object.entries(groups).map(([store, items]) => `
          <div style="padding:12px 18px 8px;background:var(--surface-2);border-bottom:1px solid var(--border);display:flex;align-items:center;gap:9px;font-size:12px;color:var(--text-2);font-weight:600;">
            ${storeLogo(store)} ${store} · ${items.length} item${items.length > 1 ? 's' : ''}
          </div>
          ${items.map(it => {
        const p = getProduct(it.pid);
        const l = getListing(it.pid, it.platform);
        const unit = base(l);
        return `<div class="co-sum-item">
              <div class="co-sum-thumb"><img src="${p.image}" alt="" onerror="this.style.visibility='hidden'"></div>
              <div class="co-sum-main">
                <div class="co-sum-name">${esc(p.name)}</div>
                <div class="co-sum-meta">Qty: ${it.qty} · ${fmt(unit)} each${l.extraOff ? ` · offer −${fmt(l.extraOff)}` : ''}</div>
              </div>
              <div class="co-sum-price">${fmt(unit * it.qty)}</div>
            </div>`;
      }).join('')}
        `).join('')}
      </div>
    </div>

    <div class="co-price-box">
      <h3>Price Details</h3>
      <div class="co-price-row"><span>Price (${state.cart.reduce((s, it) => s + it.qty, 0)} items)</span><span>${fmt(t.mrpTotal)}</span></div>
      <div class="co-price-row green"><span>Discount on MRP</span><span>− ${fmt(t.storeDiscount)}</span></div>
      ${t.couponDiscount > 0 ? `<div class="co-price-row green"><span>Coupon (${state.coupon})</span><span>− ${fmt(t.couponDiscount)}</span></div>` : ''}
      <div class="co-price-row"><span>Delivery Charges</span><span>${t.delivery === 0 ? 'FREE' : fmt(t.delivery)}</span></div>
      <div class="co-price-row"><span>GST (18%)</span><span>${fmt(t.tax)}</span></div>
      <div class="co-price-row total"><span>Total Amount</span><span>${fmt(t.total)}</span></div>
      ${t.savings > 0 ? `<div class="co-savings-badge">🎉 You will save ${fmt(t.savings)} on this order</div>` : ''}
    </div>
  </div>`;
    }

    const PAY_ICONS = {
      cod: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/></svg>',
      upi: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3v18"/><path d="M12 3 5 12l7 9"/><path d="M17 3v18"/><path d="M22 3 15 12l7 9"/></svg>',
      card: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>',
      nb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01"/></svg>',
      emi: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="7" y1="15" x2="11" y2="15"/></svg>'
    };

    function coPaymentHTML() {
      const t = cartTotals();
      const pin = getCurrentPincode();
      const addr = checkoutState.addresses.find(a => a.id === checkoutState.selectedAddrId) || checkoutState.addresses[0];
      const codOK = state.cart.every(it => codAvailable(it.platform, addr?.pincode || pin));
      const m = checkoutState.paymentMethod;
      return `<div class="co-pay-methods">
    <div>
      <div class="co-pay-list">
        <div class="co-pay-option ${m === 'upi' ? 'selected' : ''}" data-pay="upi">
          <span class="co-pay-radio"></span>
          <span class="co-pay-icon">${PAY_ICONS.upi}</span>
          <div class="co-pay-body">
            <div class="co-pay-title">UPI <span class="co-pay-tag green">Instant</span></div>
            <div class="co-pay-sub">Google Pay, PhonePe, Paytm, BHIM & more</div>
          </div>
        </div>
        ${m === 'upi' ? `
          <div class="co-pay-fields">
            <label class="co-label">Choose app</label>
            <div class="co-upi-apps">
              ${['Google Pay', 'PhonePe', 'Paytm', 'BHIM'].map(app => `
                <div class="co-upi-app ${checkoutState.upiApp === app ? 'selected' : ''}" data-upi="${app}">
                  <span class="co-upi-logo">${app.charAt(0)}</span>${app}
                </div>
              `).join('')}
            </div>
            <div class="co-field" style="margin-top:12px;">
              <label class="co-label">Or enter UPI ID</label>
              <input class="co-input" id="upiId" placeholder="yourname@upi" value="${checkoutState.upiId || ''}">
            </div>
          </div>
        ` : ''}
        <div class="co-pay-option ${m === 'card' ? 'selected' : ''}" data-pay="card">
          <span class="co-pay-radio"></span>
          <span class="co-pay-icon">${PAY_ICONS.card}</span>
          <div class="co-pay-body">
            <div class="co-pay-title">Credit / Debit Card</div>
            <div class="co-pay-sub">Visa, Mastercard, RuPay & more</div>
          </div>
        </div>
        ${m === 'card' ? `
          <div class="co-pay-fields">
            <div class="co-field">
              <label class="co-label">Card number</label>
              <input class="co-input" id="cardNum" inputmode="numeric" maxlength="19" placeholder="1234 5678 9012 3456" value="${checkoutState.cardNum || ''}">
              <p class="co-error" id="cardNumErr">Enter a valid 16-digit card number</p>
            </div>
            <div class="co-field-row">
              <div class="co-field">
                <label class="co-label">Expiry (MM/YY)</label>
                <input class="co-input" id="cardExp" maxlength="5" placeholder="MM/YY" value="${checkoutState.cardExp || ''}">
                <p class="co-error" id="cardExpErr">Invalid expiry</p>
              </div>
              <div class="co-field">
                <label class="co-label">CVV</label>
                <input class="co-input" id="cardCvv" type="password" inputmode="numeric" maxlength="4" placeholder="•••">
                <p class="co-error" id="cardCvvErr">Invalid CVV</p>
              </div>
            </div>
            <div class="co-field" style="margin-bottom:0;">
              <label class="co-label">Name on card</label>
              <input class="co-input" id="cardName" placeholder="As printed on card" value="${checkoutState.cardName || ''}">
              <p class="co-error" id="cardNameErr">Enter name on card</p>
            </div>
          </div>
        ` : ''}
        <div class="co-pay-option ${m === 'nb' ? 'selected' : ''}" data-pay="nb">
          <span class="co-pay-radio"></span>
          <span class="co-pay-icon">${PAY_ICONS.nb}</span>
          <div class="co-pay-body">
            <div class="co-pay-title">Net Banking</div>
            <div class="co-pay-sub">All major banks supported</div>
          </div>
        </div>
        ${m === 'nb' ? `
          <div class="co-pay-fields">
            <label class="co-label">Select bank</label>
            <select class="co-input" id="nbBank">
              <option value="">— Choose your bank —</option>
              <option ${checkoutState.nbBank === 'HDFC Bank' ? 'selected' : ''}>HDFC Bank</option>
              <option ${checkoutState.nbBank === 'ICICI Bank' ? 'selected' : ''}>ICICI Bank</option>
              <option ${checkoutState.nbBank === 'State Bank of India' ? 'selected' : ''}>State Bank of India</option>
              <option ${checkoutState.nbBank === 'Axis Bank' ? 'selected' : ''}>Axis Bank</option>
              <option ${checkoutState.nbBank === 'Kotak Mahindra' ? 'selected' : ''}>Kotak Mahindra</option>
            </select>
          </div>
        ` : ''}
        <div class="co-pay-option ${m === 'emi' ? 'selected' : ''}" data-pay="emi">
          <span class="co-pay-radio"></span>
          <span class="co-pay-icon">${PAY_ICONS.emi}</span>
          <div class="co-pay-body">
            <div class="co-pay-title">EMI <span class="co-pay-tag">No-cost EMI available</span></div>
            <div class="co-pay-sub">From ₹${Math.round(t.total / 12).toLocaleString('en-IN')}/month × 12</div>
          </div>
        </div>
        ${m === 'emi' ? `
          <div class="co-pay-fields">
            <label class="co-label">Tenure</label>
            <select class="co-input" id="emiTenure">
              <option value="3">3 months — ₹${Math.round(t.total / 3).toLocaleString('en-IN')}/mo</option>
              <option value="6" selected>6 months — ₹${Math.round(t.total / 6).toLocaleString('en-IN')}/mo</option>
              <option value="9">9 months — ₹${Math.round(t.total / 9).toLocaleString('en-IN')}/mo</option>
              <option value="12">12 months — ₹${Math.round(t.total / 12).toLocaleString('en-IN')}/mo</option>
            </select>
          </div>
        ` : ''}
        <div class="co-pay-option ${m === 'cod' ? 'selected' : ''} ${codOK ? '' : 'disabled'}" data-pay="${codOK ? 'cod' : ''}" style="${codOK ? '' : 'opacity:0.55;cursor:not-allowed;'}">
          <span class="co-pay-radio"></span>
          <span class="co-pay-icon">${PAY_ICONS.cod}</span>
          <div class="co-pay-body">
            <div class="co-pay-title">Cash on Delivery</div>
            <div class="co-pay-sub">${codOK ? 'Pay when your order arrives' : '⚠ Not available for this address'}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="co-price-box">
      <h3>Price Details</h3>
      <div class="co-price-row"><span>Price (${state.cart.reduce((s, it) => s + it.qty, 0)} items)</span><span>${fmt(t.mrpTotal)}</span></div>
      <div class="co-price-row green"><span>Discount on MRP</span><span>− ${fmt(t.storeDiscount)}</span></div>
      ${t.couponDiscount > 0 ? `<div class="co-price-row green"><span>Coupon (${state.coupon})</span><span>− ${fmt(t.couponDiscount)}</span></div>` : ''}
      <div class="co-price-row"><span>Delivery Charges</span><span>${t.delivery === 0 ? 'FREE' : fmt(t.delivery)}</span></div>
      <div class="co-price-row"><span>GST (18%)</span><span>${fmt(t.tax)}</span></div>
      <div class="co-price-row total"><span>Total Amount</span><span>${fmt(t.total)}</span></div>
      ${t.savings > 0 ? `<div class="co-savings-badge">🎉 You save ${fmt(t.savings)}</div>` : ''}
      <div style="margin-top:14px;padding-top:14px;border-top:1px solid var(--border);font-size:12px;color:var(--text-3);line-height:1.5;">
        🔒 All payments are 100% secure. This is a demo — no real transaction occurs.
      </div>
    </div>
  </div>`;
    }

    function coSuccessHTML() {
      const o = checkoutState.placedOrder; if (!o) return '';
      const arrivalStr = o.arrival.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });
      return `<div class="co-success">
    <div class="co-success-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    </div>
    <h2>Order placed successfully!</h2>
    <p>Thank you for shopping with ShopRadar. Your order is confirmed.</p>
    <div class="co-success-order">
      <div class="co-row"><span>Order ID</span><b style="font-family:monospace;">${o.id}</b></div>
      <div class="co-row"><span>Placed on</span><b>${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</b></div>
      <div class="co-row"><span>Payment method</span><b>${o.paymentLabel}</b></div>
      <div class="co-row"><span>Delivering to</span><b>${esc(o.addr.name)} · ${o.addr.pincode}</b></div>
      <div class="co-row"><span>Estimated arrival</span><b style="color:var(--green);">${arrivalStr}</b></div>
      <div class="co-row"><span>Total paid</span><b style="font-family:var(--serif);font-size:16px;">${fmt(o.total)}</b></div>
    </div>
    <div class="co-timeline">
      <h4>Order journey</h4>
      <div class="co-track">
        <div class="co-track-item done"><div class="co-track-title">Order Confirmed</div><div class="co-track-sub">Your order has been placed successfully</div></div>
        <div class="co-track-item current"><div class="co-track-title">Processing</div><div class="co-track-sub">Seller will pack your item in 1-2 hours</div></div>
        <div class="co-track-item"><div class="co-track-title">Shipped</div><div class="co-track-sub">Handed over to courier partner</div></div>
        <div class="co-track-item"><div class="co-track-title">Out for delivery</div><div class="co-track-sub">Your order is on its way</div></div>
        <div class="co-track-item"><div class="co-track-title">Delivered</div><div class="co-track-sub">Expected by ${arrivalStr}</div></div>
      </div>
    </div>
    <div class="co-shipment-list">
      <div style="font-size:11.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--text-3);padding:10px 0 4px;">Split across ${o.shipments.length} shipment${o.shipments.length > 1 ? 's' : ''}</div>
      ${o.shipments.map(s => `
        <div class="co-shipment-row">
          ${storeLogo(s.store)}
          <div class="co-shipment-body"><b>${s.store}</b><small>${s.count} item${s.count > 1 ? 's' : ''} · arrives in ${s.days} day${s.days > 1 ? 's' : ''}</small></div>
          <b style="font-family:var(--serif);">${fmt(s.total)}</b>
        </div>
      `).join('')}
    </div>
    <p style="font-size:12.5px;color:var(--text-3);margin-top:4px;">A confirmation SMS has been sent to <b>+91 ${o.userMobile}</b></p>
  </div>`;
    }

    function wireCoContent() {
      if (checkoutState.step === 1) {
        const mobileInput = document.getElementById('coMobile');
        if (mobileInput) {
          mobileInput.focus();
          mobileInput.addEventListener('input', () => { mobileInput.value = mobileInput.value.replace(/\D/g, '').slice(0, 10); });
          mobileInput.addEventListener('keydown', e => { if (e.key === 'Enter') document.getElementById('coLoginBtn')?.click(); });
        }
        const otpInput = document.getElementById('coOtp');
        if (otpInput) {
          otpInput.focus();
          otpInput.addEventListener('input', () => { otpInput.value = otpInput.value.replace(/\D/g, '').slice(0, 6); });
          otpInput.addEventListener('keydown', e => { if (e.key === 'Enter') document.getElementById('coLoginBtn')?.click(); });
        }
        const resend = document.getElementById('coResend');
        if (resend) resend.addEventListener('click', () => {
          checkoutState.otp = String(Math.floor(100000 + Math.random() * 900000));
          renderCoContent();
          showToast(`New OTP sent · Demo: ${checkoutState.otp}`);
        });
      }

      document.querySelectorAll('[data-addr-type]').forEach(btn => {
        btn.addEventListener('click', () => {
          checkoutState.addrType = btn.dataset.addrType;
          document.querySelectorAll('[data-addr-type]').forEach(b => b.classList.toggle('selected', b === btn));
        });
      });

      const pinInput = document.getElementById('addrPincode');
      if (pinInput) {
        pinInput.addEventListener('input', () => {
          pinInput.value = pinInput.value.replace(/\D/g, '').slice(0, 6);
          if (pinInput.value.length === 6) {
            const loc = PINCODE_DB[pinInput.value];
            if (loc) {
              const [city, state] = loc.split(', ').map(s => s.trim());
              const cityEl = document.getElementById('addrCity');
              const stateEl = document.getElementById('addrState');
              if (cityEl && !cityEl.value) cityEl.value = city;
              if (stateEl && !stateEl.value) stateEl.value = state;
            }
          }
        });
      }

      const showBtn = document.getElementById('coShowAddrForm');
      if (showBtn) showBtn.addEventListener('click', () => {
        checkoutState.showAddrForm = true;
        checkoutState.editingAddrId = null;
        checkoutState.addrType = 'Home';
        renderCoContent(); renderCoFooter();
      });

      const cancelBtn = document.getElementById('addrCancel');
      if (cancelBtn) cancelBtn.addEventListener('click', () => {
        checkoutState.showAddrForm = false;
        checkoutState.editingAddrId = null;
        renderCoContent(); renderCoFooter();
      });

      const saveBtn = document.getElementById('addrSave');
      if (saveBtn) saveBtn.addEventListener('click', saveAddress);

      document.querySelectorAll('[data-addr-id]').forEach(el => {
        el.addEventListener('click', e => {
          if (e.target.closest('[data-addr-edit]') || e.target.closest('[data-addr-remove]')) return;
          checkoutState.selectedAddrId = el.dataset.addrId;
          CO_LS.save(); renderCoContent(); renderCoFooter();
        });
      });

      document.querySelectorAll('[data-addr-edit]').forEach(b => {
        b.addEventListener('click', e => {
          e.stopPropagation();
          checkoutState.editingAddrId = b.dataset.addrEdit;
          checkoutState.showAddrForm = true;
          const a = checkoutState.addresses.find(x => x.id === b.dataset.addrEdit);
          checkoutState.addrType = a ? a.type : 'Home';
          renderCoContent(); renderCoFooter();
        });
      });

      document.querySelectorAll('[data-addr-remove]').forEach(b => {
        b.addEventListener('click', e => {
          e.stopPropagation();
          if (!confirm('Remove this address?')) return;
          checkoutState.addresses = checkoutState.addresses.filter(a => a.id !== b.dataset.addrRemove);
          if (checkoutState.selectedAddrId === b.dataset.addrRemove)
            checkoutState.selectedAddrId = checkoutState.addresses[0]?.id || null;
          CO_LS.save(); renderCoContent(); renderCoFooter();
        });
      });

      document.querySelectorAll('[data-co-goto]').forEach(b => {
        b.addEventListener('click', () => {
          checkoutState.step = parseInt(b.dataset.coGoto, 10);
          renderCheckout();
        });
      });

      document.querySelectorAll('[data-pay]').forEach(el => {
        el.addEventListener('click', () => {
          const v = el.dataset.pay;
          if (!v) return;
          checkoutState.paymentMethod = v;
          renderCoContent(); renderCoFooter();
        });
      });
      document.querySelectorAll('[data-upi]').forEach(el => {
        el.addEventListener('click', () => {
          checkoutState.upiApp = el.dataset.upi;
          document.querySelectorAll('[data-upi]').forEach(x => x.classList.toggle('selected', x === el));
        });
      });
      ['upiId', 'cardNum', 'cardExp', 'cardCvv', 'cardName', 'nbBank', 'emiTenure'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', () => { checkoutState[id] = el.value; });
        if (el) el.addEventListener('change', () => { checkoutState[id] = el.value; });
      });
      const cardNum = document.getElementById('cardNum');
      if (cardNum) cardNum.addEventListener('input', () => {
        let v = cardNum.value.replace(/\D/g, '').slice(0, 16);
        cardNum.value = v.replace(/(.{4})/g, '$1 ').trim();
        checkoutState.cardNum = cardNum.value;
      });
      const cardExp = document.getElementById('cardExp');
      if (cardExp) cardExp.addEventListener('input', () => {
        let v = cardExp.value.replace(/\D/g, '').slice(0, 4);
        if (v.length >= 3) v = v.slice(0, 2) + '/' + v.slice(2);
        cardExp.value = v;
        checkoutState.cardExp = v;
      });
    }

    function saveAddress() {
      const name = document.getElementById('addrName').value.trim();
      const mobile = document.getElementById('addrMobile').value.replace(/\D/g, '');
      const pincode = document.getElementById('addrPincode').value.replace(/\D/g, '');
      const line1 = document.getElementById('addrLine1').value.trim();
      const line2 = document.getElementById('addrLine2').value.trim();
      const city = document.getElementById('addrCity').value.trim();
      const state = document.getElementById('addrState').value.trim();

      const errs = [];
      if (name.length < 2) errs.push('addrNameErr');
      if (mobile.length !== 10) errs.push('addrMobileErr');
      if (pincode.length !== 6) errs.push('addrPincodeErr');
      if (line1.length < 5) errs.push('addrLine1Err');
      if (!city) errs.push('addrCityErr');
      if (!state) errs.push('addrStateErr');

      document.querySelectorAll('.co-error').forEach(e => e.classList.remove('show'));
      document.querySelectorAll('.co-input').forEach(e => e.classList.remove('err'));

      if (errs.length) {
        errs.forEach(id => { const el = document.getElementById(id); if (el) el.classList.add('show'); });
        showToast('Please fix the highlighted fields');
        return;
      }

      const addr = { id: 'a' + Date.now(), name, mobile, pincode, line1, line2, city, state, type: checkoutState.addrType };
      if (checkoutState.editingAddrId) {
        const i = checkoutState.addresses.findIndex(a => a.id === checkoutState.editingAddrId);
        if (i >= 0) checkoutState.addresses[i] = { ...addr, id: checkoutState.editingAddrId };
        checkoutState.selectedAddrId = checkoutState.editingAddrId;
      } else {
        checkoutState.addresses.unshift(addr);
        checkoutState.selectedAddrId = addr.id;
      }

      localStorage.setItem('ss_pincode', pincode);
      localStorage.removeItem('ss_autoLoc');
      document.getElementById('pincodeInput').value = pincode;
      renderAutoLocBadge();
      updatePincodeUI(pincode);

      checkoutState.showAddrForm = false;
      checkoutState.editingAddrId = null;
      CO_LS.save();
      showToast('Address saved');
      renderCoContent(); renderCoFooter();
      renderProducts();
    }

    function wireCoFooter() {
      const loginBtn = document.getElementById('coLoginBtn');
      if (loginBtn) {
        const step = checkoutState.loginStep || 'mobile';
        loginBtn.textContent = step === 'mobile' ? 'Request OTP' : 'Verify & Continue';
        loginBtn.addEventListener('click', () => {
          if (step === 'mobile') {
            const mobile = document.getElementById('coMobile').value.replace(/\D/g, '');
            const terms = document.getElementById('coTerms').checked;
            document.getElementById('coMobileErr').classList.remove('show');
            document.getElementById('coMobile').classList.remove('err');
            if (mobile.length !== 10) {
              document.getElementById('coMobileErr').classList.add('show');
              document.getElementById('coMobile').classList.add('err');
              return;
            }
            if (!terms) { showToast('Please accept the terms to continue'); return; }
            checkoutState.user = { mobile };
            checkoutState.termsAccepted = true;
            checkoutState.loginStep = 'otp';
            checkoutState.otp = String(Math.floor(100000 + Math.random() * 900000));
            showToast(`OTP sent to +91 ${mobile} · Demo: ${checkoutState.otp}`);
            renderCoContent(); renderCoFooter();
          } else {
            const otp = document.getElementById('coOtp').value.replace(/\D/g, '');
            document.getElementById('coOtpErr').classList.remove('show');
            document.getElementById('coOtp').classList.remove('err');
            if (otp !== checkoutState.otp) {
              document.getElementById('coOtpErr').classList.add('show');
              document.getElementById('coOtp').classList.add('err');
              return;
            }
            // Sync to global auth
            if (!authUser || authUser.guest) {
              authUser = { mobile: checkoutState.user.mobile, name: 'User' };
              saveAuth(); updateUserUI();
            }
            checkoutState.loginStep = 'mobile';
            CO_LS.save();
            showToast('Login successful');
            checkoutState.step = 2;
            renderCheckout();
          }
        });
      }

      const backBtn = document.getElementById('coBack');
      if (backBtn) backBtn.addEventListener('click', () => {
        if (checkoutState.step === 5) return;
        checkoutState.step = Math.max(1, checkoutState.step - 1);
        if (checkoutState.step === 1 && checkoutState.user) {
          closeCheckout(); return;
        }
        renderCheckout();
      });

      const deliverBtn = document.getElementById('coDeliverHere');
      if (deliverBtn) deliverBtn.addEventListener('click', () => {
        if (!checkoutState.selectedAddrId) { showToast('Please add and select a delivery address'); return; }
        checkoutState.step = 3;
        renderCheckout();
      });

      const continueBtn = document.getElementById('coContinue');
      if (continueBtn) continueBtn.addEventListener('click', () => {
        checkoutState.step = 4;
        if (!checkoutState.paymentMethod) checkoutState.paymentMethod = 'upi';
        renderCheckout();
      });

      const payBtn = document.getElementById('coPay');
      if (payBtn) payBtn.addEventListener('click', () => {
        if (!validatePayment()) return;
        payBtn.disabled = true;
        payBtn.textContent = 'Processing…';
        setTimeout(() => { placeOrder(); }, 900);
      });

      const doneBtn = document.getElementById('coDone');
      if (doneBtn) doneBtn.addEventListener('click', () => closeCheckout());
    }

    function validatePayment() {
      const m = checkoutState.paymentMethod;
      document.querySelectorAll('.co-error').forEach(e => e.classList.remove('show'));
      document.querySelectorAll('.co-input').forEach(e => e.classList.remove('err'));
      if (!m) { showToast('Please select a payment method'); return false; }
      if (m === 'upi') {
        const id = (document.getElementById('upiId')?.value || '').trim();
        const app = checkoutState.upiApp;
        if (!app && !id) { showToast('Choose a UPI app or enter UPI ID'); return false; }
        if (id && !/^[\w.\-]{2,}@[a-zA-Z]{2,}$/.test(id)) {
          document.getElementById('upiId').classList.add('err');
          showToast('Enter a valid UPI ID (e.g. name@upi)');
          return false;
        }
        checkoutState.paymentLabel = app ? `UPI · ${app}` : `UPI · ${id}`;
      }
      if (m === 'card') {
        const num = (document.getElementById('cardNum')?.value || '').replace(/\s/g, '');
        const exp = (document.getElementById('cardExp')?.value || '').trim();
        const cvv = (document.getElementById('cardCvv')?.value || '').trim();
        const nm = (document.getElementById('cardName')?.value || '').trim();
        let ok = true;
        if (num.length !== 16) { document.getElementById('cardNumErr').classList.add('show'); ok = false; }
        if (!/^\d{2}\/\d{2}$/.test(exp)) { document.getElementById('cardExpErr').classList.add('show'); ok = false; }
        if (cvv.length < 3) { document.getElementById('cardCvvErr').classList.add('show'); ok = false; }
        if (nm.length < 2) { document.getElementById('cardNameErr').classList.add('show'); ok = false; }
        if (!ok) { showToast('Please fix the card details'); return false; }
        checkoutState.paymentLabel = `Card · •••• ${num.slice(-4)}`;
      }
      if (m === 'nb') {
        const bank = document.getElementById('nbBank')?.value;
        if (!bank) { showToast('Please select your bank'); return false; }
        checkoutState.paymentLabel = `Net Banking · ${bank}`;
      }
      if (m === 'emi') {
        const ten = document.getElementById('emiTenure')?.value || '6';
        const t = cartTotals();
        checkoutState.paymentLabel = `EMI · ${ten} months`;
      }
      if (m === 'cod') checkoutState.paymentLabel = 'Cash on Delivery';
      return true;
    }

    function placeOrder() {
      const t = cartTotals();
      const addr = checkoutState.addresses.find(a => a.id === checkoutState.selectedAddrId) || checkoutState.addresses[0];
      if (!addr) { showToast('No address'); return; }

      const orderId = 'SR' + Date.now().toString().slice(-8) + Math.floor(Math.random() * 90 + 10);
      const maxDays = Math.max(...state.cart.map(it => {
        const l = getListing(it.pid, it.platform);
        return deliveryDaysFor(it.platform, l.days, addr.pincode);
      }));
      const arrival = new Date(Date.now() + maxDays * 864e5);

      const byStore = {};
      state.cart.forEach(it => {
        const l = getListing(it.pid, it.platform); if (!l) return;
        if (!byStore[it.platform]) byStore[it.platform] = { store: it.platform, count: 0, total: 0, days: l.days };
        byStore[it.platform].count += it.qty;
        byStore[it.platform].total += base(l) * it.qty;
        byStore[it.platform].days = Math.min(byStore[it.platform].days, l.days);
      });
      const shipments = Object.values(byStore);

      checkoutState.placedOrder = {
        id: orderId, total: t.total, arrival, addr,
        userMobile: checkoutState.user?.mobile || addr.mobile,
        paymentLabel: checkoutState.paymentLabel || 'Prepaid',
        shipments
      };

      checkoutState.step = 5;
      renderCheckout();

      setTimeout(() => {
        state.cart = [];
        state.coupon = null;
        LS.save();
        renderCart();
      }, 200);
    }

    /* ============================================================
       21. GLOBAL DELEGATION
       ============================================================ */
    document.addEventListener('click', e => {
      const t = e.target;
      const addBest = t.closest('[data-addbest]');
      if (addBest) { const p = getProduct(addBest.dataset.addbest); addToCart(p.id, bestListing(p).platform); return; }
      const wish = t.closest('[data-wish]');
      if (wish) { e.stopPropagation(); toggleWish(wish.dataset.wish); return; }
      const cmp = t.closest('[data-cmp]');
      if (cmp) { e.stopPropagation(); toggleCompare(cmp.dataset.cmp); return; }
      const quick = t.closest('[data-quick]');
      if (quick) { openQuickView(quick.dataset.quick); return; }
      const qadd = t.closest('[data-qadd]');
      if (qadd) { addToCart(qadd.dataset.qadd, qadd.dataset.qplat); return; }
      const qwish = t.closest('[data-qwish]');
      if (qwish) { toggleWish(qwish.dataset.qwish); openQuickView(qwish.dataset.qwish); return; }
      const qcmp = t.closest('[data-qcmp]');
      if (qcmp) { toggleCompare(qcmp.dataset.qcmp); openQuickView(qcmp.dataset.qcmp); return; }
      const cadd = t.closest('[data-cadd]');
      if (cadd) { addToCart(cadd.dataset.cadd, cadd.dataset.cplat); return; }
      const cmpRm = t.closest('[data-cmp-rm]');
      if (cmpRm) { toggleCompare(cmpRm.dataset.cmpRm); return; }
      const wadd = t.closest('[data-wadd]');
      if (wadd) { const p = getProduct(wadd.dataset.wadd); addToCart(p.id, bestListing(p).platform); return; }
      const wrm = t.closest('[data-wrm]');
      if (wrm) { toggleWish(wrm.dataset.wrm); return; }
      const setalert = t.closest('[data-setalert]');
      if (setalert) { openAlertModal(setalert.dataset.setalert); return; }
      const act = t.closest('[data-act]');
      if (act) {
        const i = parseInt(act.dataset.i, 10);
        if (act.dataset.act === 'inc') updateQty(i, 1);
        if (act.dataset.act === 'dec') updateQty(i, -1);
        if (act.dataset.act === 'rm') removeFromCart(i);
        return;
      }
    });

    /* ============================================================
       22. HEADER WIRES
       ============================================================ */
    document.getElementById('cartBtn').addEventListener('click', openCart);
    document.getElementById('wishBtn').addEventListener('click', openWish);
    document.querySelector('[data-close-drawer="cart"]').addEventListener('click', closeCart);
    document.querySelector('[data-close-drawer="wish"]').addEventListener('click', closeWish);
    document.getElementById('cmpClear').addEventListener('click', () => { state.compare = []; renderCompareTray(); renderProducts(); });
    document.getElementById('cmpGo').addEventListener('click', openCompareModal);
    document.getElementById('clearRecent').addEventListener('click', () => { state.recent = []; LS.save(); renderRecent(); });
    document.getElementById('coClose').addEventListener('click', () => {
      if (checkoutState.step === 5) { closeCheckout(); return; }
      if (confirm('Leave checkout? Your cart will be saved.')) closeCheckout();
    });

    function scrollToProducts() { document.getElementById('productsTop').scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    function resetAll() {
      state.query = '';
      document.getElementById('searchInput').value = '';
      document.getElementById('searchClear').hidden = true;
      state.categories.clear(); state.brands.clear(); state.platforms.clear();
      state.minRating = 0; state.minDiscount = 0; state.maxDelivery = Infinity; state.maxPrice = 150000;
      document.getElementById('priceRange').value = 150000;
      document.getElementById('priceLabel').textContent = 'Any';
      document.getElementById('sortSelect').value = 'relevance';
      state.sort = 'relevance';
      buildCatNav(); buildFilterUI(); renderProducts();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        if (document.getElementById('checkoutScreen').classList.contains('open')) {
          if (checkoutState.step === 5) closeCheckout();
          return;
        }
        document.querySelectorAll('.modal-wrap.show').forEach(m => m.classList.remove('show'));
        closeCart(); closeWish();
        document.getElementById('filtersPanel').classList.remove('open');
        document.getElementById('overlay').classList.remove('show');
        document.body.style.overflow = '';
      }
    });

    /* ============================================================
       23. STATS + INIT
       ============================================================ */
    function renderStats() {
      document.getElementById('statProducts').textContent = PRODUCTS.length;
      document.getElementById('statStores').textContent = ALL_PLATFORMS.length;
      const offers = PRODUCTS.flatMap(p => p.listings).filter(l => l.extraOff > 0).length;
      document.getElementById('statOffers').textContent = offers;
      const totalSave = PRODUCTS.reduce((s, p) => s + (eff(worstListing(p)) - eff(bestListing(p))), 0);
      document.getElementById('statSaved').textContent = fmt(Math.round(totalSave / PRODUCTS.length));
    }

    (function init() {
      LS.load();
      CO_LS.load();
      loadAuth();
      wireLogin();
      wireUserMenu();
      buildCatNav();
      buildFilterUI();
      wireFilters();
      wireSearch();
      wirePincode();
      renderProducts();
      renderCart();
      renderWish();
      renderCompareTray();
      renderRecent();
      renderStats();
      document.addEventListener('click', e => {
        if (!e.target.closest('.search-wrap')) document.getElementById('suggestBox').hidden = true;
      });

      // Show login if not logged in
      if (!authUser) {
        showLoginScreen();
      } else {
        hideLoginScreen();
        // Auto-location on first visit
        if (!localStorage.getItem('ss_pincode')) {
          setTimeout(() => autoDetectLocation(true), 500);
        }
      }
    })();
