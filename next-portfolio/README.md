# Next.js Portfolio
ddd
A polished React/Next.js portfolio with:
- dark/light theme toggleddddd
- downloadable resume PDF
- case studies with image previews
- testimonials and full blog article pages
- Formspree contact form integration placeholder
- motion animations and responsive layout

## Run locally

1. Open a terminal in `C:\Users\joshu\Portfolio\next-portfolio`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000`

## Project structure
- `app/page.js` — renders the portfolio page wrapper
- `components/HomePage.js` — contains the page content and sections
- `components/ThemeToggle.js` — dark/light theme toggle button
- `app/globals.css` — global styling, responsive layout, and animations

## Customize content
Update the following file to change case studies, testimonials, blog posts, or contact details:
- `components/HomePage.js`

## Notes
- The theme toggle stores the selected mode in `localStorage`.
- The contact form is configured for Formspree. Replace `yourFormId` in `components/HomePage.js` with your Formspree form ID to activate submissions.
- The download button links to `public/Joshua_Resume.pdf`, making the resume available immediately.
