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
				source: "/hospitals/null",
				destination: "/hospitals/avantika-hospital-sector-2-delhi",
				permanent: true,
			},
		];
	},
};
