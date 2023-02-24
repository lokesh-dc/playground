import HospitalContainer from "@/components/Hospitals/HospitalsContainer";
import { getAllHospitals } from "@/Utils/fetching";

export default function hospital({ data }) {
	return (
		<div>
			<HospitalContainer hospitals={data} />
		</div>
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
