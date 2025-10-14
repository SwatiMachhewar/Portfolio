# Swati Machhewar - Portfolio

A modern, responsive portfolio website built with Next.js 15, showcasing professional experience, projects, certifications, and contact information.

## 🚀 Tech Stack

### Frontend Framework
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **Shadcn/ui** - Modern UI components built on Radix UI
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **Framer Motion** - Animation library

### Theme & State Management
- **next-themes** - Dark/light theme support
- **Class Variance Authority** - Component variant management
- **clsx & tailwind-merge** - Conditional styling utilities

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Type checking
- **Turbopack** - Fast bundler (Next.js 15)

### Deployment
- **Vercel** - Cloud platform for deployment

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ (recommended)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd swati-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
swati-portfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── experience/        # Experience page
│   ├── projects/          # Projects page
│   ├── certifications/    # Certifications page
│   └── contact/           # Contact page
├── components/            # Reusable React components
│   ├── ui/               # Shadcn/ui components
│   ├── Navbar.tsx        # Navigation component
│   ├── Footer.tsx        # Footer component
│   ├── ThemeToggle.tsx   # Theme switcher
│   └── ThemeProvider.tsx # Theme provider
├── data/                 # Static data files
│   ├── experience.json   # Experience data
│   ├── projects.json     # Projects data
│   └── certifications.json # Certifications data
├── public/               # Static assets
│   ├── icon.png          # Original icon
│   ├── icon_circular.png # Circular icon
│   ├── avatar.png        # Profile picture
│   └── resume.pdf        # Resume file
└── styles/               # Global styles
```

## 🚀 Deployment on Vercel

### Initial Deployment

1. **Install Vercel CLI** (optional, but recommended):
```bash
npm install -g vercel
```

2. **Deploy from command line**:
```bash
cd swati-portfolio
vercel
```

3. **Or deploy via GitHub**:
   - Push your code to GitHub
   - Connect your repository to Vercel at [vercel.com](https://vercel.com)
   - Vercel will automatically detect Next.js and deploy

### Deploying Minor Updates

#### Option 1: Using Vercel CLI
```bash
cd swati-portfolio

# Build the project
npm run build

# Deploy to production
vercel --prod
```

#### Option 2: Git-based Deployment
1. Make your changes locally
2. Commit and push to your Git repository:
```bash
git add .
git commit -m "Update: [brief description]"
git push origin main
```
3. Vercel will automatically redeploy with the latest changes

#### Option 3: Vercel Dashboard
1. Go to your project dashboard at [vercel.com](https://vercel.com)
2. Click "Deployments" tab
3. Click "Redeploy" button for the latest deployment

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Features

- **Responsive Design** - Works on all device sizes
- **Dark/Light Theme** - Toggle between themes
- **Modern UI** - Clean, professional design
- **Fast Performance** - Optimized with Next.js 15 and Turbopack
- **SEO Friendly** - Proper meta tags and structure
- **Accessibility** - ARIA labels and keyboard navigation

## 📝 Customization

### Adding New Projects
Edit `data/projects.json` to add new projects.

### Adding New Experience
Edit `data/experience.json` to add new work experience.

### Adding New Certifications
Edit `data/certifications.json` to add new certifications.

### Updating Personal Information
Edit the relevant sections in `app/page.tsx` and other page files.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact

Swati Machhewar
- Email: 07swati98@gmail.com
- LinkedIn: [Swati Machhewar](https://www.linkedin.com/in/swati-machhewar-38703713b/)
- GitHub: [SwatiMachhewar](https://github.com/SwatiMachhewar)
