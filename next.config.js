/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  }
  
  module.exports = {
    async headers() {
      return [
        {
          source: "/_next/:path*",
          headers: [
            { key: "Access-Control-Allow-Origin", value: "https://next-netlify-app.flywheelsites.com/graphql" },
          ],
        },
      ]
    },
  }