import Image from "next/image"
import styles from "../styles/Curousel.module.css"

export default function ConditionsCurousel() {
    return (
        <div className={styles.container}>
            <h1>Conditions</h1>
            <div>
            {
                    ["Piles", "Hernia", "GallStone", "Hernia", "Hernia"].map((cond, index) => (
                        <div key={index} className={styles.card}>
                            <div>
                                <Image width={50} height={50} src="/icons/gallstones.png" alt="" />
                            </div>
                            <p>{cond}</p>
                        </div>
                    ))            
            }
            </div>
        </div>
    )   
}   