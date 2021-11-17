# Housing Repairs Online

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install all dependencies:

```bash
yarn install
```

Globally install azure function tools:

```bash
 npm install -g azure-functions-core-tools@3 --unsafe-perm true
 ```
In one terminal run the next development server:

```bash
yarn dev
```

In another terminal run the function server:

```bash
cd api/ && yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/[route].js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/address.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# General note dump

- Testing:
  - [Jest](https://jestjs.io/docs/getting-started) is used for unit testing `yarn test`
  - [Cypress](https://docs.cypress.io/) is used for integration testing `yarn test:integration`
- Frontend components:
  https://govuk-react.github.io/govuk-react/?path=/docs/welcome--page
- Local dev
  https://github.com/Azure/static-web-apps-cli
