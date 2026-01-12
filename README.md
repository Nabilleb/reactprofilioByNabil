# React Portfolio

A modern portfolio website built with React and Vite. Showcase your professional skills, projects, and experience in an elegant and interactive way.

## Features

- **Responsive Design** - Mobile-friendly layout that works on all devices
- **Fast Performance** - Built with Vite for optimal loading speeds
- **Component-Based** - Modular React components for easy customization
- **Professional Sections**:
  - Header with navigation
  - Skills showcase
  - Project portfolio
  - Experience timeline
  - Education history
  - Contact footer

## Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Language**: JavaScript (JSX)
- **Linting**: ESLint

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-portfolio
```

2. Install dependencies:
```bash
npm install
```

### Running the Project

Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Education.jsx
│   └── Footer.jsx
├── assets/             # Static assets
├── App.jsx             # Main App component
├── App.css             # App styles
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## Customization

Edit the component files in `src/components/` to add your own:
- Personal information
- Skills and expertise
- Project descriptions
- Work experience
- Education details
- Contact information

## Building for Production

```bash
npm run build
```

The optimized files will be generated in the `dist/` directory.

## License

This project is open source and available under the MIT License.
