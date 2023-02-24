export async function getAllDoctors(page, size) {
	console.log(
		`${process.env.NEXT_PUBLIC_API_BASELINK}/api/doctors/all?page=${page}&limit=${size}`
	);
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASELINK}/api/doctors/all?page=${page}&limit=${size}`
	)
		.then((res) => res.json())
		.then((res) => res)
		.catch((e) => console.log(e));
	return res;
}

export async function getAllHospitals() {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASELINK}/api/hospitals/all`
	)
		.then((res) => res.json())
		.then((res) => res);

	return response;
}
