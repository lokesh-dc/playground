import styles from "../../styles/Grids.module.css"

import DoctorCard from "./DoctorCard";

export default function DoctorsContainer({ doctors, newLimit, isLoading }) {
    
    return (
        <div className={styles.container} >
            {
                doctors?.map((doc, index) => (
                <DoctorCard key={index} details={doc} newLimit={newLimit} isLast={index===doctors.length-1} isLoading={isLoading} />
                ))
            }

            {
            isLoading &&
            <div className={styles.skeleton}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            }
      </div>
    )
}