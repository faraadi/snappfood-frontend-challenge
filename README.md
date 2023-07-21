This is a front-end challenge for [Snappfood](https://snappfood.com). 

- [Demo](#demo)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Building for Production](#building-for-production)
- [Project Structure](#project-structure)

## Demo
Checkout the online demo here [snappfood-frontend-challenge.netlify.app](https://snappfood-frontend-challenge.netlify.app/)

## Technologies
- Node v16
- npm v8
- Typescript v4
- React v18
- Vite v4
- Sass
- Redux Toolkit
- ESLint

## Getting Started

Clone and install the dependencies then start the dev server:
```bash
git clone https://github.com/faraadi/snappfood-frontend-challenge.git
cd snappfood-frontend-challenge
npm ci
npm run dev
```

Now head to [localhost:3000](http://localhost:3000) and see the app.

## Building for Production
Run the following
```sh
npm ci
npm run build
```
The build files can be found in `/dist` directory.

### Preview Production Locally

After building for production, you can run a static local server to see the output:
```sh
npm run preview
```

## Project Structure

``` bash
├── assets # assets and styles.
├── lib # modules, components and everything else...
	├── components # Shared UI components used in apps.
	├── service # http services to contact the API.
	├── store # Redux store and slices.
	├── types # Shared Typescript types and interfaces.
	├── utils # utility functions.
├── routes # routes and views.
	├── Default # The default layout and its sub-routes.
	├── routes.tsx # Routes definitions.
├── main.tsx # entry point.
```

### License
MIT