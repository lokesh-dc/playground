import styles from "../../styles/Grids.module.css"

import HospitalCard from "./HospitalCard";

export default function HospitalContainer({ hospitals}) {
    
    return (
        <div className={styles.container} >
            {
                hospitals?.map((hospitalDetails, index) => (
                <HospitalCard key={index} hospitalDetails={hospitalDetails} />
                ))
            }
      </div>
    )
}