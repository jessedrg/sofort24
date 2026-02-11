/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },

  async redirects() {
    return [
      {
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
