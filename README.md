# Housing Repairs Online

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Copilot

Services running in each environment run in separate AWS accounts, however all services are deployed by pipelines from the build and deploy account.

DON'T run `copilot svc deploy` or any other copilot command from any other account than `rnd-bnd`. 

Before running any copilot commands, run this

1. Define AWS profile env var `export AWS_PROFILE=rnd-bnd`
2. Authenticate with AWS `aws sso login`

## Getting Started

Install all dependencies:

```bash
yarn install
```

In one terminal run the next development server:

```bash
nvm use && yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

# General note dump

- Testing:
  - [Jest](https://jestjs.io/docs/getting-started) is used for unit testing `yarn test`
  - [Cypress](https://docs.cypress.io/) is used for integration testing `yarn test:integration`

- Environment Variables
  - Variables needed for communicating with other services are stored in `docker-compose.yml` within the `housing-repairs-online-api` solution