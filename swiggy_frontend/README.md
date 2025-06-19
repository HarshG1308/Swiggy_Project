# Swiggy Frontend Clone

A modern, responsive food delivery web app inspired by Swiggy, built with React, Redux Toolkit, Tailwind CSS, and Vite.

## Features

- Browse restaurants and menus with real Swiggy API data
- Search, filter, and sort menu items
- Add/remove items to cart with Redux state management
- View cart with total price and item details
- Beautiful, mobile-friendly UI with Tailwind CSS
- Offers, Help, and Sign In pages
- Routing with React Router

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd Swiggy_Project/swiggy_frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
swiggy_frontend/
  src/
    components/      # React components (Header, Body, Cart, etc.)
    utils/           # Redux slices and store
    App.jsx          # Main app component
    main.jsx         # Entry point
    index.css        # Tailwind CSS
  public/            # Static assets
  vite.config.js     # Vite config
  package.json       # Project metadata
```

## Tech Stack
- React
- Redux Toolkit
- React Router
- Tailwind CSS
- Vite
- Axios

## Customization
- Update API endpoints in `ApiCalling.js` and `RestaurantDetails.jsx` for your location or mock data.
- Edit Tailwind classes for custom styling.

## License
This project is for educational/demo purposes only. Not affiliated with Swiggy.
