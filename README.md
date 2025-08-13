# Software Developer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern dark theme with gradient accents
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎭 Smooth animations and micro-interactions
- 📧 Contact form with validation
- 🔗 Social media integration

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Customization

### Personal Information
- Update contact details in `src/components/Contact.tsx`
- Modify social media links in `src/components/Header.tsx`
- Change the hero section content in `src/components/Hero.tsx`

### Projects
- Edit project data in `src/components/Projects.tsx`
- Replace placeholder projects with your actual GitHub repositories
- Update project images, descriptions, and technologies

### Skills
- Modify skill categories and levels in `src/components/Skills.tsx`
- Add or remove technologies based on your expertise

### About Section
- Update your bio and experience in `src/components/About.tsx`
- Modify the highlight cards to reflect your strengths

## Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### Other Platforms
- **Vercel**: Connect your GitHub repo or upload the build folder
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **Firebase Hosting**: Use Firebase CLI to deploy

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills showcase
│   ├── Projects.tsx    # Projects gallery
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles

```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons

## License

This project is open source and available under the [MIT License](LICENSE).