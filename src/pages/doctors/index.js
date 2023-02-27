import { getAllDoctors } from "@/Utils/fetching";
import DoctorsContainer from "@/components/Doctors/DoctorsContainer";
import { useEffect, useState } from "react";
import Head from "next/head";
import Heading from "@/components/Heading";

export default function DoctorDetails() {
	const [data, setData] = useState([]);
	const [page, setPage] = useState(0);
	const [isLoading, setLoading] = useState(false);

	async function fetchDoctorsDetails(page) {
		setLoading(true);
		const res = await getAllDoctors(page, 49);
		setData((prev) => [...prev, ...res.results]);
		setLoading(false);
	}

	useEffect(() => {
		fetchDoctorsDetails(page);
	}, [page]);

	function newLimit() {
		setPage((page) => page + 1);
	}
	return (
		<>
			<Heading
				title={"List of Doctors in India - Book Doctors Appointment Online"}
				metaContent={
					"List of Doctors in India - Book Doctors Appointment Online"
				}
			/>
			<div>
				<DoctorsContainer
					doctors={data}
					newLimit={newLimit}
					isLoading={isLoading}
				/>
			</div>
		</>
	);
}
