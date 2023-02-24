export async function getAllDoctors(page, size) {
	console.log(
		"environment variable => ",
		`${process.env.NEXT_PUBLIC_API_BASELINK}`
	);
	const res = await fetch(`/api/doctors/all?page=${page}&limit=${size}`)
		.then((res) => res.json())
		.then((res) => res)
		.catch((e) => console.log(e));

	console.log("Doctors Results : ", res);

	return res;
}

export async function getAllHospitals() {
	console.log(
		"environment variable => ",
		`${process.env.NEXT_PUBLIC_API_BASELINK}`
	);
	const response = await fetch(`/api/hospitals/all`)
		.then((res) => res.json())
		.then((res) => res);

	console.log("Hospital Results : ", response);
	return response;
}
