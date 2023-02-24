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
				source: "/old",
				destination: "/new",
				permanent: false,
			},
			{
				source: "/doctors/dr-ashwani-chopra-medical-gastroenterology-10",
				destination: "/doctors/dr-alok-chopra-cardiology-9",
				permanent: true,
			},
		];
	},
};
