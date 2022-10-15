/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,
   async rewrites() {
      return [
         {
            source: "/:path*",
            destination: "http://localhost:3333/:path*",
         },
         {
            source: "/:path*",
            destination: "https://cdn.huffingtonpost.kr/:path*",
         },
      ]
   },
}

module.exports = nextConfig
