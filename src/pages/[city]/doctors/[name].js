import { useRouter } from "next/router";

const states = ["Madhya Pradesh", "Maharashtra", "Arunachal Pradesh", "Goa"];

const types = ["gynaecologist", "Orthology", "Cardiologist", "Dermatologist"];

export default function CityWise({ city, name }) {
	const router = useRouter();

	function handleChange(e) {
		e.preventDefault();
		const { name, value } = e.target;
		name == "state"
			? router.push(
					`/${value.toLowerCase().split(" ").join("-")}/doctors/${name}`
			  )
			: router.push(
					`/${city}/doctors/${value.toLowerCase().split(" ").join("-")}`
			  );
	}
	return (
		<div>
			<select onChange={handleChange} name="state">
				{states.map((state) => (
					<option key={state}>{state}</option>
				))}
			</select>
			<select onChange={handleChange} name="type">
				{types.map((type) => (
					<option key={type}>{type}</option>
				))}
			</select>
			<h1>{city}</h1>
			<h3>{name}</h3>
		</div>
	);
}

export async function getServerSideProps(context) {
	const { name, city } = context.query;
	return {
		props: {
			city,
			name,
		},
	};
}
