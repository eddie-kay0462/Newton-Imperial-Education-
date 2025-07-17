# Newton Imperial Education Website

A modern, responsive website for Newton Imperial Education built with React and Tailwind CSS. This website showcases research opportunities for brilliant students and features a clean, professional design.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Component-Based Architecture**: Built with React components for maintainability
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Interactive Elements**: Hover effects and smooth transitions

## Sections

1. **Header**: Navigation with logo and Apply Now button
2. **Hero Section**: Main headline with illustration and floating callout boxes
3. **Why Choose Us**: Three feature cards highlighting benefits
4. **Success Stories**: Student testimonial
5. **How It Works**: Four-step process with connected timeline
6. **Call to Action**: Statistics and application form

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the files
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

To create a production build:

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Header.js
│   ├── HeroSection.js
│   ├── WhyChooseUs.js
│   ├── SuccessStories.js
│   ├── HowItWorks.js
│   └── CallToAction.js
├── App.js
├── index.js
└── index.css
```

## Technologies Used

- **React 18**: Modern React with hooks
- **Tailwind CSS 3**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## Customization

The website uses a custom color scheme defined in `tailwind.config.js`:

- Primary colors: Blue shades (`primary-50` to `primary-700`)
- Secondary colors: Light blue shades (`secondary-50`, `secondary-100`)

You can easily customize colors, fonts, and other design elements by modifying the Tailwind configuration file.

## License

This project is open source and available under the [MIT License](LICENSE). 