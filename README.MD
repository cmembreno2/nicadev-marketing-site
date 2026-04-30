# NICADEVELOPMENT Marketing Website

Static marketing website for NICADEVELOPMENT built with plain HTML, CSS, and JavaScript.

## Overview

This landing page showcases digital services:

- Desarrollo web
- Hosting
- Marketing
- Automatizaciones

The project is intentionally simple: no frameworks, no build tools, and no bundlers.

## Requirements

- Node.js 18+ (recommended)

## Getting Started

1. Install Node.js if not already installed.
2. From the project root, run:

```bash
node server.js
```

3. Open:

```text
http://localhost:3000
```

## Project Structure

```text
marketing_website/
├── public/
│   └── images/
│       └── logo.png
├── src/
│   ├── js/
│   │   └── main.js
│   └── styles/
│       └── main.css
├── index.html
└── server.js
```

## Notes

- `index.html` is the main document.
- `src/js/main.js` contains the mobile nav toggle logic.
- `src/styles/main.css` contains all styles.
- `server.js` is a simple Node HTTP static server with MIME type handling.

## Run in Production

This project can run in any environment that supports Node.js:

```bash
node server.js
```

For production deployment, run behind a reverse proxy (for TLS and caching) if needed.
