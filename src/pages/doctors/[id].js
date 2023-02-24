import { getAllDoctors } from "@/Utils/fetching";
import Head from "next/head";
import styles from "../../styles/SpecificDoctor.module.css";

export default function specificDoctorDetails({ data }) {
	return (
		<>
			<Head>
				<title>{data?.results[0]?.DoctorName}</title>
			</Head>
			<div className={styles.specificDoctor}>
				<div>
					<h1>{data?.results[0]?.DoctorName}</h1>
					<h3>{data?.results[0]?.Specialization}</h3>
					<p>Experience : {data?.results[0]?.experience_years} years</p>

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
						38 Patients enquired about the Doctor in last 1 hour
					</p>
					<div>
						<button className={styles.book}>Book Appointment</button>
						<button className={styles.whatsAppButton}>WhatsApp Expert</button>
					</div>
				</div>
				<img src="https://www.hexahealth.com/images/doctor.png" />
			</div>
		</>
	);
}

export async function getStaticPaths() {
	const data = await getAllDoctors(0, 9950);
	const paths = data?.results.map((doc) => {
		return {
			params: {
				id: `${doc.Slug_1}`,
			},
		};
	});
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(req) {
	let { id } = req.params;
	let data = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASELINK}/api/doctors/details`,
		{
			method: "POST",
			body: JSON.stringify({ slug: id }),
		}
	)
		.then((res) => {
			return res.json();
		})
		.then((res) => res)
		.catch(() => null);

	if (data.notFound)
		return {
			notFound: true,
		};
	return {
		props: {
			data: data,
		},
	};
}
