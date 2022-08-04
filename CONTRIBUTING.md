# Contributing

Thank you for your interest in contributing to the Insure interface!

# Development

Before running anything, you'll need to install the dependencies:

```
yarn install
cp .env.example .env.local
```

## Running the interface locally

```
yarn dev
```

To access the interface navigate to [http://localhost:3000].

## Creating a production build

```
yarn build
```

To serve the production build:

```
yarn start
```

Then, navigate to [http://localhost:3000] to see it.

### Environment

```
# setting the environment to 'staging' will enable testnet
NEXT_PUBLIC_ENV=prod
```

## Engineering standards

Code merged into the `main` branch of this repository should adhere to high standards of correctness and maintainability.
Use your best judgment when applying these standards. If code is in the critical path, will be frequently visited, or
makes large architectural changes, consider following all the standards.

- Have at least one engineer approve of large code refactorings
- At least manually test small code changes, prefer automated tests
- Thoroughly unit test when code is not obviously correct
- If something breaks, add automated tests so it doesn't break again
- Add integration tests for new pages or flows
- Verify that all CI checks pass before merging
- Have at least one product manager or designer approve of any significant UX changes

## Guidelines

The following points should help guide your development:

- Security: the interface is safe to use
  - Avoid adding unnecessary dependencies due to [supply chain risk](https://github.com/LavaMoat/lavamoat#further-reading-on-software-supplychain-security)
- Reproducibility: anyone can build the interface
  - Avoid adding steps to the development/build processes
  - The build must be deterministic, i.e. a particular commit hash always produces the same build
- Decentralization: anyone can run the interface
  - An RPC node should be the only critical dependency
  - All other external dependencies should only enhance the UX ([graceful degradation](https://developer.mozilla.org/en-US/docs/Glossary/Graceful_degradation))
- Accessibility: anyone can use the interface
  - The interface should be responsive, small and also run well on low performance devices
