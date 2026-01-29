# Scotech Landing Page

A modern, beautiful, and functional landing page for Scotech - showcasing innovative digital solutions including School Management System, Messaging App, Daily Motivation, and more.

## 🌟 Features

- **Modern Dark Theme** with gradient accents and smooth animations
- **Fully Responsive** - looks great on all devices (mobile, tablet, desktop)
- **Fast Performance** - optimized code with minimal dependencies
- **SEO Optimized** - meta tags and semantic HTML
- **Accessible** - keyboard navigation and ARIA labels
- **Smooth Animations** - scroll-triggered effects and micro-interactions
- **Easy to Customize** - clean, well-organized code

## 📁 File Structure

```
scotech-landing/
├── index.html      # Main HTML structure
├── styles.css      # All styles and animations
├── script.js       # Interactive features and animations
└── README.md       # This file
```

## 🚀 Quick Start

### Option 1: Local Development

1. **Clone or download** the files to your computer
2. **Open `index.html`** in your web browser
3. That's it! No build process required.

### Option 2: GitHub + Vercel Deployment

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Scotech landing page"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/scotech-landing.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a static site
   - Click "Deploy"
   - Your site will be live at `https://your-project.vercel.app`

3. **Custom Domain Setup (Vercel)**
   - Go to Project Settings → Domains
   - Add `www.scotech.co.ke`
   - Follow Vercel's DNS configuration instructions
   - Update your domain's DNS records with your domain provider

### Option 3: Traditional Hosting (scotech.co.ke)

When you're ready to move to your own server:

1. **Upload files** to your web server via FTP/SFTP
2. **Place in root directory** or public_html folder
3. **Configure your domain** to point to your server
4. **Set up SSL certificate** (Let's Encrypt is free)

## 🎨 Customization Guide

### Changing Colors

Edit the CSS variables in `styles.css` (lines 2-18):

```css
:root {
    --color-bg-primary: #0a0a0f;        /* Main background */
    --color-accent-1: #667eea;          /* Primary accent */
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* ... more variables ... */
}
```

### Changing Fonts

Current fonts: **Outfit** (headings) and **Inter** (body)

To change:
1. Go to [Google Fonts](https://fonts.google.com)
2. Select your fonts
3. Replace the font link in `index.html` (line 17)
4. Update CSS variables in `styles.css`:
   ```css
   --font-display: 'YourDisplayFont', sans-serif;
   --font-body: 'YourBodyFont', sans-serif;
   ```

### Adding New Products

Add a new product card in `index.html` within the `products-grid` section:

```html
<article class="product-card" data-product="your-product">
    <div class="product-icon">
        <!-- Add your SVG icon here -->
    </div>
    <h3 class="product-title">Your Product Name</h3>
    <p class="product-description">
        Description of your product...
    </p>
    <a href="https://yourproduct.scotech.co.ke" class="product-link" target="_blank" rel="noopener">
        Launch App
        <svg><!-- Arrow icon --></svg>
    </a>
</article>
```

### Updating Content

- **Hero Section**: Edit lines 55-73 in `index.html`
- **About Section**: Edit lines 195-228 in `index.html`
- **Contact Info**: Edit lines 234-265 in `index.html`
- **Footer**: Edit lines 272-301 in `index.html`

### Adding Analytics

Add Google Analytics or other tracking code before the closing `</head>` tag in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 767px and below

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Tips

1. **Optimize images** - use WebP format when possible
2. **Enable caching** - configure your server for browser caching
3. **Minify files** - use tools to minify CSS/JS before production
4. **Use CDN** - consider using a CDN for faster global delivery

## 🎯 SEO Checklist

- ✅ Meta description included
- ✅ Semantic HTML structure
- ✅ Alt text for images (add when you include images)
- ✅ Open Graph tags for social sharing
- ✅ Mobile-friendly design
- ✅ Fast loading time

**To add:**
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Favicon
- [ ] Schema.org markup

## 🆘 Troubleshooting

### Fonts not loading?
- Check your internet connection
- Verify Google Fonts link is correct
- Clear browser cache

### Animations not working?
- Check browser console for JavaScript errors
- Ensure `script.js` is properly linked
- Try a different browser

### Mobile menu not opening?
- Verify JavaScript is enabled
- Check browser console for errors
- Test in different mobile browsers

## 📞 Support

For questions or issues:
- **Email**: info@scotech.co.ke
- **GitHub**: Create an issue in your repository

## 📄 License

© 2025 Scotech. All rights reserved.

---

## 🚀 Next Steps

1. **Add a favicon**: Create and add a favicon.ico file
2. **Add images**: Include screenshots or product images
3. **Set up analytics**: Track visitor behavior
4. **Create a blog**: Add a blog section for updates
5. **Add contact form**: Use Formspree or similar service
6. **Implement search**: Add search functionality for products
7. **Add testimonials**: Showcase customer feedback
8. **Create case studies**: Highlight successful projects

## 🎨 Design Credits

- **Fonts**: Google Fonts (Outfit, Inter)
- **Icons**: Feather Icons style
- **Color Palette**: Custom cyan/light blue gradient design
- **Inspiration**: Modern SaaS landing pages

---

**Built with ❤️ for Scotech by Claude**

*Last updated: January 2025*
