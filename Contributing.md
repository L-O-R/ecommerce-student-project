# 🤝 Contributing Guide

Thank you for contributing to the Shopery eCommerce Training Project! This guide will help you understand how to contribute effectively.

---

## 🎯 Getting Started

### 1. **Understand the Project**
- Read the [README.md](./README.md) thoroughly
- Review the [Figma Design](https://www.figma.com/design/XWrImCr2Ky1BvIClmU30q9/Shopery---Organic-eCommerce-Shop-Website-Figma-Template--Community---Community-?t=Czc27P81OX9kBpuF-0)
- Explore the existing codebase
- Check out closed PRs to see examples

### 2. **Set Up Your Development Environment**
```bash
# Clone the repo
git clone https://github.com/L-O-R/ecommerce-student-project.git
cd ecommerce-student-project

# Install dependencies
npm install

# Start dev server
npm run dev
```

---

## 📝 Contribution Workflow

### Step 1: Get Assignment
Wait for your instructor to assign you a specific component or page to work on. Check the project board or team communication channel.

### Step 2: Create Your Branch
```bash
# Always start from main
git checkout main
git pull origin main

# Create your feature branch
# Format: yourname/feature-description
git checkout -b john/product-card-component
```

**Branch Naming Convention:**
- `yourname/component-name` - For new components
- `yourname/page-name` - For new pages
- `yourname/fix-bug-description` - For bug fixes
- `yourname/refactor-description` - For code improvements

### Step 3: Make Your Changes
- Follow the coding standards (see below)
- Test your changes thoroughly
- Commit regularly with meaningful messages

### Step 4: Commit Your Work
```bash
# Stage changes
git add .

# Commit with conventional commit message
git commit -m "feat: add ProductCard component with rating display"
```

**Commit Message Format:**
```
<type>: <short description>

[optional body]
```

**Types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `style:` - Formatting, missing semicolons, etc.
- `refactor:` - Code restructuring
- `docs:` - Documentation only
- `test:` - Adding tests
- `chore:` - Updating build tasks, package manager configs, etc.

**Examples:**
```bash
git commit -m "feat: add ProductCard component"
git commit -m "fix: correct price formatting in CartItem"
git commit -m "style: format code according to ESLint rules"
git commit -m "refactor: extract filter logic into custom hook"
git commit -m "docs: update README with new component usage"
```

### Step 5: Push Your Branch
```bash
git push origin yourname/feature-name
```

### Step 6: Create Pull Request
1. Go to GitHub repository
2. Click "New Pull Request"
3. Select your branch
4. Fill out the PR template completely
5. Add screenshots (required for UI changes!)
6. Submit PR

### Step 7: Code Review Process
1. Instructor will review your code
2. Address any requested changes
3. Push updates to the same branch
4. Re-request review once changes are made

### Step 8: After Merge
```bash
# Switch to main
git checkout main

# Pull latest including your merged code
git pull origin main

# Delete your feature branch (optional)
git branch -d yourname/feature-name
```

---

## 💻 Coding Standards

### **React Component Structure**

```jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Brief component description
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Title to display
 * @param {Function} props.onClick - Click handler
 */
const ComponentName = ({ title, onClick }) => {
  // 1. Hooks
  const [state, setState] = useState(null);

  // 2. Effects
  useEffect(() => {
    // Effect logic
  }, []);

  // 3. Event handlers
  const handleClick = () => {
    onClick?.();
  };

  // 4. Helper functions
  const formatData = () => {
    // Logic here
  };

  // 5. Render
  return (
    <div className="container">
      <h2 className="text-xl font-bold">{title}</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

// PropTypes validation
ComponentName.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

// Default props
ComponentName.defaultProps = {
  onClick: null
};

export default ComponentName;
```

### **File Naming Conventions**

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `ProductCard.jsx` |
| Pages | PascalCase | `Home.jsx`, `ProductDetail.jsx` |
| Hooks | camelCase with `use` prefix | `useAuth.js`, `useCart.js` |
| Utils | camelCase | `helpers.js`, `validators.js` |
| Context | PascalCase with `Context` | `AuthContext.jsx` |

### **Folder Organization**

```
src/components/shop/
├── ProductCard.jsx        # Main component
├── ProductGrid.jsx        # Grid layout
├── FilterSidebar.jsx      # Filters
└── index.js               # Optional: exports
```

### **Import Order**

```jsx
// 1. React and external libraries
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 2. Context and hooks
import { useAuth } from '@/hooks/useAuth';
import { CartContext } from '@/context/CartContext';

// 3. Components
import Button from '@/components/common/Button';

// 4. Utils and helpers
import { formatPrice } from '@/utils/helpers';

// 5. Data
import products from '@/data/products.json';

// 6. Styles (if any separate CSS)
import './ProductCard.css';
```

---

## 🎨 Styling Guidelines

### **Use Tailwind CSS Only**
❌ **Don't:**
```jsx
<div style={{ color: 'red', padding: '10px' }}>Content</div>
```

✅ **Do:**
```jsx
<div className="text-red-500 p-4">Content</div>
```

### **Responsive Design**
Always use Tailwind's responsive prefixes:
```jsx
<div className="
  grid 
  grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-4 
  gap-4
">
  {/* Content */}
</div>
```

### **Color Palette**
Use these custom colors defined in `tailwind.config.js`:
```jsx
<button className="bg-primary hover:bg-primary-dark text-white">
  Add to Cart
</button>
```

### **Common Patterns**

**Card Component:**
```jsx
<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
  {/* Card content */}
</div>
```

**Button Primary:**
```jsx
<button className="
  bg-primary 
  hover:bg-primary-dark 
  text-white 
  font-medium 
  px-6 
  py-3 
  rounded-full 
  transition-colors
">
  Shop Now
</button>
```

**Input Field:**
```jsx
<input 
  type="text"
  className="
    w-full 
    px-4 
    py-3 
    border 
    border-gray-300 
    rounded-lg 
    focus:outline-none 
    focus:ring-2 
    focus:ring-primary 
    focus:border-transparent
  "
  placeholder="Enter your email"
/>
```

---

## 📊 Working with Data

### **Importing JSON Data**
```jsx
import products from '@/data/products.json';

const ProductList = () => {
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
```

### **Using LocalStorage**
```jsx
import { useLocalStorage } from '@/hooks/useLocalStorage';

const Component = () => {
  const [cart, setCart] = useLocalStorage('cart', []);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  return <div>Cart Items: {cart.length}</div>;
};
```

### **Context API Usage**
```jsx
import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    <button onClick={handleAddToCart}>
      Add to Cart
    </button>
  );
};
```

---

## ✅ Pre-Submission Checklist

Before creating your Pull Request:

### **Code Quality**
- [ ] No console.log() statements (unless absolutely necessary)
- [ ] No commented-out code
- [ ] No unused imports or variables
- [ ] Code follows ESLint rules (`npm run lint`)
- [ ] Meaningful variable and function names

### **Functionality**
- [ ] Component renders without errors
- [ ] All features work as expected
- [ ] No broken links or buttons
- [ ] Forms validate correctly
- [ ] Error handling implemented

### **Responsive Design**
- [ ] Tested on mobile (< 640px)
- [ ] Tested on tablet (640px - 1024px)
- [ ] Tested on desktop (> 1024px)
- [ ] No horizontal scroll on any device
- [ ] Images are responsive

### **Performance**
- [ ] Images are optimized (use WebP when possible)
- [ ] No unnecessary re-renders
- [ ] Lazy loading for images (if many)
- [ ] No memory leaks (check useEffect cleanup)

### **Accessibility**
- [ ] Alt text for all images
- [ ] Proper heading hierarchy (h1, h2, h3)
- [ ] ARIA labels for icon buttons
- [ ] Keyboard navigation works
- [ ] Sufficient color contrast

### **Documentation**
- [ ] Component has JSDoc comments
- [ ] PropTypes defined
- [ ] Complex logic has explanatory comments
- [ ] README updated (if needed)

---

## 🐛 Reporting Issues

Found a bug? Here's how to report it:

1. Check if issue already exists
2. Create new issue with:
   - Clear title
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots
   - Browser/device info

**Issue Template:**
```markdown
**Bug Description:**
Brief description of the bug

**Steps to Reproduce:**
1. Go to...
2. Click on...
3. See error

**Expected Behavior:**
What should happen

**Actual Behavior:**
What actually happens

**Screenshots:**
[Attach screenshots]

**Environment:**
- Browser: Chrome 120
- Device: Desktop
- OS: Windows 11
```

---

## 🆘 Getting Help

### **Stuck on something?**

1. **Check Documentation**
   - README.md
   - Component comments
   - Existing similar components

2. **Search Existing Issues/PRs**
   - Someone may have solved it already

3. **Ask for Help**
   - Comment on your PR
   - Ask in team chat
   - Tag instructor: @L-O-R

4. **Debugging Tips**
   - Check browser console
   - Use React DevTools
   - Add console.log temporarily
   - Check component props

---

## 🎯 Component Assignment Examples

### **Small Tasks (1-2 days)**
- ProductCard component
- Newsletter subscription modal
- Breadcrumb navigation
- Pagination component

### **Medium Tasks (3-5 days)**
- Product detail page
- Shopping cart page
- User settings page
- Blog post card with comments

### **Large Tasks (1 week)**
- Checkout flow (multi-step)
- User dashboard
- Shop page with filters
- Order history with details

---

## 🏆 Code Review Criteria

Your PR will be evaluated on:

1. **Functionality** (40%)
   - Works as expected
   - No bugs
   - Edge cases handled

2. **Code Quality** (30%)
   - Clean, readable code
   - Proper structure
   - No code smells

3. **Design Accuracy** (20%)
   - Matches Figma design
   - Responsive
   - Attention to detail

4. **Best Practices** (10%)
   - Follows React conventions
   - Proper state management
   - Performance optimized

---

## 📚 Resources

- [React Best Practices](https://react.dev/learn/thinking-in-react)
- [Tailwind CSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
- [Git Workflow Guide](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [Writing Good Commit Messages](https://chris.beams.io/posts/git-commit/)

---

## ❓ FAQ

**Q: Can I work on multiple features at once?**  
A: It's better to focus on one feature at a time. Finish and merge one before starting another.

**Q: What if I want to refactor existing code?**  
A: Ask your instructor first. Create a separate PR for refactoring, don't mix with new features.

**Q: Can I use external libraries?**  
A: Ask your instructor first. Stick to the approved tech stack unless there's a good reason.

**Q: What if my branch has conflicts with main?**  
A: Update your branch:
```bash
git checkout main
git pull origin main
git checkout your-branch
git merge main
# Resolve conflicts
git push origin your-branch
```

**Q: How long should code review take?**  
A: Usually 1-2 business days. If urgent, message your instructor.

---

## 🎉 Recognition

Outstanding contributions may earn you:
- Mention in README
- "Top Contributor" badge
- Code review privileges
- Mentoring opportunities

---

**Happy Coding! Let's build something amazing together! 🚀**