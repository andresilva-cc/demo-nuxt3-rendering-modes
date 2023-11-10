# Demo of Rendering Modes in Nuxt 3

## Setup

Make sure to install the dependencies:

```bash
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
yarn dev
```

PS: To preview each rendering mode, use the production build as described below.

## Production

Build the application for production:

```bash
yarn build
```

Locally preview production build:

```bash
yarn preview
```

## Rendering Modes

### CSR

The page is rendered on the client-side.

Use your browser devtools to simulate a slow 3G network to view the blank page while the JavaScript is downloaded.

### SSR

The page is rendered on the server-side. A new color is generated on every request.

Use your browser devtools to simulate a slow 3G network to view that the page is already visible before the JavaScript is downloaded.

### SSG

The page is rendered on the server-side at build time. The color never changes, because the request executes only once at build time.

Use your browser devtools to simulate a slow 3G network to view that the page is already visible before the JavaScript is downloaded.

### ISR

The page is rendered on the server-side and cached. It has a TTL of 10 seconds, and after that, it triggers a regeneration in the background, thus providing a new color when the regeneration is completed.

Use your browser devtools to simulate a slow 3G network to view that the page is already visible before the JavaScript is downloaded.