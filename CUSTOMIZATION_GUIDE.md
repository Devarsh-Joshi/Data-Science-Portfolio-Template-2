# Portfolio Website Customization Guide

This guide covers how to customize your portfolio website's colors, links, images, text, and other details.

---

## 1. COLORS & THEME CUSTOMIZATION

### Primary & Secondary Colors
The website uses Tailwind CSS for styling. Colors are controlled in the CSS and component files.

**Locations to modify colors:**

- **Main CSS file:** `client/src/index.css`
  - Contains CSS variables for primary and secondary colors
  - Look for `--primary`, `--secondary`, and other color definitions

- **TailwindCSS Config:** Check `tailwind.config.ts` (if it exists) in the root folder
  - Define custom color schemes here
  - Example: `primary: "#00f2ff"` (cyan)

**How to change colors:**

1. Open `client/src/index.css`
2. Find the `:root` section with CSS variables
3. Update color values:
   ```css
   --primary: #YOUR_HEX_COLOR;
   --secondary: #YOUR_HEX_COLOR;
   ```

**Common color locations in components:**
- Hero section: `bg-primary`, `text-gradient`
- Badges: `border-primary/30 bg-primary/10`
- Buttons: `bg-primary text-background`
- Accents: `text-primary`, `shadow-[0_0_20px_rgba(0,242,255,0.3)]`

---

## 2. TEXT & CONTENT CHANGES

### Hero Section
**File:** `client/src/components/sections/Hero.tsx`

**Edit these elements:**
```tsx
// Line ~23: Status badge
<Badge variant="outline" className="...">
  // STATUS: SYSTEM_ONLINE  // <- Change this text
</Badge>

// Line ~28-33: Main heading
<h1 className="...">
  DECODING<br />
  <span className="text-gradient">REALITY.</span>  // <- Change "REALITY"
</h1>

// Line ~47-52: Description text
<p className="...">
  Expert in <span className="text-white font-medium">Data Intelligence</span> and 
  <span className="text-white font-medium"> Neural Architectures</span>. I build systems...
  // <- Modify this paragraph
</p>

// Line ~59-62: Button labels
<Button>
  INITIATE EXPLORATION  // <- Change this
  <ArrowRight ... />
</Button>
```

### About Section
**File:** `client/src/components/sections/About.tsx`

**Edit these elements:**
```tsx
// Line ~42-47: Section heading & subtitle
<h2 className="...">
  HUMAN INSIGHT.<br />
  <span className="text-primary italic">ALGORITHMIC RIGOR.</span>  // <- Change title
</h2>

// Line ~55-66: About description
<p>
  I am Alexander Nova, a Data Architect...  // <- Change name and bio
</p>
<p>
  With over a decade of experience...  // <- Update your experience
</p>
<p>
  My philosophy is simple...  // <- Update your philosophy
</p>

// Line ~73-84: Stats section
<p className="text-3xl ...">10+</p>  // <- Change numbers
<p className="text-sm ...">Years Exp</p>  // <- Change labels
<p className="text-3xl ...">50+</p>
<p className="text-sm ...">Projects</p>
```

### Skills Section
**File:** `client/src/components/sections/Skills.tsx`

**Edit:**
- Skill categories and descriptions
- Proficiency levels and icons
- Any text content in the section

### Projects Section
**File:** `client/src/components/sections/Projects.tsx`

**Edit project data (Line ~9-23):**
```tsx
const projects = [
  { 
    title: "Neural Vision",  // <- Change project name
    desc: "Real-time object detection and spatial mapping.",  // <- Change description
    img: visionImg,  // <- Update image reference
    color: "from-cyan-500/20 to-blue-500/20"  // <- Change gradient colors
  },
  // ... more projects
];
```

### Contact Section
**File:** `client/src/components/sections/Contact.tsx`

**Edit these elements:**
```tsx
// Line ~11: Heading
<h2 className="...">
  LET'S BUILD <br />
  <span className="text-primary italic">SOMETHING NEW.</span>  // <- Change heading
</h2>

// Line ~16: Subtext
<p className="...">
  Currently taking on new projects. Reach out to start a conversation.
  // <- Change description
</p>

// Line ~19-25: Email links
onClick={() => window.location.href = 'mailto:hi@alexnova.dev'}  // <- Change email
<a href="mailto:hi@alexnova.dev" ...>  // <- Change email
  HI@ALEXNOVA.DEV  // <- Change display text
</a>
```

---

## 3. LINKS & SOCIAL MEDIA

### Navigation Links
**File:** `client/src/pages/Home.tsx`

Look for navigation components and update:
- Link destinations
- Link text labels
- Social media URLs

### Button Links

**Hero section buttons:**
- Scroll link: `document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })`
- Video/demo link: Add your URL
- Download resume: Add download link

**Contact section:**
- Email: `mailto:hi@alexnova.dev` - Change to your email
- Add social media links (GitHub, LinkedIn, Twitter, etc.)

**Example of adding a new link:**
```tsx
<a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
  GitHub
</a>
```

---

## 4. IMAGES & ASSETS

### Project Images
**File:** `client/src/components/sections/Projects.tsx`

**Replace project images:**
```tsx
// Line ~6-8: Import your images
import visionImg from "@/assets/project-vision.png";
import financeImg from "@/assets/project-finance.png";
import genomicImg from "@/assets/project-genomic.png";
```

**Steps to add new images:**
1. Place your images in `client/src/assets/`
2. Import them at the top of the file:
   ```tsx
   import myImage from "@/assets/my-image.png";
   ```
