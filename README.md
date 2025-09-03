# بازار افغانستان | Afghanistan Bazaar

<div align="center">

![Afghanistan Bazaar](assets/images/logo.png)

**Afghanistan's Premier Online Marketplace**  
*بزرگترین بازار آنلاین افغانستان*

[![Deploy to GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://pages.github.com/)
[![Live Demo](https://img.shields.io/badge/Live-Demo-green?style=for-the-badge&logo=firefox)](https://your-username.github.io/afghanistan-bazaar)

[English](#english) | [فارسی](#فارسی) | [پښتو](#پښتو)

</div>

---

## English

### 🚀 Quick Start

1. **Fork this repository**
2. **Enable GitHub Pages** in repository settings
3. **Your marketplace is live!**

### 📱 Features

- **🌙 Dark Theme**: Modern dark UI with neon accents
- **🌍 Trilingual**: Persian/Dari, Pashto, and English support
- **📍 Geographic Filtering**: Filter by all 34 Afghan provinces
- **🔍 Advanced Search**: Real-time product search and filtering
- **📱 Responsive Design**: Perfect on mobile, tablet, and desktop
- **⚡ Fast & Lightweight**: Pure HTML/CSS/JavaScript - no frameworks needed

### 🛠️ Deployment Guide

#### Method 1: GitHub Pages (Recommended)

1. **Fork the Repository**
   ```bash
   # Go to: https://github.com/your-username/afghanistan-bazaar
   # Click "Fork" button
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Deploy from a branch
   - Branch: `main` / `master`
   - Folder: `/ (root)`
   - Click "Save"

3. **Access Your Site**
   - Your site will be available at: `https://your-username.github.io/afghanistan-bazaar`
   - May take 5-10 minutes for first deployment

#### Method 2: Manual Deployment

1. **Download the Code**
   ```bash
   git clone https://github.com/your-username/afghanistan-bazaar.git
   cd afghanistan-bazaar
   ```

2. **Deploy to Any Static Host**
   - Upload all files to your web hosting service
   - Ensure `index.html` is in the root directory
   - Access via your domain

#### Method 3: Local Development

1. **Clone Repository**
   ```bash
   git clone https://github.com/your-username/afghanistan-bazaar.git
   cd afghanistan-bazaar
   ```

2. **Start Local Server**
   ```bash
   # Python 3
   python -m http.server 5000
   
   # Node.js (if you have live-server)
   npx live-server
   
   # PHP
   php -S localhost:5000
   ```

3. **Open Browser**
   - Navigate to: `http://localhost:5000`

### 📂 Project Structure

```
afghanistan-bazaar/
├── 📄 index.html              # Main homepage
├── 🎨 styles.css              # All styling and themes
├── ⚡ script.js               # Core functionality
├── 📁 assets/
│   ├── 🖼️ images/             # Product and UI images
│   └── 📁 icons.svg           # Custom SVG icons
├── 📁 data/
│   ├── 📦 products.json       # Product catalog
│   ├── 📂 categories.json     # Product categories  
│   └── 🗺️ provinces.json      # Afghanistan provinces
├── 📁 pages/
│   ├── 📄 category.html       # Category browse page
│   └── 📄 product-detail.html # Product detail page
└── 📚 README.md              # Documentation
```

### 🔧 Customization

#### Adding Products
Edit `data/products.json`:
```json
{
  "id": 999,
  "title": {
    "fa": "محصول جدید",
    "ps": "نوی محصول",
    "en": "New Product"
  },
  "description": {
    "fa": "توضیحات محصول",
    "ps": "د محصول څرګندونې", 
    "en": "Product description"
  },
  "price": 50000,
  "categoryId": "electronics",
  "location": {
    "provinceId": "kabul",
    "province": {
      "fa": "کابل",
      "ps": "کابل",
      "en": "Kabul"
    }
  }
}
```

#### Adding Categories
Edit `data/categories.json`:
```json
{
  "id": "new-category",
  "name": {
    "fa": "دسته جدید",
    "ps": "نوی ډول",
    "en": "New Category"
  },
  "icon": "fas fa-icon-name",
  "count": 42
}
```

#### Theme Customization
Edit CSS variables in `styles.css`:
```css
:root {
  --neon-blue: #00d4ff;     /* Primary accent */
  --neon-purple: #8b5cf6;   /* Secondary accent */
  --neon-green: #00ff88;    /* Success/price color */
  --bg-primary: #0a0a0a;    /* Main background */
}
```

### 🌟 Key Features Explained

#### Geographic Filtering
- Automatically detects user location (with permission)
- Filters products by Afghan provinces
- Supports all 34 provinces with coordinates

#### Multi-language Support
- Persian/Dari (فارسی): Primary language
- Pashto (پښتو): Secondary language  
- English: International support
- RTL/LTR text direction support

#### Search & Filters
- Real-time search as you type
- Price range filtering
- Category-based filtering
- Province-based location filtering
- Multiple sorting options

### 🚦 Browser Support

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile browsers

### 📈 Performance

- 🚀 **Load Time**: < 2 seconds
- 📦 **Bundle Size**: < 500KB total
- 🔋 **Mobile Optimized**: 95+ Lighthouse score
- 📱 **PWA Ready**: Offline capable

### 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit pull request

---

## فارسی

### 🚀 شروع سریع

این یک بازار آنلاین کامل برای افغانستان است که شبیه علی‌بابا و دیوار کار می‌کند.

#### مراحل راه‌اندازی:

1. **کپی کردن پروژه**
   - به GitHub بروید و پروژه را Fork کنید
   - یا فایل‌ها را دانلود کنید

2. **فعال‌سازی GitHub Pages**
   - در تنظیمات repository بروید
   - بخش Pages را پیدا کنید  
   - Branch را روی `main` قرار دهید
   - Save کنید

3. **آماده است!**
   - سایت شما در آدرس `username.github.io/project-name` در دسترس است

#### ویژگی‌های کلیدی:

- 🌙 **تم تاریک**: طراحی مدرن با رنگ‌های نئون
- 🔍 **جستجوی پیشرفته**: جستجو در عنوان و توضیحات  
- 📍 **فیلتر جغرافیایی**: بر اساس ۳۴ ولایت افغانستان
- 📱 **طراحی واکنش‌گرا**: روی موبایل و تبلت کار می‌کند
- ⚡ **سرعت بالا**: بدون نیاز به سرور یا دیتابیس

---

## پښتو 

### 🚀 ګړندۍ پیل

دا د افغانستان لپاره یو بشپړ آنلاین بازار دی چې د علی‌بابا او دیوار په څیر کار کوي.

#### د پیل کولو مرحلې:

1. **د پروژې کاپي کول**
   - GitHub ته لاړ شئ او پروژه Fork کړئ
   - یا فایلونه ډاونلوډ کړئ

2. **د GitHub Pages فعالول**
   - د repository تنظیماتو ته لاړ شئ
   - د Pages برخه ومومئ
   - Branch په `main` کې کېږدئ
   - Save کړئ

3. **چمتو دی!**
   - ستاسو سایټ د `username.github.io/project-name` په آدرس کې شتون لري

### 📞 ملاتړ او مرسته

که ستاسو ښکیلتیاوې یا پوښتنې لرئ، مهرباني وکړئ Issue جوړ کړئ یا موږ ته اړیکه ونیسئ.

---

### 📄 License

MIT License - وړیا استعمال، بدلول او ویشل

### 🙏 Thanks

د افغانستان د ټولو ولایتونو او اوسیدونکو ته ډیر مننه چې دا پروژه یې ممکنه کړه.

---

<div align="center">

**Made with ❤️ for Afghanistan**  
*د افغانستان لپاره د مینې سره جوړ شوی*

</div># bazar
