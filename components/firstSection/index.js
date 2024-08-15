import styles from "./style.module.css"
export default function FirstSection() {
    return (
        <>
            <div className={styles.background}>
                <div className={styles.textOverlay}>
                    <p className={`${styles.t1} ${styles.primaryTextColor}`}>
                        Ace Your Next Interview
                    </p>
                    <p className={styles.t1}>
                        with AI-Driven Mock Interviews!
                    </p>
                    <p className={styles.t2}>Prepare, Practice, and Perfect with InterviewPro AI - Your Personal Interview Coach.</p>
                </div>
                <button className={styles.button}>Get Started
                    </button>

            </div>
        </>
    )
}