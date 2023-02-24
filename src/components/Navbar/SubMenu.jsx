import MenuItem from "./MenuItem";
import styles from "../../styles/temp.module.css"
export default function SubMenu({submenu, depth}) {
    return (
        <ul  className={`${styles.subMenuStyles} ${depth > 1 ? styles.subMenuPositioningStyles : ""}`}>
            {
                submenu.map((item, index) => (
                    <MenuItem key={index} item={item} depth={depth + 1} />
                ))
            }
        </ul>
    )
} 