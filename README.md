# Portfolio

A minimal one-page portfolio built with React and Vite. It follows the system light/dark theme and is responsive down to phone width.

## Sections

Intro (with an animated diagram of the backend layers I build), Experience, Projects, Achievements, Writing, Skills, Community, Contact

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build in dist/
npm run preview  # serve the production build locally
npm run lint     # lint with oxlint
```

## Structure

```
src/
  data.js     all page content (profile, projects, skills, links)
  App.jsx     page layout and section components
  icons.jsx   inline SVG icons
  index.css   theme tokens and styles
```

To change the content, edit `src/data.js`; no component changes are needed for text, links or tags.

## Deploying

The build output in `dist/` is a static site and can be hosted on any static host, such as Vercel or GitHub Pages.
