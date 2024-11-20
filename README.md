## Frontend Project Highlight

**Online Preview:** https://scentronix-frontend-phi.vercel.app/recipes/5fc03b68-b40a-4a0b-a786-086de43dc1d3

* MUI with customisation
* ESLint
* TypeScript
* OpenAPI TypeScript to generate frontend API types from swagger.json
* Tsoa to generate API documentation (swagger.json) based on decorators
* lowdb and Faker for mock data
* husky, lint-staged, commit lint, git conventional commit, release-it for linting, generating changelogs, and defining release versions

Thing I would like to do if had more time:
- Apply Jest and React Testing Library for unit tests
- More customization for the layout to have a look and feel like the mockup
- i18n to demostrate multi-languages integration

It had been a long time since I worked with Next.js and MUI, so it took a decent amount of time to review the documentation to complete this project.

## Backend Project Highlight
I put it in the same project under the folder backend. Please find the implementation in the file `find-server.ts`
This code used jest and axios-mock-adapter for unit tests

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.

## Command

To generate api swagger and types for frontend:
```bash
npm run api:generate 
```