import Link from "next/link";
import React from "react";
import styles from "./forms.module.css"

const Footer: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Login Successful!</h1>
            <Link href="/">
                <button className={styles.button}>Return to Login</button>
            </Link>
        </div>
    )
}

export default Footer;