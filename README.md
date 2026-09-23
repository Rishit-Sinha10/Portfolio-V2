# rishit

A personal portfolio built with Next.js. It displays projects, blog posts, and work experience through a responsive, animated interface.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Tests](#tests)

## Features

- Static and dynamic blog routing with MDX content.
- Animated SVG icons with hover interactions.
- Project overview cards with skill badges and status indicators.
- Smooth scroll and page transition animations.
- Dark mode toggle.
- Contact section with social links.
- Experience timeline with collapsible responsibilities.

## Requirements

- Node.js 20+ (implied by `@types/node` in `devDependencies`).

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Usage

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Available scripts:

```bash
npm run build
npm run start
npm run lint
```

## Project Structure

- `app/` — Next.js App Router pages and components.
  - `blog/` — Blog listing and individual post pages.
  - `components/` — Reusable UI components.
  - `contact/` — Contact page.
  - `experience/` — Experience timeline page.
  - `hooks/` — Custom React hooks.
  - `layout.tsx` — Root layout.
  - `pages/` — Standalone pages (Home, GitHub, Reavel).
  - `projects/` — Projects listing page.
  - `work/` — Individual work detail pages.
- `content/` — MDX blog content.
- `data/` — Static data files.
- `lib/` — Utility functions and types.
- `public/` — Static assets (images, fonts, resume PDF).
- `types/` — TypeScript declaration files.

## Tests

No test files are present in the repository.