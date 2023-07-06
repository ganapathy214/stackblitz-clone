/** @type {import('next').NextConfig} */
const webpack = require('webpack');
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["antd", "rc-util", "@ant-design","rc-pagination","rc-picker"],
  webpack: (config) => {
    // Ignore case in the imports of folders inside node_modules
    config.plugins.push(new webpack.IgnorePlugin(/[/\\]node_modules[/\\]/, /[/\\]node_modules[/\\](.*[/\\])?/i));

    return config;
  },
}

// module.exports = nextConfig
module.exports = nextConfig