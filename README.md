# 🛒 Shopery - Organic eCommerce Training Project

A collaborative learning repository where students build a modern organic grocery shopping website based on the [Shopery Figma Design](https://www.figma.com/design/XWrImCr2Ky1BvIClmU30q9/Shopery---Organic-eCommerce-Shop-Website-Figma-Template--Community---Community-?t=Czc27P81OX9kBpuF-0).

> **⚠️ Important**: This is a **frontend-only project** for educational purposes. All data is stored in LocalStorage - no backend or database required.

---

## 🎯 Project Overview

### **Tech Stack**
- ⚛️ **React 19.2.0** - UI Library
- ⚡ **Vite** - Build Tool & Dev Server
- 🎨 **Tailwind CSS** - Utility-first CSS Framework
- 🧭 **React Router v7** - Client-side Routing
- 🔄 **Context API** - Global State Management
- 💾 **LocalStorage** - Data Persistence

---

## 📂 Project Structure Overview

The `src` directory is organized as follows:

```
src/
├── 📂 components/      # UI Components organized by feature
│   ├── 📂 common/      # Reusable components (Header, Footer, Buttons, Inputs)
│   ├── 📂 home/        # Home page specific components (Hero, Featured)
│   ├── 📂 shop/        # Shop page components (ProductCard, FilterSidebar)
│   ├── 📂 product/     # Product detail components (Gallery, Info, Reviews)
│   ├── 📂 cart/        # Cart related components
│   ├── 📂 checkout/    # Checkout forms and summaries
│   ├── 📂 blog/        # Blog cards and sidebars
│   └── 📂 user/        # User dashboard components
│
├── 📂 pages/           # Page components interacting with routes
│   ├── 📂 auth/        # Authentication pages (SignIn, Register)
│   ├── 📂 user/        # User dashboard pages (Dashboard, Orders)
│   └── [Components]    # Main pages: Home, Shop, Cart, Checkout, etc.
│
├── 📂 context/         # React Context for global state management
│   ├── AuthContext.jsx      # User authentication & session
│   ├── CartContext.jsx      # Shopping cart state & operations
│   ├── WishlistContext.jsx  # Wishlist management
│   └── ThemeContext.jsx     # Theme preferences (optional)
│
├── 📂 hooks/           # Custom React Hooks
│   ├── useAuth.js           # Authentication helper hook
│   ├── useCart.js           # Cart operations hook
│   ├── useWishlist.js       # Wishlist operations hook
│   ├── useLocalStorage.js   # LocalStorage abstraction
│   └── useDebounce.js       # Debounce for search/filters
│
├── 📂 data/            # Static JSON data files
│   ├── products.json        # Product catalog
│   ├── categories.json      # Product categories
│   ├── blogs.json           # Blog posts
│   └── faqs.json            # FAQ content
│
├── 📂 routes/          # Routing configuration
│   ├── AppRoutes.jsx        # Main route definitions
│   ├── ProtectedRoute.jsx   # Auth-protected routes wrapper
│   └── PublicRoute.jsx      # Public-only routes (redirect if logged in)
│
├── 📂 utils/           # Utility functions and constants
│   ├── constants.js         # App-wide constants
│   ├── helpers.js           # Helper functions (formatting, calculations)
│   ├── validators.js        # Form validation logic
│   └── localStorage.js      # LocalStorage operations
│
├── 📂 styles/          # Global styles
│   └── index.css            # Tailwind imports and custom CSS
│
├── App.jsx             # Main App component with Context Providers
└── main.jsx            # Application entry point
```

### **Public Directory Structure**

```
public/
├── 📂 images/
│   ├── 📂 products/         # Product images
│   │   ├── vegetables/
│   │   ├── fruits/
│   │   ├── dairy/
│   │   └── ...
│   ├── 📂 blog/             # Blog post images
│   ├── 📂 banners/          # Homepage banners
│   ├── 📂 categories/       # Category icons/images
│   └── 📂 icons/            # App icons
└── favicon.ico
```

---

## 🚀 Key Features

### **Modular Architecture**
Separation of concerns with dedicated folders for components, pages, logic, and data.

### **Context API State Management**
- **AuthContext**: User authentication, login/logout, session persistence
- **CartContext**: Add/remove items, update quantities, calculate totals
- **WishlistContext**: Manage favorite products
- **ThemeContext**: Light/dark mode toggle (optional)

### **Routing System**
- **Public Routes**: Accessible to everyone (Home, Shop, Product Details, Blog)
- **Protected Routes**: Require authentication (Dashboard, Order History, Settings)
- **Auth Routes**: Redirect to dashboard if already logged in (SignIn, Register)

### **Tailwind CSS Theming**
Centralized theme configuration in `styles/index.css` with custom color palette matching Shopery design.

---

## 📄 Page Inventory

### **Public Pages (19 Total)**
1. **Home** - Hero section, featured products, categories, newsletter modal
2. **Shop** - Product listing with filters and sorting
3. **Product Detail** - Product gallery, info, reviews, related products
4. **Shopping Cart** - Cart items, quantities, totals
5. **Wishlist** - Saved favorite products
6. **Checkout** - Billing/shipping forms, payment method, order summary
7. **Blog List** - Blog posts grid with sidebar
8. **Blog Detail** - Full blog post with comments
9. **About Us** - Company information
10. **Contact Us** - Contact form and information
11. **FAQ** - Frequently asked questions
12. **404 Not Found** - Error page

### **Authentication Pages**
13. **Sign In** - User login form
14. **Register** - New user registration

### **User Dashboard Pages (Protected)**
15. **Dashboard** - User overview, quick stats
16. **Order History** - List of past orders
17. **Order Detail** - Detailed order information
18. **Settings** - Account settings, address management

### **Dynamic Components**
- **Subscriber Modal** (Home page)
- **Product Overview Modal** (Quick view)
- **Shopping Cart Popup** (Mini cart)

---

## 🗂️ Data Structure & LocalStorage

### **Products Data Format** (`data/products.json`)
```json
{
  "products": [
    {
      "id": 1,
      "name": "Green Apple",
      "slug": "green-apple",
      "category": "fruits",
      "subcategory": "fresh-fruits",
      "price": 4.99,
      "discountPrice": 3.99,
      "discount": 20,
      "image": "/images/products/fruits/green-apple.jpg",
      "gallery": [
        "/images/products/fruits/green-apple-1.jpg",
        "/images/products/fruits/green-apple-2.jpg",
        "/images/products/fruits/green-apple-3.jpg"
      ],
      "description": "Fresh organic green apples from local farms",
      "details": "Rich in fiber and vitamin C...",
      "stock": 50,
      "unit": "kg",
      "rating": 4.5,
      "reviewCount": 12,
      "tags": ["organic", "fresh", "seasonal"],
      "nutritionFacts": {
        "calories": 52,
        "protein": "0.3g",
        "carbs": "14g"
      }
    }
  ]
}
```

### **LocalStorage Schema**

#### **User Authentication**
```javascript
localStorage.setItem('user', JSON.stringify({
  id: 1,
  email: 'john@example.com',
  name: 'John Doe',
  phone: '+1234567890',
  avatar: '/images/users/avatar-1.jpg',
  token: 'fake-jwt-token-for-demo',
  createdAt: '2025-01-15'
}));
```

#### **Shopping Cart**
```javascript
localStorage.setItem('cart', JSON.stringify([
  {
    id: 1,
    productId: 1,
    name: 'Green Apple',
    price: 3.99,
    quantity: 2,
    image: '/images/products/fruits/green-apple.jpg',
    addedAt: '2025-02-06T10:30:00'
  }
]));
```

#### **Wishlist**
```javascript
localStorage.setItem('wishlist', JSON.stringify([
  {
    productId: 1,
    addedAt: '2025-02-05T14:20:00'
  },
  {
    productId: 5,
    addedAt: '2025-02-06T09:15:00'
  }
]));
```

#### **Order History**
```javascript
localStorage.setItem('orders', JSON.stringify([
  {
    orderId: 'ORD-20250206-001',
    userId: 1,
    items: [
      {
        productId: 1,
        name: 'Green Apple',
        price: 3.99,
        quantity: 2,
        subtotal: 7.98
      }
    ],
    subtotal: 7.98,
    shipping: 5.00,
    tax: 1.30,
    total: 14.28,
    status: 'delivered', // pending, processing, shipped, delivered, cancelled
    paymentMethod: 'card',
    shippingAddress: {
      fullName: 'John Doe',
      phone: '+1234567890',
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'USA'
    },
    createdAt: '2025-02-01T10:30:00',
    deliveredAt: '2025-02-05T14:20:00'
  }
]));
```

---

## 🎨 Design System

### **Color Palette** (Based on Shopery Figma)
```css
/* Primary Colors */
--color-primary: #00B207;      /* Green */
--color-primary-dark: #2C742F;

/* Secondary Colors */
--color-secondary: #FF8A00;    /* Orange */

/* Neutral Colors */
--color-gray-50: #F9FAFB;
--color-gray-100: #F3F4F6;
--color-gray-200: #E5E7EB;
--color-gray-600: #4B5563;
--color-gray-900: #111827;

/* Status Colors */
--color-success: #00B207;
--color-warning: #FF8A00;
--color-error: #EF4444;
--color-info: #3B82F6;
```

### **Typography**
- **Font Family**: 'Poppins', sans-serif
- **Headings**: Bold, varying sizes (H1: 48px, H2: 40px, H3: 32px)
- **Body Text**: Regular, 16px
- **Small Text**: 14px

---

## 🛠️ Development Setup

### **Prerequisites**
- Node.js 18+ and npm/yarn installed
- Git installed
- Code editor (VS Code recommended)
- Basic knowledge of React and JavaScript

### **Installation Steps**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/L-O-R/ecommerce-student-project.git
   cd ecommerce-student-project
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in Browser**
   ```
   http://localhost:5173
   ```

### **Available Scripts**
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

---

## 👨‍💻 Student Workflow

### **Step 1: Get Your Assignment**
Your instructor will assign you a specific component or page to work on.

### **Step 2: Create Your Feature Branch**
```bash
# Make sure you're on main and up to date
git checkout main
git pull origin main

# Create your feature branch
# Format: yourname/feature-description
git checkout -b john/product-card-component
```

### **Step 3: Work on Your Feature**
```bash
# Make your changes
# Test your component

# Stage your changes
git add .

# Commit with a clear message
git commit -m "feat: add ProductCard component with price and rating display"
```

**Commit Message Guidelines:**
- `feat:` - New feature
- `fix:` - Bug fix
- `style:` - Code formatting, no logic change
- `refactor:` - Code restructuring
- `docs:` - Documentation changes
- `test:` - Adding tests

### **Step 4: Push Your Branch**
```bash
git push origin john/product-card-component
```

### **Step 5: Create a Pull Request**
1. Go to GitHub repository
2. Click "Pull requests" → "New pull request"
3. Select your branch
4. Fill in the PR template:
   - **Title**: Clear description (e.g., "Add ProductCard Component")
   - **Description**: What you built, how to test it
   - **Screenshots**: If UI changes (required!)
5. Submit PR and wait for instructor review

### **Step 6: Address Review Comments**
```bash
# Make requested changes
git add .
git commit -m "fix: update ProductCard styling per review comments"
git push origin john/product-card-component
```

### **Step 7: After Approval & Merge**
```bash
# Switch back to main
git checkout main

# Pull the latest changes (including your merged code!)
git pull origin main

# Delete your local feature branch (optional but recommended)
git branch -d john/product-card-component
```

---

## ⚠️ Important Rules

### **❌ Never Do This:**
- ❌ Push directly to `main` branch
- ❌ Work on someone else's branch without permission
- ❌ Merge your own pull request
- ❌ Commit node_modules or build files
- ❌ Use inline styles (use Tailwind classes)
- ❌ Hardcode data (use JSON files from `/data` folder)

### **✅ Always Do This:**
- ✅ Pull latest changes before creating a new branch
- ✅ Test your code before pushing
- ✅ Write meaningful commit messages
- ✅ Add comments for complex logic
- ✅ Follow the existing code style
- ✅ Use Tailwind CSS classes for styling
- ✅ Make components reusable when possible
- ✅ Add PropTypes or TypeScript types (if applicable)

---

## 🎓 Component Development Guidelines

### **Component Structure Template**
```jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * ProductCard Component
 * Displays product information with image, name, price, and rating
 * 
 * @param {Object} product - Product data object
 * @param {Function} onAddToCart - Callback when add to cart is clicked
 */
const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* Component JSX */}
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number
  }).isRequired,
  onAddToCart: PropTypes.func
};

export default ProductCard;
```

### **Best Practices**
1. **One Component Per File**: Each component in its own file
2. **Descriptive Names**: Use PascalCase for components (e.g., `ProductCard.jsx`)
3. **Props Validation**: Use PropTypes or TypeScript
4. **Reusability**: Make components flexible with props
5. **Accessibility**: Add aria-labels, alt text for images
6. **Responsive Design**: Use Tailwind's responsive classes (`sm:`, `md:`, `lg:`)

---

## 🧪 Testing Your Work

### **Manual Testing Checklist**
- [ ] Component renders without errors
- [ ] All interactive elements work (buttons, links, forms)
- [ ] Responsive on mobile, tablet, and desktop
- [ ] Data from JSON files displays correctly
- [ ] LocalStorage updates properly (if applicable)
- [ ] Navigation works correctly
- [ ] No console errors or warnings

### **Browser Testing**
Test in at least:
- Chrome (latest)
- Firefox (latest)
- Safari (if on Mac)

---

## 📚 Resources

### **Documentation**
- [React Documentation](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Router Docs](https://reactrouter.com/)

### **Figma Design**
[Shopery Figma Template](https://www.figma.com/design/XWrImCr2Ky1BvIClmU30q9/Shopery---Organic-eCommerce-Shop-Website-Figma-Template--Community---Community-?t=Czc27P81OX9kBpuF-0)

### **Helpful Tutorials**
- [React Context API Tutorial](https://react.dev/learn/passing-data-deeply-with-context)
- [Tailwind CSS Crash Course](https://tailwindcss.com/docs/utility-first)
- [Git Branching Strategy](https://learngitbranching.js.org/)

---

## 🤝 Getting Help

### **Ask Questions**
1. Check existing documentation first
2. Search closed PRs for similar issues
3. Ask in project discussions or team chat
4. Tag your instructor in PR comments

### **Stuck on Something?**
- Review the Figma design carefully
- Check similar components for reference
- Look at existing code in the repository
- Ask a peer for a code review

---

## 📞 Contact

**Instructor**: [Your Name]  
**Email**: [Your Email]  
**Office Hours**: [Your Schedule]

---

## 📝 License

This project is for educational purposes only.

---

## 🎉 Acknowledgments

- Figma Design: Shopery Template Community
- Students: See [CONTRIBUTORS.md](./CONTRIBUTORS.md)

---

**Happy Coding! 🚀**