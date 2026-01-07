# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a personal portfolio website built with React.js showcasing projects, skills, and experience. The site features a modern dark theme with animated particles, shooting stars, and smooth interactions.

## Technology Stack

- **React 17.0.2** with Create React App (react-scripts 5.0.0)
- **React Router v6** for client-side routing
- **React Bootstrap** for UI components
- **react-tsparticles** for animated star field background
- **Bootstrap 5** for base styling
- **CSS3** with custom CSS variables for theming

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (opens at http://localhost:3000)
npm start
# or
npm run dev

# Build for production
npm build

# Run tests
npm test
```

## Project Structure

```
src/
├── components/
│   ├── Home/          # Landing page with hero section and intro
│   ├── About/         # About section with tech stack, tools, and GitHub calendar
│   ├── Projects/      # Project showcase with ProjectCards
│   ├── Resume/        # Resume/CV display
│   ├── Navbar.js      # Navigation with capsule design
│   ├── Footer.js      # Footer component
│   ├── Particle.js    # Animated star field and shooting stars
│   ├── Pre.js         # Preloader component
│   └── ScrollToTop.js # Utility for scroll restoration
├── Assets/
│   ├── Projects/      # Project images
│   ├── TechIcons/     # Technology stack SVG icons
│   └── *.pdf          # Resume PDF file
├── App.js             # Main app with routing
├── style.css          # Global styles and CSS variables
└── index.js           # React entry point
```

## Architecture

### Routing Structure
The app uses React Router v6 with the following routes:
- `/` - Home page (landing/hero)
- `/project` - Projects showcase
- `/about` - About page with skills and GitHub activity
- `/resume` - Resume/CV viewer
- `*` - Redirects to home

### Visual Effects System
The `Particle.js` component manages two visual effects:
1. **Star Field**: Static/slowly moving particles (400 particles) using react-tsparticles with repulse interaction on hover
2. **Shooting Stars**: Dynamically created/removed DOM elements that appear every 3-8 seconds at random positions

### Theming System
All colors are defined as CSS custom properties in `style.css`:
- `--imp-text-color`: Primary accent color (#00D4FF - cyan/blue)
- `--section-background-color`: Ultra dark gradient background
- Uses `.purple` class throughout codebase for accent colors (despite the cyan color)

### Project Cards
The `ProjectCards.js` component supports:
- `isFlagship`: Adds a "Flagship" badge and special styling
- `userCount`: Displays user count badge
- `technologies`: Array of tech badges
- `ghLink`: GitHub repository link
- `demoLink`: Live demo link
- `isBlog`: Switches GitHub button text

Projects are configured in `Projects.js` with image imports from `src/Assets/Projects/`.

## Key Patterns

### Component Style
- Functional components with hooks
- React Bootstrap for layout (Container, Row, Col)
- Inline styles mixed with CSS classes
- Bootstrap variants for buttons and badges

### State Management
- Local component state with useState
- No global state management (Redux, Context)
- Simple props passing between components

### Asset Management
- Static imports for images and icons
- Resume PDF stored in `src/Assets/`
- Tech stack icons as SVGs in `src/Assets/TechIcons/`

## Styling Conventions

1. Use CSS custom properties defined in `style.css` for theme colors
2. The `.purple` class applies the cyan accent color (naming is legacy)
3. Bootstrap utilities for layout and spacing
4. Custom CSS for animations and special effects
5. Backdrop blur effects on navbar (capsule design)

## Adding New Projects

To add a project to the portfolio:
1. Add project image to `src/Assets/Projects/`
2. Import the image in `Projects.js`
3. Add a new `<Col>` with `<ProjectCard>` in the appropriate position
4. For flagship projects, use `isFlagship={true}` and `userCount` props
5. Include `technologies` array to show tech stack badges

## Common Modifications

**Updating Personal Info**: Edit content in `Home2.js` and `AboutCard.js`

**Changing Tech Stack**: Modify icon arrays in `Techstack.js` and `Toolstack.js`

**Updating Resume**: Replace `src/Assets/omair_hassan.pdf` with new resume file and update import in `ResumeNew.js`

**Adjusting Theme Colors**: Modify CSS custom properties in `style.css` (lines 1-19)

**Particle Effects**: Tune particle count, speed, and shooting star frequency in `Particle.js`
