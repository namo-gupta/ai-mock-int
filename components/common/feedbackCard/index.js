import styles from "./style.module.css"

export default function FeedbackCard() {
    return (
        <div className={styles.container}>
            <div>
                <img src="images/star.svg" alt=""/>
            </div>
            <p className={styles.description}>Sed placerat convallis aenean fermentum. Aliquet eget feugiat sed consectetur sodales eleifend.</p>
            <div>
                <p className={styles.name}>First Name</p>
                <p className={styles.designation}>Designation</p>
            </div>
        </div>
    )
}