3. Reference in the projects array:
   ```tsx
   { 
     title: "My Project",
     desc: "Description",
     img: myImage,  // <- Use imported image
     color: "from-cyan-500/20 to-blue-500/20"
   }
   ```

### Profile/Avatar Images
**File:** `client/src/components/sections/About.tsx`

To add a profile image:
```tsx
// Replace the text placeholder with an image
<img src={yourImage} alt="Profile" className="w-full h-full object-cover rounded-[3rem]" />
```

### Background Assets
- Check `client/src/index.css` for any background images
- Look for blob animations and gradient definitions
- Modify `client/public/` for static assets

---

## 5. GRADIENT & STYLING ADJUSTMENTS

### Text Gradients
Located in `client/src/index.css`, find:
```css
.text-gradient {
  background: linear-gradient(135deg, #00f2ff 0%, #0088ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

Update the color values to customize the gradient.

### Glass Effect
Components use a `glass` class for frosted glass effects:
```tsx
className="glass ..."  // <- Modify opacity/blur in index.css
```

**In index.css, find `.glass`:**
```css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### Animations
Controlled by Framer Motion in components:
```tsx
initial={{ opacity: 0, x: -20 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}  // <- Change duration
```

---

## 6. METADATA & SEO

### Page Title & Description
**File:** `client/index.html`

Update:
```html
<title>Your Portfolio Title</title>
<meta name="description" content="Your portfolio description">
```

### Open Graph Tags (Social Sharing)
Add to `client/index.html`:
```html
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://yoursite.com/og-image.png">
```

---

## 7. FONTS & TYPOGRAPHY

### Font Selection
**File:** `client/src/index.css` or `tailwind.config.ts`

Look for `fontFamily` or `@import` statements:
```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;700&display=swap');
```

**To change fonts:**
1. Visit [Google Fonts](https://fonts.google.com)
2. Select your font
3. Copy the import statement
4. Replace in `index.css`
5. Update Tailwind config to use the font

**Font sizes are in component files:**
- `text-7xl` - Very large (headings)
- `text-4xl` - Large (subheadings)
- `text-xl` - Medium
- `text-sm` - Small

---

## 8. SPACING & LAYOUT

### Container Width
Change max-width in sections:
```tsx
<div className="max-w-7xl mx-auto">  // <- Adjust max-w-* class
```

**Size options:**
- `max-w-4xl` - Narrower
- `max-w-6xl` - Medium
- `max-w-7xl` - Wide (current)
- `max-w-full` - Full width

### Padding & Margins
```tsx
className="py-32 px-6"  // py = padding-vertical, px = padding-horizontal
className="gap-12"      // gap between grid items
className="mb-6"        // margin-bottom
```

---

## 9. COMPONENT CUSTOMIZATION

### Buttons
**File:** `client/src/components/ui/button.tsx`

Modify button styles:
```tsx
className="bg-primary text-background rounded-full px-12 h-16 font-bold"
```

### Cards
**File:** `client/src/components/ui/card.tsx`

Used in projects section. Customize border-radius, padding, etc.

### Badges
**File:** `client/src/components/ui/badge.tsx`

Used for status indicators. Adjust size and styling.

---

## 10. BUILD & DEPLOYMENT

### Testing Changes Locally
```bash
npm run dev
```
- Opens dev server on `http://localhost:5000`
- Changes auto-refresh

### Building for Production
```bash
npm run build
```
- Creates optimized build in `dist/` folder
- Ready for deployment

### Preview Build
```bash
npm run preview
```
- Test the production build locally

---

## 11. QUICK REFERENCE: FILE LOCATIONS

| What to Change | File Location |
|---|---|
| Colors & theme | `client/src/index.css` |
| Hero section text | `client/src/components/sections/Hero.tsx` |
| About section text | `client/src/components/sections/About.tsx` |
| Projects & images | `client/src/components/sections/Projects.tsx` |
| Skills section | `client/src/components/sections/Skills.tsx` |
| Contact info | `client/src/components/sections/Contact.tsx` |
| Project images | `client/src/assets/` |
| Page title & meta | `client/index.html` |
| Typography | `client/src/index.css` |
| Button styles | `client/src/components/ui/button.tsx` |

---

## 12. COMMON CUSTOMIZATIONS CHECKLIST

- [ ] Change name from "Alexander Nova" to your name
- [ ] Update email in Contact section
- [ ] Replace project images with your own
- [ ] Update project titles and descriptions
- [ ] Change color scheme to match your brand
- [ ] Update your experience numbers (years, projects)
- [ ] Add your social media links
- [ ] Update page title and meta description
- [ ] Adjust fonts if desired
- [ ] Add/remove project cards
- [ ] Update the Hero section heading
- [ ] Replace about section bio
- [ ] Add your resume download link

---

## Tips for Best Results

1. **Always test locally** with `npm run dev` before deploying
2. **Keep hex colors consistent** across the site (save them in a comment)
3. **Use 16:9 aspect ratio** for project images (1280x720 or 1920x1080)
4. **Optimize images** to reduce file size (use tools like Tinify or ImageOptim)
5. **Test on mobile** - use browser dev tools (F12) to check responsive design
6. **Keep text concise** - shorter is better for impact
7. **Use meaningful alt text** for images (accessibility)
8. **Back up original files** before making major changes

---

**Need help? Check component files for inline comments and Tailwind CSS documentation at tailwindcss.com**
