import Heading from "@/components/Heading";
import HospitalContainer from "@/components/Hospitals/HospitalsContainer";
import { getAllHospitals } from "@/Utils/fetching";
import Head from "next/head";

export default function hospital({ data }) {
	return (
		<>
			<Heading
				title={"List of Hospitals in India - Top NABH Accredited Hospitals"}
				metaContent={
					"List of Hospitals in India - Top NABH Accredited Hospitals"
				}
			/>
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
