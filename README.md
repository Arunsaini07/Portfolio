# 🚀 Modern Portfolio Website

A stunning, fully responsive personal portfolio website built with React, Tailwind CSS, and Framer Motion. Features smooth animations, dark mode, and a modern glassmorphism design.

![Portfolio Preview](preview.png)

## ✨ Features

- 🎨 **Modern Design** - Clean, minimal interface with soft-light theme
- 🌓 **Dark/Light Mode** - Smooth theme switching with localStorage persistence
- 📱 **Fully Responsive** - Perfect on all devices from mobile to desktop
- ✨ **Smooth Animations** - Professional animations using Framer Motion
- 🎯 **Glassmorphism Effects** - Modern glass-like UI components
- 📧 **Contact Form** - Integrated with EmailJS for direct messaging
- ⚡ **Fast Performance** - Optimized with Vite for lightning-fast builds
- 🎭 **Interactive Elements** - Hover effects, floating animations, and more

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **EmailJS** - Email service integration
- **React Type Animation** - Typing effect animation

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone or extract the project**
   ```bash
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Configuration

### EmailJS Setup

1. **Create an EmailJS account**
   - Go to [EmailJS](https://www.emailjs.com/)
   - Sign up for a free account

2. **Create an Email Service**
   - Go to Email Services
   - Add a new service (Gmail, Outlook, etc.)
   - Note your `Service ID`

3. **Create an Email Template**
   - Go to Email Templates
   - Create a new template with these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{subject}}` - Email subject
     - `{{message}}` - Email message
   - Note your `Template ID`

4. **Get your Public Key**
   - Go to Account → General
   - Copy your `Public Key`

5. **Update the Contact component**
   Open `src/components/Contact.jsx` and update:
   ```javascript
   const serviceId = 'YOUR_SERVICE_ID'
   const templateId = 'YOUR_TEMPLATE_ID'
   const publicKey = 'YOUR_PUBLIC_KEY'
   ```

### Customization

#### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`)
   - Replace "Your Name" with your actual name
   - Update the description text
   - Update social media links
   - Add your profile image path

2. **Projects Section** (`src/components/Projects.jsx`)
   - Update project details
   - Add your project images
   - Update GitHub and live links

3. **Skills Section** (`src/components/Skills.jsx`)
   - Update the bio text
   - Add or remove tech stack items

4. **Footer** (`src/components/Footer.jsx`)
   - Update "Your Name" with your name
   - Update social media links

#### Add Your Images

1. Place your images in the `public` folder
2. Update image paths in components:
   ```jsx
   // Example in Hero.jsx
   <img src="/profile.jpg" alt="Profile" />
   
   // Example in Projects.jsx
   image: '/project1.jpg'
   ```

#### Change Colors

Update `tailwind.config.js`:
```javascript
colors: {
  primary: {
    light: '#f5f5f5',
    red: '#ef4444',      // Change this
    indigo: '#6366f1',   // Change this
    dark: '#1e293b',
  }
}
```

## 📁 Project Structure

```
portfolio-website/
├── public/                 # Static assets
├── src/
│   ├── animations/        # Animation variants
│   │   └── variants.js
│   ├── components/        # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── BackToTop.jsx
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy

### Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Connect your repository
4. Build command: `npm run build`
5. Publish directory: `dist`

### GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/portfolio/'
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## 🎯 Features Breakdown

### Navbar
- Sticky navigation with glassmorphism effect
- Smooth scroll to sections
- Dark/Light mode toggle
- Mobile responsive menu

### Hero Section
- Typing animation effect
- Floating profile image
- Social media links
- Download CV button
- Decorative animated shapes

### Projects Section
- Animated project cards
- Hover effects with scale and shadow
- Tech stack badges
- Live demo and GitHub links
- Image placeholder with gradient

### Skills Section
- Animated tech stack icons
- About me section
- What I bring to the table section
- Floating animations on icons
- Hover effects with rotation

### Contact Section
- Glassmorphism form design
- EmailJS integration
- Form validation
- Success/Error messages
- Loading state animation

### Footer
- Quick navigation links
- Social media icons
- Copyright information
- Back to top button

## 🎨 Design System

### Colors
- **Primary Red**: `#ef4444`
- **Primary Indigo**: `#6366f1`
- **Light Background**: `#f5f5f5`
- **Dark Background**: `#1e293b`

### Animations
- Fade in/out transitions
- Slide animations
- Scale transformations
- Floating effects
- Typing effects
- Smooth scroll behavior

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🐛 Troubleshooting

### Issue: Animations not working
- Ensure Framer Motion is installed: `npm install framer-motion`
- Check browser console for errors

### Issue: Dark mode not persisting
- Check browser localStorage permissions
- Clear browser cache and try again

### Issue: EmailJS not working
- Verify your Service ID, Template ID, and Public Key
- Check EmailJS dashboard for quota limits
- Ensure email template variables match your form fields

### Issue: Build errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Ensure Node.js version is 16 or higher

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Your Name**
- Website: [yourwebsite.com](https://yourwebsite.com)
- LinkedIn: [@yourprofile](https://linkedin.com/in/yourprofile)
- GitHub: [@yourusername](https://github.com/yourusername)

## 🌟 Show your support

Give a ⭐️ if you like this project!

## 📸 Screenshots

Add your portfolio screenshots here after deployment.

---

**Made with ❤️ using React, Tailwind CSS, and Framer Motion**
