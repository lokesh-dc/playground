import Link from "next/link"
import styles from "../../styles/DoctorCard.module.css"

export default function HospitalCard({ hospitalDetails }) {

    return (
        <>
            <div className={styles.card}>
                <div className={styles.content}>
                    <h4>{hospitalDetails?.HospitalName}</h4>
                    <p>{hospitalDetails?.Area || hospitalDetails?.AddressLine2 || hospitalDetails?.AddressLine1}</p>
                    <Link
                        href={{
                            pathname: `/hospitals/${hospitalDetails.Slug_1}`,
                        }}
                        className={styles.more}
                    > 
                        Know More
                    </Link>
                    <button>Book Appointment</button>
                </div>
            </div>
        </>
    )
}

