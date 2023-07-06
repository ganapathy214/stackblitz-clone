/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["antd", "rc-util","@ant-design","/rc-(.*)/",""],
}

// module.exports = nextConfig
module.exports = nextConfig