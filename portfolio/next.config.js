/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['instagram.fath6-1.fna.fbcdn.net'],
	},
	staticPageGenerationTimeout: 200,
}

module.exports = nextConfig
