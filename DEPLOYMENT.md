# 🚀 Afghanistan Bazaar - Deployment Guide

Complete step-by-step guide to deploy your marketplace to GitHub Pages.

## 📋 Prerequisites

- GitHub account (free)
- Basic knowledge of Git (optional but helpful)

## 🌟 Method 1: GitHub Pages (Recommended)

### Step 1: Get the Code

**Option A: Fork Repository (Recommended)**
1. Go to the original repository
2. Click the "Fork" button (top right)
3. Choose your account as destination
4. Wait for fork to complete

**Option B: Download and Create New Repository**
1. Download the source code as ZIP
2. Extract to your computer  
3. Create new repository on GitHub
4. Upload all files to the new repository

### Step 2: Enable GitHub Pages

1. **Go to Repository Settings**
   - Navigate to your forked/created repository
   - Click "Settings" tab (top menu)

2. **Find Pages Section**
   - Scroll down to "Pages" in left sidebar
   - Click on "Pages"

3. **Configure Deployment**
   - **Source**: Deploy from a branch
   - **Branch**: Select `main` (or `master`)
   - **Folder**: `/ (root)`
   - Click "Save"

4. **Wait for Deployment**
   - GitHub will show: "Your site is published at..."
   - Initial deployment takes 5-10 minutes
   - Subsequent updates take 1-2 minutes

### Step 3: Access Your Live Site

Your marketplace will be available at:
```
https://YOUR-USERNAME.github.io/REPOSITORY-NAME
```

Example: `https://ahmad123.github.io/afghanistan-bazaar`

## 🔧 Method 2: Custom Domain (Optional)

If you want your own domain name:

1. **Purchase Domain** (from any domain registrar)

2. **Configure DNS**
   - Add CNAME record pointing to: `YOUR-USERNAME.github.io`
   - Or add A records pointing to GitHub Pages IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

3. **Update GitHub Settings**
   - Go to Pages settings
   - Add your custom domain
   - Enable "Enforce HTTPS"

## 📱 Method 3: Local Development

For testing and development:

```bash
# Clone your repository
git clone https://github.com/YOUR-USERNAME/afghanistan-bazaar.git
cd afghanistan-bazaar

# Start local server (choose one):

# Python 3 (most common)
python -m http.server 5000

# Python 2
python -m SimpleHTTPServer 5000

# Node.js (if installed)
npx live-server --port=5000

# PHP (if installed)
php -S localhost:5000
```

Then open: `http://localhost:5000`

## 🎨 Customization After Deployment

### Adding Your Products

1. **Edit Product Data**
   ```bash
   # Edit this file in your repository
   data/products.json
   ```

2. **Product Structure**
   ```json
   {
     "id": 1,
     "title": {
       "fa": "عنوان فارسی",
       "ps": "د پښتو سرلیک", 
       "en": "English Title"
     },
     "description": {
       "fa": "توضیحات فارسی",
       "ps": "د پښتو څرګندونې",
       "en": "English description"
     },
     "price": 100000,
     "categoryId": "electronics",
     "location": {
       "provinceId": "kabul",
       "province": {
         "fa": "کابل",
         "ps": "کابل", 
         "en": "Kabul"
       },
       "city": {
         "fa": "کابل شهر",
         "ps": "د کابل ښار",
         "en": "Kabul City"
       }
     },
     "seller": {
       "name": "نام فروشنده",
       "phone": "+93 700 123 456"
     },
     "icon": "fas fa-mobile-alt",
     "isNew": true,
     "isFeatured": false
   }
   ```

3. **Commit Changes**
   ```bash
   git add data/products.json
   git commit -m "Add new products"
   git push origin main
   ```

### Changing Colors and Theme

Edit `styles.css` and modify CSS variables:

```css
:root {
  /* Neon Colors - Change these for different themes */
  --neon-blue: #00d4ff;      /* Main accent color */
  --neon-purple: #8b5cf6;    /* Secondary accent */
  --neon-green: #00ff88;     /* Success/price color */
  --neon-pink: #ff006e;      /* Warning/special */
  --neon-orange: #ff8500;    /* Featured/hot */
  
  /* Background Colors */
  --bg-primary: #0a0a0a;     /* Main dark background */
  --bg-secondary: #1a1a1a;   /* Cards and sections */
  --bg-tertiary: #2a2a2a;    /* Input fields and borders */
}
```

