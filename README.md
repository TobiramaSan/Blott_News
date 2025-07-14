# MAON Web Assessment

This project is a web assessment for **MOAN**, focusing on a **Finance Digest** application. It features a responsive and accessible user interface for displaying market news, powered by a dedicated backend service.

---

## Features

- **Responsive Design**  
  Optimized for various screen sizes, from mobile to large desktop displays.

- **Accessibility (A11y)**  
  Designed with visually impaired users in mind using semantic HTML and ARIA attributes for enhanced usability.

- **Graceful Error and Loading Handling**  
  Provides clear feedback during data fetching and in case of errors.

- **Soft Animations**  
  Enhances user experience with subtle animations powered by **Framer Motion**.

- **Client-Side Pagination**  
  Efficiently loads and displays news articles with client-side caching to avoid re-fetching.

- **Modular Component Architecture**  
  Components are logically organized (`components`, `api`, `utils`) for maintainability and reusability.

---

## Project Structure

This project is divided into two main parts:

- `./blott-ui` – The frontend application built with **Next.js**
- `./my-finnhub-backend` – The backend service that fetches data from the **Finnhub API**

---

## Technologies Used

### Frontend (`./blott-ui`)

- **Next.js 15.x** – React framework for production
- **React 19.x** – UI library
- **TypeScript** – For type-safe development
- **Tailwind CSS** – Utility-first CSS framework
- **Framer Motion** – Declarative animations
- **Storybook** – UI component development and documentation
- **Playwrite** – Unit testing

### Backend (`./my-finnhub-backend`)

- **Node.js** – JavaScript runtime
- **Express.js** – Web server framework
- **Finnhub API** – Real-time market news data
- **Axios** – For making HTTP requests

---

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm or Yarn

---

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/TobiramaSan/Blott_News.git
   cd Blott_News
   ```

2. **Install Backend Dependencies**

   ```bash
   cd my-finnhub-backend
   npm install
   ```

3. **Install Frontend Dependencies**

   ```bash
   cd ../blott-ui
   npm install
   ```

---

### Next.js Image Domains

If you use external image URLs (e.g., `static2.finnhub.io`, `image.cnbcfm.com`, `placehold.co`), configure `blott-ui/next.config.js` like this:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "static2.finnhub.io" },
      { protocol: "https", hostname: "image.cnbcfm.com" },
      { protocol: "https", hostname: "placehold.co" },
    ],
  },
};

module.exports = nextConfig;
```

---

### Environment Variables

Create a `.env.local` file in the `blott-ui` directory:

```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
```

---

## Running the Application

### Start the Backend

```bash
cd my-finnhub-backend
npm run dev
```

> Runs on `http://localhost:5000`

### Start the Frontend

```bash
cd ../blott-ui
npm run dev
```

> Runs on `http://localhost:3000` (or next available port)

---

## Testing

### Storybook (Component UI Tests)

```bash
cd blott-ui
npm run storybook
```

> Opens Storybook UI at `http://localhost:6006`

Use it to browse and test components in isolation.

---

### Unit Tests (Playwrite + Testing Library)

```bash
cd blott-ui
npm test
```

> Runs all `.test.ts` and `.test.tsx` files

---

## Accessibility (A11y)

This project prioritizes **accessibility**:

- Semantic HTML5: `<main>`, `<nav>`, `<button>`, `<a>`
- ARIA attributes: `aria-label`, `aria-disabled`, `role="alert"`, etc.
- Descriptive `alt` text for all images
- Keyboard navigation support
- Responsive, readable typography

---
