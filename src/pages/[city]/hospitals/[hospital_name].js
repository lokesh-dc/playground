import Heading from "@/components/Heading";
import { getAllHospitals } from "@/Utils/fetching";
import styles from "../../../styles/SpecificDoctor.module.css";
export default function specificHospitalDetails({ data }) {
	return (
		<>
			<Heading
				title={data?.HospitalName}
				metaContent={data?.IntroText}
			/>
			<div className={styles.specificDoctor}>
				<div>
					<h1>{data?.HospitalName}</h1>
					<h3>{data?.Specialization}</h3>
					<div
						dangerouslySetInnerHTML={{ __html: data?.IntroText }}
					/>
					<div className={styles.userFeedbacks}>
						<div>
							<img src="/icons/love.png" alt="Likes" />
							97%
						</div>
						<div>
							<img src="/icons/review.png" alt="Comments" />
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
					alt={`{data?.HospitalName}`}
				/>
			</div>
		</>
	);
}

export async function getStaticPaths() {
	const data = await getAllHospitals();

	const paths = data?.map((hosp) => {
		return {
			params: {
				city: `delhi`,
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
