const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      if (Array.isArray(config.resolve.alias))
        config.resolve.alias.push({ name: "msw/browser", alias: false });
      else config.resolve.alias["msw/browser"] = false;
    } else {
      if (Array.isArray(config.resolve.alias))
        config.resolve.alias.push({ name: "msw/node", alias: false });
      else config.resolve.alias["msw/node"] = false;
    }
    return config;
  },
  reactStrictMode: false,
};

module.exports = withVanillaExtract(nextConfig);