### Adding Product Images

1. **Upload Images**
   - Add images to `assets/images/` folder
   - Use formats: `.jpg`, `.png`, `.webp`
   - Recommended size: 400x400px

2. **Update Product Data**
   ```json
   {
     "id": 1,
     "image": "assets/images/smartphone.jpg",
     // ... other product data
   }
   ```

3. **Update HTML Template**
   In `script.js`, find the product card creation and update:
   ```javascript
   <div class="product-image">
     ${product.image ? 
       `<img src="${product.image}" alt="${product.title[APP_STATE.currentLanguage]}" />` : 
       `<i class="${product.icon || 'fas fa-box'}"></i>`
     }
   </div>
   ```

## 🔍 Troubleshooting

### Site Not Loading
- Wait 5-10 minutes after enabling Pages
- Check repository name in URL
- Ensure `index.html` is in root directory
- Check GitHub Pages status in repository settings

### Images Not Showing
- Verify image paths are correct
- Use relative paths: `assets/images/photo.jpg`
- Check file names match exactly (case-sensitive)

### Styles Not Loading
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check for typos in `styles.css`
- Verify CSS file path in HTML

### JavaScript Errors
- Check browser console (F12)
- Ensure JSON files are valid
- Verify all file paths are correct

## 📊 Analytics and Monitoring

### Add Google Analytics (Optional)

1. **Get Tracking Code**
   - Create Google Analytics account
   - Get tracking ID (GA-XXXXXXXXX)

2. **Add to HTML**
   Add before `</head>` in `index.html`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA-XXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA-XXXXXXXXX');
   </script>
   ```

## 🚀 Performance Optimization

### Enable GZIP Compression
GitHub Pages automatically enables this.

### Optimize Images
```bash
# Compress images before uploading
# Use tools like TinyPNG, ImageOptim, or online compressors
```

### Cache Headers
GitHub Pages automatically sets appropriate cache headers.

## 🔒 Security Considerations

### HTTPS
- GitHub Pages automatically provides HTTPS
- Always use HTTPS URLs in production

### Content Security
- Don't commit sensitive data (API keys, passwords)
- Use environment variables for sensitive configs

## 📈 SEO Optimization

### Meta Tags
Add to `<head>` section:
```html
<meta name="description" content="Afghanistan's largest online marketplace - بزرگترین بازار آنلاین افغانستان">
<meta name="keywords" content="Afghanistan, marketplace, bazaar, online shopping, افغانستان, بازار">
<meta property="og:title" content="Afghanistan Bazaar">
<meta property="og:description" content="Buy and sell products across Afghanistan">
<meta property="og:image" content="assets/images/logo.png">
```

### Sitemap
Create `sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-username.github.io/afghanistan-bazaar/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

## 🎯 Success Checklist

- [ ] Repository forked/created successfully
- [ ] GitHub Pages enabled and configured
- [ ] Site loads at GitHub Pages URL
- [ ] All languages work (فارسی، پښتو، English)
- [ ] Search functionality works
- [ ] Province filtering works
- [ ] Product details modal opens
- [ ] Mobile view looks good
- [ ] Dark theme displays correctly
- [ ] Neon animations work on buttons

## 🆘 Support

If you encounter issues:

1. **Check GitHub Pages Status**
   - Visit: https://www.githubstatus.com/
   - Check for any outages

2. **Review Configuration**
   - Verify Pages settings
   - Check repository permissions

3. **Community Help**
   - Search existing GitHub issues
   - Create new issue with details
   - Join GitHub Community Forums

## 🎉 Congratulations!

Your Afghanistan Bazaar marketplace is now live and ready for use!

**Next Steps:**
- Add your real products
- Customize colors and branding  
- Share with your community
- Monitor analytics and user feedback

---

**Happy Selling! 🛒**  
*موفق باشید! - بریالی اوسئ!*