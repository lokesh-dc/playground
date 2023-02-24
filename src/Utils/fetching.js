export async function getAllDoctors(page, size) {
	console.log(
		"environment variable => ",
		`${process.env.NEXT_PUBLIC_API_BASELINK}`
	);
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASELINK}/api/doctors/all?page=${page}&limit=${size}`
	)
		.then((res) => res.json())
		.then((res) => res)
		.catch((e) => console.log(e));

	console.log("Doctors Results : ", response);

	return res;
}

export async function getAllHospitals() {
	console.log(
		"environment variable => ",
		`${process.env.NEXT_PUBLIC_API_BASELINK}`
	);
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASELINK}/api/hospitals/all`
	)
		.then((res) => res.json())
		.then((res) => res);

	console.log("Hospital Results : ", response);
	return response;
}
