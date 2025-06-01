# 🛍️ ShopVibe - React E-commerce Frontend

Welcome to **ShopVibe**, a fully responsive and modern e-commerce frontend built with **React**, **Context API**, **Axios**, and **plain CSS**. This project serves as a hands-on learning experience for building real-world React applications with no backend dependencies.

---

## 🚀 Live Demo

**Link:** [https://yourusername.github.io/shopvibe](https://yourusername.github.io/shopvibe)

---

## 📦 Features

- ✅ Product listing using live API (FakeStoreAPI)
- ✅ Product detail pages with dynamic routing
- ✅ Add to cart functionality using Context API
- ✅ Persistent cart using localStorage
- ✅ Responsive design for mobile/tablet/desktop
- ✅ Pagination and category-based filtering
- ✅ Quantity controls in cart (increase/decrease)
- ✅ Custom 404 page and empty cart UI
- ✅ Dark/light mode toggle
- ✅ Branding: logo, favicon, unified color scheme

---

## 🛠️ Technologies Used

- **React (CRA)**
- **React Router DOM** – for routing
- **Axios** – for HTTP requests
- **Context API + useState** – for global state management
- **CSS (Flex/Grid + Media Queries)** – for styling
- **localStorage** – for cart persistence

---

## 📁 Project Structure

```
src/
├── assets/            # Images and icons
├── components/        # Navbar, Footer, ProductCard, CartContext
├── pages/             # Home, Products, ProductDetail, Cart, NotFound
├── styles/            # CSS files
├── App.js             # Main router and layout
└── index.js           # Entry point
```

---

## 🔗 API Source

Using: [https://fakestoreapi.com](https://fakestoreapi.com)

---

## 🧪 How to Run Locally

```bash
git clone https://github.com/yourusername/shopvibe.git
cd shopvibe
npm install
npm start
```

Visit: `http://localhost:3000`

---

## 🚀 Deploy to GitHub Pages

1. Add this to `package.json`:

```json
"homepage": "https://yourusername.github.io/shopvibe"
```

2. Install GH Pages:

```bash
npm install gh-pages --save-dev
```

3. Add deploy scripts:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

4. Run:

```bash
npm run deploy
```

---

## ✨ Credits

- Design & Development: \[Your Name]
- Logo Concept: Shopping bag + signal wave ("Vibe")
- Data: [FakeStoreAPI](https://fakestoreapi.com)

---

## 📜 License

This project is open source and free to use for learning purposes.
