# 🍽️ Restaurant App

A modern, user-friendly restaurant menu browsing application built with React. Browse restaurant menus, customize dishes, and manage your cart seamlessly across all devices.

## 🌐 Live Demo

Visit the application here: **[https://manjurestapp.ccbp.tech/](https://manjurestapp.ccbp.tech/)**

## 📋 Features

- **Dynamic Menu Categories**: Browse restaurant menu organized by categories
- **Smooth Category Navigation**: Slidable category tabs for easy browsing
- **Customizable Dishes**: View customization options for dishes that support add-ons
- **Interactive Cart**: Add/remove items to cart with real-time quantity updates
- **Responsive Design**: Fully responsive interface optimized for both mobile and web
- **Real-time Updates**: Cart counter updates instantly when items are added or removed
- **User-Friendly Interface**: Intuitive design for seamless user experience

## 🎨 User Interface

### Mobile Interface
The app provides an optimized mobile experience with touch-friendly controls and clear navigation.

### Web Interface
Desktop version with a clean, modern layout for comfortable browsing on larger screens.

## 🔧 Tech Stack

- **Frontend**: React 17.0.1
- **Routing**: React Router v5
- **Icons**: React Icons
- **Loading Spinners**: React Loader Spinner
- **Cookies**: js-cookie
- **Styling**: CSS
- **Testing**: React Testing Library, Jest

## 📦 Installation

### Prerequisites
- Node.js (v10.13 or higher)
- npm (v6 or higher)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Manju025/Restaurant-App.git
   cd Restaurant-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or using pnpm
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

## 🚀 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm run lint` - Checks code quality with ESLint
- `npm run lint:fix` - Fixes linting issues automatically
- `npm run format` - Formats code using Prettier
- `npm run run-all` - Runs tests and linting in parallel

## 📡 API Integration

The app fetches menu data from the following API:

```
https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details
```

### API Response Structure
- Returns dish categories and the dishes in each category
- Each dish can have optional add-ons (customizations)
- Dishes with add-ons display "Customizations available" label

## 🎯 Key Functionality

1. **Category Browsing**: All categories are dynamically loaded from the API (not hardcoded)
2. **Quantity Management**: Use `+` and `-` buttons to update dish quantities
3. **Cart Management**: Cart icon on the top bar updates in real-time
4. **Customizations**: Dishes with add-ons show customization options
5. **Responsive Tabs**: Category tabs automatically adjust based on API data

## 💻 Code Quality Standards

The project follows best practices for maintainable and reusable code:

- **ESLint**: Code linting with Airbnb style guide
- **Prettier**: Automatic code formatting
- **Pre-commit Hooks**: Husky integration for automated checks before commits
- **Lint-staged**: Only stages files that pass linting

## 📱 Responsive Design

- Optimized for mobile devices (iOS, Android)
- Desktop-friendly web interface
- Cross-browser compatibility

## 🤝 Contributing

Contributions are welcome! Please ensure your code follows the project's style guidelines:

1. Run `npm run format` to format your code
2. Run `npm run lint:fix` to fix linting issues
3. Ensure all tests pass with `npm test`

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Manju025**
- GitHub: [@Manju025](https://github.com/Manju025)

## 🔗 Links

- **Live Application**: https://manjurestapp.ccbp.tech/
- **Repository**: https://github.com/Manju025/Restaurant-App
- **API Documentation**: https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details

## 📞 Support

For issues or questions, please create an issue in the [GitHub repository](https://github.com/Manju025/Restaurant-App/issues).

---

**Happy coding!** 🎉
