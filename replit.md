# Overview

This is a bilingual (Dari/Farsi and Pashto) online marketplace application for Afghanistan called "بازار افغانستان" (Afghanistan Bazaar). The platform serves as an e-commerce marketplace where users can browse, search, and filter products across various categories. The application supports province-based location filtering and provides a modern, dark-themed user interface with neon accent colors.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Pure HTML/CSS/JavaScript**: Static frontend without frameworks, using vanilla JavaScript for interactivity
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox for layout
- **Dark Theme with Neon Accents**: Modern UI using CSS custom properties for consistent theming
- **Right-to-Left (RTL) Support**: Native RTL layout for Persian/Dari and Pashto languages
- **Component-based Structure**: Modular CSS classes and JavaScript functions for reusability

## Data Management
- **Static JSON Data**: Product catalog, categories, and provinces stored in JSON files under `/data/` directory
- **Client-side State Management**: JavaScript object (`APP_STATE`) manages application state including filters, search, pagination
- **Local Data Processing**: All filtering, sorting, and search operations performed client-side

## Internationalization
- **Bilingual Support**: Complete translation system for Dari/Farsi and Pashto languages
- **Dynamic Language Switching**: Runtime language toggle with persistent state
- **Localized Data**: All product information, categories, and provinces available in both languages

## UI/UX Design Patterns
- **Dark Theme**: Primary background colors in dark tones with high contrast text
- **Neon Color Palette**: Bright accent colors (blue, purple, green, pink, orange) for highlights and interactions
- **Glassmorphism Elements**: Semi-transparent backgrounds with blur effects
- **Progressive Enhancement**: Core functionality works without JavaScript, enhanced with interactive features

## Navigation and Routing
- **Multi-page Application**: Separate HTML files for different sections (category pages, product details)
- **Client-side Filtering**: Dynamic content updates without page reloads
- **Breadcrumb Navigation**: Clear navigation hierarchy for category browsing

## Search and Filter System
- **Real-time Search**: Instant product filtering based on title and description
- **Multi-criteria Filtering**: Price range, category, location, and sorting options
- **Pagination**: Load-more functionality for handling large product catalogs

# External Dependencies

## Fonts and Icons
- **Google Fonts**: Vazir font family for Persian/Dari text rendering with multiple weights
- **Font Awesome 6.4.0**: Comprehensive icon library via CDN for UI elements and product categories

## No Backend Dependencies
- **Static Hosting Ready**: Application designed to run entirely on client-side
- **No Database**: All data stored in static JSON files
- **No Server-side Processing**: All business logic handled in browser JavaScript

## Browser Requirements
- **Modern Browser Support**: Requires CSS Grid, Flexbox, and ES6+ JavaScript features
- **RTL Language Support**: Browser must support right-to-left text direction
- **Local Storage**: Uses browser storage for user preferences and state persistence