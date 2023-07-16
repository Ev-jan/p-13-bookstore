# Bookstore

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The Bookstore is a web application built with Next.js, React, TypeScript, styled-components, Redux Toolkit, and Redux Persist. It allows users to browse books in various categories, add them to the cart, and edit their profile.

You can visit the live version of the app at [https://bookstore-nextjs-ecru.vercel.app/]([https://bookstore-nextjs-ecru.vercel.app/](https://p-13-bookstore-zeuq.vercel.app/)).

## Features

- Browse books in different categories
- Add books to the cart
- Edit user profile
- Persist user data using Redux Persist

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [styled-components](https://styled-components.com/) - CSS-in-JS library for styling components
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management library for Redux
- [Redux Persist](https://github.com/rt2zz/redux-persist) - Library for persisting Redux store data

## Getting Started

To run the Bookstore application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone [ https://github.com/your-username/bookstore.git](https://github.com/Ev-jan/p-13-bookstore.git)
   ```

2. Install the dependencies:

   ```bash
   cd bookstore
   npm install
   ```

3. Set up environment variables:

   Create a `.env.local` file in the root directory and provide the necessary environment variables:

   ```plaintext
   NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY=your_google_books_api_key
   ```

   Note: Obtain a Google Books API key by following the [Google Books API documentation](https://developers.google.com/books/docs/v1/using#APIKey).

4. Run the development server:

   ```bash
   npm run dev
   ```

   The app will be accessible at [http://localhost:3000](http://localhost:3000).
