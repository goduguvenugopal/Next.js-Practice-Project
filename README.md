
🧭 Next.js Practical Exploration — Product Store
📘 Overview

This project is part of my journey to learn and explore Next.js concepts practically, focusing mainly on client-side rendering (CSR).
I’m building a simple Product Store using the Fake Store API
 to understand key features like:

use client directive

Next.js app router

Context API for global state

Dynamic routes using useParams()

Image optimization with <Image />

Responsive UI using Tailwind CSS

🚀 Tech Stack

Next.js 14+ (App Router)

React 18

Tailwind CSS

Fake Store API

Context API (for global product state)

🧩 Features

✅ Fetch and display products from API
✅ View individual product details dynamically (/products/[id])
✅ Manage product data globally using useContext()
✅ Responsive layout with Tailwind CSS
✅ Practice using useEffect(), useParams(), and component reusability

📁 Folder Structure
app/
 ├── context/
 │    └── ProductsProvider.jsx      # Context for products
 ├── products/
 │    ├── page.jsx                  # Product list page
 │    └── [productId]/page.jsx      # Product overview page
 ├── globals.css                    # Tailwind base styles
 ├── layout.jsx                     # Root layout
 └── page.jsx                       # Home page

⚙️ Setup & Run Locally

Clone the repo

git clone https://github.com/yourusername/nextjs-product-store.git
cd nextjs-product-store


Install dependencies

npm install


Run development server

npm run dev


Open in your browser

http://localhost:3000

🧠 What I’m Learning Here

How client-side components work in Next.js

How to share data across pages using React Context

How dynamic routing and useParams() work

How to handle asynchronous data fetching inside useEffect

How to use Next.js <Image /> component with external sources

Responsive design with Tailwind CSS

🪄 Example API Response
{
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest.",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
}

🎯 Future Enhancements

Add “Add to Cart” feature

Use Next.js Server Components + API routes

Add loading states and skeleton UI

Implement search and filtering

Add SEO metadata with Next.js metadata API














This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
