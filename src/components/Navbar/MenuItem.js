import styles from "../../styles/temp.module.css";
import SubMenu from "./SubMenu";

export default function MenuItem({ item, depth }) {
  return item.submenu && item.submenu.length > 0 ? (
    <li className={styles.parent}>
      <button
        className={styles.btnStyle}
      >
        {item.title}
        {depth > 1 ? (
          <span className={`${styles.arrow} ${styles.right}`}> </span>
        ) : (
          <span className={`${styles.arrow} ${styles.down}`}></span>
        )}
      </button>
      <SubMenu
        submenu={item.submenu}
        depth={depth}
      />
    </li>
  ) : (
    <li>
        <a href={`/${item.title.toLowerCase()}`}>{item.title}</a>
    </li>
  );
}
