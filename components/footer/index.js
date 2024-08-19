import styles from "./style.module.css";

export default function Footer() {
    return (
        <div className={styles.container}>
            <p className={styles.name}>
                <span className={styles.highlight}>AI</span> MOCK INT
            </p>
            <div className={styles.rightContent}>
                <p className={styles.text}>Customer Support</p>
                <p className={styles.text}>How it works</p>
                <p className={styles.text}>Terms & Condition</p>
                <p className={styles.text}>Privacy Policy</p>
            </div>
        </div>
    )
}