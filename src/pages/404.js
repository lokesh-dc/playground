import ConditionsCurousel from "@/components/ConditionsCurousel";
import Head from "next/head";
import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";

import styles from "../styles/ErrorPage.module.css";

export default function custom404() {
  return (
    <>
      <Head>
        <title>Error 404 - Page not Found</title>
      </Head>
      <div className={styles.errorDiv}>
        <h1>oops!</h1>
        <p>We tried but could not find the page you are looking for.</p>
        <Link href={"/"}>
          <button className={styles.backHomeButton}>
            <MdArrowBackIos></MdArrowBackIos>
            Back to Home
          </button>
        </Link>
      </div>
      <ConditionsCurousel />
    </>
  );
}
