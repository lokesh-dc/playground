/** @type {import('next').NextConfig} */
const nextConfig = {
	// env: {
	// 	BASELINK: "http://localhost:3000",
	// },
};

module.exports = nextConfig;

module.exports = {
	async redirects() {
		return [
			{
				source: "/mumbai/:path*",
				destination: "/delhi/:path*",
				permanent: true,
			},
		];
	},
};
