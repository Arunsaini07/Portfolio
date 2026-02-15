# 🎨 Customization Guide

This guide will help you personalize your portfolio website with your own information, images, and styling.

## 🔤 Update Personal Information

### 1. Hero Section

**File:** `src/components/Hero.jsx`

Update these parts:

```jsx
// Line ~30 - Your name
<span className="gradient-text">Your Name</span>

// Line ~35-42 - Typing animation roles
<TypeAnimation
  sequence={[
    'I am a Web Developer',           // Change to your role
    2000,
    'I am a Frontend Developer',      // Add your specialties
    2000,
    'I am a React Developer',
    2000,
    'I am a UI/UX Enthusiast',
    2000,
  ]}
/>

// Line ~48-51 - About you paragraph
<p>
  Passionate about creating beautiful, responsive, and user-friendly web applications. 
  I love turning ideas into reality through clean code and modern design principles.
  {/* Replace with your own description */}
</p>

// Line ~57 - Social media links
const socialLinks = [
  { icon: FaLinkedin, href: 'https://linkedin.com/in/yourprofile', color: 'hover:text-blue-600' },
  { icon: FaGithub, href: 'https://github.com/yourusername', color: 'hover:text-gray-800' },
  { icon: FaEnvelope, href: 'mailto:your.actual.email@example.com', color: 'hover:text-red-500' },
  { icon: FaInstagram, href: 'https://instagram.com/yourprofile', color: 'hover:text-pink-600' },
]

// Line ~72 - CV download link
<a href="/your-cv.pdf" download>
```

**Add Your Profile Image:**

Option 1: Using an image file
```jsx
// Replace the placeholder div (around line 105) with:
<img 
  src="/profile.jpg"  // Place image in public folder
  alt="Your Name" 
  className="w-full h-full object-cover"
/>
```

Option 2: Keep the gradient placeholder
```jsx
// Just update the initials (around line 108)
<div className="w-full h-full flex items-center justify-center text-white text-6xl font-bold">
  JD  {/* Your initials */}
</div>
```

### 2. Navbar Logo

**File:** `src/components/Navbar.jsx`

```jsx
// Line ~55 - Update logo initial
<div className="w-10 h-10 bg-gradient-to-r from-primary-red to-primary-indigo rounded-lg flex items-center justify-center text-white">
  A  {/* Change to your initial */}
</div>
```

### 3. Projects Section

**File:** `src/components/Projects.jsx`

```jsx
// Starting around line 10 - Update projects array
const projects = [
  {
    title: 'Your Project Name',
    description: 'Detailed description of what your project does and the problems it solves.',
    image: '/your-project-image.jpg',  // Add to public folder
    techStack: [
      { icon: FaReact, name: 'React', color: 'text-blue-500' },
      // Add/remove technologies as needed
    ],
    liveLink: 'https://your-live-project.com',
    githubLink: 'https://github.com/username/project',
    gradient: 'from-blue-400 to-purple-500',  // Customize gradient colors
  },
  // Add more projects
]
```

**Add Project Images:**
1. Place images in the `public` folder
2. Reference them as `/project-name.jpg`
3. Or use the gradient placeholder by keeping the default setup

### 4. Skills Section

**File:** `src/components/Skills.jsx`

Update your bio:
```jsx
// Around line ~40 - About Me section
<p>
  I'm a passionate web developer with a strong foundation in modern web technologies. 
  {/* Write about your background */}
</p>
<p>
  I specialize in creating beautiful, responsive web applications...
  {/* Describe your expertise */}
</p>
<p>
  When I'm not coding, you can find me...
  {/* Share your interests */}
</p>
```

**Add/Remove Technologies:**
```jsx
// Around line ~10 - Tech stack array
const techStack = [
  { icon: FaHtml5, name: 'HTML5', color: 'text-orange-600', delay: 0.1 },
  // Add new tech:
  { icon: FaDocker, name: 'Docker', color: 'text-blue-400', delay: 0.7 },
  // Remove technologies you don't use
]
```

