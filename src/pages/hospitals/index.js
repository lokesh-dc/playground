import HospitalContainer from "@/components/Hospitals/HospitalsContainer";
import { getAllHospitals } from "@/Utils/fetching";
import Head from "next/head";

export default function hospital({ data }) {
	return (
		<>
			<Head>
				<title>
					List of Hospitals in India - Top NABH Accredited Hospitals
				</title>
			</Head>
			<div>
				<HospitalContainer hospitals={data} />\
			</div>
		</>
	);
}

export async function getStaticProps() {
	const response = await getAllHospitals();

	return {
		props: {
			data: response.results,
		},
	};
}

// export default function allHospitals() {
// 	return <div>Hospitals Cards</div>;
// }
