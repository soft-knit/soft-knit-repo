# Complete Project Setup Guide

## File Structure
```
my-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── eslint.config.js
└── README.md
```

## Key Files to Copy:

### 1. package.json
Copy the dependencies section from the current package.json

### 2. tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 3. src/index.css
Copy the entire CSS file with custom animations

### 4. All Component Files
Copy each .tsx file from src/components/

### 5. src/App.tsx and src/main.tsx
Copy these main application files

### 6. index.html
Copy the HTML file with proper meta tags

## Setup Steps:
1. Create new Vite project: `npm create vite@latest my-portfolio -- --template react-ts`
2. Install dependencies: `npm install lucide-react`
3. Install Tailwind: `npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p`
4. Copy all the files listed above
5. Run: `npm run dev`

## GitHub Setup:
1. Create new repository on GitHub
2. Initialize git: `git init`
3. Add files: `git add .`
4. Commit: `git commit -m "Initial commit"`
5. Add remote: `git remote add origin https://github.com/soft-knit/your-repo-name.git`
6. Push: `git push -u origin main`

## Netlify Deployment:
1. Connect your GitHub repo to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on git push