**Update "What I Bring" Section:**
```jsx
// Around line ~80 - Skills grid
{[
  {
    title: 'Your Skill',
    description: 'Description of this skill or approach.',
  },
  // Add/edit skills
]}
```

### 5. Contact Section

**File:** `src/components/Contact.jsx`

```jsx
// Line ~27-30 - EmailJS credentials (see EMAILJS_SETUP.md)
const serviceId = 'your_service_id'
const templateId = 'your_template_id'
const publicKey = 'your_public_key'

// Line ~36 - Your name for email
to_name: 'Your Name',

// Line ~37 - Your email
to_email: 'your.actual.email@example.com',
```

### 6. Footer

**File:** `src/components/Footer.jsx`

```jsx
// Line ~57 - Update social links (same as Hero)
const socialLinks = [
  { icon: FaLinkedin, href: 'https://linkedin.com/in/yourprofile' },
  // Update all links
]

// Line ~122 - Your name in copyright
<span>by Your Name. All rights reserved.</span>
```

## 🎨 Change Colors and Theme

### Primary Colors

**File:** `tailwind.config.js`

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        light: '#f5f5f5',    // Light mode background
        red: '#ef4444',      // Primary accent color (buttons, highlights)
        indigo: '#6366f1',   // Secondary accent color (headings)
        dark: '#1e293b',     // Dark mode background
      }
    },
  },
}
```

**Popular Color Combinations:**

1. **Blue & Teal:**
   ```javascript
   red: '#3b82f6',      // Blue
   indigo: '#14b8a6',   // Teal
   ```

2. **Purple & Pink:**
   ```javascript
   red: '#a855f7',      // Purple
   indigo: '#ec4899',   // Pink
   ```

3. **Orange & Yellow:**
   ```javascript
   red: '#f97316',      // Orange
   indigo: '#eab308',   // Yellow
   ```

4. **Green & Emerald:**
   ```javascript
   red: '#10b981',      // Green
   indigo: '#059669',   // Emerald
   ```

### Gradient Text Colors

The `.gradient-text` class uses `primary-red` to `primary-indigo`. It will automatically update when you change the colors above.

### Background Colors

**Light Mode Background:**
```javascript
light: '#f5f5f5',    // Light gray
// Try: '#ffffff' for pure white
// Try: '#f0f9ff' for light blue tint
```

**Dark Mode Background:**
```javascript
dark: '#1e293b',     // Dark blue-gray
// Try: '#111827' for darker
// Try: '#0f172a' for very dark
```

## 🖼️ Add Your Images

### Profile Image

1. **Prepare your image:**
   - Recommended size: 512x512px or 800x800px
   - Format: JPG or PNG
   - File size: < 500KB (optimize for web)

2. **Add to project:**
   - Place in `public` folder as `profile.jpg`
   - Or use `public/images/profile.jpg`

3. **Update Hero.jsx:**
   ```jsx
   <img 
     src="/profile.jpg"  
     alt="Your Name" 
     className="w-full h-full object-cover"
   />
   ```

### Project Images

1. **Prepare images:**
   - Recommended size: 1200x800px (3:2 ratio)
   - Format: JPG or PNG
   - File size: < 300KB each

2. **Add to project:**
   - Place in `public` folder
   - Name them: `project1.jpg`, `project2.jpg`, etc.

3. **Update Projects.jsx:**
   ```jsx
   image: '/project1.jpg',
   ```

4. **Display the image:**
   ```jsx
   // Replace the gradient placeholder div with:
   <img 
     src={project.image} 
     alt={project.title}
     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
   />
   ```

## 📄 Add Your CV/Resume

1. **Prepare your CV:**
   - Format: PDF recommended
   - Name it: `resume.pdf` or `cv.pdf`
   - Place in `public` folder

2. **Update Hero.jsx:**
   ```jsx
   <a href="/resume.pdf" download>
     <FaDownload />
     <span>Download CV</span>
   </a>
   ```

## ✨ Customize Animations

### Animation Speeds

**File:** `src/animations/variants.js`

```javascript
// Slower animations (more dramatic)
duration: 1.5,  // Default is 1.2

