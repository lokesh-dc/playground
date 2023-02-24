import Link from "next/link";
import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs"
import { IoCallOutline } from "react-icons/io5"
import { GoLocation } from "react-icons/go"
import { HiMenu } from "react-icons/hi"

import styles from "../../styles/Navbar.module.css"
import Image from "next/image";

export default function MobileNavbar() {

    const [showNav, setShowMenu] = useState(false);

    function toggleMenu() {
        setShowMenu((prev) => !prev);
        document.body.style.overflow = showNav ? "visible" : "hidden"
    }

    return (
        <div className={`${styles.navMobile}`}>
            <Link href="/">
              <Image width={127 } height={30} className={styles.logo} src="/icons/logo.png" alt="Logo" />
            </Link> 
            <BsWhatsapp></BsWhatsapp>
            <IoCallOutline></IoCallOutline>
            <GoLocation></GoLocation>
            {/* <img  src="/icons/ham.png" onClick={toggleMenu} /> */}
            <HiMenu onClick={toggleMenu} />
        <div
          className={`${styles.overlay} ${
            showNav ? styles.showMenu : styles.hideMenu
          }`}
        >
          <div>
              <Link href="/" onClick={toggleMenu}>
              <Image width={127 } height={30} className={styles.logo} src="/icons/logo.png" alt="Logo" />
              </Link>
            <p className={styles.closebtn} onClick={toggleMenu}>
              &times;
            </p>
          </div>
          <div className={styles.overlay_content}>
            <Link href="/doctors" onClick={toggleMenu}>Doctors</Link>
            <Link href="/hospitals" onClick={toggleMenu}>Hospitals</Link>
            <Link href="#" onClick={toggleMenu}>Clients</Link>
            <Link href="#" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
        </div>
    )
}