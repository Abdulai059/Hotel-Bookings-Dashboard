

# Hotel Bookings Dashboard

A lightweight React + Vite admin dashboard for managing cabins, guests and bookings. Built with React Router, React Query, Supabase and styled-components. Includes reusable UI primitives, sample-data upload utilities and common CRUD workflows for bookings and cabins.

## Key features
- Bookings, cabins and guest management (CRUD)
- Check-in / check-out flows with notifications
- Authentication flow with redirect after sign-in
- Reusable UI components: Table, Modal, Form primitives, Selects
- Sample data uploader for local development

## Tech stack
- React (Vite)
- React Router
- React Query (@tanstack/react-query)
- Supabase (storage & database)
- styled-components
- react-hot-toast for notifications

## Quick start

Prerequisites
- Node.js (16+ recommended)
- npm or yarn
- Supabase project (for production or full feature usage)

Install
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
- Follow existing code patterns (functional components, hooks, React Query).
- Open focused PRs and document behavior changes.
- Add a .env.example to show required environment variables.

## License
Add a LICENSE file appropriate to your needs (e.g., MIT).

If you want, I can add:
- a .env.example
- a CONTRIBUTING.md template
- basic unit tests scaffolding
