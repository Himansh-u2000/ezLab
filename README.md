# Varnan — Front-End Intern Test

A single-page responsive React app (Vite + Tailwind) that recreates the Figma Home page and integrates a contact form with the provided API.

Live preview (deployed on Vercel): https://ez-lab-iota.vercel.app/
(Replace the URL above with your actual Vercel deployment URL.)

## Features

- Responsive homepage (desktop & mobile)
- Contact form with front-end validation and API integration
- Reusable components: Input, TextArea, CommonButton, Hero, ServiceLayout
- Environment-driven API URL via Vite (.env)

## Tech Stack

- React (Vite)
- Tailwind CSS
- react-router-dom
- Fetch API
- Environment variables via Vite (.env)

## Contact Form / API

- Endpoint (configured in [.env](.env)): `VITE_API_URL=https://vernanbackend.ezlab.in/api/contact-us/`
- POST JSON body:
  {
  "name": "Test user",
  "email": "testuser@gmail.com",
  "phone": "908765498",
  "message": "This is a message"
  }
- Behavior:
  - Front-end validation for required fields and email format
  - Shows "Form Submitted" on successful submission (HTTP 200)
  - Loading state and basic error handling implemented in [`Contact`](src/pages/Contact.jsx)

## Setup (local)

1. Install:
   npm install
2. Create/verify .env:
   VITE_API_URL=https://vernanbackend.ezlab.in/api/contact-us/
3. Run dev server:
   npm run dev
4. Build:
   npm run build
   npm run preview

## Notes / Suggestions

- Improve accessibility (aria attributes, focus outlines).
- Consider adding unit tests for validation and components.
- Replace the Live Preview URL with the exact Vercel deployment link.

## Deliverables

- Git repository URL
- Postman collection (export) for the contact API
- Deployed app URL (Vercel)
