/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  env:{
    BASE_URL: process.env.BASE_URL,
    BASE_API_URL: process.env.BASE_API_URL,
    SERVERSIDE_RENDING: process.env.SERVERSIDE_RENDING === "true",
  }
}

module.exports = nextConfig
