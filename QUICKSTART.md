# 🚀 Quick Start Guide

Get your portfolio running in 5 minutes!

## ⚡ Installation Steps

### 1. Extract the ZIP file
Extract `portfolio-website.zip` to your desired location.

### 2. Open Terminal/Command Prompt
Navigate to the project folder:
```bash
cd portfolio-website
```

### 3. Install Dependencies
```bash
npm install
```
This will take 2-3 minutes. Wait for it to complete.

### 4. Start Development Server
```bash
npm run dev
```

### 5. Open in Browser
Open your browser and go to: `http://localhost:5173`

**🎉 Your portfolio is now running!**

## ✏️ Quick Customization Checklist

Before deploying, update these essential items:

### Priority 1 - Must Update:
- [ ] Your name in `Hero.jsx` (line ~30)
- [ ] Social media links in `Hero.jsx` (line ~57)
- [ ] EmailJS credentials in `Contact.jsx` (line ~27-29)
- [ ] Your email in `Contact.jsx` (line ~37)
- [ ] Footer name and links in `Footer.jsx`

### Priority 2 - Important:
- [ ] Bio/description in `Hero.jsx` (line ~48)
- [ ] About section in `Skills.jsx` (line ~40)
- [ ] Projects details in `Projects.jsx` (line ~10)
- [ ] Tech stack in `Skills.jsx` if needed

### Priority 3 - Nice to Have:
- [ ] Add your profile image (`/public/profile.jpg`)
- [ ] Add project images to `/public`
- [ ] Add your CV/resume to `/public`
- [ ] Customize colors in `tailwind.config.js`

## 📧 EmailJS Setup (Required for Contact Form)

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for free account
3. Create an email service (Gmail/Outlook)
4. Create an email template
5. Get your Service ID, Template ID, and Public Key
6. Update `src/components/Contact.jsx` with your credentials

**See `EMAILJS_SETUP.md` for detailed instructions**

## 🎨 Customization

**See `CUSTOMIZATION.md` for complete customization guide**

Quick color change in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    red: '#ef4444',      // Change to your color
    indigo: '#6366f1',   // Change to your color
  }
}
```

## 🚀 Deploy to Vercel (Free)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

**Done! Your portfolio is live!**

## 📝 Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

## 🆘 Common Issues

**Issue: `npm install` fails**
- Solution: Make sure you have Node.js v16+ installed

**Issue: Port already in use**
- Solution: Change port with `npm run dev -- --port 3000`

**Issue: Animations not smooth**
- Solution: Close other apps, try a different browser

**Issue: Dark mode not working**
- Solution: Clear browser cache and localStorage

## 📚 Full Documentation

- `README.md` - Complete documentation
- `CUSTOMIZATION.md` - Detailed customization guide
- `EMAILJS_SETUP.md` - EmailJS setup instructions

## 💬 Need Help?

Check the README.md file for troubleshooting and more detailed information!

---

**Made with ❤️ - Happy Coding!**
