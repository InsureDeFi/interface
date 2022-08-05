const withImages = require('next-images');

/** @type {import('next').NextConfig} */
module.exports = withImages({
  trailingSlash: true,
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
});
