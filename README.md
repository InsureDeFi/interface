# Insure Protocol Interface

An open source interface for Insure - a protocol for hedging against crypto market volatility.

- Website: [insurefinance.xyz](https://insurefinance.xyz)
- Interface: [staging.insurefinance.xyz](https://staging.insurefinance.xyz)
- Docs: [docs.insurefinance.xyz](https://docs.insurefinance.xyz)
- Twitter: [@insure_finance](https://twitter.com/insure_finance)
- Discord: [Insure Community](https://discord.gg/V3NkJAGZjU)

## Accessing the Insure Interface

To access the Insure Interface, visit [staging.insurefinance.xyz](https://staging.insurefinance.xyz).

## How to use

Install it and run:

```sh
cp .env.example .env.local
yarn
yarn dev
```

## Contributions

For steps on local deployment, development, and code contribution, please see [CONTRIBUTING](./CONTRIBUTING.md).

## Troubleshooting

Issue: I cannot connect to `staging.insurefinance.xyz`

The insure-ui is hosted on IPFS in a decentralized manner. `staging.insurefinance.xyz` just holds a CNAME record to the Cloudflare IPFS gateway. You can use [any](https://ipfs.github.io/public-gateway-checker/) public or private IPFS gateway supporting origin isolation to access insure-ui if for some reason the Cloudflare gateway doesn't work for you

Just go to `<your favorite public ipfs gateway>/ipns/staging.insurefinance.xyz`

⚠️ Make sure the gateway supports origin isolation to avoid possible security issues: you should be redirected to URL that looks like `https://staging-insurefinance-xyz.<your gateway>`
