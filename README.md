# AjX-Shop

AjX-Shop is a **frontend-only e-commerce application** built for learning and practicing real-world frontend concepts using **React** and modern tooling. The project uses **FakeStore API** to display mock products and gradually evolves with features like filtering, sorting, cart, wishlist, and single product pages.

This README acts as a **living document**. As new features are added or architecture changes, this file should be updated accordingly.

---

## Project Goals

- Practice **real-world React patterns**
- Understand **component-based architecture**
- Implement **frontend-only e-commerce logic** (no backend)
- Improve skills in **state management, routing, UI, and UX**
- Prepare a solid foundation for **full-stack freelancing projects**

---

## Tech Stack

- **React** – UI library
- **React DOM** – DOM rendering
- **React Router DOM** – Client-side routing
- **Parcel** – Bundler
- **Tailwind CSS** – Utility-first CSS framework
- **FakeStore API** – Fake product data source

---

## Project Structure (Current)

```
AjX-Shop/
│
├── src/
│   ├── components/        # Reusable UI components (Card, Button, etc.)
│   ├── context/           # Create a context API to avoid props drilling
│   ├── pages/             # Page-level components (Home, Shop, Cart)
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Helper functions (constant data, reducer)
│   ├── route/             # All Route t move any particular url
│   ├── App.jsx            # Main app component
|
├── main.js                # Entry point
│
├── public/
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

> Structure may evolve as the project grows.

---

## Data Source

- **API:** FakeStore API
- **Endpoint Used:**

  ```
  https://fakestoreapi.com/products
  ```

### Product Data Fields

Each product contains:

- `id`
- `title`
- `price`
- `description`
- `category`
- `image`
- `rating`

---

## Current Features

✅ Project setup with Parcel + React

✅ Tailwind CSS configured

✅ Shop page created

✅ Products fetched from FakeStore API

✅ Products displayed as cards

✅ Filter Products by: (search, sort, category, rating, price Range)

### ✅ Single Product Page

- ✅ Full product details
- ✅ Better layout & styling
- ✅ Add to cart / wishlist button /Buy Now button

### ✅ Cart Page

- ✅ Add to cart
- ✅ Remove from cart
- ✅ Increase / decrease quantity
- ✅ Cart total calculation
- ✅ Persist cart using `localStorage`

---

## UI Components (Current)

### Product Card (Shop Page)

- Image
- Title
- Price
- Category
- Rating

> Clicking on a product will navigate to a **Single Product Page**.

---

## Routing (Planned / Partial)

- `/` → Home (optional)
- `/shop` → Product listing page
- `/shop/:id` → Single product page
<!-- - `/cart` → Cart page
- `/wishlist` → Wishlist page -->

---

## Planned Features (Frontend Only)

<!-- ### Core Features

- Filter products by:
  - Category
  - Price range
  - Rating

- Sort products by:
  - Price (Low → High, High → Low)

- Search products by title -->

<!-- ### Cart

- Add to cart (Done)
- Remove from cart
- Increase / decrease quantity
- Cart total calculation
- Persist cart using `localStorage` -->

### Wishlist

- Add / remove products
- Persist wishlist using `localStorage`

<!-- ### Single Product Page

- Full product details
- Better layout & styling
- Add to cart / wishlist button /Buy Now button -->

---

## State Management (Planned)

- React `useState` , `useEffect`, & `useMemo`
- Context API for:
  - Cart state
  - Wishlist state

> No external state management library planned for now.

---

## Styling

- Tailwind CSS utility classes
- Mobile-first responsive design
- Reusable UI components

---

<!-- ## Testing (Future Scope)

- Manual UI testing
- Possible introduction to:
  - React Testing Library
  - Jest (optional)

--- -->

## Notes for Future Me

- Keep components **small and reusable**
- Avoid prop drilling where possible
- Prefer **derived state** over duplicated state
- Keep logic in `utils/` and UI in `components/`
- Update this README whenever:
  - A new feature is added
  - Folder structure changes
  - Tech stack changes

---

## Project Status

**In Progress** – Actively being developed and improved

---

## Author

**Ajmat Ali**
Frontend / Full‑Stack (MERN) Learner & Freelancer Aspirant

---

> This project is for **learning & portfolio purposes**.