// Faster animations (snappier)
duration: 0.8,
```

### Disable Specific Animations

Remove `variants` and animation props from components:

```jsx
// Before (animated)
<motion.div
  variants={fadeIn('up', 0.2)}
  initial="hidden"
  whileInView="show"
>

// After (no animation)
<div>
```

### Change Floating Animation Speed

**File:** `src/components/Hero.jsx`

```jsx
// Around line ~93
transition={{
  duration: 3,        // Change this (higher = slower)
  repeat: Infinity,
  ease: 'easeInOut',
}}
```

## 🎯 Add New Sections

### Create a New Section Component

1. **Create file:** `src/components/NewSection.jsx`

```jsx
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../animations/variants'

const NewSection = () => {
  return (
    <section id="new-section" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.h2 variants={fadeIn('up', 0.2)} className="text-4xl font-bold gradient-text text-center mb-8">
            Section Title
          </motion.h2>
          {/* Your content here */}
        </motion.div>
      </div>
    </section>
  )
}

export default NewSection
```

2. **Add to App.jsx:**
```jsx
import NewSection from './components/NewSection'

// In the return statement:
<NewSection />
```

3. **Add to Navbar:**
```jsx
{ name: 'New Section', href: '#new-section' },
```

## 📱 Mobile Responsiveness Tips

All components are already responsive, but here are the Tailwind breakpoints used:

- `sm:` - 640px and up (mobile landscape)
- `md:` - 768px and up (tablets)
- `lg:` - 1024px and up (desktops)
- `xl:` - 1280px and up (large desktops)

Example of making something mobile-friendly:
```jsx
<div className="text-2xl md:text-4xl lg:text-5xl">
  {/* Small on mobile, larger on desktop */}
</div>
```

## 🔍 SEO Optimization

**File:** `index.html`

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Update these -->
  <title>Your Name - Web Developer Portfolio</title>
  <meta name="description" content="Portfolio of Your Name, a passionate web developer specializing in React and modern web technologies." />
  <meta name="keywords" content="web developer, react developer, portfolio, your name" />
  <meta name="author" content="Your Name" />
  
  <!-- Open Graph (for social media) -->
  <meta property="og:title" content="Your Name - Portfolio" />
  <meta property="og:description" content="Web Developer Portfolio" />
  <meta property="og:image" content="/preview.jpg" />
  <meta property="og:url" content="https://yourwebsite.com" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="/favicon.png" />
</head>
```

## 🎨 Font Customization

**File:** `tailwind.config.js`

```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      // Add custom fonts from Google Fonts
    },
  },
}
```

**File:** `index.html`

```html
<head>
  <!-- Add Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</head>
```

## 💡 Pro Tips

1. **Use real project screenshots** - They make a huge difference
2. **Keep descriptions concise** - Highlight key features and tech used
3. **Update regularly** - Add new projects and skills as you learn
4. **Test on mobile** - Most recruiters will view on phones
5. **Use professional photos** - Or use a nice gradient placeholder
6. **Link everything** - GitHub, LinkedIn, live demos
7. **Write genuine copy** - Let your personality shine through
8. **Proofread** - Typos look unprofessional
9. **Get feedback** - Ask friends or mentors to review
10. **Keep it updated** - Remove old projects, add new skills

## 🚀 Next Steps

1. ✅ Update all personal information
2. ✅ Add your images
3. ✅ Customize colors to your taste
4. ✅ Configure EmailJS (see EMAILJS_SETUP.md)
5. ✅ Test on different devices
6. ✅ Deploy to Vercel/Netlify
7. ✅ Share with the world!

---

**Need help? Check the README.md for more information!**
