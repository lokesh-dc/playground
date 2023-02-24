import { getAllHospitals } from "@/Utils/fetching";
import Head from "next/head";
import styles from "../../styles/SpecificDoctor.module.css";
export default function specificHospitalDetails({ data }) {
	return (
		<>
			<Head>
				<title>{data?.results[0]?.HospitalName}</title>
			</Head>
			<div className={styles.specificDoctor}>
				<div>
					<h1>{data?.results[0]?.HospitalName}</h1>
					<h3>{data?.results[0]?.Specialization}</h3>
					<div
						dangerouslySetInnerHTML={{ __html: data?.results[0]?.IntroText }}
					/>
					<div className={styles.userFeedbacks}>
						<div>
							<img src="/icons/love.png" />
							97%
						</div>
						<div>
							<img src="/icons/review.png" />
							55 Reviewers
						</div>
					</div>
					<p className={styles.enquiry}>
						38 Patients enquired about the Hosptal in last 1 hour
					</p>
					<div>
						<button className={styles.book}>Book Appointment</button>
						<button className={styles.whatsAppButton}>WhatsApp Expert</button>
					</div>
				</div>
				<img
					src="https://cdn.hexahealth.com/Image/7945613e-3d6c-4f10-88f6-cbbbf8248aab.jpg"
					alt={`{data?.results[0]?.HospitalName}`}
				/>
			</div>
		</>
	);
}

export async function getStaticPaths() {
	const data = await getAllHospitals();

	const paths = data?.results.map((hosp) => {
		return {
			params: {
				hospital_name: `${hosp.Slug_1}`,
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const { hospital_name } = context.params;

	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASELINK}/api/hospitals/details`,
		{
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ slug: hospital_name }),
		}
	)
		.then((res) => res.json())
		.then((res) => res);
	if (response.notFound === true) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			data: response,
		},
	};
}
