/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  env:{
    BASE_URL: process.env.BASE_URL,
    BASE_API_URL: process.env.BASE_API_URL,
    SERVERSIDE_RENDING: process.env.SERVERSIDE_RENDING === "true",
  },
  async rewrites() {
    return [
      {
        source: "/:type/:slug",
        destination: "/post/detail",
      },
      {
        source: "/:type",
        destination: "/post",
      },
      {
        source: "/",
        destination: "/",
      },
    ];
  },
}

module.exports = nextConfig
