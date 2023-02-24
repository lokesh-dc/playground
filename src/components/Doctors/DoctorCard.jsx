import Image from "next/image";
import Link from "next/link"
import { useEffect, useRef } from "react"
import styles from "../../styles/DoctorCard.module.css"

export default function DoctorCard({ details, isLast, newLimit  }) {

    const cardRef = useRef();

    useEffect(() => {
        if (!cardRef?.current) return;
        
        const observer = new IntersectionObserver(([entry]) => {
            if (isLast && entry.isIntersecting) {
                newLimit();
                observer.unobserve(entry.target)
            }
        })
        observer.observe(cardRef.current)
    }, [isLast])
    

    return (
        <>
            <div className={styles.card} ref={cardRef}>
                {/* <Image src="/doctor.png" width={300} height={300} alt={`${details?.DoctorName}`} loading="lazy" /> */}
                <div className={styles.content}>
                    <h4>{details?.Title} {details?.DoctorName}</h4>
                    <p>{details?.Specialization?.substr(0, 20) || "Expert"}</p>
                    <Link
                        
                        href={{
                            pathname: `/doctors/${details.Slug_1}`
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

