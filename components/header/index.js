import styles from "./style.module.css";

export default function Header() {
    return (
        <div className={styles.container}>
            <p className={styles.name}>
                <span className={styles.highlight}>AI</span> MOCK INT
            </p>
        </div>
    )
}