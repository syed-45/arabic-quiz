/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    // want to allow src of images to be from anywhere
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'img.icons8.com',
              port: '',
              pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
