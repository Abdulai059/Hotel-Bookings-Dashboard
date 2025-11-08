# Hotel Bookings Dashboard

A modern, lightweight **React + Vite** admin dashboard for managing cabins, guests, and bookings.  
Built with **React Router**, **React Query**, **Supabase**, and **styled-components**, it includes reusable UI primitives, sample data utilities, and standard CRUD workflows for bookings and cabins.  

![Hotel Bookings Dashboard](public/wild-aosis-app.png)
---

## Key Features

- Full **CRUD** for bookings, cabins, and guests  
- **Check-in / Check-out flows** with real-time notifications  
- **Authentication flow** with redirect after sign-in  
- Reusable UI components: Table, Modal, Form primitives, Selects, Sidebar  
- **Sample data uploader** for local development  
- Responsive layout and accessible UI  

---

## Tech Stack

- **React (Vite)**  
- **React Router**  
- **React Query (@tanstack/react-query)**  
- **Supabase** (Database & Storage)  
- **styled-components**  
- **react-hot-toast** for notifications  

---

## Quick Start

### Prerequisites

- Node.js 16+  
- npm or yarn  
- Supabase project (for production or full feature usage)  

### Install Dependencies

```bash
npm install
# or
yarn

```

Run (development)
```bash
npm run dev
# or
yarn dev
```

Build / Preview
```bash
npm run build
npm run preview
```

## Environment variables

Create a .env.local or .env file (not committed) with at least:
- SUPABASE_URL=your-supabase-url
- SUPABASE_KEY=your-supabase-anon-key

The Supabase client is initialized in `src/services/supabase.js`. Keep keys secret and do not commit them.

## Project structure (high level)
- src/
  - features/
    - authentication/useLogin.js
    - settings/useSettings.js
  - services/
    - apiAuth.js
    - apiBookings.js
    - apiCabins.js
    - supabase.js
  - ui/ (reusable components: Table, Modal, Sidebar, etc.)
  - pages/ (Dashboard, Bookings, Cabins, Settings, Login, 404)
  - data/ (sample data and Uploader component)

Important files:
- `src/features/authentication/useLogin.js` — login hook with navigation on success
- `src/services/apiAuth.js` — auth API wrapper used by the hook
- `src/data/Uploader.jsx` — utilities for importing sample data

## Development notes
- Data fetching and mutations use React Query.
- Styled-components for styling and global theme.
- Toast notifications via react-hot-toast for user feedback.
- Ensure Supabase row-level security and CORS are configured before production use.

## Tests & linting
- Add unit tests and lint scripts as needed. (No tests included by default.)

## Contributing
- Follow existing code patterns (functional components, hooks, React Query)
- Open focused pull requests and document behavior changes
- Add a .env.example to show required environment variables
- Keep UI consistent with existing styled-components patterns


## License
Add a LICENSE file appropriate to your needs (e.g., MIT).

If you want, I can add:
- .env.example file for environment variable reference
- CONTRIBUTING.md template for onboarding contributors
- Basic unit tests scaffolding for React Query hooks and UI components
