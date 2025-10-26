# My React App

A modern React application built with Vite, featuring reusable components, API integration, theme switching, and responsive design.

## Features

- 🎨 Theme switching (light/dark mode)
- 📱 Responsive design
- 🔄 API data integration with JSONPlaceholder
- 📝 Task management functionality
- 💾 Local storage persistence
- 🎯 Custom hooks
- 🎨 Tailwind CSS styling

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── ApiData.jsx    # API data fetching and display
│   ├── Button.jsx     # Reusable button component
│   ├── Card.jsx      # Card component for content display
│   ├── Footer.jsx    # Application footer
│   ├── Layout.jsx    # Main layout wrapper
│   ├── Navbar.jsx    # Navigation component
│   └── TaskManager.jsx # Task management functionality
├── context/
│   └── ThemeContext.jsx # Theme context provider
├── hooks/
│   └── useLocalStorage.js # Custom hook for local storage
├── App.jsx           # Main application component
└── main.jsx         # Application entry point
```

## Prerequisites

Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js) or [pnpm](https://pnpm.io/)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-react-app
```

2. Install dependencies:
```bash
npm install
# or if using pnpm
pnpm install
```

## Available Scripts

In the project directory, you can run:

### Development Server
```bash
npm run dev
# or
pnpm dev
```
This starts the development server at `http://localhost:5173`

### Build for Production
```bash
npm run build
# or
pnpm build
```
This creates an optimized production build in the `dist` folder.

### Preview Production Build
```bash
npm run preview
# or
pnpm preview
```
This serves the production build locally for testing.

### Lint Code
```bash
npm run lint
# or
pnpm lint
```
This runs ESLint to check for code quality issues.

## Dependencies

### Core Dependencies
- React v19.1.1
- React DOM v19.1.1
- Tailwind CSS
- prop-types v15.8.1

### Development Dependencies
- Vite v7.1.7
- ESLint v9.36.0
- Various ESLint plugins for React

## Browser Support

This application supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- API data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
